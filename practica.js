/*CONJUNTO DE DATOS*/

edades = [22,28,34,35,43,52]
edades[2]

macedonia= ["pera", "piña", "Sandia", "cereza"]
macedonia [3]/*posición 3*/


/*OBJETOS*/

coche={
    marca:"seat",
    modelo:"Ibiza",
    color:"blanco",
    Kms: 47000,
    usado: true,
}

coche.modelo
"Ibiza"
coche.color
"blanco"
coche.usado
"true"

/* ARRAY DE OBJETOS*/

coches = [
    {
        marca:"audi",
        modelo: "A3",
        color: "negro",
        Kms:17000,
        usado: true,
    },

    {
        marca:"BMW",
        modelo:"318",
        color: "Blanco",
        Kms: 0,
        usado: false
    }
]

coches[0] Audi, A3, negro, 17000, true
coches [1] BMW, 318, BLANCO, 0, false


/* OPERAR EN JS*/

x = 3+2
5
x=3-2
1
x=3*2
6
x=6/2
3

likes = 300
300
followers = 600
600
/*CUANTOS SEGUIDORES HACEN LIKE*/
engangement = likes/followers
0.5 /*la mitad de los followers han hecho like*/

likes = 300
300
followers = 600
600
engagement = likes/followers
0.5
pregunta un numero es par?
VM339:1 Uncaught SyntaxError: Unexpected identifier 'un'Understand this error
resto = 4%2
0
resto= 4%3
1
resto es = lo que sobra de la división cuando no es perfecta que no son par (se suele usar para paginar. Imprimes 1000 paginas= )
VM754:1 Uncaught SyntaxError: Unexpected identifier 'es'Understand this error
likes = 30 
30
likes= likes +1
31
likes = likes ++
31
likes
31
likes ++
31
likes ++
32
likes ++
33
likes --
34
likes --
33
likes
32
media = 7.5 
7.5
media ++
7.5
media
8.5
media --
8.5
media 
7.5

/*CONCATENA LAS CADENAS DE TEXTO*/

presentación = "hola" + "grupo""
VM1203:1 Uncaught SyntaxError: Invalid or unexpected tokenUnderstand this error
presentacion = "hola" + "grupo"
'holagrupo'
presentacion
'holagrupo'
x="3" + "2"
'32'
x= "a" + "b"
'ab'
concatena los string (cadenas de texto) 

/* COMPARADORES*/

OPERADORES:

== : igual valor 
=== : igual valor y tipo
!= : No igual
!== : No igual valor y tipo
> : Mas grande que
>= : Mas grande o igual que 
< : Menor que
<= : menor o igual que 


5== 10;
false
5<10;
true
5== "5";
true
5=== "5";
false

Notas de una Clase 

/* es un objeto por lo que son dos puntos y no un igual */
notas = {
    pedro : 7.5,
    maria : 8,
 }
{pedro: 7.5, maria: 8}
notas.pedro
7.5
notas.maria
8
notas.pedro == notas.maria
false

VM2693:5 Uncaught SyntaxError: Unexpected token ':'Understand this error
notas = {
    pedro : 7.5,
    maria : 8,
    Sara : 9,
 }
{pedro: 7.5, maria: 8, Sara: 9}

/* las notas son iguales*/
notas.pedro == notas.sara
false
notas.pedro == notas.maria
false
notas.pedro != notas.aria
true
notas.maria > notas.pedro
true
notas.maria< notas.saa
false
notas.pedro >= notas.maria
false
notas.pedro <= notas.maria
true
 
/*CONDICIONALES*/





