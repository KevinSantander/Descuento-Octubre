let btnSend = document.getElementById("send");

btnSend.addEventListener("click", () => {
  let precioUnitario = Number(dato1.value);
  let cantidad = Number(dato2.value);
  let precioTotal = precioUnitario * cantidad;
  let descuento = precioTotal - precioTotal * 0.15;

  let mes: string = dato3.value;
  if (mes === "octubre") {
    console.log(" Monto Total Con Descuento: " + descuento);
  } else {
    console.log(" Ud. No Tine Descuento, El Monto Final es: " + precioTotal);
  }
});
