import React from "react";
import '../Styles/categoryCard.css';
function Card2({img}){
  return(
      <div className="card2">
          <div className="card-body2">
              <img src={img} alt = "pictures"/>
          </div>
      </div>
  );
}
export default Card2;
