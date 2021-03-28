import React from 'react'
import {Link } from 'react-router-dom'

function Carditem(props) {
    return (
       <>
       <li className="cards_items">
         <Link className="cards__items__link" to="{props.path}">
             <figure className="cards__item__pic-wrap" data-category={props.label}>
                 <img src={props.src} alt="Travel image" 
                 className="cards__item__img"/>
             </figure>
             <div className="cards__item__info">
                 <h5 className="cards_item_text">{props.text}</h5>
             </div>


         </Link>
       </li>
       </>
    )
}

export default Carditem
