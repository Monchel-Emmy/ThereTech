const express = require('express');
const router = express.Router();
const About = require('../models/About');

// GET about information
router.get('/', async (req, res) => {
  try {
    let about = await About.findOne({ isActive: true });
    
    if (!about) {
      // Return default data if none exists
      about = {
        companyName: 'There-Tech',
        tagline: 'Innovating Tomorrow, Today',
        mainDescription: 'We are a technology company focused on creating innovative solutions for businesses and individuals.',
        mission: 'To empower businesses and individuals with cutting-edge technology solutions.',
        vision: 'To be the leading technology partner for innovative businesses worldwide.',
        values: [],
        team: [],
        stats: {
          projectsCompleted: 0,
          clientsServed: 0,
          yearsExperience: 0,
          teamMembers: 0
        }
      };
    }
    
    res.json({ about });
  } catch (error) {
    console.error('Error fetching about information:', error);
    res.status(500).json({ error: 'Failed to fetch about information' });
  }
});

// POST create/update about information
router.post('/', async (req, res) => {
  try {
    console.log('About POST request received:', req.body);
    
    // Check if about info already exists
    let about = await About.findOne({ isActive: true });
    
    if (about) {
      // Update existing
      console.log('Updating existing about record');
      Object.assign(about, req.body);
      await about.save();
      console.log('About record updated successfully');
    } else {
      // Create new
      console.log('Creating new about record');
      about = new About(req.body);
      await about.save();
      console.log('About record created successfully');
    }
    
    console.log('Final about data:', about);
    res.status(201).json({ about });
  } catch (error) {
    console.error('Error creating/updating about information:', error);
    res.status(400).json({ error: 'Failed to create/update about information' });
  }
});

// PUT update about information
router.put('/:id', async (req, res) => {
  try {
    const about = await About.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!about) {
      return res.status(404).json({ error: 'About information not found' });
    }
    res.json({ about });
  } catch (error) {
    console.error('Error updating about information:', error);
    res.status(400).json({ error: 'Failed to update about information' });
  }
});

module.exports = router; 