# Express MongoDB Boilerplate

A clean and modular Node.js + Express REST API boilerplate with MongoDB using Mongoose.

## 🚀 Features

- **Express.js** - Fast, unopinionated web framework
- **MongoDB** with **Mongoose** ODM
- **CORS** enabled
- **Morgan** HTTP request logger
- **Environment variables** with dotenv
- **Modular structure** for scalability
- **Error handling** middleware
- **ES6 syntax** throughout

## 📁 Project Structure

```
server/
├── app.js              # Express app setup
├── server.js           # Entry point with PORT
├── config/
│   └── db.js          # MongoDB connection
├── models/
│   └── Sample.js      # Sample Mongoose model
├── routes/
│   └── sampleRoutes.js # Sample routes
├── controllers/
│   └── sampleController.js # Sample controller with CRUD
├── middlewares/        # Custom middleware (empty for now)
├── utils/             # Utility functions (empty for now)
├── .env.example       # Environment variables template
└── package.json       # Dependencies and scripts
```

## 🛠️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Copy the example environment file
   cp .env.example .env
   
   # Edit .env with your MongoDB connection string
   # MONGODB_URI=mongodb://localhost:27017/your_database_name
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🔥 Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon
- `npm test` - Run tests (not implemented yet)

## 📡 API Endpoints

### Health Check
- `GET /` - Returns `{status: "OK"}`

### Samples CRUD
- `GET /api/samples` - Get all samples
- `GET /api/samples/:id` - Get single sample
- `POST /api/samples` - Create new sample
- `PUT /api/samples/:id` - Update sample
- `DELETE /api/samples/:id` - Delete sample

### Sample Request Body (POST/PUT)
```json
{
  "name": "Sample Name",
  "description": "Sample description",
  "status": "active"
}
```

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
MONGODB_URI=mongodb://localhost:27017/your_database_name
PORT=5000
NODE_ENV=development
```

## 🚀 Quick Test

1. Start the server: `npm run dev`
2. Health check: `GET http://localhost:5000/`
3. Create sample: `POST http://localhost:5000/api/samples`
4. Get samples: `GET http://localhost:5000/api/samples`

## 📝 Notes

- This is a boilerplate template with basic CRUD operations
- Add authentication, validation, and business logic as needed
- The `middlewares/` and `utils/` folders are ready for your custom code
- Error handling is implemented with try-catch blocks and middleware

## 🤝 Ready for Interview

This boilerplate provides a solid foundation that you can quickly extend during technical interviews. The structure is clean, modular, and follows Node.js best practices.
