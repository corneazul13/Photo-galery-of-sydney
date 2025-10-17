

const images = [
    // Ciudad (7)
    { src: "assets/city_01.jpg", category: "city" },
    { src: "assets/city_02.jpg", category: "city" },
    { src: "assets/city_03.jpg", category: "city" },
    { src: "assets/city_04.jpg", category: "city" },
    { src: "assets/city_07.jpg", category: "city" },
    { src: "assets/nature_07.jpg", category: "city" },
    { src: "assets/nature_09.jpg", category: "city" },
    { src: "assets/nature_13.jpg", category: "city" },
    { src: "assets/nature_16.jpg", category: "city" },
    { src: "assets/nature_18.jpg", category: "city" },

    // Naturaleza (18)
    { src: "assets/nature_01.jpg", category: "nature" },
    { src: "assets/nature_02.jpg", category: "nature" },
    { src: "assets/nature_03.jpg", category: "nature" },
    { src: "assets/nature_04.jpg", category: "nature" },
    { src: "assets/nature_05.jpg", category: "nature" },
    { src: "assets/nature_06.jpg", category: "nature" },

    { src: "assets/nature_08.jpg", category: "nature" },

    { src: "assets/nature_10.jpg", category: "nature" },
    { src: "assets/nature_11.jpg", category: "nature" },
    { src: "assets/nature_12.jpg", category: "nature" },

    { src: "assets/nature_14.jpg", category: "nature" },
    { src: "assets/nature_15.jpg", category: "nature" },

    { src: "assets/nature_17.jpg", category: "nature" },

    { src: "assets/nature_19.jpg", category: "nature" },
    { src: "assets/nature_20.jpg", category: "nature" },
];


const container = document.getElementById("gallery-container");

function displayImages(category) {
    container.innerHTML = "";

    const filteredImages = category === "all"
        ? images
        : images.filter(img => img.category === category);

    filteredImages.forEach(img => {
        const col = document.createElement("div");
        col.className = "col-sm-6 col-md-4 col-lg-3 image-wrapper";

        const image = document.createElement("img");
        image.src = img.src;
        image.alt = "Imagen";
        image.className = "gallery-img";

        image.addEventListener('click', () => {
            localStorage.setItem('detalleImagen', JSON.stringify(img));
            window.location.href = 'detalle.html';
        });

        col.appendChild(image);
        container.appendChild(col);
    });

}

// Inicializa mostrando todo
displayImages("all");

// Event Listeners
document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("data-filter");
        displayImages(category);
    });

});


// Validación de formulario
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('formAlert');

  if (!form) return; 

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name === '' || email === '' || message === '') {
      showAlert('Por favor completa todos los campos.', 'danger');
      return;
    }

    if (!validateEmail(email)) {
      showAlert('Por favor ingresa un correo válido.', 'warning');
      return;
    }

    showAlert('¡Mensaje enviado con éxito!', 'success');
    form.reset();
  });

  function showAlert(message, type) {
    alertBox.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});

