const mongoose = require('mongoose');
const Service = require('./models/Service');
const Project = require('./models/Project');
const About = require('./models/About');
const Contact = require('./models/Contact');

// Sample services data (using the existing structure from seedData.js)
const sampleServices = [
  {
    name: 'IoT Solutions',
    description: 'Design intelligent systems that connect devices, automate tasks, and boost efficiency.',
    icon: 'fas fa-microchip',
    category: 'consulting',
    features: ['Smart Home Systems', 'Industrial IoT', 'Sensor Networks', 'Data Analytics'],
    isActive: true
  },
  {
    name: 'Software Development',
    description: 'From "just an idea" to fully functional apps, we create custom software solutions.',
    icon: 'fas fa-code',
    category: 'web',
    features: ['Web Applications', 'Mobile Apps', 'Custom Software', 'API Development'],
    isActive: true
  },
  {
    name: 'Tech Mentorship',
    description: 'We help young innovators by turning bold ideas into functional prototypes.',
    icon: 'fas fa-users',
    category: 'consulting',
    features: ['Student Projects', 'Academic Support', 'Prototype Development', 'Career Guidance'],
    isActive: true
  },
  {
    name: 'Web Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies.',
    icon: 'fas fa-globe',
    category: 'web',
    features: ['React/Next.js', 'Node.js Backend', 'Database Design', 'Cloud Deployment'],
    isActive: true
  },
  {
    name: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: 'fas fa-mobile-alt',
    category: 'mobile',
    features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Publishing'],
    isActive: true
  },
  {
    name: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions.',
    icon: 'fas fa-cloud',
    category: 'cloud',
    features: ['AWS/Azure/GCP', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Serverless Architecture'],
    isActive: true
  }
];

// Sample projects data
const sampleProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, payment integration, and admin dashboard.',
    shortDescription: 'Modern e-commerce platform with React and Node.js',
    image: 'ecommerce-platform.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    category: 'web',
    status: 'completed',
    client: 'TechStart Inc.',
    duration: '3 months',
    teamSize: 4,
    githubUrl: 'https://github.com/there-tech/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.there-tech.com',
    features: ['User Authentication', 'Product Catalog', 'Shopping Cart', 'Payment Processing', 'Admin Dashboard'],
    challenges: ['Payment integration complexity', 'Real-time inventory updates'],
    solutions: ['Implemented Stripe with webhook handling', 'Used WebSocket for real-time updates'],
    isFeatured: true,
    isActive: true
  },
  {
    title: 'IoT Smart Home System',
    description: 'An intelligent home automation system that controls lighting, temperature, security, and appliances through a mobile app and voice commands.',
    shortDescription: 'Smart home automation with IoT sensors',
    image: 'smart-home.jpg',
    technologies: ['Python', 'Arduino', 'React Native', 'MQTT', 'AWS IoT'],
    category: 'iot',
    status: 'completed',
    client: 'SmartLiving Corp.',
    duration: '6 months',
    teamSize: 6,
    githubUrl: 'https://github.com/there-tech/smart-home',
    liveUrl: 'https://smarthome.there-tech.com',
    features: ['Lighting Control', 'Temperature Management', 'Security Monitoring', 'Voice Commands', 'Mobile App'],
    challenges: ['Device compatibility issues', 'Real-time data synchronization'],
    solutions: ['Created universal device adapter', 'Implemented MQTT for real-time communication'],
    isFeatured: true,
    isActive: true
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'A business intelligence platform that uses machine learning to analyze customer data and provide actionable insights through interactive visualizations.',
    shortDescription: 'AI-driven business analytics dashboard',
    image: 'analytics-dashboard.jpg',
    technologies: ['Python', 'TensorFlow', 'React', 'D3.js', 'PostgreSQL'],
    category: 'ai',
    status: 'in-progress',
    client: 'DataInsight Solutions',
    duration: '4 months',
    teamSize: 5,
    githubUrl: 'https://github.com/there-tech/analytics-dashboard',
    features: ['Data Visualization', 'Predictive Analytics', 'Custom Reports', 'Real-time Updates'],
    challenges: ['Large dataset processing', 'Model accuracy optimization'],
    solutions: ['Implemented data streaming', 'Used ensemble learning methods'],
    isFeatured: false,
    isActive: true
  },
  {
    title: 'Mobile Banking App',
    description: 'A secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management features.',
    shortDescription: 'Secure mobile banking with biometric auth',
    image: 'mobile-banking.jpg',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'JWT', 'Biometric API'],
    category: 'mobile',
    status: 'completed',
    client: 'SecureBank Ltd.',
    duration: '5 months',
    teamSize: 7,
    githubUrl: 'https://github.com/there-tech/mobile-banking',
    features: ['Biometric Authentication', 'Real-time Transactions', 'Bill Payments', 'Investment Tracking', 'Security Alerts'],
    challenges: ['Security compliance requirements', 'Cross-platform compatibility'],
    solutions: ['Implemented FIDO2 standards', 'Used React Native with native modules'],
    isFeatured: true,
    isActive: true
  },
  {
    title: 'Cloud Migration Platform',
    description: 'A platform that automates the migration of legacy applications to cloud infrastructure with minimal downtime and cost optimization.',
    shortDescription: 'Automated cloud migration platform',
    image: 'cloud-migration.jpg',
    technologies: ['Python', 'AWS SDK', 'Docker', 'Kubernetes', 'Terraform'],
    category: 'cloud',
    status: 'planned',
    client: 'CloudTech Solutions',
    duration: '8 months',
    teamSize: 8,
    features: ['Automated Migration', 'Cost Optimization', 'Performance Monitoring', 'Rollback Capability'],
    challenges: ['Complex legacy system compatibility', 'Zero-downtime migration'],
    solutions: ['Containerization strategy', 'Blue-green deployment approach'],
    isFeatured: false,
    isActive: true
  }
];

