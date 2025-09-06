const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  // Company contact information
  companyInfo: {
    name: {
      type: String,
      required: [true, 'Company name is required'],
      trim: true
    },
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String
    },
    phone: {
      type: String,
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Company email is required'],
      trim: true
    },
    website: {
      type: String,
      trim: true
    }
  },
  
  // Social media links
  socialMedia: {
    linkedin: String,
    github: String,
    twitter: String,
    facebook: String,
    instagram: String
  },
  
  // Office hours
  officeHours: {
    monday: String,
    tuesday: String,
    wednesday: String,
    thursday: String,
    friday: String,
    saturday: String,
    sunday: String
  },
  
  // Contact form submissions
  submissions: [{
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true
    },
    phone: {
      type: String,
      trim: true
    },
    subject: {
      type: String,
      required: [true, 'Subject is required'],
      trim: true,
      maxlength: [200, 'Subject cannot exceed 200 characters']
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
      maxlength: [2000, 'Message cannot exceed 2000 characters']
    },
    service: {
      type: String,
      trim: true
    },
    budget: {
      type: String,
      enum: [
        // New FRW ranges
        'under-200k', '200k-400k', '400k-700k', '700k-1000M', '1M+', 'not-sure',
        // Previous USD-style ranges (keep supported to avoid validation errors)
        'under-5k', '5k-10k', '10k-25k', '25k-50k', '50k+'
      ],
      default: 'not-sure'
    },
    timeline: {
      type: String,
      enum: ['asap', '1-2-weeks', '1-2-months', '3-6-months', '6-months+', 'not-sure'],
      default: 'not-sure'
    },
    status: {
      type: String,
      enum: ['new', 'read', 'replied', 'closed'],
      default: 'new'
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  
  isActive: {
    type: Boolean,
    default: true
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
contactSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Contact', contactSchema); 