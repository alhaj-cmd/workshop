import React from 'react';
import peopleicon from '../../images/peopleicon.png'
import "./DestinationCard.css"

const DestinationCard = (props) => {
   // console.log(props);
   const {DetailsData,id,index} = props;
   const {name, icon, seat, seatRate} = DetailsData;


    return (
       <div className="destination-card">
           <img src={icon} alt={name} className="vehicle-icon"/>
           <h2 className="vehicle-name">{name}</h2>
           <h3 className="vehicle-seat"><img src={peopleicon} alt="seat" />{seatRate}</h3>
           <h4 className="vehicle-fare">${seat[index]*seatRate}</h4>
       </div>
    );
};

export default DestinationCard;