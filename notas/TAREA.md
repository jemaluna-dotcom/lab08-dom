# Tarea: Mi componente interactivo

## Componente elegido
Registro de notas de estudiantes: calcula promedio y muestra si aprueba o reprueba.

## Versión 1: solo DOM

**Código principal:**
```javascript
const lista = document.querySelector("#listaEstudiantes");

const li = document.createElement("li");
li.textContent = "María - Notas: 15, 18, 16, 17 - Promedio: 16.5 - Aprobado";
lista.appendChild(li);
```

### Qué agregué: 
Uso de querySelector para conectar con la lista y createElement + appendChild para agregar un elemento fijo.
### Qué cambió:
 La página muestra un estudiante con datos escritos directamente en el código, sin interacción del usuario.

## Versión 2: con eventos

**Código principal:**
```javascript
btnAgregar.addEventListener("click", () => {
  const nombre = inputNombre.value.trim();
  const nota1 = Number(n1.value);
  // ... validación
  const promedio = (nota1 + nota2 + nota3 + nota4) / 4;
  const estado = promedio >= 11 ? "Aprobado" : "Reprobado";
  // ... agregar a la lista
});
```

### Qué agregué:
 Evento click en el botón para leer datos del usuario, validación de campos vacíos y rango de notas, cálculo automático del promedio y estado. Limpieza de campos después de agregar.
### Qué cambió:
 Ya no hay datos fijos — el usuario escribe la información y la página responde mostrando el resultado calculado.

## Versión 3: con clases y objetos

**Código principal:**
```javascript
class Estudiante {
  constructor(nombre, nota1, nota2, nota3, nota4) {
    this.nombre = nombre;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
    this.nota4 = nota4;
  }

  calcularPromedio() {
    return (this.nota1 + this.nota2 + this.nota3 + this.nota4) / 4;
  }

  obtenerEstado() {
    return this.calcularPromedio() >= 11 ? "Aprobado" : "Reprobado";
  }

  obtenerResumen() {
    const promedio = this.calcularPromedio().toFixed(2);
    return `${this.nombre} - Notas: ${this.nota1}, ${this.nota2}, ${this.nota3}, ${this.nota4} - Promedio: ${promedio} - ${this.obtenerEstado()}`;
  }
}

class RegistroEstudiantes {
  constructor(listaElemento, mensajeElemento) {
    this.listaElemento = listaElemento;
    this.mensajeElemento = mensajeElemento;
    this.estudiantes = [];
  }

  agregar(estudiante) {
    this.estudiantes.push(estudiante);
    this.renderizar();
    this.mensajeElemento.textContent = "";
  }

  validar(nombre, n1, n2, n3, n4) {
    if (!nombre || !n1 || !n2 || !n3 || !n4) {
      this.mensajeElemento.textContent = "Completa todos los campos correctamente";
      this.mensajeElemento.className = "error";
      return false;
    }
    if (n1 < 0 || n1 > 20 || n2 < 0 || n2 > 20 || n3 < 0 || n3 > 20 || n4 < 0 || n4 > 20) {
      this.mensajeElemento.textContent = "Las notas deben estar entre 0 y 20";
      this.mensajeElemento.className = "error";
      return false;
    }
    return true;
  }

  renderizar() {
    this.listaElemento.innerHTML = "";
    this.estudiantes.forEach((est) => {
      const li = document.createElement("li");
      li.textContent = est.obtenerResumen();
      this.listaElemento.appendChild(li);
    });
  }
}
```

### Qué agregué: 
Dos clases propias: Estudiante con atributos (nombre, 4 notas) y métodos (calcularPromedio, obtenerEstado, obtenerResumen); RegistroEstudiantes para administrar la lista completa con validación, almacenamiento y visualización. Se usa new para crear objetos.
### Qué cambió:
 El código está organizado, cada parte tiene su función clara. Se pueden agregar muchos estudiantes y todo se guarda y muestra correctamente sin mezclar variables.

## Donde uso DOM, eventos y objetos


Parte del código                          | Corresponde a
------------------------------------------|----------------
querySelector, createElement, innerHTML   | DOM
addEventListener("click")                 | Eventos
class Estudiante, new Estudiante()        | Objetos
## Pruebas realizadas

Acción                                              | Resultado esperado               | Resultado obtenido   | ¿Se cumple?
----------------------------------------------------|-----------------------------------|-----------------------|-------------
Llenar todos los datos y dar clic en Agregar       | Aparece con promedio y estado    | Aparece correctamente| Sí
Dejar un campo vacío o nota mayor a 20             | Mensaje de error visible         | Muestra mensaje      | Sí
Promedio mayor o igual a 11                         | Dice "Aprobado"                   | Muestra Aprobado     | Sí
Promedio menor a 11                                 | Dice "Reprobado"                  | Muestra Reprobado    | Sí
Agregar varios estudiantes seguidos                | Todos aparecen en la lista       | Se acumulan bien     | Sí

## Por qué diseñé así mi clase

Separé en dos clases para que cada una se encargue de lo suyo: Estudiante guarda los datos de cada persona y sabe calcular su propio promedio y decir si aprobó, mientras RegistroEstudiantes administra la lista completa, revisa que los datos estén bien y muestra todo en la página. Así el código se lee más claro, es más fácil de corregir y puedo agregar cosas nuevas sin desordenar todo lo que ya funciona.