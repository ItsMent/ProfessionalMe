document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery');
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const close = document.getElementById('close');

  const illustrations = [
    {
      src: './images/Laos Boun-Pee-Mhai.webp',
      description: 'Laos Boun-Pee-Mhai'
    },
    {
      src: '../lao-cultural-app/images/Laos Culture.jpg',
      description: 'Laos Culture'
    },
    {
      src: 'images/Laos Diversity (1).webp',
      description: 'Laos Diversity'
    },
    {
      src: 'images/Laos Diversity.jpg',
      description: 'Laos Diversity'
    },
    {
      src: 'images/laos Monument.avif',
      description: 'Laos Monument'
    },
    {
      src: 'images/Laos Wedding.jpg',
      description: 'Laos Wedding'
    },
    {
      src: 'images/Laos Wedding (1).jpg',
      description: 'Laos Wedding'
    },
    {
      src: 'images/Luangprabang Temple.jpg',
      description: 'Luangprabang Temple'
    },
    {
      src: 'images/VangVieng.jpg',
      description: 'VangVieng'
    },
    {
      src: 'images/Nam-Tok-Tak.jpg',
      description: 'Nam Tok Tak'
    },
    
    {
      src: 'images/OIP (1).jpg',
      description: 'OIP (1)'
    },
    {
      src: 'images/OIP.jpg',
      description: 'OIP'
    },
    {
      src: 'images/R (1).jpg',
      description: 'R (1)'
    },
    {
      src: 'images/R.jpg',
      description: 'R'
    },
    {
      src: 'images/d3fccee365f44ca19924176d462ecf36.jpg',
      description: 'd3fccee365f44ca19924176d462ecf36'
    },
    {
      src: 'images/39267c8cf68b1ecc954f85a1e52c24d2.jpg',
      description: '39267c8cf68b1ecc954f85a1e52c24d2'
    },
    // Add more illustrations as needed
  ];

  illustrations.forEach((illustration, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
    galleryItem.innerHTML = `<img src="${illustration.src}" alt="Illustration ${index + 1}" onerror="this.onerror=null; this.src='images/placeholder.jpg';">`;
    galleryItem.addEventListener('click', () => {
      modalImage.src = illustration.src;
      modal.style.display = 'block';
      modalImage.style.width = '90%';
      modalImage.style.height = 'auto';
      modalImage.style.maxWidth = '600px';
      modalImage.style.maxHeight = '80vh';
      modalImage.style.margin = 'auto';
      modalImage.style.display = 'block';
      modalImage.style.position = 'absolute';
      modalImage.style.top = '50%';
      modalImage.style.left = '50%';
      modalImage.style.transform = 'translate(-50%, -50%)';
    });
    gallery.appendChild(galleryItem);
  });

  close.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});