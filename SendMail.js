function enviarMail(enviado) {

  // Obtencion de datos

  let respuestaCompleta=enviado.response
  let respuestas=respuestaCompleta.getItemResponses()

  // Variables

  let nombre=respuestas[0].getResponse(); // Nombre 
  let correo=respuestas[1].getResponse(); // Correo 
  let cliente=respuestas[2].getResponse(); // Cliente
  let redes1=respuestas[3].getResponse(); // Que tipo de servicios utilizaran en AWS?
  let redes2=respuestas[4].getResponse(); // Que tipo de restricción de trafico necesitan?
  let redes3=respuestas[5].getResponse(); // Necesitan una conexión hacia alguna red privada del cliente ?
  var undefined;
  //let microservicios1=respuestas[6].getResponse();// Los microservicios requieren ser instalados en un servidor EC2 o servicios serverless AWS?
  //let serverless1=respuestas[7].getResponse(); // Selecciona una opción correspondiente a los microservicios ?  

  // REDES

  switch (redes1){
    case "Solamente servicios Regionales":
      redes1="No necesitas VPC"
      break;
    case "Solamente servicios en una VPC":
      redes1="Necesitas VPC"
      break;
    case "Ambos":
      redes1=""
      break;
    case undefined:
      redes1=""
  }

  switch (redes2){
    case "Todas las redes tienen que tener la misma restricción":
      redes2="La VPC solamente requiere un ACL asociado a las subredes"
      break;
    case "Se necesita restricciones especificas para cada red":
      redes2="Es necesario que la VPC contenga un ACL por cada subred generada"
      break;
    case undefined:
      redes2=""
  }

  switch (redes3){
    case "SI":
      redes3="Agregar una conexion VPN entre la VPC y el centro de datos del cliente, se recomienta utilizar el servicio AWS VPN Site to Site"
      break;
    case "NO":
      redes3=""
      break;
    case undefined:
      redes3=""
  }

  // MICROSERVICIOS
 /*
  if (microservicios1 != undefined){
  switch (microservicios1){
    case "Serverless":
      microservicios1="Arquitectura completamente basada en servicios serverless"
      break;
    case "EC2":
      microservicios1="Arquitectura completamente basada en servicios de computo"
      break;
    case "Ambos":
      microservicios1="Arquitectura hibrida"
  }}
  else{
    	microservicios1="";
  } 

  // MICROSERVICIOS -- SERVERLESS

  if (serverless1 != undefined){
  switch (serverless1){
    case "1.-Timedout mayor a 15 Minutos  2.-El microservicio corre en una imagen Docker  3.-El microservicio necesita una memoria mayor a 10 GB 4.-Felixibilidad para administrar de manera      manual o automática (ECS)":
      serverless1="Se recomiendan servicios en contenedores ECS"
      break;
    case "1.-Microservicios bajo demanda  2.-No requieren administración manual constante (Lambda)":
      serverless1="Se recomiendan servicios en lambdas"
      break;
    case "Ambos":
      serverless1="Se recomientan servicios hibridos, lambdas y ecs"
  }}
  else{
    	serverless1="";
  }*/

  
  let mensaje=""+redes1+" "+redes2+" "+redes3+""

  GmailApp.sendEmail(correo,"Propuesta", mensaje)
}
