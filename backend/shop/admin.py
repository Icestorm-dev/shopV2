from django.contrib import admin  # Импортируем админ-модуль Django
from .models import Category, Product, Order, OrderItem  # Импортируем наши модели

# Регистрируем модель категорий
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'created_at')  # Отображаемые поля в списке
    search_fields = ('name',)  # Поле для поиска по названию
    ordering = ('-created_at',)  # Сортировка по дате создания

# Регистрируем модель товаров
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price', 'category', 'created_at')  # Поля в списке товаров
    list_filter = ('category', 'created_at')  # Фильтр по категории и дате создания
    search_fields = ('name', 'description')  # Поиск по названию и описанию
    ordering = ('-created_at',)  # Сортировка от новых к старым


# Создаем Inline для отображения товаров в заказе
class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 1  # Количество дополнительных строк в админке по умолчанию

# Регистрируем модель Order в админке
@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'status', 'created_at', 'total_price')  # Поля, отображаемые в списке заказов
    search_fields = ('user__username',)  # Поиск по имени пользователя
    list_filter = ('status',)  # Фильтрация по статусу
    inlines = [OrderItemInline]  # Вставляем товары для каждого заказа через Inline

    # Чтобы total_price можно было редактировать в админке (если хотите)
    readonly_fields = ('total_price',)  # Если хотите, чтобы total_price был только для чтения
    # Можно сделать его редактируемым, но в этом случае вам нужно будет вручную
    # обновлять total_price, вызывая метод calculate_total_price(), что не рекомендуется.

    # Добавим возможность автоматического пересчета total_price при изменении OrderItems
    def save_model(self, request, obj, form, change):
        obj.calculate_total_price()  # Пересчитываем total_price перед сохранением
        super().save_model(request, obj, form, change)

# Регистрируем модель OrderItem в админке
@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('order', 'product', 'quantity', 'package_price')  # Поля, отображаемые для товара в заказе
    search_fields = ('product__name',)  # Поиск по названию продукта




