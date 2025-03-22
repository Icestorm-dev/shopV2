from django.db import models  # Импортируем модуль моделей Django
from django.contrib.auth.models import User  # Импортируем модель User

# Модель категорий товаров
class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)  # Название категории, уникальное
    created_at = models.DateTimeField(auto_now_add=True)  # Дата создания категории

    def __str__(self):
        return self.name  # Отображение категории в админке

# Модель товаров
class Product(models.Model):
    name = models.CharField(max_length=255)  # Название товара
    description = models.TextField(blank=True, null=True)  # Описание товара (может быть пустым)
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Цена товара
    package_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True,
                                        null=True)  # Цена за упаковку товара
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')  # Категория товара (при удалении категории – товары удаляются)
    image = models.ImageField(upload_to='product_images/', blank=True, null=True)  # Поле для загрузки фото товара
    created_at = models.DateTimeField(auto_now_add=True)  # Дата добавления товара

    def __str__(self):
        return self.name  # Отображение товара в админке




class Order(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Ожидание оплаты'),
        ('paid', 'Оплачено'),
        ('shipped', 'Отправлено'),
        ('delivered', 'Доставлено'),
        ('cancelled', 'Отменено'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')
    first_name = models.CharField(max_length=100, blank=True, null=True)
    last_name = models.CharField(max_length=100, blank=True, null=True)
    phone = models.CharField(max_length=30, blank=True, null=True)
    email = models.EmailField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    total_price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)

    def calculate_total_price(self):
        # Пересчитываем итоговую цену, используя package_price в order_items
        total = sum(item.total_price() for item in self.order_items.all())
        print(f"Total price: {total}")  # Выводим итоговую цену в консоль для отладки
        self.total_price = total
        self.save()

    def __str__(self):
        return f"Заказ {self.id} - {self.get_status_display()}"


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name="order_items")
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    package_price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)  # Только это поле для расчета

    def total_price(self):
        # Используем package_price для расчета
        return self.package_price * self.quantity

    def __str__(self):
        return f"{self.product.name} x {self.quantity}"











