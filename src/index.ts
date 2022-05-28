/*Desarrolle un algoritmo que permita cargar alumnos y sus notas en los tres trimestres
• Se debe permitir obtener el promedio anual (es decir, de sus tres notas) de un alumno (ingresado por el usuario)
• Luego de resolverlo, pensar en aprovechar métodos y discutir como representar la información
*/


// declaro una Funciones para solicitar la cantidad de alumnos (hasta 10 alumnos, es la versión no paga jajja) y validar las nota
function noteStudent (position:number):number
  {
    let itsnotnum: boolean = true; // lo pongo en true para obligar a entre en el chequeo 
    let num: number=0;
    while (itsnotnum) 
      {
       if (position<0) {
          num = Number(prompt("Ingrese la cantidad de Alumnos: "));
          } else {
              num = Number(prompt("Ingrese la nota del Examen (de 0 a 10) " + position));
              }
      if (isNaN(num) || num % 1 || num<=10){
                alert("Solos se adminten un números entero entre el rango 0 y 10");
                } else {
                  itsnotnum = false;
                  return num;
                  }
      }
  }

  function nameStudent (countnames:number):string[]
  {
    let names: string[] = nuw Array (countnames);
    for (let i:number=0;i<countnames;i++)
      
    return names;
  }
  //Empiezo con mi programa main
console.clear();
let longvector: number = noteStudent(-1);
let countstudent:number[] = new Array (longvector);
let note1:number[]= new Array (longvector);
let note2:number[]= new Array (longvector);
let note3:number[]= new Array (longvector);



for (let i: number = 0; i <longvector; i++)                                //Cargo los datos y comparo
  {
    vector[i]=isnumber(i+1);
    if (vector[i]===0) 
    {
      countzero++;
    } else {
            if (vector[i]>0)
              {
               countpos++;   
              } else {
                      countneg++;
                      }

            }
  }
console.log("Hay: " + countpos + " números positivos, " + countneg + " números negativos y " + countzero + " Ceros");
