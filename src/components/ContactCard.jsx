import React from 'react';

const ContactCard = ({ contactData }) => {
  if (!contactData) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-50">
        <div className="contact-info">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h3>
          <p className="text-gray-600 mb-6">Ready to level up your business or project? Let's work together!</p>
          <p className="text-blue-500">Loading contact information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-50 h-full">
      <div className="contact-info">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h3>
        <p className="text-gray-600 mb-8 text-lg">Ready to level up your business or project? Let's work together!</p>
        
        <div className="space-y-6 mb-8">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <i className="fas fa-envelope text-blue-600 text-lg"></i>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
              <a href={`mailto:${contactData.companyInfo.email}`} className="text-blue-600 hover:text-blue-700 transition-colors">
                {contactData.companyInfo.email}
              </a>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <i className="fas fa-phone text-blue-600 text-lg"></i>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
              <a href={`tel:${contactData.companyInfo.phone}`} className="text-blue-600 hover:text-blue-700 transition-colors">
                {contactData.companyInfo.phone}
              </a>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <i className="fas fa-map-marker-alt text-blue-600 text-lg"></i>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
              <p className="text-gray-600">
                {contactData.companyInfo.address.street}<br />
                {contactData.companyInfo.address.city}, {contactData.companyInfo.address.state} {contactData.companyInfo.address.zipCode}<br />
                {contactData.companyInfo.address.country}
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <i className="fas fa-clock text-blue-600 text-lg"></i>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Office Hours</h4>
              <div className="text-gray-600 space-y-1">
                <p className="flex justify-between"><span className="font-medium">Mon-Fri:</span> <span>{contactData.officeHours.monday}</span></p>
                <p className="flex justify-between"><span className="font-medium">Saturday:</span> <span>{contactData.officeHours.saturday}</span></p>
                <p className="flex justify-between"><span className="font-medium">Sunday:</span> <span>{contactData.officeHours.sunday}</span></p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-6">
          <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
          <div className="flex space-x-3">
            {contactData.socialMedia.linkedin && (
              <a href={contactData.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="bg-blue-50 text-blue-600 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                <i className="fab fa-linkedin text-lg"></i>
              </a>
            )}
            {contactData.socialMedia.twitter && (
              <a href={contactData.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="bg-blue-50 text-blue-600 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                <i className="fab fa-twitter text-lg"></i>
              </a>
            )}
            {contactData.socialMedia.github && (
              <a href={contactData.socialMedia.github} target="_blank" rel="noopener noreferrer" className="bg-blue-50 text-blue-600 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                <i className="fab fa-github text-lg"></i>
              </a>
            )}
            {contactData.socialMedia.facebook && (
              <a href={contactData.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="bg-blue-50 text-blue-600 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                <i className="fab fa-facebook text-lg"></i>
              </a>
            )}
            {contactData.socialMedia.instagram && (
              <a href={contactData.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="bg-blue-50 text-blue-600 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                <i className="fab fa-instagram text-lg"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;