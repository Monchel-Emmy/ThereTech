import React from 'react';

const ServiceCard = ({ icon, title, description, features, color, image, compact = false }) => {
  return (
    <div className={`service-card service-card-${color} ${compact ? 'service-card-compact' : ''}`}>
      <div className="service-icon">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            style={{ 
              width: '60px', 
              height: '60px', 
              objectFit: 'cover', 
              borderRadius: '8px' 
            }} 
          />
        ) : (
          <i className={icon}></i>
        )}
      </div>
      <div className="service-content">
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{compact ? description?.slice(0, 120) + (description && description.length > 120 ? '…' : '') : description}</p>
        {!compact && features && features.length > 0 && (
          <ul className="service-features">
            {features.map((feature, index) => (
              <li key={index} className="service-feature">
                <i className="fas fa-check"></i>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ServiceCard; 