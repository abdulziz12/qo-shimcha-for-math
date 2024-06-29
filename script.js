let son = +prompt("birinchi son kiritig")

let ikkison = +prompt("ikkinchi son kiriting")

let bolish = prompt(`Amalni tanglang:
    1.qoshish
    2.Ayrish
    3.kopaytirish
    4.bolish
    amalni tanglang:1, 2, 3, 4,;`)
 if (bolish == 1) {
  alert(`${son}+${ikkison} = ${son+ikkison}`);
 }  
 
 if (bolish == 2) {
   alert(`${son}-${ikkison} = ${son-ikkison}`);
  }  

  if (bolish == 3) {
   alert(`${son}*${ikkison} = ${son*ikkison}`);
  }  


  if (bolish == 4) {
   alert(`${son}/${ikkison} = ${son/ikkison}`);
  }  