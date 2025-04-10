/**
 * Ejercicio 1: Función para encontrar el número que aparece una sola vez en un array
 * 
 * Descripción: Esta función encuentra el único número que aparece solo una vez en un array
 * donde todos los demás números aparecen exactamente dos veces.
 * 
 * Funcionamiento: Utiliza el operador XOR (^) para cancelar los números que aparecen dos veces,
 * ya que cualquier número XOR consigo mismo es 0, y cualquier número XOR con 0 es el número mismo.
 * Por ejemplo: 5^5=0, 0^7=7
 * 
 * @param {number[]} nums - Array de números enteros
 * @returns {number} - El número que aparece una sola vez
 */
function findSingleNumber(nums) {
    return nums.reduce((a, b) => a ^ b);
}

/**
 * Ejercicio 2: Implementación de algoritmo de ordenamiento QuickSort
 * 
 * Descripción: QuickSort es un algoritmo de ordenamiento eficiente basado en la estrategia
 * "divide y vencerás". Esta implementación ordena un array de números de menor a mayor.
 * 
 * Funcionamiento:
 * 1. Selecciona un elemento como pivote (en este caso, el elemento del medio)
 * 2. Divide el array en tres partes: elementos menores que el pivote, iguales al pivote y mayores que el pivote
 * 3. Aplica recursivamente el mismo proceso a los subarrays de elementos menores y mayores
 * 4. Combina los resultados para obtener el array ordenado
 * 
 * Complejidad: O(n log n) en el caso promedio, O(n²) en el peor caso
 * 
 * @param {number[]} arr - Array de números a ordenar
 * @returns {number[]} - Array ordenado
 */
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
    
    return [...quickSort(left), ...middle, ...quickSort(right)];
}

/**
 * Ejercicio 3: Generador de secuencia Fibonacci con memoización
 * 
 * Descripción: Genera los primeros n números de la secuencia de Fibonacci (0, 1, 1, 2, 3, 5, 8, ...)
 * utilizando memoización para mejorar el rendimiento.
 * 
 * Funcionamiento:
 * 1. Utiliza un objeto 'memo' para almacenar los resultados ya calculados
 * 2. La función interna 'fib' calcula el valor de Fibonacci para un número específico
 * 3. Si el valor ya está en memoria, lo devuelve inmediatamente
 * 4. Si no, lo calcula recursivamente y lo guarda en memoria
 * 5. Finalmente, genera un array con los primeros n números de la secuencia
 * 
 * Ventaja: La memoización reduce la complejidad de O(2^n) a O(n), evitando recalcular valores
 * 
 * @param {number} n - Cantidad de números de la secuencia a generar
 * @returns {number[]} - Array con los primeros n números de Fibonacci
 */
function fibonacciGenerator(n) {
    const memo = {};
    
    function fib(n) {
        if (n in memo) return memo[n];
        if (n <= 1) return n;
        
        memo[n] = fib(n-1) + fib(n-2);
        return memo[n];
    }
    
    return Array.from({length: n}, (_, i) => fib(i));
}

/**
 * Ejercicio 4: Comprobador de palíndromos que ignora espacios y puntuación
 * 
 * Descripción: Verifica si una cadena de texto es un palíndromo, ignorando mayúsculas/minúsculas,
 * espacios y signos de puntuación. Un palíndromo es una palabra o frase que se lee igual
 * de izquierda a derecha que de derecha a izquierda.
 * 
 * Funcionamiento:
 * 1. Convierte la cadena a minúsculas
 * 2. Elimina todos los caracteres que no sean letras o números usando una expresión regular
 * 3. Compara la cadena limpia con su versión invertida
 * 
 * Ejemplos de palíndromos: "Anita lava la tina", "A man, a plan, a canal: Panama"
 * 
 * @param {string} str - Cadena de texto a verificar
 * @returns {boolean} - true si es palíndromo, false si no lo es
 */
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}

/**
 * Ejercicio 5: Implementación de una cola de prioridad
 * 
 * Descripción: Una cola de prioridad es una estructura de datos donde cada elemento tiene
 * asociada una prioridad. Los elementos con mayor prioridad (valor numérico menor) se
 * procesan antes que los elementos con menor prioridad.
 * 
 * Funcionamiento:
 * - La cola mantiene los elementos ordenados por su prioridad
 * - Al agregar un elemento (enqueue), se inserta en la posición correcta según su prioridad
 * - Al quitar un elemento (dequeue), se extrae el elemento de mayor prioridad (el primero)
 * 
 * Aplicaciones: Sistemas operativos (planificación de procesos), algoritmos de búsqueda (A*),
 * simulación de eventos, etc.
 * 
 * @class PriorityQueue
 */
class PriorityQueue {
    /**
     * Crea una nueva cola de prioridad vacía
     */
    constructor() {
        this.items = [];
    }
    
    /**
     * Agrega un elemento a la cola con una prioridad específica
     * Los elementos con valor numérico menor tienen mayor prioridad
     * 
     * @param {any} element - Elemento a agregar
     * @param {number} priority - Prioridad del elemento (menor número = mayor prioridad)
     */
    enqueue(element, priority) {
        const queueElement = { element, priority };
        let added = false;
        
        // Busca la posición correcta según la prioridad
        for (let i = 0; i < this.items.length; i++) {
            if (queueElement.priority < this.items[i].priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        
        // Si no se agregó en el bucle, se agrega al final
        if (!added) {
            this.items.push(queueElement);
        }
    }
    
    /**
     * Extrae y devuelve el elemento de mayor prioridad (el primero de la cola)
     * 
     * @returns {any} - El elemento de mayor prioridad o null si la cola está vacía
     */
    dequeue() {
        if (this.isEmpty()) return null;
        return this.items.shift().element;
    }
    
    /**
     * Verifica si la cola está vacía
     * 
     * @returns {boolean} - true si la cola está vacía, false si contiene elementos
     */
    isEmpty() {
        return this.items.length === 0;
    }
}
