# Campaign Management System

A full-stack web application for managing marketing campaigns across multiple channels (Email, SMS, WhatsApp).

## 🚀 Features

- **Multi-Channel Support**: Send campaigns via Email, SMS, and WhatsApp
- **Real Email Integration**: Actual email sending using Gmail SMTP
- **Customer Management**: Add and manage customer information
- **Campaign Tracking**: Track campaign status (Sent, Failed, Not Sent)
- **Responsive UI**: Modern Material-UI interface that works on all devices
- **Real-time Updates**: See campaign status updates in real-time

## 🛠️ Tech Stack

### Frontend

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Material-UI (MUI)** - Professional React components
- **Axios** - HTTP client for API calls

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Nodemailer** - Email sending service
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
campaign-system/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── App.jsx          # Main application component
│   │   ├── main.jsx         # Application entry point
│   │   └── ...
│   ├── package.json
│   └── vite.config.js
├── backend/                  # Express backend API
│   ├── controllers/
│   │   └── customerController.js
│   ├── routes/
│   │   └── customerRoutes.js
│   ├── server.js            # Main server file
│   └── package.json
├── package.json             # Root package.json for running both servers
└── README.md
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Gmail account (for email functionality)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/AkanxRai/campaign-managament-system.git
   cd campaign-management-system
   ```

2. **Install dependencies for all packages**

   ```bash
   npm run install-all
   ```

3. **Configure Email Settings**
   - Open `backend/controllers/customerController.js`
   - Replace the email credentials with your Gmail account:
     ```javascript
     const transporter = nodemailer.createTransport({
       service: "gmail",
       auth: {
         user: "your-email@gmail.com",
         pass: "your-app-password", // Use Gmail App Password
       },
     });
     ```

### Running the Application

#### Option 1: Run Both Servers Simultaneously

```bash
npm run dev
```

#### Option 2: Run Servers Separately

**Terminal 1 - Backend:**

```bash
cd backend
npm start
```

**Terminal 2 - Frontend:**

```bash
cd frontend
npm run dev
```

### Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

## 📧 Email Configuration

To enable real email sending:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → App passwords
   - Generate a password for "Mail"
3. **Update the credentials** in `backend/controllers/customerController.js`

## 🎯 API Endpoints

| Method | Endpoint             | Description                 |
| ------ | -------------------- | --------------------------- |
| GET    | `/api/customers`     | Get all customers           |
| POST   | `/api/add-customer`  | Add a new customer          |
| POST   | `/api/send-campaign` | Send campaign to a customer |

## 🎨 Features Overview

### Customer Management

- Add customers with name, email, phone, and preferred channel
- Input validation for email and phone formats
- Customer list with status tracking

### Campaign Sending

- **Email**: Real email sending via Gmail SMTP
- **SMS/WhatsApp**: Simulated sending with success/failure rates
- Status updates: Not Sent → Sent/Failed
- Disable button after successful sending

### UI/UX Features

- Responsive design for all screen sizes
- Long email address handling with tooltips
- Color-coded status badges
- Empty state messaging
- Loading states and error handling

## 🔧 Development

### Scripts Available

**Root Level:**

- `npm run dev` - Run both frontend and backend
- `npm run frontend` - Run only frontend
- `npm run backend` - Run only backend
- `npm run install-all` - Install all dependencies

**Frontend:**

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

**Backend:**

- `npm start` - Start server
- `npm run dev` - Start server (same as start)

## 🚀 Deployment

### Frontend (Vercel/Netlify)

1. Build the frontend: `cd frontend && npm run build`
2. Deploy the `dist` folder to your hosting service
3. Update API endpoints to point to your backend URL

### Backend (Heroku/Railway/Render)

1. Deploy the `backend` folder
2. Set environment variables for email credentials
3. Ensure CORS settings allow your frontend domain

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Akanksha Rai**

- GitHub: [@AkanxRai](https://github.com/AkanxRai)

## 🐛 Issues

If you find any bugs or have feature requests, please create an issue on GitHub.

---

⭐ **Star this repository if you found it helpful!**
