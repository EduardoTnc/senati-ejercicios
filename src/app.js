const readline = require('readline');
const ejercicios = require('./ejercicios');

/**
 * Aplicación de ejercicios interactivos en JavaScript
 * 
 * Esta aplicación muestra varios ejercicios básicos de programación
 * con una interfaz interactiva para la consola.
 */

// Configuración de la interfaz de línea de comandos
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para limpiar la consola
function limpiarConsola() {
    console.clear();
}

// Función para mostrar el menú principal
function mostrarMenu() {
    limpiarConsola();
    console.log('=== EJERCICIOS INTERACTIVOS DE JAVASCRIPT ===');
    console.log('1. Calculadora simple');
    console.log('2. Verificador de números pares/impares');
    console.log('3. Conversor de temperatura');
    console.log('4. Generador de tablas de multiplicar');
    console.log('5. Contador de vocales');
    console.log('6. Nuevos ejercicios');
    console.log('0. Salir');
    console.log('==========================================');
    
    rl.question('Selecciona un ejercicio (0-6): ', (opcion) => {
        switch(opcion) {
            case '1':
                ejercicioCalculadora();
                break;
            case '2':
                ejercicioParImpar();
                break;
            case '3':
                ejercicioConversorTemperatura();
                break;
            case '4':
                ejercicioTablasMultiplicar();
                break;
            case '5':
                ejercicioContadorVocales();
                break;
            case '6':
                mostrarMenuNuevosEjercicios();
                break;
            case '0':
                console.log('¡Gracias por usar la aplicación!');
                rl.close();
                break;
            default:
                console.log('\nOpción no válida. Presiona Enter para continuar...');
                rl.question('', () => mostrarMenu());
        }
    });
}

/**
 * Ejercicio 1: Calculadora simple
 * 
 * Descripción: Realiza operaciones básicas entre dos números:
 * suma, resta, multiplicación y división.
 */
function ejercicioCalculadora() {
    limpiarConsola();
    console.log('=== CALCULADORA SIMPLE ===');
    console.log('Este ejercicio realiza operaciones básicas entre dos números.');
    console.log('Operaciones disponibles: suma (+), resta (-), multiplicación (*), división (/)\n');
    
    rl.question('Ingresa el primer número: ', (num1) => {
        rl.question('Ingresa el segundo número: ', (num2) => {
            rl.question('Ingresa la operación (+, -, *, /): ', (operacion) => {
                // Convertir las entradas a números
                const numero1 = parseFloat(num1);
                const numero2 = parseFloat(num2);
                let resultado;
                let simbolo;
                
                // Validar que las entradas sean números válidos
                if (isNaN(numero1) || isNaN(numero2)) {
                    console.log('\nError: Debes ingresar números válidos.');
                } else {
                    // Realizar la operación seleccionada
                    switch(operacion) {
                        case '+':
                            resultado = numero1 + numero2;
                            simbolo = '+';
                            break;
                        case '-':
                            resultado = numero1 - numero2;
                            simbolo = '-';
                            break;
                        case '*':
                            resultado = numero1 * numero2;
                            simbolo = '*';
                            break;
                        case '/':
                            if (numero2 === 0) {
                                console.log('\nError: No se puede dividir por cero.');
                                simbolo = null;
                            } else {
                                resultado = numero1 / numero2;
                                simbolo = '/';
                            }
                            break;
                        default:
                            console.log('\nError: Operación no válida.');
                            simbolo = null;
                    }
                    
                    // Mostrar el resultado si la operación es válida
                    if (simbolo) {
                        console.log(`\nProceso de cálculo:`);
                        console.log(`${numero1} ${simbolo} ${numero2} = ${resultado}`);
                        console.log(`\nResultado: ${resultado}`);
                    }
                }
                
                console.log('\nPresiona Enter para volver al menú principal...');
                rl.question('', () => mostrarMenu());
            });
        });
    });
}

/**
 * Ejercicio 2: Verificador de números pares/impares
 * 
 * Descripción: Determina si un número es par o impar y muestra
 * el proceso de verificación.
 */
