import React from "react";

export const Todo_list = () => {
    return (
        <div className="row bg-light mt-5 mx-3">
            <div className="container-fluid row">
                <h1 className="display-5 mt-5 mb-5">To Do list</h1>
                <p className="col-6">Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito.</p>
                <img className="col-6 mb-5 d-none d-sm-block" src="https://user-images.githubusercontent.com/25906896/45767595-35985e00-bc00-11e8-87e0-553c80524c13.gif" />
            </div>
        </div>
    )
};