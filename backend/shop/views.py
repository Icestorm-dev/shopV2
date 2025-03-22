from django.shortcuts import render
from rest_framework import viewsets, permissions  # Импортируем viewsets и permissions из DRF
from .models import Product, Order  # Импортируем модели Product и Order
from .serializers import ProductSerializer, OrderSerializer  # Импортируем сериализаторы для моделей
from rest_framework.response import Response  # Для отправки ответов на запросы
from rest_framework.decorators import action  # Для создания дополнительных кастомных действий в ViewSet
from django.contrib.auth.models import User  # Для работы с пользователями

# Представление для регистрации нового пользователя
from rest_framework import serializers
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken  # Для работы с JWT

from .pagination import CustomPagination  # Импортируем кастомную пагинацию
from .models import Order, OrderItem

# from rest_framework import status, permissions
# from rest_framework.response import Response
# from rest_framework.decorators import api_view
# from .models import CartItem, Product
# from .models import  Product
from django.contrib.auth.models import User

# фильтрация товаров
import django_filters
from django_filters import rest_framework as filters
from .models import Product
from .serializers import ProductSerializer
from rest_framework import viewsets
from rest_framework import permissions
from django_filters.rest_framework import DjangoFilterBackend

from drf_yasg.utils import swagger_auto_schema

from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# from .models import Cart, CartItem
# from .serializers import CartSerializer, OrderItemSerializer
from .serializers import OrderItemSerializer

from rest_framework import generics
from .models import Category
from .serializers import CategorySerializer
from rest_framework.permissions import AllowAny


class CategoryListView(generics.ListCreateAPIView):
    queryset = Category.objects.all()  # Получаем все категории
    serializer_class = CategorySerializer  # Используем сериализатор для отображения данных
    permission_classes = [AllowAny]  # Это разрешит доступ без аутентификации


class CategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


# Сериализатор для регистрации пользователя
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'email']
        extra_kwargs = {'password': {'write_only': True}}  # Пароль только для записи

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)  # Создание нового пользователя
        return user


# Представление для регистрации
class RegisterView(APIView):
    permission_classes = [permissions.AllowAny]  # Доступ разрешен всем

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  # Сохраняем пользователя
            return Response({"message": "User registered successfully!"}, status=201)
        return Response(serializer.errors, status=400)


class LogoutView(APIView):
    permission_classes = [IsAuthenticated]  # Ограничиваем доступ только для авторизованных пользователей

    def post(self, request):
        # Получаем refresh_token из тела запроса
        refresh_token = request.data.get('refresh_token')

        if not refresh_token:
            return Response({"detail": "Refresh token is required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Проверяем токен и уничтожаем его
            token = RefreshToken(refresh_token)
            token.blacklist()  # Метод для аннулирования refresh токена

            return Response({"detail": "Выход выполнен успешно."}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)


# Представление для получения токенов JWT
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


# Унаследуем стандартные представления для получения и обновления токенов
class MyTokenObtainPairView(TokenObtainPairView):
    permission_classes = [permissions.AllowAny]  # Доступ разрешен всем


class MyTokenRefreshView(TokenRefreshView):
    permission_classes = [permissions.AllowAny]  # Доступ разрешен всем


# Создаем фильтр для модели Product
class ProductFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='icontains')  # Фильтрация по названию товара (нечувствительная к регистру)
    category = filters.CharFilter(field_name='category__name',
                                  lookup_expr='icontains')  # Фильтрация по категории товара
    min_price = filters.NumberFilter(field_name='price', lookup_expr='gte')  # Фильтрация по минимальной цене
    max_price = filters.NumberFilter(field_name='price', lookup_expr='lte')  # Фильтрация по максимальной цене

    class Meta:
        model = Product
        fields = ['name', 'category', 'min_price', 'max_price']  # Поля для фильтрации


# ViewSet для модели Product
class ProductViewSet(viewsets.ModelViewSet):
    """
    ProductViewSet автоматически предоставляет стандартные операции CRUD:
    - list (GET /api/products/) — получение списка товаров
    - create (POST /api/products/) — создание нового товара
    - retrieve (GET /api/products/<id>/) — получение конкретного товара
    - update (PUT /api/products/<id>/) — обновление товара
    - destroy (DELETE /api/products/<id>/) — удаление товара
    """

    queryset = Product.objects.all()  # Запрашиваем все объекты модели Product
    serializer_class = ProductSerializer  # Указываем сериализатор, который будет использоваться для преобразования данных
    pagination_class = CustomPagination  # Указываем кастомную пагинацию
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]  # Доступ для неавторизованных пользователей на чтение
    # Подключаем фильтрацию
    filter_backends = (DjangoFilterBackend,)
    filterset_class = ProductFilter  # Используем наш фильтр

    @swagger_auto_schema(
        operation_description="Получить список товаров с фильтрацией по параметрам (например, по цене, категории)",
        responses={200: ProductSerializer(many=True)}
    )
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)


# новые представления для заказа
class OrderCreateView(generics.CreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        order = serializer.save(user=self.request.user)
        order.calculate_total_price()  # Пересчитываем сумму заказа после создания
        return order


class OrderListView(generics.ListAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user)


class OrderDetailView(generics.RetrieveAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user)
