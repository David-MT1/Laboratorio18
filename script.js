/* Ejercicio 3 */
const ejer3 = () => {
  fetch("https://jsonplaceholder.typicode.com/users/10")
    .then(response => response.json())
    .then(usuario => {
      console.log("Name:", usuario.name);
      console.log("Username:", usuario.username);
      console.log("Email:", usuario.email);
    })
    .catch(error => console.error("Error:", error));
};

/* Ejercicio 4 */
const ejer4 = async () => {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/10");
    const usuario = await respuesta.json();

    console.log("Name:", usuario.name);
    console.log("Username:", usuario.username);
    console.log("Email:", usuario.email);

  } catch (error) {
    console.error("Error:", error);
  }
};

/* Ejercicio 5 */
const ejer5 = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(usuarios => {
      usuarios.forEach(user => console.log(user.name));
    })
    .catch(error => console.error("Error:", error));
};

/* Ejercicio 6 */
const ejer6 = async () => {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await respuesta.json();

    usuarios.forEach(user => console.log(user.name));
  } catch (error) {
    console.error("Error:", error);
  }
};













/* Ejercicio 11 */
const ejer11 = () => {
  const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  console.log(regexPassword.test("Clave123")); 
};


/* Ejercicio 12 */
const ejer12 = () => {
  const regexURL = /https:\/\/[^\s]+/g;
  console.log("https://google.com".match(regexURL));
};


/* Ejercicio 13 */
const ejer13 = () => {
  const regexQuitarHTML = /<[^>]*>/g;
  const texto = "<h1>Hola</h1>";
  console.log(texto.replace(regexQuitarHTML, "")); 
};


/* Ejercicio 14 */
const ejer14 = () => {
  const regexOraciones = /[^.!?]+/g;
  const texto = "Hola. Cómo estás? Bien!";
  console.log(texto.match(regexOraciones)); 
};


/* Ejercicio 15 */
const ejer15 = () => {
  const regexFecha = /^\d{2}\/\d{2}\/\d{4}$/;
  console.log(regexFecha.test("20/08/2007"));
};
