/**
 * EJERCICIOS PROPUESTOS EN JAVASCRIPT
 */

/**
 * 1. Sumar elementos de un array:
 * Escribe una función que reciba un array de números y devuelva la suma de todos los elementos.
 */
function sumarArray(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}

// Ejemplo de uso:
console.log("1. Suma de array:", sumarArray([1, 2, 3, 4, 5])); // 15

/**
 * 2. Número mayor y menor:
 * Crea una función que reciba un array de números y retorne el mayor y el menor.
 */
function mayorYMenor(numeros) {
  if (numeros.length === 0) return { mayor: null, menor: null };
  
  let mayor = numeros[0];
  let menor = numeros[0];
  
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }
  
  return { mayor, menor };
}

// Ejemplo de uso:
console.log("2. Mayor y menor:", mayorYMenor([8, 3, 10, 1, 5])); // { mayor: 10, menor: 1 }

/**
 * 3. Contar elementos pares:
 * Dado un array de números, cuenta cuántos son pares y devuelve el total.
 */
function contarPares(numeros) {
  let contador = 0;
  
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      contador++;
    }
  }
  
  return contador;
}

// Ejemplo de uso:
console.log("3. Cantidad de pares:", contarPares([1, 2, 3, 4, 5, 6])); // 3

/**
 * 4. Ordenar un array:
 * Implementa un algoritmo que ordene un array de números de menor a mayor sin usar .sort().
 * (usando algoritmo de burbuja)
 */
function ordenarArray(numeros) {
  const resultado = [...numeros]; // Crear copia para no modificar el original
  
  for (let i = 0; i < resultado.length; i++) {
    for (let j = 0; j < resultado.length - i - 1; j++) {
      if (resultado[j] > resultado[j + 1]) {
        // Intercambiar elementos
        const temp = resultado[j];
        resultado[j] = resultado[j + 1];
        resultado[j + 1] = temp;
      }
    }
  }
  
  return resultado;
}

// Ejemplo de uso:
console.log("4. Array ordenado:", ordenarArray([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]

/**
 * 5. Buscar un elemento:
 * Dado un array de nombres, busca si un nombre específico está en la lista y devuelve su posición.
 */
function buscarNombre(nombres, nombreBuscado) {
  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === nombreBuscado) {
      return i;
    }
  }
  return -1; // No encontrado
}

// Ejemplo de uso:
console.log("5. Posición de 'Ana':", buscarNombre(["Juan", "Ana", "Pedro"], "Ana")); // 1

/**
 * 6. Revertir un array:
 * Implementa una función que invierta el orden de un array sin usar .reverse().
 */
function revertirArray(array) {
  const resultado = [];
  
  for (let i = array.length - 1; i >= 0; i--) {
    resultado.push(array[i]);
  }
  
  return resultado;
}

