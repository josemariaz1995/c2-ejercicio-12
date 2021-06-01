const numeroAleatorio = Math.floor(Math.random() * 11);
console.log(numeroAleatorio);
const numeroRecibido = document.querySelector(".numero");
const adivina = document.querySelector(".adivinar");
const mensaje = document.querySelector(".mensaje");
adivina.addEventListener("click", (e) => {
  console.log(numeroRecibido.value);
  if (+numeroRecibido.value === +numeroAleatorio) {
    mensaje.classList.add("acierto");
    adivina.disabled = true;
    numeroRecibido.disabled = true;
    mensaje.textContent = "acertado";
  } else {
    e =
      +numeroRecibido.value > +numeroAleatorio
        ? (mensaje.textContent = `el numero es menor de ${numeroRecibido.value} `)
        : (mensaje.textContent = `el numero es mayor de ${numeroRecibido.value} `);
  }
});