function ejercicioParImpar() {
    limpiarConsola();
    console.log('=== VERIFICADOR DE NÚMEROS PARES/IMPARES ===');
    console.log('Este ejercicio determina si un número es par o impar.');
    console.log('Un número es par si al dividirlo por 2 el residuo es 0.\n');
    
    rl.question('Ingresa un número entero: ', (numero) => {
        // Convertir la entrada a número entero
        const num = parseInt(numero);
        
        // Validar que la entrada sea un número válido
        if (isNaN(num)) {
            console.log('\nError: Debes ingresar un número entero válido.');
        } else {
            const residuo = num % 2;
            const esPar = residuo === 0;
            
            console.log(`\nProceso de verificación:`);
            console.log(`1. Tomamos el número ${num}`);
            console.log(`2. Calculamos el residuo de dividir ${num} entre 2: ${num} % 2 = ${residuo}`);
            console.log(`3. Si el residuo es 0, el número es par; si es 1, es impar`);
            console.log(`\nResultado: El número ${num} es ${esPar ? 'par' : 'impar'}.`);
        }
        
        console.log('\nPresiona Enter para volver al menú principal...');
        rl.question('', () => mostrarMenu());
    });
}

/**
 * Ejercicio 3: Conversor de temperatura
 * 
 * Descripción: Convierte temperaturas entre grados Celsius y Fahrenheit,
 * mostrando el proceso de conversión.
 */
function ejercicioConversorTemperatura() {
    limpiarConsola();
    console.log('=== CONVERSOR DE TEMPERATURA ===');
    console.log('Este ejercicio convierte temperaturas entre Celsius y Fahrenheit.');
    console.log('Fórmulas:');
    console.log('- De Celsius a Fahrenheit: (°C × 9/5) + 32 = °F');
    console.log('- De Fahrenheit a Celsius: (°F − 32) × 5/9 = °C\n');
    
    rl.question('¿Qué conversión deseas realizar? (1: C→F, 2: F→C): ', (opcion) => {
        if (opcion === '1' || opcion === '2') {
            const tipo = opcion === '1' ? 'Celsius' : 'Fahrenheit';
            rl.question(`Ingresa la temperatura en grados ${tipo}: `, (temp) => {
                // Convertir la entrada a número
                const temperatura = parseFloat(temp);
                
                // Validar que la entrada sea un número válido
                if (isNaN(temperatura)) {
                    console.log('\nError: Debes ingresar un valor numérico válido.');
                } else {
                    let resultado;
                    let formula;
                    
                    if (opcion === '1') { // Celsius a Fahrenheit
                        resultado = (temperatura * 9/5) + 32;
                        formula = `(${temperatura} × 9/5) + 32 = ${resultado.toFixed(2)}`;
                        console.log(`\nProceso de conversión de Celsius a Fahrenheit:`);
                        console.log(`1. Multiplicamos ${temperatura}°C por 9/5: ${temperatura} × 9/5 = ${(temperatura * 9/5).toFixed(2)}`);
                        console.log(`2. Sumamos 32 al resultado: ${(temperatura * 9/5).toFixed(2)} + 32 = ${resultado.toFixed(2)}`);
                        console.log(`\nResultado: ${temperatura}°C equivale a ${resultado.toFixed(2)}°F`);
                    } else { // Fahrenheit a Celsius
                        resultado = (temperatura - 32) * 5/9;
                        formula = `(${temperatura} − 32) × 5/9 = ${resultado.toFixed(2)}`;
                        console.log(`\nProceso de conversión de Fahrenheit a Celsius:`);
                        console.log(`1. Restamos 32 a ${temperatura}°F: ${temperatura} - 32 = ${(temperatura - 32).toFixed(2)}`);
                        console.log(`2. Multiplicamos el resultado por 5/9: ${(temperatura - 32).toFixed(2)} × 5/9 = ${resultado.toFixed(2)}`);
                        console.log(`\nResultado: ${temperatura}°F equivale a ${resultado.toFixed(2)}°C`);
                    }
                }
                
                console.log('\nPresiona Enter para volver al menú principal...');
                rl.question('', () => mostrarMenu());
            });
        } else {
            console.log('\nOpción no válida.');
            console.log('Presiona Enter para volver a intentarlo...');
            rl.question('', () => ejercicioConversorTemperatura());
        }
    });
}