// Ejemplo de uso:
console.log("6. Array revertido:", revertirArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

/**
 * 7. Convertir nombres a mayúsculas:
 * Dado un array de nombres, usa map() para convertirlos todos a mayúsculas.
 */
function nombresAMayusculas(nombres) {
  return nombres.map(nombre => nombre.toUpperCase());
}

// Ejemplo de uso:
console.log("7. Nombres en mayúsculas:", nombresAMayusculas(["ana", "juan", "pedro"])); // ["ANA", "JUAN", "PEDRO"]

/**
 * 8. Sumar solo los números positivos:
 * Filtra los negativos y suma los positivos.
 */
function sumarPositivos(numeros) {
  return numeros
    .filter(num => num > 0)
    .reduce((suma, num) => suma + num, 0);
}

// Ejemplo de uso:
console.log("8. Suma de positivos:", sumarPositivos([-2, 5, -1, 10, 3])); // 18

/**
 * 9. Obtener el primer múltiplo de 5:
 * Usa find() para hallar el primer número múltiplo de 5 en un array.
 */
function primerMultiploDe5(numeros) {
  return numeros.find(num => num % 5 === 0);
}

// Ejemplo de uso:
console.log("9. Primer múltiplo de 5:", primerMultiploDe5([7, 12, 15, 20, 3])); // 15

/**
 * 10. Tabla de multiplicar:
 * Pide al usuario un número y usa un for para imprimir su tabla de multiplicar del 1 al 10.
 */
function tablaDeMultiplicar(numero) {
  console.log(`10. Tabla de multiplicar del ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

// Para ejecutar esta función, descomentar la siguiente línea y proporcionar un número:
// tablaDeMultiplicar(7);

/**
 * 11. Generar una secuencia de Fibonacci:
 * Usa un for para generar los primeros 10 números de la serie de Fibonacci e imprímelos.
 */
function secuenciaFibonacci() {
  const fibonacci = [0, 1];
  
  console.log("11. Secuencia de Fibonacci:");
  console.log(fibonacci[0]);
  console.log(fibonacci[1]);
  
  for (let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    console.log(fibonacci[i]);
  }
  
  return fibonacci;
}

// Para ejecutar esta función, descomentar la siguiente línea:
// secuenciaFibonacci();

/**
 * 12. Adivinar un número:
 * Genera un número aleatorio del 1 al 10 y usa un while para pedir al usuario que lo adivine hasta que lo haga correctamente.
 */
function adivinarNumero() {
  const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  let intentos = 0;
  let adivinado = false;
  
  console.log("12. Adivina el número entre 1 y 10");
  
  // En un entorno real, usaríamos prompt() para obtener la entrada del usuario
  // Simulación para mostrar la lógica:
  function simularIntento(numeroUsuario) {
    intentos++;
    
    if (numeroUsuario === numeroAleatorio) {
      console.log(`¡Correcto! Adivinaste el número ${numeroAleatorio} en ${intentos} intentos.`);
      adivinado = true;
    } else if (numeroUsuario < numeroAleatorio) {
      console.log("El número es mayor. Intenta de nuevo.");
    } else {
      console.log("El número es menor. Intenta de nuevo.");
    }
    
    return adivinado;
  }
  
  // Ejemplo de uso (simulado):
  // while (!adivinado) {
  //   const numeroUsuario = parseInt(prompt("Ingresa un número del 1 al 10:"));
  //   simularIntento(numeroUsuario);
  // }
  
  return simularIntento; // Devolvemos la función para poder probarla
}

/**
 * 13. Contar regresivamente desde un número:
 * Usa while para imprimir una cuenta regresiva desde un número ingresado por el usuario hasta 0.
 */
function cuentaRegresiva(numeroInicial) {
  console.log(`13. Cuenta regresiva desde ${numeroInicial}:`);
  
  let contador = numeroInicial;
  while (contador >= 0) {
    console.log(contador);
    contador--;
  }
}

// Para ejecutar esta función, descomentar la siguiente línea:
// cuentaRegresiva(5);

/**
 * 14. Validar entrada de usuario:
 * Pide al usuario que ingrese un número mayor que 0. Si ingresa un número inválido, vuelve a pedirlo usando do while.
 */
function validarNumeroPositivo() {
  let numero;
  
  console.log("14. Validación de número positivo");
  
  // En un entorno real, usaríamos prompt() para obtener la entrada del usuario
  // Simulación para mostrar la lógica:
  function simularValidacion(entrada) {
    do {
      numero = entrada;
      if (numero <= 0 || isNaN(numero)) {
        console.log("Número inválido. Debe ser mayor que 0.");
        return false;
      }
    } while (numero <= 0 || isNaN(numero));
    
    console.log(`Número válido: ${numero}`);
    return true;
  }
  
  return simularValidacion;
}

/**
 * 15. Mostrar menú hasta que el usuario salga:
 * Muestra un menú con opciones y usa do while para repetir hasta que el usuario elija salir.
 */
function mostrarMenu() {
  let opcion;
  
  console.log("15. Menú de opciones");
  
  // En un entorno real, usaríamos prompt() para obtener la entrada del usuario
  // Simulación para mostrar la lógica:
  function simularMenu(seleccion) {
    do {
      console.log("\nMENU:");
      console.log("1. Opción 1");
      console.log("2. Opción 2");
      console.log("3. Opción 3");
      console.log("0. Salir");
      
      opcion = seleccion;
      
      switch (opcion) {
        case 1:
          console.log("Has seleccionado la Opción 1");
          break;
        case 2:
          console.log("Has seleccionado la Opción 2");
          break;
        case 3:
          console.log("Has seleccionado la Opción 3");
          break;
        case 0:
          console.log("Saliendo del programa...");
          break;
        default:
          console.log("Opción inválida. Intenta de nuevo.");
      }
      
      return opcion;
    } while (opcion !== 0);
  }
  
  return simularMenu;
}

/**
 * 16. Sumar solo los números impares entre 1 y 50:
 * - Usa for para recorrer los números del 1 al 50.
 * - Usa if para sumar solo los impares.
 * - Usa while para verificar si la suma supera 500 y, si es así, detener el proceso.
 */
function sumarImparesHasta500() {
  let suma = 0;
  let i = 1;
  
  console.log("16. Suma de impares hasta superar 500:");
  
  for (i = 1; i <= 50; i++) {
    if (i % 2 !== 0) { // Si es impar
      suma += i;
      console.log(`Sumando ${i}, suma actual: ${suma}`);
    }
    
    // Verificar si la suma supera 500
    if (suma > 500) {
      console.log(`La suma (${suma}) ha superado 500. Deteniendo el proceso.`);
      break;
    }
  }
  
  return { sumaFinal: suma, ultimoNumero: i - 1 };
}

// Para ejecutar esta función, descomentar la siguiente línea:
// sumarImparesHasta500();

/**
 * 17. Contador de intentos (login):
 * Simula un intento de login.
 * Usa while para permitir 3 intentos.
 */
function simularLogin(usuarioCorrecto, passwordCorrecta) {
  let intentos = 0;
  const maxIntentos = 3;
  let acceso = false;
  
  console.log("17. Simulación de login (3 intentos)");
  
  // En un entorno real, usaríamos prompt() para obtener la entrada del usuario
  // Simulación para mostrar la lógica:
  function intentarLogin(usuario, password) {
    while (intentos < maxIntentos && !acceso) {
      intentos++;
      
      if (usuario === usuarioCorrecto && password === passwordCorrecta) {
        console.log("Acceso concedido. ¡Bienvenido!");
        acceso = true;
        return true;
      } else {
        console.log(`Credenciales incorrectas. Intento ${intentos} de ${maxIntentos}`);
        if (intentos >= maxIntentos) {
          console.log("Número máximo de intentos alcanzado. Cuenta bloqueada.");
          return false;
        }
      }
    }
  }
  
  return intentarLogin;
}

// Ejemplo de uso:
// const login = simularLogin("admin", "1234");
// login("usuario", "contraseña"); // Primer intento fallido
// login("admin", "contraseña"); // Segundo intento fallido
// login("admin", "1234"); // Tercer intento exitoso

/**
 * 18. Sumar hasta que el usuario ingrese 0:
 * Pide números al usuario y usa while para sumarlos hasta que ingrese 0.
 */
function sumarHastaCero() {
  let suma = 0;
  let numero;
  
  console.log("18. Suma de números hasta ingresar 0");
  
  // En un entorno real, usaríamos prompt() para obtener la entrada del usuario
  // Simulación para mostrar la lógica:
  function simularSuma(numeros) {
    let i = 0;
    suma = 0;
    
    while (true) {
      if (i >= numeros.length) break;
      
      numero = numeros[i];
      i++;
      
      if (numero === 0) {
        console.log("Se ingresó 0. Finalizando suma.");
        break;
      }
      
      suma += numero;
      console.log(`Número ingresado: ${numero}, Suma actual: ${suma}`);
    }
    
    console.log(`Suma final: ${suma}`);
    return suma;
  }
  
  return simularSuma;
}

// Ejemplo de uso:
// const sumador = sumarHastaCero();
// sumador([5, 10, 15, 0, 20]); // Sumará 5+10+15=30 y se detendrá al encontrar 0

/**
 * 19. Imprimir la serie de Fibonacci hasta que un número supere 100:
 * Usa while para generar la serie de Fibonacci hasta que un número supere 100.
 */
function fibonacciHasta100() {
  let a = 0;
  let b = 1;
  let c;
  
  console.log("19. Serie de Fibonacci hasta superar 100:");
  console.log(a);
  console.log(b);
  
  while (true) {
    c = a + b;
    
    if (c > 100) {
      console.log(`El siguiente número (${c}) supera 100. Finalizando.`);
      break;
    }
    
    console.log(c);
    a = b;
    b = c;
  }
  
  return { ultimoNumero: b, siguienteNumero: c };
}

// Para ejecutar esta función, descomentar la siguiente línea:
// fibonacciHasta100();

/**
 * 20. Imprimir los múltiplos de 3 hasta 50:
 * Usa while para imprimir los múltiplos de 3 menores a 50.
 */
function multiplosDe3Hasta50() {
  let numero = 3;
  
  console.log("20. Múltiplos de 3 hasta 50:");
  
  while (numero < 50) {
    console.log(numero);
    numero += 3;
  }
  
  return numero - 3; // Devuelve el último múltiplo impreso
}

// Para ejecutar esta función, descomentar la siguiente línea:
// multiplosDe3Hasta50();

// Exportar todas las funciones para poder usarlas en otros archivos
module.exports = {
  sumarArray,
  mayorYMenor,
  contarPares,
  ordenarArray,
  buscarNombre,
  revertirArray,
  nombresAMayusculas,
  sumarPositivos,
  primerMultiploDe5,
  tablaDeMultiplicar,
  secuenciaFibonacci,
  adivinarNumero,
  cuentaRegresiva,
  validarNumeroPositivo,
  mostrarMenu,
  sumarImparesHasta500,
  simularLogin,
  sumarHastaCero,
  fibonacciHasta100,
  multiplosDe3Hasta50
};
