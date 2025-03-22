from rest_framework import serializers  # Импортируем модуль serializers из Django REST framework
from .models import Product, Category  # продукт и категория
from .models import Order, OrderItem  # заказ и товары в заказе


# Создаем сериализатор для модели Product
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product  # Указываем, что этот сериализатор работает с моделью Product
        fields = '__all__'  # Определяем, что нужно включить все поля модели в сериализацию


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'created_at']  # Указываем поля, которые хотим возвращать в JSON


# отдельный товар в заказе
class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ['product', 'quantity', 'package_price']  # Используем package_price вместо price


# сам заказ
class OrderSerializer(serializers.ModelSerializer):
    order_items = OrderItemSerializer(many=True)  # Убираем read_only=True, чтобы можно было передавать данные

    class Meta:
        model = Order
        fields = ['id', 'user', 'first_name', 'last_name', 'phone', 'email', 'status', 'created_at', 'total_price', 'order_items']

    def create(self, validated_data):
        order_items_data = validated_data.pop('order_items', [])  # Извлекаем товары, если есть

        # Создаем сам заказ
        order = Order.objects.create(**validated_data)

        # Создаем элементы заказа
        for item_data in order_items_data:
            OrderItem.objects.create(order=order, **item_data)

        # Пересчитываем итоговую стоимость
        order.calculate_total_price()
        return order

