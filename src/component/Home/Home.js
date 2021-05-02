import React from 'react';
import detailsData from '../../DetailsData.json'
import ViewCard from '../../viewCard/viewCard';
import './Home.css';

const Home = () => {
    const details = detailsData;
   // console.log(details)
    return (
       <section className='home' >
          <div className="card-area">
              <div className="card">
                   {
                       details.map(deta => <ViewCard key={deta.id} view={deta} />)
                   }
            </div>
               
           </div>
       </section>
    );
};

export default Home;