// Sample about data
const sampleAbout = {
  companyName: 'There-Tech',
  tagline: 'Innovating Tomorrow, Today',
  mainDescription: 'There-Tech is a forward-thinking technology company that specializes in creating innovative digital solutions for businesses and individuals. We combine cutting-edge technology with creative problem-solving to deliver exceptional results that drive growth and success.',
  mission: 'To empower businesses and individuals with cutting-edge technology solutions that transform ideas into reality, driving innovation and digital transformation across industries.',
  vision: 'To be the leading technology partner for innovative businesses worldwide, recognized for our technical excellence, creative solutions, and unwavering commitment to client success.',
  values: [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.',
      icon: 'fas fa-lightbulb'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in every project, ensuring exceptional results.',
      icon: 'fas fa-star'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and close collaboration with our clients.',
      icon: 'fas fa-users'
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical practices in all our dealings.',
      icon: 'fas fa-shield-alt'
    }
  ],
  team: [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in technology and business development.',
      image: 'alex-johnson.jpg',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/alexjohnson',
        github: 'https://github.com/alexjohnson',
        email: 'alex@there-tech.com'
      }
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      bio: 'Technical expert specializing in AI, cloud architecture, and scalable systems.',
      image: 'sarah-chen.jpg',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/sarahchen',
        github: 'https://github.com/sarahchen',
        email: 'sarah@there-tech.com'
      }
    },
    {
      name: 'Mike Rodriguez',
      role: 'Lead Developer',
      bio: 'Full-stack developer passionate about creating elegant, user-friendly applications.',
      image: 'mike-rodriguez.jpg',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/mikerodriguez',
        github: 'https://github.com/mikerodriguez',
        email: 'mike@there-tech.com'
      }
    }
  ],
  stats: {
    projectsCompleted: 47,
    clientsServed: 23,
    yearsExperience: 8,
    teamMembers: 12
  },
  isActive: true
};

// Sample contact data
const sampleContact = {
  companyInfo: {
    name: 'There-Tech',
    address: {
      street: '123 Innovation Drive',
      city: 'Tech Valley',
      state: 'CA',
      zipCode: '94025',
      country: 'USA'
    },
    phone: '+1 (555) 123-4567',
    email: 'info@there-tech.com',
    website: 'https://there-tech.com'
  },
  socialMedia: {
    linkedin: 'https://linkedin.com/company/there-tech',
    github: 'https://github.com/there-tech',
    twitter: 'https://twitter.com/there-tech',
    facebook: 'https://facebook.com/there-tech',
    instagram: 'https://instagram.com/there-tech'
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
  submissions: [],
  isActive: true
};

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/there-tech')
  .then(async () => {
    console.log('✅ Connected to MongoDB');
    
    try {
      // Clear existing data
      await Service.deleteMany({});
      await Project.deleteMany({});
      await About.deleteMany({});
      await Contact.deleteMany({});
      console.log('🗑️  Cleared existing data');
      
      // Insert sample services
      const services = await Service.insertMany(sampleServices);
      console.log(`✅ Inserted ${services.length} services`);
      
      // Insert sample projects
      const projects = await Project.insertMany(sampleProjects);
      console.log(`✅ Inserted ${projects.length} projects`);
      
      // Insert sample about
      const about = new About(sampleAbout);
      await about.save();
      console.log('✅ Inserted about information');
      
      // Insert sample contact
      const contact = new Contact(sampleContact);
      await contact.save();
      console.log('✅ Inserted contact information');
      
      console.log('\n🎉 All data seeded successfully!');
      console.log('\n📊 Summary:');
      console.log(`  - Services: ${services.length}`);
      console.log(`  - Projects: ${projects.length}`);
      console.log(`  - About: 1`);
      console.log(`  - Contact: 1`);
      
      process.exit(0);
    } catch (error) {
      console.error('❌ Error seeding database:', error);
      process.exit(1);
    }
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  }); 