import React from 'react';

const Home = () => {
  return (
    <div className="body">
      <div className="search">
        <input className="sub-search" type="text" placeholder="Search" />
        <button type="submit">Search</button>
      </div>
      <div className="heading">
        <h1>Travel, enjoy and live a new and full life</h1>
        <h2>BEST DESTINATIONS AROUND THE WORLD</h2>
        <br />
        <p>Start exploring now... </p>
        <br />
        <br />
        <a href="#">Learn More</a>
      </div>
    </div>
  );
};

export default Home;