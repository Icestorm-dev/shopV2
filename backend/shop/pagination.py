# shop/pagination.py

from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

class CustomPagination(PageNumberPagination):
    page_size = 8  # Количество товаров на страницу
    page_size_query_param = 'page_size'  # Параметр для указания количества товаров на странице
    max_page_size = 100  # Максимальное количество товаров на странице

    def get_paginated_response(self, data):
        return Response({
            'total_pages': self.page.paginator.num_pages,  # Общее количество страниц
            'current_page': self.page.number,  # Текущая страница
            'count': self.page.paginator.count,  # Общее количество товаров
            'results': data  # Список товаров на текущей странице
        })