/**
 * Ejercicio 4: Generador de tablas de multiplicar
 * 
 * Descripción: Genera la tabla de multiplicar para un número dado,
 * mostrando cada paso del proceso.
 */
function ejercicioTablasMultiplicar() {
    limpiarConsola();
    console.log('=== GENERADOR DE TABLAS DE MULTIPLICAR ===');
    console.log('Este ejercicio genera la tabla de multiplicar para un número.');
    console.log('Muestra los resultados del 1 al 10.\n');
    
    rl.question('Ingresa un número para ver su tabla de multiplicar: ', (numero) => {
        // Convertir la entrada a número
        const num = parseFloat(numero);
        
        // Validar que la entrada sea un número válido
        if (isNaN(num)) {
            console.log('\nError: Debes ingresar un número válido.');
        } else {
            console.log(`\nTabla de multiplicar del ${num}:`);
            console.log('============================');
            
            for (let i = 1; i <= 10; i++) {
                const resultado = num * i;
                console.log(`${num} × ${i} = ${resultado}`);
            }
        }
        
        console.log('\nPresiona Enter para volver al menú principal...');
        rl.question('', () => mostrarMenu());
    });
}

/**
 * Ejercicio 5: Contador de vocales
 * 
 * Descripción: Cuenta la cantidad de cada vocal en un texto,
 * mostrando el proceso de conteo.
 */
function ejercicioContadorVocales() {
    limpiarConsola();
    console.log('=== CONTADOR DE VOCALES ===');
    console.log('Este ejercicio cuenta la cantidad de cada vocal en un texto.');
    console.log('Distingue entre las vocales: a, e, i, o, u (no considera acentos).\n');
    
    rl.question('Ingresa un texto: ', (texto) => {
        if (!texto.trim()) {
            console.log('\nError: Debes ingresar un texto no vacío.');
        } else {
            // Convertir a minúsculas para simplificar el conteo
            const textoMinusculas = texto.toLowerCase();
            
            // Inicializar contadores
            const vocales = {
                'a': 0,
                'e': 0,
                'i': 0,
                'o': 0,
                'u': 0
            };
            
            // Contar vocales
            console.log(`\nProceso de conteo de vocales en: "${texto}"`);
            console.log('Recorriendo cada carácter:');
            
            for (let i = 0; i < textoMinusculas.length; i++) {
                const caracter = textoMinusculas[i];
                if (vocales.hasOwnProperty(caracter)) {
                    vocales[caracter]++;
                    console.log(`- Posición ${i+1}: Encontrada vocal '${caracter}' → ${vocales[caracter]} ocurrencia(s) hasta ahora`);
                }
            }
            
            // Mostrar resultados
            console.log('\nResultado del conteo:');
            let totalVocales = 0;
            
            for (const vocal in vocales) {
                console.log(`- Vocal '${vocal}': ${vocales[vocal]} ocurrencia(s)`);
                totalVocales += vocales[vocal];
            }
            
            console.log(`\nTotal de vocales encontradas: ${totalVocales}`);
            console.log(`Longitud del texto: ${texto.length} caracteres`);
        }
        
        console.log('\nPresiona Enter para volver al menú principal...');
        rl.question('', () => mostrarMenu());
    });
}

