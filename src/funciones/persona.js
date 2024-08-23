
export const esMayorDeEdad = ( edad ) =>{
    if (edad >= 0){
        if (edad >= 18){
            return true;

        }
        return false;
    }else{
        return 'ERROR';
    }
}

console.log('JESSI',esMayorDeEdad(22));