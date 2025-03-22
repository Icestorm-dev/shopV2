//странное решение для скролинга вверх на страницах доставка, контакты, гарантия
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Скроллим в начало страницы
  }, [pathname]);

  return null;
};

export default ScrollToTop;
