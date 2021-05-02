import React, { useState } from 'react';
import { useParams } from 'react-router';
//import viewCard from '../../viewCard/viewCard';
import "./Destination.css"
import DetailsData from '../../DetailsData.json'
import DestinationCard from './DestinationCard';


const Destination = () => {
    const [searchVisible,setSearchVisible] = useState(true);
    const[pickFrom, setPicFrom] = useState('Mirpur-1');
    const[PickTo, setPicTo] = useState('Dhanmondi');
    const {id} = useParams();
    const currentView = DetailsData.find(vehicle => vehicle.name == id)
    //importconsole.log(DetailsData,id)
    //console.log(currentView?.seat)

    const handleSearch = () => {
        setSearchVisible(false);
    }

    return (
       <section className="destination">
           <div className="container">
               <div className="d-content">
                   <div className="search-box">
                    {
                        searchVisible && <form onSubmit={handleSearch} className="d-from">
                        <div className="input_type">
                            <label htmlFor="PickFrom">Pick From</label>
                            <input onChange={(e) => setPicFrom(e.target.value)} type="text" placeholder='Mirpur-1' id="PickFrom" />
                        </div>
                        <div className="input_type">
                            <label htmlFor="PickTo">Pick To</label>
                            <input onChange={(e) => setPicTo(e.target.value)} type="text" placeholder='Dhanmondi' id="PickTo" />
                        </div>
                        <input className="btn-primary" type="submit" value="Search"/>
                    </form>
                    }
                    {
                        !searchVisible && <div className="location">
                            <div className="location_area">
                                <h1 className="location_from">{pickFrom}</h1>
                                <h1 className="location_to">{PickTo}</h1>
                               
                           
                            {
                              currentView?.seat?.map((num,index) => <DestinationCard key={num} DetailsData={currentView} index={index}/>)
                            }
                            <button onClick={() => setSearchVisible(true)} className="btn-primary">Back to search</button>
                            </div>
                        </div>
                    }
                   </div>
                   <div className="map_box">
                   <iframe className="map-box" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d82621.9938551221!2d90.31702774107991!3d23.76838309085116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3755c0e96fce29dd%3A0x6ccd9e51aba9e64d!2smirpur-1!3m2!1d23.795603699999997!2d90.3536548!4m5!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sdhanmondi!3m2!1d23.746149499999998!2d90.3742307!5e0!3m2!1sen!2sbd!4v1619542588816!5m2!1sen!2sbd" width="450" height="430" allowFullScreen=""></iframe>
                   </div>
               </div>
           </div>
       </section>
    );
};

export default Destination;