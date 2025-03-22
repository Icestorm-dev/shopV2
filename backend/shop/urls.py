from django.urls import path  # Импортируем path для определения маршрутов
# from .views import ProductViewSet, OrderViewSet  # Импортируем наши ViewSet для товаров и заказов
from .views import ProductViewSet  # Импортируем наши ViewSet для товаров и заказов
from .views import RegisterView, MyTokenObtainPairView, MyTokenRefreshView

# from .views import create_order, CreateOrderView,LogoutView
from .views import LogoutView

from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


from .views import CategoryListView, CategoryDetailView


#заказы(orders)
from .views import OrderCreateView, OrderListView, OrderDetailView



# Создаем схему для документации
schema_view = get_schema_view(
    openapi.Info(
        title="My Shop API",
        default_version='v1',
        description="API documentation for the shop application",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@myshop.com"),
        license=openapi.License(name="MIT"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)


# Определяем маршруты вручную
urlpatterns = [
    # Товары
    path('products/', ProductViewSet.as_view({'get': 'list', 'post': 'create'}), name='product-list'),  # Эндпоинт для получения списка товаров и создания нового товара
    path('products/<int:pk>/', ProductViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='product-detail'),  # Эндпоинт для работы с конкретным товаром по его ID

    #категории
    path('categories/', CategoryListView.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryDetailView.as_view(), name='category-detail'),

    # Заказы
    # path('orders/', OrderViewSet.as_view({'get': 'list', 'post': 'create'}), name='order-list'),  # Эндпоинт для получения списка заказов и создания нового заказа
    # path('orders/<int:pk>/', OrderViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='order-detail'),  # Эндпоинт для работы с конкретным заказом по его ID
    # path('orders/history/', OrderViewSet.as_view({'get': 'order_history'}), name='order-history'),  # Эндпоинт для получения истории заказов текущего пользователя
    # path('create-order/', CreateOrderView.as_view(), name='create_order'),

    # Эндпоинты для JWT
    path('register/', RegisterView.as_view(), name='register'),  # Эндпоинт для регистрации
    # path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),  # Эндпоинт для получения токенов
    # path('api/token/refresh/', MyTokenRefreshView.as_view(), name='token_refresh'),  # Эндпоинт для обновления токенов
    # path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('api/token/refresh/', MyTokenRefreshView.as_view(), name='token_refresh'),
    # path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),



    # URL-адрес для получения JWT-токена (логин пользователя)
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # Логин и получение access/refresh токенов

    # URL-адрес для обновления (рефреша) JWT-токена
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Обновление access-токена
    path('logout/', LogoutView.as_view(), name='logout'),  # Новый путь для выхода


    # Новый Путь для создания и получения списка заказов
    path('orders/', OrderListView.as_view(), name='order-list'),
    path('orders/create/', OrderCreateView.as_view(), name='order-create'),
    path('orders/<int:pk>/', OrderDetailView.as_view(), name='order-detail'),


    # path('order/create/', create_order, name='create-order'),  # Эндпоинт для оформления заказа

    #документация
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),  # URL для Swagger UI
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),  # URL для Redoc UI

    # корзина
    # path('cart/add/', add_to_cart, name='add-to-cart'),  # Эндпоинт для добавления товара в корзину
    # path('cart/remove/', remove_from_cart, name='remove-from-cart'),  # Эндпоинт для удаления товара из корзины
    # path('cart/', get_cart, name='get-cart'),  # Эндпоинт для получения содержимого корзины

]
