// Versión 3: con clases y objetos
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
    const promedio = this.calcularPromedio();
    return promedio >= 11 ? "Aprobado" : "Reprobado";
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

// Conexión con la página
const inputNombre = document.querySelector("#nombre");
const n1 = document.querySelector("#nota1");
const n2 = document.querySelector("#nota2");
const n3 = document.querySelector("#nota3");
const n4 = document.querySelector("#nota4");
const btnAgregar = document.querySelector("#btnAgregar");
const lista = document.querySelector("#listaEstudiantes");
const mensaje = document.querySelector("#mensaje");

const registro = new RegistroEstudiantes(lista, mensaje);

btnAgregar.addEventListener("click", () => {
  const nombre = inputNombre.value.trim();
  const nota1 = Number(n1.value);
  const nota2 = Number(n2.value);
  const nota3 = Number(n3.value);
  const nota4 = Number(n4.value);

  if (!registro.validar(nombre, nota1, nota2, nota3, nota4)) return;

  const estudiante = new Estudiante(nombre, nota1, nota2, nota3, nota4);
  registro.agregar(estudiante);

  // Limpiar campos
  inputNombre.value = "";
  n1.value = "";
  n2.value = "";
  n3.value = "";
  n4.value = "";
});