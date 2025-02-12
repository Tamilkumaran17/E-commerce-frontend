import React from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popularr';
import Offers from '../Components/Offers/Offers';
import NewCollection from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';


const Shop =()=>{
    return( 
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollection/>
            <NewsLetter/>

        </div>
    )
}

export default Shop