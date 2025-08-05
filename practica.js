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

edad = 36

36
if (edad>18) {

    aceptado = true;
}
true
aceptado 
true

if (edad >=18){
    aceptado = true
}
true

if (edad >=18){
    aceptado = true;
}else {
    aceptado=false;
}

true
aceptado
true

edad = 16 
if (edad >=18){
    aceptado = true;
}else {
    aceptado=false;

16

if (edad >=18){
    aceptado = true;
}else {
    aceptado=false;
}
false

/*edad 36, ticket es verdadero, si la edad es igual o mayor de 18 es
 aceptado y si además tiene ticket, también es aceptado*/
edad
16
edad= 36
36
ticket = true
true
if (edad>=18 && /*ademas*/ ticket == true) {
    aceptado = true;
}else {
    aceptado = false;
}
true


/*edad 36, ticket es verdadero, si la edad es igual o mayor 
de 18 es aceptado y si además tiene ticket, también es aceptado*/

ticket = false; 
false
if (edad>=18 &&  ticket == true) {
    aceptado = true
}else {
    aceptado = false
}
false
edad = 16
16
ticket= true
true
acompañado = true 
true
if (ticket==true && /*y*/ (edad>=18 ||/*ó*/ acompañado ==true)) {
    aceptado=true
}else {
    aceptado=false
}
true

/*CONDICIONES SIMPLE, SIMPLE CON AND O SIMPLE CON OR*/
if (x>y) then
if (x>y and a>b) then
if (x>y or a>b) then

/*BUCLES, NOS PERMITE ITERAR UNA PORCIÓN DE CÓDIGO*/
/*CASTIGO REPITIENDO LA MISMA FRASE:)*/
undefined
MIENTRAS PASE UNA CONDICION, ME EJECUTAS ESTA CONDICIÓN

for (i=1;i<5;i++) then

for (edad in edades)then

/*CoN FOR 1º HAY QUE DECIRLE DONDE EMPIEZA*/

for (i=1;i<5;i++) {
    console.log(i) /*para imprimir un valor*/
}
VM679:2 1
VM679:2 2
VM679:2 3
VM679:2 4

/*i es igual a 1 ¿i es menor de 5? además incrementame 1*/

for (i=1;i<5;i++) {
    console.log(i +": No volveré hablar en clase"); (i + /*concatename el numero con el string*/)
}
VM824:2 1: No volveré hablar en clase
VM824:2 2: No volveré hablar en clase
VM824:2 3: No volveré hablar en clase
VM824:2 4: No volveré hablar en clase

/*jugar con los arrays*/
/*si tengo un array muy grande, nos permitiria con este bucle, me 
permitiria mostrar todas las marcas que tenga en el documento.*/

marcas=["bmw","audi","Seat","Volvo"];
(4) ['bmw', 'audi', 'Seat', 'Volvo']
for (indice in marcas){
    console.log(marcas[indice])
}
VM1311:4 bmw
VM1311:4 audi
VM1311:4 Seat
VM1311:4 Volvo

/*FUNCIONES*/
/*Nos sirve para crear trozos de código que tienen una función muy concreta
y poder ser reutilizada cuantas veces deseemos.*/

function sumar (a,b) {
    return a+b
}
function restar (a,b){
    return a-b;
}
x=sumar (3,6);
y=restar(6,3);
