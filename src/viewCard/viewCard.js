import React from 'react';
import { Link } from 'react-router-dom';
import './viewCard.css';

const viewCard = (props) => {
   // console.log(props)
   const { id, name, icon } = props.view;

    return (
        
       <Link to={`/Destination/${name}`} className="view-card">
           <img src={icon} alt="" className="view-icon"/>
           <h2 className="view-name">{name}</h2>
           <h2 className="view-id">{}</h2>
       </Link>
      
    );
};

export default viewCard;