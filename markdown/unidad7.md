## Conjuntos

Para poder transformar un Autómata finito no determinístico(AFN) a un Autómatama finito determinístico(AFD) se necesita un algoritmo, en este caso utilizaremos los conjuntos.

Definiciones: 
* S -> Estado del AFN
* T -> Conjunto de estados de AFN
* a -> Símbolo de entrada

Operaciones: 
* Cerradura-λ(S): Conjunto de estados del AFN alcanzables desde el estado S del AFN unicamente con transiciones λ.
* Cerradura-λ(T): Conjunto de estados del AFN alcanzables desde algun estado S de T unicamente con transiciones λ.
* Mueve(T,a): Conjunto de estados del AFN alcanzables con una unica transición "a" desde algun estado S de T.