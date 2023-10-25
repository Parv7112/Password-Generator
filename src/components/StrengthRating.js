import React from 'react';
import './App.css';

function StrengthRating(props) {
  const ratings = ['Very Weak', 'Weak', 'Fair', 'Strong', 'Very Strong'];

  // Define CSS classes for the horizontal strength bars
  const barClasses = [
    'very-weak-bar',
    'weak-bar',
    'fair-bar',
    'strong-bar',
    'very-strong-bar',
  ];

  const strength = props.strength;

  return (
    <div className="strength">
      Strength: <span id="strength-rating">{ratings[strength]}</span>
      <div className="strength-bars">
        {barClasses.map((barClass, index) => (
          <div
            key={index}
            className={`strength-bar ${strength >= index ? barClass : ''}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default StrengthRating;
