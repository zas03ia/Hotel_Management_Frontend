import React from 'react';
import RefundTimeline from '@components/RefundTimeline'

const PropertyDetails = () => {
  return (
    <div className="container-2">
      {/* Have a Question Section */}
      <div className="section-2">
        <h2>Have a question?</h2>
        <p>
          Get instant answers with AI powered search of property information and reviews.
        </p>
        <div className="search-container">
          <input
            type="text"
            placeholder="🔍 Ask a question"
            className="search-input"
          />
          <button type="submit" className="search-button">
            🔍
          </button>
        </div>
      </div>

      {/* House Rules Section */}
      <div className="oneto2">
        <div className="title">
          <h2 className='text-2xl text-black'>House Rules</h2>
        </div>
        <div className="title-content">
              <div className="flex mb-[20px]">
            {/* First Column (1/4 of the space) */}
            <div className="w-1/2  p-4">
              <p className='text-xs text-gray'>
              Check in after 3:00 PM</p>
              <br />
              <p className='text-xs text-gray'>
              Check out before 11:00 AM</p>
              <br />
              <p className='text-lg text-black'><i className="fa fa-baby mr-[5px]"></i> Children</p>
              <p className='text-xs text-gray'>
              Children allowed: ages 0-17</p><br />
              <p className='text-lg text-black'>
              <i className="fa-solid fa-ban mr-[5px]"></i> Pets</p>
              <p className='text-xs text-gray'>
              No pets allowed</p>
            </div>

            {/* Second Column (3/4 of the space) */}
            <div className="w-1/2  p-4">
              <p className='text-xs text-gray'>
              Minimum age to rent: 25</p>
              <br />
              <br />
              <br />
              <p className='text-lg text-black'><i className="fa-solid fa-calendar-xmark mr-[5px]"></i> Events</p>
              <p className='text-xs text-gray'>
              No events allowed</p>
              <br />
              <p className='text-lg text-black'>
              <i className="fa-solid fa-smoking-ban mt-[5px]"></i> Smoking</p>
              <p className='text-xs text-gray'>
              Smoking is not permitted</p>
            </div>
          </div>
        </div>
      </div>

      {/* Damage and Incidentals Section */}
      <div className="oneto2">
        <div className="title">
          <h2 className='text-2xl text-black'>Damage and Incidentals</h2>
        </div>
        <div className="title-content">
          <p>
            You will be responsible for any damage to the rental property caused
            by you or your party during your stay.
          </p>
        </div>
      </div>

      {/* Cancellation and Refund Section */}
      <div className="oneto2">
        <div className="title">
          <h2 className='text-2xl text-black'>Cancellation</h2>
        </div>
        <div className="title-content">
            <RefundTimeline />
            <div className="flex mt-[20px]">
      {/* First Column (1/4 of the space) */}
      <div className="w-1/4  p-4">
        <p className='text-xs  text-black'>Before</p>
        <p className='text-lg text-black'>Nov 4</p>
      </div>

      {/* Second Column (3/4 of the space) */}
      <div className="w-3/4  p-4">
        <p className='text-black'>Full refund</p>
        <p className='text-xs'>Cancel your reservation before Nov 4 at 11:59 PM, and you'll get a full refund. Times are based on the property's local time.</p>
      </div>
    </div>
    <br />
    <hr className="w-full h-[2px] bg-gray-200 rounded" />

    <br />
    <div className="flex mb-[20px]">
      {/* First Column (1/4 of the space) */}
      <div className="w-1/4  p-4">
        <p className='text-xs text-black'>After</p>
        <p className='text-lg text-black'>Nov 4</p>
      </div>

      {/* Second Column (3/4 of the space) */}
      <div className="w-3/4  p-4">
        <p className='text-black'>No refund</p>
        <p className='text-xs'>After that, you won't get a refund.</p>
      </div>
    </div>
        </div>
      </div>

      {/* Important Information Section */}
      <div className="oneto2">
        <div className="title">
          <h2  className='text-2xl text-black'>Important Information</h2>
        </div>
        <div className="title-content">
          <p>Extra-person charges may apply and vary depending on property policy</p>
          <p>
            Government-issued photo identification and a credit card, debit
            card, or cash deposit may be required at check-in for incidental
            charges
          </p>
          <p>
            Special requests are subject to availability upon check-in and may
            incur additional charges; special requests cannot be guaranteed
          </p>
          <p>Onsite parties or group events are strictly prohibited</p>
          <p>
            Host has indicated there is a carbon monoxide detector on the
            property
          </p>
          <p>Host has indicated there is a smoke detector on the property</p>
          <p>
            Safety features at this property include a fire extinguisher and a
            first aid kit
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
