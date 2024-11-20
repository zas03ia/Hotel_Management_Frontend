'use client'
import React, { useState, useEffect } from 'react';
import {PropertyProps} from '@interfaces/hotel'

const PropertyBooking: React.FC<PropertyProps> = ({ hotel }) => {
  // State variables for adult count, child count, and pet checkbox
  const [adultCount, setAdultCount] = useState<number>(2);
  const [childCount, setChildCount] = useState<number>(0);
  const [isPetsTraveling, setIsPetsTraveling] = useState<boolean>(false);
  const [isCounterVisible, setCounterVisible] = useState<boolean>(false);

  // Load saved values from localStorage if they exist
  useEffect(() => {
    const savedAdultCount = localStorage.getItem('adultCount');
    const savedChildCount = localStorage.getItem('childCount');

    if (savedAdultCount) setAdultCount(parseInt(savedAdultCount));
    if (savedChildCount) setChildCount(parseInt(savedChildCount));
  }, []);

  // Update localStorage when count changes
  useEffect(() => {
    localStorage.setItem('adultCount', adultCount.toString());
    localStorage.setItem('childCount', childCount.toString());
  }, [adultCount, childCount]);

  // Update traveler count display
  const getTravelerCountText = () => {
    const totalTravelers = adultCount + childCount;
    return `${totalTravelers} traveler${totalTravelers !== 1 ? 's' : ''}`;
  };

  const toggleCounterVisibility = () => {
    setCounterVisible((prev) => !prev);
  };

  const incrementAdult = () => setAdultCount((prev) => prev + 1);
  const decrementAdult = () => setAdultCount((prev) => Math.max(prev - 1, 0));
  const incrementChild = () => setChildCount((prev) => prev + 1);
  const decrementChild = () => setChildCount((prev) => Math.max(prev - 1, 0));

  return (
    <div className="container-images" id='property-booking-container' style={{marginTop : '20px'}}>
      <div className="property-details">
        <header className="property-details-header">
          <p>Entire home</p>
          <h1>{hotel.title}: {hotel.description}</h1>
          <div className="property-details-rating">
            <span className="badge">9.8</span> Exceptional
          </div>
          <a className="link" href="#">
            See all 24 reviews &nbsp; &gt;
          </a>
        </header>

        <section className="property-details-content">
          <div className="detail"><i>&#9743;</i> {hotel.bedroomCount} bedrooms</div>
          <div className="detail"><i>&#9743;</i> {hotel.bathroomCount} bathrooms</div>
          <div className="detail"><i>&#9743;</i> Sleeps 4</div>
          <div className="detail"><i>&#9743;</i> 1165 sq ft</div>
        </section>

        <section className="amenities">
          <h2>Popular amenities</h2>
          <br />
          {hotel.amenities.map((amenity, index) => (
            <div key={index} className="amenity"><i>&#9743;</i> amenity</div>
        ))}
        </section>

        <a className="link" href="#">
          See all property amenities &nbsp; &gt;
        </a>

        <h2>Explore the area</h2>
        <section className="explore-area">
          <div className="map-card">
            <img src="/map.jpg" alt="Map of Juneau, Alaska" />
            <p>Juneau, Alaska</p>
            <a className="link" href="#">
              View on a map
            </a>
          </div>
          <div className="area-list">
            <div className="area"><i>&#9743;</i> Auke Bay</div>
            <div className="area" style={{textAlign:'right', marginRight: '15px'}}>6 min drive</div>
            <div className="area"><i>&#9743;</i> University of Alaska</div>
            <div className="area" style={{textAlign:'right', marginRight: '15px'}}>8 min drive</div>
            <div className="area"><i>&#9743;</i> Mendenhall Golf Course</div>
            <div className="area" style={{textAlign:'right', marginRight: '15px'}}>11 min drive</div>
            <div className="area"><i>&#9743;</i> Juneau, AK (JNU-Juneau Intl)</div>
            <div className="area" style={{textAlign:'right', marginRight: '15px'}}>14 min drive</div>
            <a className="link" href="#">
              See more about this area &nbsp; &gt;
            </a>
          </div>
        </section>
      </div>

      <div className="pricing-details">
        <div className="pricing-details-header">
          <div className="icon" style={{ fontSize: '50px' }}>
            <i className="fa fa-cloud" />
          </div>
          <div className="icon-details">
            <p>Members get our best prices when signed in!</p>
            <button>Sign in</button>
          </div>
        </div>

        <div className="receipt">
          <div className="price">
            ${134} <span style={{ fontSize: '14px', fontWeight: 'normal' }}>per night</span>
          </div>
          <hr />
          <div className="info">
            Non-refundable <i className="fa-solid fa-circle-info" />
          </div>
          <div className="info">
            <i className="fa-regular fa-circle-check" style={{ color: 'rgb(2, 186, 2)' }} />
            Your dates are available
          </div>
          <div className="dates">
            <div className="date-input">
              <div className="icon" style={{ fontSize: '25px' }}>
                <i className="fa fa-calendar" />
              </div>
              <div className="icon-details">
                <label>Start date</label>
                <br />
                <span>Nov 18</span>
              </div>
            </div>
            <div className="date-input">
              <div className="icon" style={{ fontSize: '25px' }}>
                <i className="fa fa-calendar" />
              </div>
              <div className="icon-details">
                <label>End date</label>
                <br />
                <span>Nov 20</span>
              </div>
            </div>
          </div>

          <div className="travelers" id="travelers" onClick={toggleCounterVisibility}>
            <label id="travelers-heading">Travelers</label>
            <span id="traveler-count">{getTravelerCountText()}</span>

            {isCounterVisible && (
              <div className="counter-section">
                <div className="counter">
                  <p className="human-item">Adults</p>
                  <div className="quantity">
                    <button onClick={decrementAdult} className="decrement">−</button>&nbsp; &nbsp;
                    <span id="adult-count">{adultCount}</span>&nbsp; &nbsp;
                    <button onClick={incrementAdult} className="increment">+</button>
                  </div>
                </div>
                <div className="counter">
                  <div className="human-item">
                    <p>Children</p>
                    <p><small>(Ages 0 to 17)</small></p>
                  </div>
                  <div className="quantity">
                    <button onClick={decrementChild} className="decrement">−</button>&nbsp; &nbsp;
                    <span id="child-count">{childCount}</span>&nbsp; &nbsp;
                    <button onClick={incrementChild} className="increment">+</button>
                  </div>
                </div>
              </div>
            )}

            <form id="pets">
              <label>
                <input type="checkbox" onChange={() => setIsPetsTraveling(!isPetsTraveling)} /> &nbsp; I am traveling with pets
              </label>
            </form>
            <br />
            <button id="done" className="book-btn">Done</button>
          </div>

          <div id="total" className="total">
            Total: $543 (Includes fees, not tax) <a href="#" style={{ color: '#007bff' }}>Price details</a>
          </div>
          <button id="booknow" className="book-btn">Book now</button>
          <div className="total" style={{textAlign: 'center'}}>You will not be charged yet</div>
        </div>
        <div className="contact">Contact host</div>
               <div className="property-id">Property # 9838104ha</div>
      </div>
    </div>
  );
};

export default PropertyBooking;
