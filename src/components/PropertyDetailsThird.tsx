import React from 'react';
import { PropertyProps } from '@/interfaces/hotel';

const PropertyBottomDetails: React.FC<PropertyProps> = ({ hotel }) => {
  return (
    <div className="container-bottom" style={{marginBottom : '100px'}}> 
      {/* Frequently Asked Questions Section */}
      <div className="oneto2">
        <div className="title">
          <h2  className='text-2xl text-black'>Frequently Asked Questions</h2>
        </div>
        <div className="title-content">
          <div className="faq" id="faq">
            {[
              {
                id: "faq1",
                question:
                  "Is Juneau Vacation Home: Stunning View & Beach Access pet-friendly?",
                answer:
                  "Our return policy allows returns within 30 days of purchase with proof of receipt.",
              },
              {
                id: "faq2",
                question:
                  "What time is check-in at Juneau Vacation Home: Stunning View & Beach Access?",
                answer:
                  "Shipping typically takes 5-7 business days for standard delivery.",
              },
              {
                id: "faq3",
                question:
                  "What time is check-out at Juneau Vacation Home: Stunning View & Beach Access?",
                answer:
                  "Yes, we offer international shipping to selected countries.",
              },
              {
                id: "faq4",
                question:
                  "Where is Juneau Vacation Home: Stunning View & Beach Access located?",
                answer:
                  "Yes, we offer international shipping to selected countries.",
              },
            ].map(({ id, question, answer }) => (
              <div className="faq-item" key={id}>
                <input type="checkbox" id={id} />
                <label htmlFor={id}>{question}</label>
                <div className="faq-answer">{answer}</div>
              </div>
            ))}
          </div>
          <a href="#faq" className="link" id="see-more"></a>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="oneto2">
        <div className="title">
          <div className="score-bottom">
            <h1>9.8/10</h1>
            <h3  className='text-2xl text-black'>Exceptional</h3>
            <p>
              24 reviews <i className="fa fa-info-circle"></i>
            </p>
            <p style={{ fontSize: "x-small" }}>
              Reviews are verified unless labeled otherwise.
            </p>
          </div>
        </div>
        <div className="title-content">
          <h2  className='text-2xl text-black'>Recent Reviews</h2>
          <div className="reviews-bottom">
            {[
              {
                rating: "10/10 Excellent",
                text: "A very cozy home for the two of us in a quiet area NW of town. Beautiful water view. We enjoyed the art, read up in it and visited the...",
                author: "Kyle G.",
                date: "Sep 25, 2024",
              },
              {
                rating: "10/10 Excellent",
                text: "The cottage was just as the pictures and description stated. Nice quiet area and great view of the cove.",
                author: "Cindy B.",
                date: "Sep 23, 2024",
              },
            ].map(({ rating, text, author, date }, index) => (
              <div className="review-bottom" key={index}>
                <h3>{rating}</h3>
                <p>{text}</p>
                <a className="link">Read more</a>
                <p>
                  <strong>{author}</strong>
                </p>
                <p>{date}</p>
              </div>
            ))}
          </div>
          <button>See all 24 reviews &#8594;</button>
        </div>
      </div>

      {/* About the Host Section */}
      <div className="oneto2">
        <div className="title">
          <h2  className='text-2xl text-black'>About the Host</h2>
        </div>
        <div className="title-content">
          <p style={{ fontWeight: "bold", marginTop: "5px" }}>{hotel.hostInformation}</p>
          <div style={{marginTop : '40px'}}><p style={{ fontWeight: "bold" }}>Languages:</p>
          <p style={{ fontSize: "x-small" }}>
            English, French, German, Spanish
          </p></div>
          
        </div>
      </div>

      {/* Contact Host Section */}
      <div className="oneto2">
        <div className="title">
          <h2  className='text-2xl text-black'>Send a Message</h2>
        </div>
        <div className="title-content">
          <button>Contact Host</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyBottomDetails;
