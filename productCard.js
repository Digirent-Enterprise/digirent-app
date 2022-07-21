import React from "react";
import StarRatingComponent from 'react-star-rating-component';
import '../Styles/productCard.css';
function Card(props){
    return(
        <div className="card">
            <div className="card-body">
                <img src={props.img} alt = "pictures" className="card__image"/>
                <button className="card__btn"><p>❤</p></button>
                <p className="card__title">{props.title}</p>
                <h3 className="productName">{props.description}</h3>
                <h4 className="price">{props.price}</h4>
                <StarRatingComponent/>
                <p className="card__title2">{props.title2}</p>
            </div>
        </div>
    );
}
export default Card;