// Función para mostrar el menú de nuevos ejercicios
function mostrarMenuNuevosEjercicios() {
    limpiarConsola();
    console.log('=== NUEVOS EJERCICIOS DE JAVASCRIPT ===');
    console.log('1. Sumar elementos de un array');
    console.log('2. Número mayor y menor');
    console.log('3. Contar elementos pares');
    console.log('4. Ordenar un array');
    console.log('5. Buscar un elemento');
    console.log('6. Revertir un array');
    console.log('7. Convertir nombres a mayúsculas');
    console.log('8. Sumar solo los números positivos');
    console.log('9. Obtener el primer múltiplo de 5');
    console.log('10. Tabla de multiplicar');
    console.log('11. Generar una secuencia de Fibonacci');
    console.log('12. Adivinar un número');
    console.log('13. Contar regresivamente desde un número');
    console.log('14. Validar entrada de usuario');
    console.log('15. Mostrar menú hasta que el usuario salga');
    console.log('16. Sumar solo los números impares entre 1 y 50');
    console.log('17. Contador de intentos (login)');
    console.log('18. Sumar hasta que el usuario ingrese 0');
    console.log('19. Imprimir la serie de Fibonacci hasta que un número supere 100');
    console.log('20. Imprimir los múltiplos de 3 hasta 50');
    console.log('0. Volver al menú principal');
    console.log('==========================================');

    rl.question('Seleccione un ejercicio (1-20): ', (opcion) => {
        switch (opcion) {
            case '1':
                ejercicioSumarArray();
                break;
            case '2':
                ejercicioMayorMenor();
                break;
            case '3':
                ejercicioContarPares();
                break;
            case '4':
                ejercicioOrdenarArray();
                break;
            case '5':
                ejercicioBuscarNombre();
                break;
            case '6':
                ejercicioRevertirArray();
                break;
            case '7':
                ejercicioNombresAMayusculas();
                break;
            case '8':
                ejercicioSumarPositivos();
                break;
            case '9':
                ejercicioPrimerMultiploDe5();
                break;
            case '10':
                ejercicioTablaMultiplicar();
                break;
            case '11':
                ejercicioFibonacci();
                break;
            case '12':
                ejercicioAdivinarNumero();
                break;
            case '13':
                ejercicioCuentaRegresiva();
                break;
            case '14':
                ejercicioValidarNumeroPositivo();
                break;
            case '15':
                ejercicioMostrarMenu();
                break;
            case '16':
                ejercicioSumarImparesHasta500();
                break;
            case '17':
                ejercicioSimularLogin();
                break;
            case '18':
                ejercicioSumarHastaCero();
                break;
            case '19':
                ejercicioFibonacciHasta100();
                break;
            case '20':
                ejercicioMultiplosDe3Hasta50();
                break;
            case '0':
                mostrarMenu();
                break;
            default:
                console.log('Opción no válida. Intente de nuevo.');
                setTimeout(mostrarMenuNuevosEjercicios, 1500);
        }
    });
}

// Implementación de los nuevos ejercicios
function ejercicioSumarArray() {
    limpiarConsola();
    console.log('=== EJERCICIO 1: SUMAR ELEMENTOS DE UN ARRAY ===');
    const array = [5, 10, 15, 20, 25];
    console.log(`Array de ejemplo: [${array}]`);
    const resultado = ejercicios.sumarArray(array);
    console.log(`La suma de todos los elementos es: ${resultado}`);
    volverAlMenu(mostrarMenuNuevosEjercicios);
}

function ejercicioMayorMenor() {
    limpiarConsola();
    console.log('=== EJERCICIO 2: NÚMERO MAYOR Y MENOR ===');
    const array = [8, 3, 10, 1, 5, 22, 7];
    console.log(`Array de ejemplo: [${array}]`);
    const resultado = ejercicios.mayorYMenor(array);
    console.log(`El número mayor es: ${resultado.mayor}`);
    console.log(`El número menor es: ${resultado.menor}`);
    volverAlMenu(mostrarMenuNuevosEjercicios);
}

function ejercicioContarPares() {
    limpiarConsola();
    console.log('=== EJERCICIO 3: CONTAR ELEMENTOS PARES ===');
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(`Array de ejemplo: [${array}]`);
    const resultado = ejercicios.contarPares(array);
    console.log(`Cantidad de números pares: ${resultado}`);
    volverAlMenu(mostrarMenuNuevosEjercicios);
}

