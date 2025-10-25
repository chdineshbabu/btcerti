# Blockchain Certificate Generation System

A decentralized certificate generation and verification system built with React, Node.js, MongoDB, and Ethereum blockchain technology. This system allows educational institutions to issue tamper-proof digital certificates that are stored on the blockchain for permanent verification.

## 🚀 Features

- **Blockchain Integration**: Certificates are stored on Ethereum blockchain for immutability
- **Excel Upload**: Bulk certificate generation from Excel files
- **Certificate Verification**: Real-time certificate verification using blockchain data
- **PDF Generation**: Automatic PDF certificate generation with QR codes
- **MongoDB Storage**: Local database for quick access and management
- **Modern UI**: Responsive React frontend with Tailwind CSS

## 🏗️ Architecture

### Frontend (React)
- **Pages**: Home, Review, Certificate Generation, Certificate Verification
- **Components**: Data tables, file upload, certificate display
- **Features**: Excel file processing, PDF generation, QR code integration

### Backend (Node.js)
- **Express Server**: RESTful API endpoints
- **MongoDB**: Certificate data storage and retrieval
- **Web3 Integration**: Ethereum blockchain interaction
- **File Processing**: Excel file parsing and data extraction

### Blockchain (Ethereum)
- **Smart Contract**: StudentEnrollment.sol for certificate storage
- **Truffle Framework**: Contract deployment and management
- **Ganache**: Local blockchain for development

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Ganache (for local blockchain)
- Git

## 🛠️ Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd btcerti
```

### 2. Install Dependencies

#### Root Dependencies
```bash
npm install
```

#### Backend Dependencies
```bash
cd backend
npm install
```

#### Frontend Dependencies
```bash
cd web
npm install
```

### 3. Database Setup
1. Install and start MongoDB
2. Update MongoDB connection string in `backend/mongoConfig.js` if needed

### 4. Blockchain Setup
1. Install Ganache and start a local blockchain
2. Update contract address in `backend/btc.js` after deploying the smart contract
3. Deploy the smart contract using Truffle:
```bash
cd backend
truffle migrate
```

## 🚀 Running the Application

### Start the Backend Server
```bash
cd backend
node app.js
```
The backend server will run on `http://localhost:3001`

### Start the Frontend Application
```bash
cd web
npm start
```
The frontend application will run on `http://localhost:3000`

## 📁 Project Structure

```
btcerti/
├── backend/                 # Node.js backend
│   ├── app.js              # Main server file
│   ├── btc.js              # Blockchain integration
│   ├── models/             # MongoDB models
│   ├── contracts/          # Smart contracts
│   ├── migrations/         # Truffle migrations
│   └── build/              # Compiled contracts
├── web/                    # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   └── data/           # Sample data
│   └── public/             # Static assets
└── README.md
```

## 🔧 API Endpoints

### Certificate Management
- `POST /api/inputJson` - Upload Excel data
- `POST /api/generate` - Generate new certificate
- `GET /api/verify` - Verify certificate data
- `GET /api/verifyRec` - Get all certificates
- `POST /api/certificate` - Get certificate by ID

## 📊 Excel File Format

The system expects Excel files with the following columns:
- `studentName` - Student's full name
- `enrolledDate` - Date of enrollment
- `courseTitle` - Course name
- `studentEmail` - Student's email address
- `certificateProvider` - Institution name

## 🔗 Smart Contract

The `StudentEnrollment.sol` contract provides:
- Student enrollment storage
- Certificate ID mapping
- Immutable record keeping
- Event emission for transparency

## 🎨 Frontend Pages

1. **Home** (`/`) - File upload interface
2. **Review** (`/review`) - Data review before generation
3. **Generated** (`/generated`) - Certificate generation results
4. **Certificate** (`/certificate/:id`) - Individual certificate view

## 🔐 Security Features

- Private key management for blockchain transactions
- Certificate ID generation with random strings
- Transaction hash verification
- Block number and hash storage for audit trails

## 🚀 Deployment

### Production Setup
1. Configure production MongoDB instance
2. Deploy smart contract to mainnet/testnet
3. Update contract addresses in configuration
4. Set up environment variables for sensitive data
5. Deploy frontend to hosting service (Netlify, Vercel, etc.)
6. Deploy backend to cloud service (Heroku, AWS, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please open an issue in the repository.

---

**Note**: This is a development version. For production use, ensure proper security measures, environment configuration, and thorough testing.
