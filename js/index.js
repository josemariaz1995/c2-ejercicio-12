const numeroAleatorio = Math.ceil(Math.random() * 10);
console.log(numeroAleatorio);
const numeroRecibido = document.querySelector(".numero");
const adivina = document.querySelector(".adivinar");
const mensaje = document.querySelector(".mensaje");
adivina.addEventListener("click", (e) => {
  const numeroRecibidoIntegro = numeroRecibido.valueAsNumber;
  e.preventDefault();
  if (isNaN(numeroRecibidoIntegro)) {
    return;
  }
  if (numeroRecibidoIntegro === +numeroAleatorio) {
    mensaje.classList.add("acierto");
    adivina.disabled = true;
    numeroRecibido.disabled = true;
    mensaje.textContent = "acertado";
  } else {
    mensaje.classList.add("error");
    e =
      numeroRecibidoIntegro > +numeroAleatorio
        ? (mensaje.textContent = `el numero es menor de ${numeroRecibido.value} `)
        : (mensaje.textContent = `el numero es mayor de ${numeroRecibido.value} `);
  }
});
