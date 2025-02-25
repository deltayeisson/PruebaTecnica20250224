/* TEST JS */
/*
    1. Problem 1 - (A)
    Create an Object with a "hello" method that writes "Hello <name> in the console"
*/

/* Respuesta 1 */ 
const saludo = {
    hello: function(name) {
      console.log(`Hello ${name} in the console`);
    }
  };

  //Para probarlo, llamar 
  saludo.hello("Yeisson")
/* Respuesta 1 */ 

/*
    2. Problem 1 - (B)
    How would you make name inmutable?
    (Can write or just describe)
*/
/* Respuesta 2 */ 
//Para hacer name inmutable, se usaria una variable privada para hacerla inaccesible e inmutable por fuera del objeto. 
// O la otra opción es con un Object.freeze, pero este es aplicable en el momento que se quiera volver inmutable, antes de ejecutarlo 
// el objeto sería mutable o modificable.
/* Respuesta 2 */ 


/*
    3. Problem 2
    Write a funtion that logs the 5 cities that occur the most in the array below in
    order from the most number of occurrences to least.
*/
/* Respuesta 3 */ 
const citiesList = [
    "nasville",
    "nasville",
    "los angeles",
    "nasville",
    "Madrid",
    "memphis",
    "barcelona",
    "los angeles",
    "sevilla",
    "Madrid",
    "canary islands",
    "barcelona",
    "Madrid",
    "Madrid",
    "nasville",
    "barcelona",
    "london",
    "berlin",
    "Madrid",
    "nasville",
    "london",
    "Madrid",
    "Madrid",
]

function logCiudadesMasOcurrentes(citiesList) {
    // El primer paso es contar las ocurrencias por ciudad
    const conteoCiudades = citiesList.reduce((acc, ciudad) => {
        acc[ciudad] = (acc[ciudad] || 0) + 1;
        return acc;
    }, {});

    // Organizar de la ciudad mas recurrente a la menor y dejar solo los 5 mas ocurrentes
    const ciudadesOrganizadas = Object.entries(conteoCiudades)
        .sort((a, b) => b[1] - a[1]) 
        .slice(0, 5); 

    // Hacer el log de las 5 ciudades ya organizadas
    ciudadesOrganizadas.forEach(([ciudad, conteo]) => {
        console.log(`${ciudad}: ${conteo}`);
    });

    //Se puede modificar el console para que el resultado sea devuelto en un string y hacer el console.log al llamar la función
}

logCiudadesMasOcurrentes(citiesList)

/* Respuesta 3 */ 