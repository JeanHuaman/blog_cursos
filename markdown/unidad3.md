## Expresión Regular

* Patrones de cadenas de caracteres.
* Contendrá caracteres del alfabeto, todos los símbolos indican patrones.  
* Contienen caracteres que tengan un significado especial denominados **metacaracteres** como "\n" que indica un salto de línea.

### 1. Lenguaje Regular
Es un conjunto de cadenas generados por una expresión regular, se escribe L(r) donde **r** es una expresión regular.

***En palabras más sencillas es cuando un vocabulario formas cadenas y cuando estas cumplen con los patrones de una expresión regular pasan a pertenecer a un lenguaje regular.***

v = {a, b}  
r = a*b  => cadenas generadas = {b, ab, abb, abbb, abbb, ...}   
L(r) = {b, ab, abb, abbb, abbb, ...}

Como se puede observar en el ejemplo mostrado, se pueden formar infinitas cadenas a partir del vocabulario **V** y los cuales coincidan con el patrón mostrado en la expresión regular **r** formaran parte del lenguaje regular **L(r)**.
### 2. Expresiones regulares básicas
Caracteres simples del alfabeto, que corresponden a si mismos.
* Indicamos que la expresión regular r corresponde al caracter a.   
r = a => L(r) = L(a) = {a}
*  La cadena que no contiene ningún caracter lo definimos.   
L(λ) = {λ}
* Definimos al símbolo que corresponda a la ausencia de cadenas, conjunto vacío.    
L(Ø) = {}
### 3. Operaciones
* Selección entre alternativas: Define cualquier caracter que concuerde con el patrón regular r o s.   

    L(r|s) = L(r) U L(s)    
    a | b = L(a|b) => L(a) U L(b) = {a} U {b} = {a, b}  
    a|b|c|d = L(a|b|c|d) => L(a) U L(b) U L(c) U L(d) = {a} U {b} U {c} U {d} = {a, b, c, d}

* Concatenación: La concatenación de dos expresiones regulares **r** y **s** se escribe **rs** y corresponde a cualquier cadena que sea resultado de dos cadenas, la primera cadena corresponda con **r** y la segunda con **s**.

    L(rs) = L(r)L(s)    
    (a|b)c => L(a|b)L(c) => {a,b}{c} = {ac, bc}

* Repetición: Llamada en ocasiones cerradura de Kleene, se escribe como **r***
donde **r** es una expresión regular.

    L(r*) = L(r)*   
    L((a|bb)\*) = L((a|bb))* = {a, bb}*         
    
    Conjunto de cadenas => S    
    S* = {λ} U S U SS U SSS ...     
    
    Ejemplo     
    {a,bb}* = {λ, a, bb, aa, abb, bba, bbbb, ... }

### 4. Precedencia de operaciones

Hace referencia a que operación se debe resolver primero, similar a las matemáticas cuando se resuelve primero el producto y luego la adición.

repetición > concatenación > selección

1. a|bc* => a|b{λ, c, cc, ccc, ... } => a|{b}{λ, c, cc, ccc, ... } => a|{b, bc, bcc, bccc, ... } => {a} U {b, bc, bcc, bccc, ... } = {a, b, bc, bcc, bccc, ... }
2. ab|c*d => ab|{λ, c, cc, ccc, ... }d => ab|{λ, c, cc, ccc, ... }{d} => ab|{d, cd, ccd, cccd, ... } => {a}{b}|{d, cd, ccd, cccd, ... } = {ab}|{d, cd, ccd, cccd, ... } = {ab} U {d, cd, ccd, cccd, ... } = {ab, d, cd, ccd, cccd, ... } 

### 5. Nombres para expresiones regulares

A veces es necesario colocarle un nombre a la expresión regular cuando este es muy extensa.

digito = 0|1|2|3|4|5|6|7|8|9

### 6. Metacaracteres

#### 6.1 Una o más repeticiones

Garantiza que aparecerá al menos un caracter que coincida con una expresión regular. Utilizamos el metacaracter + (r<sup>+</sup>)

digito<sup>+</sup> = {0, 1, 2, 3, 4, 5, ... 11, 12, 13, ..., 50, 51, ...}

***Es similar a **r\*** , pero r+ NO contiene a la cadena vacía (λ), es por eso que al menos se mostrara un caracter.***

#### 6.2 Cualquier caracter

Representa cualquier caracter, letra o digito. Se representa con el punto (.).

#### 6.3 Intervalo de caracteres

a|b|c|d| ... |z = [a-z]

#### 6.4 Cualquier caracter que no este en el conjunto dado

Que no sea "a" => ~a = [^a]   
Que no sea "a,b y c" => ~a, ~b y ~c = [^abc]

#### 6.5 Opcional

Para indicar que el caracter puede aparecer o no. Se representa con "?".    

entero = digito | +digito | -digito

Es lo mismo ->  entero = (+|-)?digito      
Aquí el signo + o - puede o no aparecer, es opcional.





    

    










