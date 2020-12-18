
import React from 'react';
import PropTypes from 'prop-types';


const PrimeraApp =({saludo,subtitulo='Un subtitulo'}) =>{

// if(!saludo){
//     throw new Error('El Saludo es Necesario');
// }


    return (
        <>
        <h1>{saludo}</h1>
        <p>{subtitulo}</p>
        </>    
    );
    
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

//hacer un props con valor definido por defecto
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;
