import React from react;
import ReactDOM from 'react-dom';
import './css/index.css';

function Card (props) {
    return ( 
<div className="tarjetas"> 
  <div className="usuario1">
    <img src="../img/warren-wong-VVEwJJRRHgk-unsplash.jpg" alt= "Rodrigo Araya"  class="img-fluid rounded-circle mx-auto d-block" width="200px"></img>
    <h5 className="card-title"><strong>Rodrigo Araya</strong></h5>
    <p className="card-text">"Quis hendrerit dolor magna eget est. Sociis natoque penatibus et magnis dis parturient montes."</p>
  </div>
  <div className="usuario2">
    <img src="../img/christopher-campbell-rDEOVtE7vOs-unsplash.jpg" alt="Laura Figueroa"  class="img-fluid rounded-circle mx-auto d-block" width="200px"></img>
    <h5 className="card-title"><strong>Laura Figueroa</strong></h5>
    <p>Quis hendrerit dolor magna eget est. Sociis natoque penatibus et magnis dis parturient montes.</p>
  </div>
  <div className="usuario3">
    <img src="../img/edward-cisneros-_H6wpor9mjs-unsplash.jpg" alt="Cecilia Sanz"  class="img-fluid rounded-circle mx-auto d-block" width="200px"></img>
    <h5 className="card-title"><strong>Cecilia Sanz</strong></h5>
    <p>Quis hendrerit dolor magna eget est. Sociis natoque penatibus et magnis dis parturient montes.</p>
  </div>
  <div className="usuario4">
    <img src="../img/harps-joseph-tAvpDE7fXgY-unsplash.jpg" alt="Daniel Ortiz"  class="img-fluid rounded-circle mx-auto d-block" width="200px"></img>
    <h5 className="card-title"><strong>Daniel Ortiz</strong></h5>
    <p>Quis hendrerit dolor magna eget est. Sociis natoque penatibus et magnis dis parturient montes.</p>
  </div>
</div>
    );
}
export default Card;
