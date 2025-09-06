const mongoose = require('mongoose');
const Service = require('./models/Service');

// Sample services data
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

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/there-tech')
  .then(async () => {
    console.log('✅ Connected to MongoDB');
    
    try {
      // Clear existing services
      await Service.deleteMany({});
      console.log('🗑️  Cleared existing services');
      
      // Insert sample services
      const services = await Service.insertMany(sampleServices);
      console.log(`✅ Inserted ${services.length} services`);
      
      // Display inserted services
      services.forEach(service => {
        console.log(`  - ${service.name}: ${service.description.substring(0, 50)}...`);
      });
      
      console.log('\n🎉 Database seeded successfully!');
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