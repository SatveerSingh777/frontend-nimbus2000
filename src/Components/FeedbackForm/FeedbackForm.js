// FeedbackForm.jsx
import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    review: 5, // Default to 5
    description: '',
    suggestions: ''
  });
  const [hover, setHover] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingChange = (rating) => {
    setFormData(prev => ({
      ...prev,
      review: rating
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., API call)
    console.log('Form submitted:', formData);
    alert('Thank you for your feedback!');
    setFormData({
      name: '',
      email: '',
      review: 5,
      description: '',
      suggestions: ''
    });
    setHover(0);
  };

  return (
    <section>
      <div className="feedback-container">
        <form className="feedback-form" onSubmit={handleSubmit}>
          <h2>Give Us Your Feedback</h2>
          
          <div className="personal-info-grid">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="review">Review Rating</label>
            <div className="star-rating">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                const isFilled = ratingValue <= (hover || formData.review);
                return (
                  <label key={ratingValue}>
                    <input
                      type="radio"
                      name="review"
                      value={ratingValue}
                      onClick={() => handleRatingChange(ratingValue)}
                      checked={formData.review === ratingValue}
                    />
                    <span
                      className={`star ${isFilled ? 'filled' : 'empty'}`}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(0)}
                    >
                      {isFilled ? '★' : '☆'}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="text-areas-grid">
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                placeholder="Describe your experience..."
              />
            </div>

            <div className="form-group">
              <label htmlFor="suggestions">Suggestions</label>
              <textarea
                id="suggestions"
                name="suggestions"
                value={formData.suggestions}
                onChange={handleChange}
                rows="4"
                placeholder="Any suggestions for improvement?"
              />
            </div>
          </div>

          <button type="submit" className="submit-button">Submit Feedback</button>
        </form>
      </div>
    </section>
  );
};

export default FeedbackForm;