function ejercicioOrdenarArray() {
    limpiarConsola();
    console.log('=== EJERCICIO 4: ORDENAR UN ARRAY ===');
    const array = [5, 3, 8, 1, 2, 7, 4];
    console.log(`Array original: [${array}]`);
    const resultado = ejercicios.ordenarArray(array);
    console.log(`Array ordenado: [${resultado}]`);
    volverAlMenu(mostrarMenuNuevosEjercicios);
}

function ejercicioBuscarNombre() {
    limpiarConsola();
    console.log('=== EJERCICIO 5: BUSCAR UN ELEMENTO ===');
    const nombres = ["Juan", "Ana", "Pedro", "María", "Luis"];
    const nombreBuscado = "Pedro";
    console.log(`Array de nombres: [${nombres}]`);
    console.log(`Nombre a buscar: ${nombreBuscado}`);
    const posicion = ejercicios.buscarNombre(nombres, nombreBuscado);
    if (posicion !== -1) {
        console.log(`El nombre "${nombreBuscado}" está en la posición ${posicion}`);
    } else {
        console.log(`El nombre "${nombreBuscado}" no se encuentra en la lista`);
    }
    volverAlMenu(mostrarMenuNuevosEjercicios);
}

function ejercicioRevertirArray() {
    limpiarConsola();
    console.log('=== EJERCICIO 6: REVERTIR UN ARRAY ===');
    const array = [1, 2, 3, 4, 5];
    console.log(`Array original: [${array}]`);
    const resultado = ejercicios.revertirArray(array);
    console.log(`Array revertido: [${resultado}]`);
    volverAlMenu(mostrarMenuNuevosEjercicios);
}

function ejercicioNombresAMayusculas() {
    limpiarConsola();
    console.log('=== EJERCICIO 7: CONVERTIR NOMBRES A MAYÚSCULAS ===');
    const nombres = ["ana", "juan", "pedro", "maría", "luis"];
    console.log(`Array original: [${nombres}]`);
    const resultado = ejercicios.nombresAMayusculas(nombres);
    console.log(`Array en mayúsculas: [${resultado}]`);
    volverAlMenu(mostrarMenuNuevosEjercicios);
}

function ejercicioSumarPositivos() {
    limpiarConsola();
    console.log('=== EJERCICIO 8: SUMAR SOLO LOS NÚMEROS POSITIVOS ===');
    const array = [-2, 5, -1, 10, 3, -8, 7];
    console.log(`Array de ejemplo: [${array}]`);
    const resultado = ejercicios.sumarPositivos(array);
    console.log(`La suma de los números positivos es: ${resultado}`);
    volverAlMenu(mostrarMenuNuevosEjercicios);
}

function ejercicioPrimerMultiploDe5() {
    limpiarConsola();
    console.log('=== EJERCICIO 9: OBTENER EL PRIMER MÚLTIPLO DE 5 ===');
    const array = [7, 12, 15, 20, 3];
    console.log(`Array de ejemplo: [${array}]`);
    const resultado = ejercicios.primerMultiploDe5(array);
    console.log(`El primer múltiplo de 5 es: ${resultado}`);
    volverAlMenu(mostrarMenuNuevosEjercicios);
}

