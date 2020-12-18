
import React from 'react';
//import React, { Fragment } from 'react';
const PrimeraApp =() =>{
    // return (
    //     <Fragment>
    //     <h1>Hola Mundo OK 2</h1>
    //     <p>Mi Primera aplicacion</p>
    //     </Fragment>    
    // );

    const saludo = "Hola esto es un saludo con variables";
    const num = 123;
    const tf = false; //no imprime booleanos
    const arr = [1,2,3,4]

    const obj = {
         nombre: 'Ramon'
        ,edad: 25
    }

    return (
        <>
        <h1>{saludo} - {num} {tf} {arr}</h1>
        <pre>{JSON.stringify(obj,null,3) /*para imprimir objectos*/}</pre> 
        <p>Mi Primera aplicacion</p>
        </>    
    );
    
}

export default PrimeraApp;
