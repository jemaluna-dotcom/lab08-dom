# Bitácora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: 

## Ejercicio 2: Seleccionar y modificar el DOM

| Instrucción | Qué cambió en la pantalla | Se mantiene al recargar (Sí/No) |
|---|---|---|
| textContent desde la consola | El título cambió de texto temporalmente | No |
| textContent desde app.js | El título cambió a "Hola TECSUP" | Sí |
| style.color | El título se puso de color azul | Sí |
| classList.add | El párrafo obtuvo fondo amarillo destacado | Sí |
| createElement + appendChild | Apareció "JavaScript" como tercer elemento de la lista | Sí |

## Ejercicio 3: Evento click

| Tipo de evento | Qué acción lo dispara                  | Cuánto suma por acción |
|-----------------|-----------------------------------------|------------------------|
| click           | Presionar y soltar el botón izquierdo   | +1                     |
| dblclick        | Dos clics rápidos seguidos              | +1                    |
| mouseover       | Pasar el cursor sobre el botón          | +1                    |                   |


## evento.type
 muestra el nombre del evento que se activó: "click", "dblclick" o "mouseover".

## evento.target: 
muestra el elemento HTML que recibió la acción: el botón con id btnSumar.


## Ejercicio 4: Eventos input y submit

| Prueba | Qué pasó en la pantalla | Se recargó la página (Sí/No) |
|---|---|---|
| Escribir en el campo nombre | El saludo se fue actualizando mientras escribía | No |
| Enviar sin preventDefault | El mensaje apareció un instante y desapareció | Sí |
| Enviar con preventDefault, correo sin @ | Mostró "Correo no válido: falta @" en rojo | No |
| Enviar con preventDefault, correo con @ | Mostró "Enviado:" y el correo completo | No |

## Ejercicio 5: Clases y objetos

| Objeto   | nombre    | precio | descripcion()           | conDescuento(0.25) |
|----------|-----------|--------|-------------------------|--------------------|
| laptop   | Laptop    | 2500   | Laptop - S/ 2500.00     | 1875.00            |
| mouse    | Mouse     | 45     | Mouse - S/ 45.00        | 33.75              |
| teclado  | Teclado   | 120    | Teclado - S/ 120.00     | 90.00              |
| monitor  | Monitor   | 680    | Monitor - S/ 680.00     | 510.00             |

### Ventaja de usar la clase
En lugar de escribir cada producto a mano en el HTML, solo creo un objeto con `new Producto(...)` y la lista se genera automáticamente. Es más rápido, ordenado y si cambio la clase, todos los productos se actualizan solos sin tocar el código de cada uno.

## Ejercicio 6: DOM, eventos y objetos juntos

| Prueba | Total que muestra la página | Correcto (Sí/No) |
|---|---|---|
| Cuaderno 12.50 | 12.50 | Sí |
| + Lapicero 3.20 | 15.70 | Sí |
| + Mochila 89.90 | 105.60 | Sí |
| Sin Number() | No funciona, sale error en consola | No |

| Pieza | Línea de tu código donde aparece | Para qué sirve |
|---|---|---|
| DOM | `document.querySelector("#formProducto")` | Conecta el código con los campos y elementos de la página |
| Evento | `addEventListener("submit", ...)` | Detecta cuando se presiona "Agregar" y ejecuta la acción |
| Objeto | `new Producto(...)` / `new Carrito()` | Crea productos nuevos y acumula la suma en el carrito |