function ejercicioTablaMultiplicar() {
    limpiarConsola();
    console.log('=== EJERCICIO 10: TABLA DE MULTIPLICAR ===');
    rl.question('Ingrese un número para ver su tabla de multiplicar: ', (numero) => {
        numero = parseInt(numero);
        if (isNaN(numero)) {
            console.log('Debe ingresar un número válido.');
            setTimeout(() => ejercicioTablaMultiplicar(), 1500);
            return;
        }
        console.log(`Tabla de multiplicar del ${numero}:`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
        volverAlMenu(mostrarMenuNuevosEjercicios);
    });
}

function ejercicioFibonacci() {
    limpiarConsola();
    console.log('=== EJERCICIO 11: GENERAR UNA SECUENCIA DE FIBONACCI ===');
    console.log('Los primeros 10 números de la secuencia de Fibonacci son:');
    const fibonacci = [0, 1];
    console.log(fibonacci[0]);
    console.log(fibonacci[1]);
    for (let i = 2; i < 10; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        console.log(fibonacci[i]);
    }
    volverAlMenu(mostrarMenuNuevosEjercicios);
}

function ejercicioAdivinarNumero() {
    limpiarConsola();
    console.log('=== EJERCICIO 12: ADIVINAR UN NÚMERO ===');
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    let intentos = 0;
    
    function pedirNumero() {
        rl.question('Adivina el número entre 1 y 10: ', (respuesta) => {
            const numeroUsuario = parseInt(respuesta);
            if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 10) {
                console.log('Por favor, ingresa un número válido entre 1 y 10.');
                pedirNumero();
                return;
            }
            
            intentos++;
            
            if (numeroUsuario === numeroAleatorio) {
                console.log(`¡Correcto! Adivinaste el número ${numeroAleatorio} en ${intentos} intentos.`);
                volverAlMenu(mostrarMenuNuevosEjercicios);
            } else if (numeroUsuario < numeroAleatorio) {
                console.log('El número es mayor. Intenta de nuevo.');
                pedirNumero();
            } else {
                console.log('El número es menor. Intenta de nuevo.');
                pedirNumero();
            }
        });
    }
    
    pedirNumero();
}

function ejercicioCuentaRegresiva() {
    limpiarConsola();
    console.log('=== EJERCICIO 13: CONTAR REGRESIVAMENTE DESDE UN NÚMERO ===');
    rl.question('Ingrese un número para la cuenta regresiva: ', (numero) => {
        numero = parseInt(numero);
        if (isNaN(numero) || numero < 0) {
            console.log('Debe ingresar un número válido mayor o igual a 0.');
            setTimeout(() => ejercicioCuentaRegresiva(), 1500);
            return;
        }
        
        console.log(`Cuenta regresiva desde ${numero}:`);
        let contador = numero;
        while (contador >= 0) {
            console.log(contador);
            contador--;
        }
        
        volverAlMenu(mostrarMenuNuevosEjercicios);
    });
}

function ejercicioValidarNumeroPositivo() {
    limpiarConsola();
    console.log('=== EJERCICIO 14: VALIDAR ENTRADA DE USUARIO ===');
    
    function pedirNumero() {
        rl.question('Ingrese un número mayor que 0: ', (respuesta) => {
            const numero = parseFloat(respuesta);
            
            if (numero <= 0 || isNaN(numero)) {
                console.log('Número inválido. Debe ser mayor que 0.');
                pedirNumero();
            } else {
                console.log(`Número válido: ${numero}`);
                volverAlMenu(mostrarMenuNuevosEjercicios);
            }
        });
    }
    
    pedirNumero();
}

function ejercicioMostrarMenu() {
    limpiarConsola();
    console.log('=== EJERCICIO 15: MOSTRAR MENÚ HASTA QUE EL USUARIO SALGA ===');
    
    function mostrarMenuEjemplo() {
        console.log('\nMENU:');
        console.log('1. Opción 1');
        console.log('2. Opción 2');
        console.log('3. Opción 3');
        console.log('0. Salir');
        
        rl.question('Seleccione una opción: ', (opcion) => {
            opcion = parseInt(opcion);
            
            switch (opcion) {
                case 1:
                    console.log('Has seleccionado la Opción 1');
                    mostrarMenuEjemplo();
                    break;
                case 2:
                    console.log('Has seleccionado la Opción 2');
                    mostrarMenuEjemplo();
                    break;
                case 3:
                    console.log('Has seleccionado la Opción 3');
                    mostrarMenuEjemplo();
                    break;
                case 0:
                    console.log('Saliendo del menú de ejemplo...');
                    volverAlMenu(mostrarMenuNuevosEjercicios);
                    break;
                default:
                    console.log('Opción inválida. Intenta de nuevo.');
                    mostrarMenuEjemplo();
            }
        });
    }
    
    mostrarMenuEjemplo();
}

