// ejercicio día de la semana
// creamos variable para almacenar el dia a la semana
let dia = prompt("Ingresa un día a la semama");
// convertir lo que ecriba el usuario en mayuscula
dia = dia.toLowerCase();
//validamos el dia si es a la semana o fin de semana
if (dia == "lunes"|| dia == "martes" || dia== "miercoles" || dia== "miércoles" || dia== "jueves" || dia== "viernes") {
    alert("Es un dia entre semana");
} else {
    if (dia == "sabado" || dia == "sábado" || dia == "domingo") {
    alert("Es un fin de semana") ;  
    } else {
     alert("Por favor ingresar un día de la semana");   
    }
   
}


/**
 * 1- Que pasa si no escriben nada
 * 2- que pasa si usan mayusculas
 * 3- si escribe otra cosa que no sea lo solicitado
 * 4-tildes
 */