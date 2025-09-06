// Simple script to keep Render backend awake
// Run this script every 10 minutes to prevent cold starts

const BACKEND_URL = 'https://there-tech-backend.onrender.com/api/health';

async function keepAlive() {
  try {
    const response = await fetch(BACKEND_URL);
    if (response.ok) {
      console.log('✅ Backend is awake:', new Date().toLocaleTimeString());
    } else {
      console.log('⚠️ Backend responded with:', response.status);
    }
  } catch (error) {
    console.log('❌ Failed to wake backend:', error.message);
  }
}

// Run immediately
keepAlive();

// Then run every 10 minutes (600000 ms)
setInterval(keepAlive, 600000);

console.log('🔄 Keep-alive script started. Backend will be pinged every 10 minutes.');
