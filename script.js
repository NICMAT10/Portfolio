let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("python");
    habilidades[3].classList.add("react");
    habilidades[4].classList.add("java");
    habilidades[5].classList.add("comunicacion");
    habilidades[6].classList.add("trabajo");
    habilidades[7].classList.add("creatividad");
    habilidades[8].classList.add("dedicacion");
    habilidades[9].classList.add("proyect");
  }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};

//Funcion para descargar archivo desde un button
function descargarArchivo() {
  // Nombre del archivo que deseas descargar
  var archivo = "Nicolas Matias Maraz.pdf";

  // URL del archivo
  var url = "curriculum/" + archivo;

  // Crear un objeto de anclaje
  var link = document.createElement("a");

  // Establecer los atributos del objeto de anclaje
  link.href = url;
  link.download = archivo;
  link.target = "_blank";

  // Simular un clic en el enlace de descarga
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/*document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  const btn = document.getElementById("button");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    btn.value = "Enviando...";
    btn.disabled = true;

    const name = document.getElementsByName("name")[0].value;
    const phone = document.getElementsByName("phone")[0].value;
    const email = document.getElementsByName("email")[0].value;
    const tema = document.getElementsByName("tema")[0].value;
    const message = document.getElementById("textarea").value;

    // Aquí puedes realizar validaciones adicionales si es necesario

    // Enviar los datos a través de EmailJS

    const templateParams = {
      name: name,
      phone: phone,
      email: email,
      tema: tema,
      message: message
    };

    emailjs.send("service_dbz13i4", "template_l55w8x7", templateParams)
      .then(function(response) {
        btn.value = "Enviar Mensaje";
        btn.disabled = false;
        alert("Mensaje Enviado Correctamente");
        form.reset();
      })
      .catch(function(error) {
        btn.value = "Enviar Mensaje";
        btn.disabled = false;
        alert("Error al enviar el mensaje: " + error);
      });
  });
});*/

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const btn = document.getElementById("button");
  const messageBox = document.getElementById("message-box");
  const messageContent = document.getElementById("message-content");
  const closeMessage = document.getElementById("close-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Enviando...";
    btn.disabled = true;

    const name = document.getElementsByName("name")[0].value;
    const phone = document.getElementsByName("phone")[0].value;
    const email = document.getElementsByName("email")[0].value;
    const tema = document.getElementsByName("tema")[0].value;
    const message = document.getElementById("textarea").value;

    const templateParams = {
      name: name,
      phone: phone,
      email: email,
      tema: tema,
      message: message,
    };

    // Reemplaza 'YOUR_SERVICE_ID' y 'YOUR_TEMPLATE_ID' con tus propios valores de EmailJS
    emailjs.send("service_dbz13i4", "template_l55w8x7", templateParams)
      .then(function (response) {
        btn.value = "Enviar Mensaje";
        btn.disabled = false;
        messageContent.textContent = "Mensaje Enviado Correctamente";
        messageBox.style.backgroundColor = "#7cda9d"; // Cambia el color de fondo
        messageBox.style.display = "block";
        form.reset();
      })
      .catch(function (error) {
        btn.value = "Enviar Mensaje";
        btn.disabled = false;
        messageContent.textContent = "Error al enviar el mensaje: " + error;
        messageBox.style.backgroundColor = "#a12041"; // Cambia el color de fondo
        messageBox.style.display = "block";
      });
  });

  closeMessage.addEventListener("click", function () {
    messageBox.style.display = "none";
  });
});