function ejercicioSumarImparesHasta500() {
    limpiarConsola();
    console.log('=== EJERCICIO 16: SUMAR SOLO LOS NÚMEROS IMPARES ENTRE 1 Y 50 ===');
    
    let suma = 0;
    let i = 1;
    
    console.log('Sumando números impares hasta superar 500:');
    
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
    
    console.log(`Suma final: ${suma}`);
    console.log(`Último número procesado: ${i - 1}`);
    
    volverAlMenu(mostrarMenuNuevosEjercicios);
}

function ejercicioSimularLogin() {
    limpiarConsola();
    console.log('=== EJERCICIO 17: CONTADOR DE INTENTOS (LOGIN) ===');
    
    const usuarioCorrecto = 'admin';
    const passwordCorrecta = '1234';
    let intentos = 0;
    const maxIntentos = 3;
    
    function intentarLogin() {
        if (intentos >= maxIntentos) {
            console.log('Número máximo de intentos alcanzado. Cuenta bloqueada.');
            volverAlMenu(mostrarMenuNuevosEjercicios);
            return;
        }
        
        rl.question('Usuario: ', (usuario) => {
            rl.question('Contraseña: ', (password) => {
                intentos++;
                
                if (usuario === usuarioCorrecto && password === passwordCorrecta) {
                    console.log('Acceso concedido. ¡Bienvenido!');
                    volverAlMenu(mostrarMenuNuevosEjercicios);
                } else {
                    console.log(`Credenciales incorrectas. Intento ${intentos} de ${maxIntentos}`);
                    intentarLogin();
                }
            });
        });
    }
    
    console.log('Simulación de login (3 intentos)');
    console.log('Usuario correcto: admin, Contraseña correcta: 1234');
    intentarLogin();
}

function ejercicioSumarHastaCero() {
    limpiarConsola();
    console.log('=== EJERCICIO 18: SUMAR HASTA QUE EL USUARIO INGRESE 0 ===');
    
    let suma = 0;
    
    function pedirNumero() {
        rl.question('Ingrese un número (0 para terminar): ', (respuesta) => {
            const numero = parseFloat(respuesta);
            
            if (isNaN(numero)) {
                console.log('Por favor, ingrese un número válido.');
                pedirNumero();
                return;
            }
            
            if (numero === 0) {
                console.log('Se ingresó 0. Finalizando suma.');
                console.log(`Suma final: ${suma}`);
                volverAlMenu(mostrarMenuNuevosEjercicios);
            } else {
                suma += numero;
                console.log(`Número ingresado: ${numero}, Suma actual: ${suma}`);
                pedirNumero();
            }
        });
    }
    
    pedirNumero();
}

function ejercicioFibonacciHasta100() {
    limpiarConsola();
    console.log('=== EJERCICIO 19: IMPRIMIR LA SERIE DE FIBONACCI HASTA QUE UN NÚMERO SUPERE 100 ===');
    
    let a = 0;
    let b = 1;
    let c;
    
    console.log('Serie de Fibonacci hasta superar 100:');
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
    
    volverAlMenu(mostrarMenuNuevosEjercicios);
}

function ejercicioMultiplosDe3Hasta50() {
    limpiarConsola();
    console.log('=== EJERCICIO 20: IMPRIMIR LOS MÚLTIPLOS DE 3 HASTA 50 ===');
    
    let numero = 3;
    
    console.log('Múltiplos de 3 hasta 50:');
    
    while (numero < 50) {
        console.log(numero);
        numero += 3;
    }
    
    volverAlMenu(mostrarMenuNuevosEjercicios);
}

// Función auxiliar para volver al menú
function volverAlMenu(menuFunction) {
    console.log('\nPresione Enter para volver al menú...');
    rl.question('', () => {
        menuFunction();
    });
}

// Iniciar la aplicación mostrando el menú principal
console.log('Iniciando aplicación de ejercicios interactivos...');
mostrarMenu();
