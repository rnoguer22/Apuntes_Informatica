// Comentario en linea

var a = 2
if(a) 'Hola'
//Hola

/* Todo esto se considera como false
var a = false
var a = 0
var a = -0
var a = ''
var a = NaN
var a = undefined
*/

var num1 = 10
var num2 = '10'
if (num1 == num2) 'La igualdad doble NO tiene en cuenta el tipo'
//La igualdad doble NO tiene en cuenta el tipo
if (num1 === num2) 'La igualdad triple SI tiene en cuenta el tipo'
//undefined

//Estructura de un condicional en JavaScript
if ('verdad'){
    'Esto se considera True'
}
else{
    'Esto se considera False'
}
//Esto se considera True



var date = new Date();
date.getDate()
//5
date.toString()
//'Sun Feb 05 2023 18:51:11 GMT+0100 (hora estándar de Europa central)'
var array = [1,2,3,'cuatro',date]
array
//(5) [1, 2, 3, 'cuatro', Sun Feb 05 2023 18:51:11 GMT+0100 (hora estándar de Europa central)]
array[0]
//1
array[3]
//'cuatro'
array.length
//5
delete array[3]
array
//(5) [1, 2, 3, empty, Sun Feb 05 2023 18:51:11 GMT+0100 (hora estándar de Europa central)]