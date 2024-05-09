import React from 'react';
import paris from '../asserts/paris.jpg'
import spain from '../asserts/spain.jpg'
import us from '../asserts/us.jpg'

const TopDestinations = () => {
  return (
    <div className="body2">
      <p>Top Selling</p>
      <h1>Top Destinations</h1>
      <div className="tours">
        <div className="places">
          <h2>Paris, France</h2>
          <img src={paris} alt="paris" />
          <br />
          <br />
          <a href="#">Book Now 15% OFF</a>
        </div>
        <div className="places">
          <h2>Spain</h2>
          <img src={spain} alt="spain" />
          <br />
          <br />
          <a href="#">Book Now 20% OFF</a>
        </div>
        <div className="places">
          <h2>United States</h2>
          <img src={us} alt="united-states" />
          <br />
          <br />
          <a href="#">Book Now 25% OFF</a>
        </div>
      </div>
    </div>
  );
};

export default TopDestinations;