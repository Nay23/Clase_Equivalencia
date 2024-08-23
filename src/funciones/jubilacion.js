


export const esJubilado = ( edad, aportes ) =>{
    if (edad >= 0){
        if (edad >= 65 && aportes>=240){
            return true;

        }
        return false;
    }else{
        return 'ERROR';
    }
}

console.log('JESSI',esJubilado(65,240));



// export const esJubilado = ( edad, aportes ) =>{
//     if (edad >= 65 && aportes >= 240) {
//         return 'La persona es jubilada.';
//     } else {
//         return 'La persona no es jubilada.';
//     }
// }
//       //  return 'ERROR';
//  console.log('JESSI',esJubilado(50,240));