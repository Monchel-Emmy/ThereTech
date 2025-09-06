const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// GET contact information
router.get('/', async (req, res) => {
	try {
		let contact = await Contact.findOne({ isActive: true });
		
		if (!contact) {
			// Return default data if none exists
			contact = {
				companyInfo: {
					name: 'There-Tech',
					address: {
						street: '123 Tech Street',
						city: 'Tech City',
						state: 'TC',
						zipCode: '12345',
						country: 'USA'
					},
					phone: '+1 (555) 123-4567',
					email: 'info@there-tech.com',
					website: 'https://there-tech.com'
				},
				socialMedia: {
					linkedin: 'https://linkedin.com/company/there-tech',
					github: 'https://github.com/there-tech',
					twitter: 'https://twitter.com/there-tech'
				},
				officeHours: {
					monday: '9:00 AM - 6:00 PM',
					tuesday: '9:00 AM - 6:00 PM',
					wednesday: '9:00 AM - 6:00 PM',
					thursday: '9:00 AM - 6:00 PM',
					friday: '9:00 AM - 6:00 PM',
					saturday: '10:00 AM - 4:00 PM',
					sunday: 'Closed'
				},
				submissions: []
			};
		}
		
		res.json({ contact });
	} catch (error) {
		console.error('Error fetching contact information:', error);
		res.status(500).json({ error: 'Failed to fetch contact information' });
	}
});

// POST submit contact form
router.post('/submit', async (req, res) => {
	try {
		let contact = await Contact.findOne({ isActive: true });
		
		if (!contact) {
			// Create new contact document if none exists
			contact = new Contact({
				companyInfo: {
					name: 'There-Tech',
					email: 'info@there-tech.com'
				}
			});
		}
		
		// Validate and normalize payload
		const allowedBudgets = ['under-200k', '200k-400k', '400k-700k', '700k-1000M', '1M+', 'not-sure'];
		const allowedTimelines = ['asap', '1-2-weeks', '1-2-months', '3-6-months', '6-months+', 'not-sure'];
		const {
			name,
			email,
			subject,
			message,
			phone,
			service,
			budget,
			timeline
		} = req.body || {};

		// Debug: log incoming payload
		console.log('Incoming submission payload:', req.body);
		
		const missing = [];
		if (!name) missing.push('name');
		if (!email) missing.push('email');
		if (!subject) missing.push('subject');
		if (!message) missing.push('message');
		if (missing.length) {
			return res.status(400).json({ error: 'Validation failed', missing });
		}
		
		const budgetInput = (budget ?? '').toString().trim();
		const timelineInput = (timeline ?? '').toString().trim();
		const normalizedBudget = allowedBudgets.includes(budgetInput) ? budgetInput : 'not-sure';
		const normalizedTimeline = allowedTimelines.includes(timelineInput) ? timelineInput : 'not-sure';

		console.log('Normalized values:', { normalizedBudget, normalizedTimeline });
		
		const submission = {
			name: name.toString().trim(),
			email: email.toString().trim(),
			subject: subject.toString().trim(),
			message: message.toString().trim(),
			phone: (phone ?? '').toString().trim(),
			service: (service ?? '').toString().trim(),
			budget: normalizedBudget,
			timeline: normalizedTimeline
		};
		
		// Add new submission
		contact.submissions.push(submission);
		await contact.save();
		
		res.status(201).json({ 
			message: 'Contact form submitted successfully',
			submission: contact.submissions[contact.submissions.length - 1]
		});
	} catch (error) {
		console.error('Error submitting contact form:', error);
		res.status(400).json({ error: 'Failed to submit contact form' });
	}
});

// GET all contact form submissions (admin only)
router.get('/submissions', async (req, res) => {
	try {
		const contact = await Contact.findOne({ isActive: true });
		if (!contact) {
			return res.json({ submissions: [] });
		}
		
		const { status, page = 1, limit = 20 } = req.query;
		let submissions = contact.submissions;
		
		// Filter by status if provided
		if (status) {
			submissions = submissions.filter(sub => sub.status === status);
		}
		
		// Pagination
		const total = submissions.length;
		const skip = (parseInt(page) - 1) * parseInt(limit);
		const paginatedSubmissions = submissions
			.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
			.slice(skip, skip + parseInt(limit));
		
		res.json({
			submissions: paginatedSubmissions,
			pagination: {
				current: parseInt(page),
				total: Math.ceil(total / parseInt(limit)),
				totalItems: total
			}
		});
	} catch (error) {
		console.error('Error fetching submissions:', error);
		res.status(500).json({ error: 'Failed to fetch submissions' });
	}
});

// PATCH update submission status
router.patch('/submissions/:id/status', async (req, res) => {
	try {
		const { status } = req.body;
		const contact = await Contact.findOne({ isActive: true });
		
		if (!contact) {
			return res.status(404).json({ error: 'Contact information not found' });
		}
		
		const submission = contact.submissions.id(req.params.id);
		if (!submission) {
			return res.status(404).json({ error: 'Submission not found' });
		}
		
		submission.status = status;
		await contact.save();
		
		res.json({ submission });
	} catch (error) {
		console.error('Error updating submission status:', error);
		res.status(500).json({ error: 'Failed to update submission status' });
	}
});

// POST create/update contact information
router.post('/info', async (req, res) => {
	try {
		let contact = await Contact.findOne({ isActive: true });
		
		if (contact) {
			// Update existing
			Object.assign(contact, req.body);
			await contact.save();
		} else {
			// Create new
			contact = new Contact(req.body);
			await contact.save();
		}
		
		res.status(201).json({ contact });
	} catch (error) {
		console.error('Error creating/updating contact information:', error);
		res.status(400).json({ error: 'Failed to create/update contact information' });
	}
});

module.exports = router; 