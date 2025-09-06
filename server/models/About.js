const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: [true, 'Company name is required'],
    trim: true
  },
  tagline: {
    type: String,
    required: [true, 'Tagline is required'],
    trim: true,
    maxlength: [200, 'Tagline cannot exceed 200 characters']
  },
  mainDescription: {
    type: String,
    required: [true, 'Main description is required'],
    trim: true,
    maxlength: [2000, 'Description cannot exceed 2000 characters']
  },
  mission: {
    type: String,
    required: [true, 'Mission is required'],
    trim: true,
    maxlength: [500, 'Mission cannot exceed 500 characters']
  },
  vision: {
    type: String,
    required: [true, 'Vision is required'],
    trim: true,
    maxlength: [500, 'Vision cannot exceed 500 characters']
  },
  values: [{
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: [300, 'Value description cannot exceed 300 characters']
    },
    icon: {
      type: String,
      default: 'fas fa-star'
    }
  }],
  team: [{
    name: {
      type: String,
      required: true,
      trim: true
    },
    role: {
      type: String,
      required: true,
      trim: true
    },
    bio: {
      type: String,
      trim: true,
      maxlength: [300, 'Bio cannot exceed 300 characters']
    },
    image: {
      type: String,
      default: 'default-avatar.jpg'
    },
    socialLinks: {
      linkedin: String,
      github: String,
      twitter: String,
      email: String
    }
  }],
  stats: {
    projectsCompleted: {
      type: Number,
      default: 0
    },
    clientsServed: {
      type: Number,
      default: 0
    },
    yearsExperience: {
      type: Number,
      default: 0
    },
    teamMembers: {
      type: Number,
      default: 0
    }
  },
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
aboutSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('About', aboutSchema); 