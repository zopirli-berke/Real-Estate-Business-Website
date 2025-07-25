// Gerekli elementleri seç
const header = document.querySelector('.header');
const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');

// Menüyü açıp kapatacak fonksiyon
const toggleMenu = () => {
  header.classList.toggle('is-menu-open');
};

// Butonlara tıklama olaylarını ata
openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
