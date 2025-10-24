function toggleMenu() { // переключает (открывает или закрывает) гамбургер-меню 
    const menu = document.querySelector(".menu-links"); // в переменную menu записывается элемент класса menu-links
    const icon = document.querySelector(".hamburger-icon"); // в переменную icon записывается элемент класса hamburger-icon
    menu.classList.toggle("open"); // добавляет или удаляет класс open в элементе menu-links
    icon.classList.toggle("open"); // добавляет или удаляет класс open в элементе hamburger-icon
}

