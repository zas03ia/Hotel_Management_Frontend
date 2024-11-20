// components/PropertyDetails.js

import React from 'react';
import {PropertyProps} from '@interfaces/hotel'

const PropertyDetails: React.FC<PropertyProps> = ({ hotel }) => {
  return (
    <div className="container-images" id="first-detail">
      <div className="property-details">
        {/* Amenities Section */}
        <section className="amenities">
          <h1>Rooms & beds</h1>
          <br />
          <h3>{hotel.bedroomCount} bedrooms (sleeps 4)</h3>
          <br />
          <div className="amenity" style={{ fontWeight: 550 }}>Bedroom 1</div>
          <div className="amenity" style={{ fontWeight: 550 }}>Bedroom 2</div>
          <div className="amenity"><i>&#9743;</i></div>
          <div className="amenity"><i>&#9743;</i></div>
          <div className="amenity" style={{ fontSize: 'small' }}>1 Queen bed</div>
          <div className="amenity" style={{ fontSize: 'small' }}>1 Twin Bed</div>
        </section>
        <hr />
        <br />
        <h3>{hotel.bathroomCount} bathrooms</h3>
        <p style={{ fontSize: 'small', fontWeight: 550 }}>Full bathroom</p>
        <br />
        <hr />
        <h1>Spaces</h1>
        <div className="amenity" style={{ fontSize: 'small' }}><i>&#9743;</i> Deck or patio</div>
        <div className="amenity" style={{ fontSize: 'small' }}><i>&#9743;</i> Kitchen</div>
        <div className="amenity" style={{ fontSize: 'small' }}><i>&#9743;</i> Balcony</div>
        <div className="amenity" style={{ fontSize: 'small' }}><i>&#9743;</i> Garden</div>
        <a className="link" href="#">See all rooms and beds details</a>
        <div className="property-container">
          {/* Property Description */}
          <div className="section-title">About this property</div>
          <div className="section-content">
            <p><strong>Juneau Vacation Home: Stunning View + Beach Access</strong></p>
            <p>Escape to the mountains and experience the great outdoors at this lovely Juneau vacation rental! Perched on the shore of Lena Cove, this 2-bedroom, 1-bath home is the perfect getaway for those looking to enjoy a relaxing retreat surrounded by nature. Spend your days fishing for King Salmon, exploring Lena Beach, and rock coastline, or hiking the nearby trails. After your outdoor adventure, kick back on the private deck and admire the breathtaking panoramic views!</p>
          </div>
          {/* Property Details */}
          <div className="see-limited">
            <div className="limited" id="limited">
              <div className="text-property-details">
                <div className="property-header">-- THE PROPERTY --</div>
                <ul className="location-list">
                  <li className="list-item">CBJ#1000DA | 1153 Sq Ft | 2 Private Decks | Lena Cove & Mountain Views | 2 Bicycles Provided</li>
                  <li className="list-item">Bedroom 1: Queen Bed, Full Floor Mattress | Bedroom 2: Extra Long Twin Bed</li>
                  <li className="list-item">HOME HIGHLIGHTS: Flat-screen TV, dining table, washer/dryer</li>
                  <li className="list-item">KITCHEN: Fridge, stove, coffee maker, microwave, cooking basics, toaster, dishware/flatware, trash bags/paper towels</li>
                  <li className="list-item">GENERAL: Free WiFi, linens/towels, keyless entry, hair dryer, ceiling fans</li>
                  <li className="list-item">FAQ: No A/C, stairs required for access</li>
                  <li className="list-item">PARKING: Driveway (2 vehicles)</li>
                </ul>
              </div>
              {/* Location Details */}
              <div className="location-details">
                <div className="property-header">-- THE LOCATION --</div>
                <ul className="location-list">
                  <li className="list-item">OUTDOOR DESTINATIONS: Lena Cove (on-site), Lena Beach Recreation Area (0.5 miles), Glacier Gardens Rainforest Adventure (10 miles)</li>
                  <li className="list-item">NEARBY ATTRACTIONS: Last Chance Mining Museum (8 miles), AJ Mine Gastineau Mill (8.5 miles)</li>
                  <li className="list-item">AIRPORT: Juneau International Airport (9 miles)</li>
                </ul>
              </div>
              {/* Rest Easy Section */}
              <div className="section-content">
                <div className="property-header">-- REST EASY WITH US --</div>
                <p>Evolve makes it easy to find and book properties you'll never want to leave. You can relax knowing that our properties will always be ready for you and that we'll answer the phone 24/7.</p>
              </div>
              {/* Policies */}
              <div className="policies">
                <div className="property-header">-- POLICIES --</div>
                <ul className="policy-list">
                  <li>No smoking</li>
                  <li>No pets allowed</li>
                  <li>No events, parties, or large gatherings</li>
                  <li>Must be at least 25 years old to book</li>
                </ul>
              </div>
              <br />
              <div><strong>Property manager</strong></div>
              <div><i className="fa fa-car" style={{ fontSize: '60px' }}></i></div>
              <div style={{ fontSize: 'small' }}>Evolve</div>
              <br />
              {/* Languages */}
              <p style={{ fontWeight: 'bold' }}>Languages</p>
              <p style={{ fontSize: 'small' }}>English, French, German, Spanish</p>
            </div>
            <a href="#limited" className="link"></a>
          </div>
          {/* Amenities */}
          <div className="oneto2" id="amenities">
            <div className="title">
              <h2>Amenities</h2>
            </div>
            <div className="title-content">
              <section className="amenities">
                {hotel.amenities.map((amenity, index) => (
                <div key={index} className="amenity"><i>&#9743;</i> amenity</div>
                ))}
              </section>
              <a className="link" href="#">See all 34 amenities</a>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing-details"></div>
    </div>
  );
};

export default PropertyDetails;
