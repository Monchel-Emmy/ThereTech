# There-Tech Backend API

Express.js backend with MongoDB for the There-Tech project.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Setup MongoDB
Make sure MongoDB is running locally or update the connection string in `config.js`

**Local MongoDB:**
```bash
# Start MongoDB (if installed locally)
mongod
```

**MongoDB Atlas (Cloud):**
Update `config.js` with your MongoDB Atlas connection string.

### 3. Start the Server
```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

## 📡 API Endpoints

### Health Check
- `GET /api/health` - Server health status

### Services
- `GET /api/services` - Get all services
- `POST /api/services` - Create new service
- `GET /api/services/:id` - Get service by ID
- `PUT /api/services/:id` - Update service
- `DELETE /api/services/:id` - Delete service

## 🔧 Configuration

Update `config.js` to modify:
- MongoDB connection
- Server port
- CORS origins
- JWT settings

## 📁 Project Structure
```
server/
├── models/          # MongoDB models
├── routes/          # API route handlers
├── middleware/      # Custom middleware
├── config.js        # Configuration
├── server.js        # Main server file
└── package.json     # Dependencies
```

## 🌐 Frontend Integration

The backend is configured to work with your React frontend running on:
- `http://localhost:5173` (Vite dev server)
- `http://localhost:5174` (Alternative port)

## 🔒 Security Features

- Helmet.js for security headers
- CORS protection
- Rate limiting
- Input validation
- Error handling

## 📝 Environment Variables

Create a `.env` file in the server directory:
```env
MONGODB_URI=mongodb://localhost:27017/there-tech
PORT=5000
NODE_ENV=development
JWT_SECRET=your-secret-key
```

## 🚀 Next Steps

1. Add more models (Users, Projects, Contact forms)
2. Implement authentication with JWT
3. Add file upload functionality
4. Create admin dashboard
5. Add email notifications 