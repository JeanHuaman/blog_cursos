## Símbolo, Vocabulario y Lenguajes

### 1. Símbolos 
Es un axioma, no necesita comprobarse, puede ser un dígito, letra u otro caracter. También pueden ser varios caracteres, letras y palabras reservadas de un lenguaje de programación..

|            |                 |
| ---------- | --------------- |
|Letras     | a,b,c,d ... z   |
|Dígitos    | 1,2,3, ... 9|
|Caracteres |  +,-,*,/,?,<,>,_|
|Palabras Reservadas | if, else, then, for, etc |

### 2. Vocabulario o Alfabeto
Conjunto finito de símbolos. Para indicar que "a" pertenece se utiliza la notación de pertenencia de la teoría de conjuntos (a ϵ V).  

* V<sub>1</sub> = {a, b, c, ……………., z}
* V<sub>2</sub> = {1,2,3,4 .. 9}
* V<sub>3</sub> = {+,-,*,?,<,>}

#### 2.1 Cadena de un Vocabulario 
Secuencia finita de símbolos de un determinado vocabulario.

* "abc" es una cadena del vocabulario V<sub>1</sub>
* "123" es una cadena del vocabulario V<sub>2</sub>
* "+-*" es una cadena del vocabulario V<sub>3</sub>

#### 2.2 Longitud de una cadena 
Cantidad de símbolos o letras que la componen.

   * |abc| = 3
   * |2113| = 4
   * |+*?<>| = 5
   * |if then else| = 3


#### 2.3 Cadena Vacía 
Es una cadena especial de longitud cero, no posee símbolos. Se representa con la letra λ . **| λ | = 0**

#### 2.4 Operaciones entre cadenas

V = {a,b,c,1,3,?,if}

x = "13abc"  
y = "bb?ifa"

* Concatenación de cadenas: Sean las cadenas "x" y "y" se denomina concatenación a una nueva cadena formada por los símbolos de la cadena "x" y "y".

    xy = "13abcbb?ifa"    
    yx = "bb?ifa13abc"      
    xy != yx
         
* Potencia de cadena: La potencia indica la cantidad de veces que se va a repetir la cadena.

     x<sup>3</sup> = "13abc13abc13abc"

* Estrella de Kleene de un Vocabulario: Para cualquier vocabulario "V" el conjunto de todas las cadenas sobre "V" se denota V*.

    V* = { λ, a, b, c, 1, 3, ?, if, aa, ab, ac, a1, a3, a?, aif, ba, bb, bc ... }

* Cerradura de un Vocabulario: Para cualquier vocabulario "V" el conjunto de todas las cadenas sobre "V" sin considerar la cadena vacía se denota V<sup>+</sup>.

    V<sup>+</sup> = { a, b, c, 1, 3, ?, if, aa, ab, ac, a1, a3, a?, aif, ba, bb, bc ... }

### 3. Lenguaje

Es el conjunto finito o infinito de cadenas compuestas con simbolos de un alfabeto.

#### 3.1 Lenguaje vacío

Es un conjunto vacío que se muestra como Ø o {}, hay que diferenciarlo del lenguaje que contenga a la cadena vacía porque el número de elementos (cardinal) son diferentes.

Cardinal({Ø}) = 0   
Cardinal({λ}) = 1

#### 3.2 Operaciones del Lenguaje

L = {abc, d1f}    
M = {xyz, 465}

* Unión de L y S       
L U S = {abc, d1f, xyz, 465}

* Concatenación de L y S  
LS = {abcxyz, abc465, d1fxyz, d1f465}

* Potencia de un Lenguaje   
L<sup>0</sup> = λ   
L<sup>n</sup> = L<sup>n-1</sup>L    
Ejemplo: L<sup>3</sup> = LLL

* Estrella de Kleen de un Lenguaje  
L* = {λ} U { L } U { LL } U { LLL } U { LLLL } ...

* Cerradura de un Lenguaje  
L<sup>+</sup> = { L } U { LL } U { LLL } U { LLLL } ...








