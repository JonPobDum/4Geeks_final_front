import React from "react";

export const Pomodoro = () => {
    return (
            <div className="container-fluid mt-5 row">
                <h1 className="display-5 text-white text-center mb-5">Pomodoro</h1>
                <img className="col-4 d-none d-sm-block " src="https://media.giphy.com/media/Vh2w7qkzfg7DVcfQmD/giphy.gif" />
                <div className="container-fluid col-6">
                    <p>
                      <a className="btn btn-dark d-block" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Elije un tema
                     </a>
                    </p>
                    <div className="collapse" id="collapseExample">
                    <div className="card card-body mb-3">
                        Puedes elegir el realizar una tarea o un tema de estudio
                    </div>
                    </div>
                    <p>
                        <a className="btn btn-primary d-block" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                            25 Minutos
                        </a>
                    </p>
                    <div className="collapse" id="collapseExample2">
                    <div className="card card-body mb-3">
                        Ya configurado los 25 minutos empieza a correr el tiempo                     
                    </div>
                    </div>
                    <p>
                        <a className="btn btn-danger d-block" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Descanza 5 Minutos
                        </a>
                    </p>
                    <div className="collapse" id="collapseExample3">
                    <div className="card card-body mb-3">
                        Descansa 5 min, esto es esencial para tu próxima ronda                    
                    </div>
                    </div>
                    <p>
                        <a className="btn btn-secondary d-block" data-bs-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Descanza 20 Minutos
                        </a>
                    </p>
                    <div className="collapse" id="collapseExample4">
                    <div className="card card-body mb-3">
                        Cuando hayas echo 4 rondas tomate un descanso mas largo idealmente entre 20 y 30 minutos                   
                    </div>
                    </div>
                    <p>
                        <a className="btn btn-success d-block" data-bs-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Nuevo Ciclo
                        </a>
                    </p>
                    <div className="collapse" id="collapseExample5">
                    <div className="card card-body mb-3">
                        Si aun estas con energías, renueva el pomodoro y comienza un nuevo ciclo                 
                    </div>
                    </div>
                    <button type="button" className="btn btn-primary btn-lg">Comienza ahora!</button>
                </div>
            </div>
    )
};