const readline = require('readline');

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
    console.log('0. Salir');
    console.log('==========================================');
    
    rl.question('Selecciona un ejercicio (0-5): ', (opcion) => {
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

// Iniciar la aplicación mostrando el menú principal
console.log('Iniciando aplicación de ejercicios interactivos...');
mostrarMenu();
