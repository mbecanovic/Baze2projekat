import React from "react";
import './card.css';
import img1 from '../../assets/mesecpng.png';

const Card = props => {
    return(

        <div className="card text-center">
            <div className="overflow">
                <img src = {img1} alt ="Image1" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Card Title</h4>
                <p className="card-text text-secondry">
                    Tekst koji ce se naknakdno dinamicki prikazivati
                </p>
                <a href="/LogIn" className="btn btn-outline-success">Saznaj vise</a>
            </div>
        </div>

    );
}

export default Card;