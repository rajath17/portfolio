# Portfolio Backend API

A robust backend API for handling contact form submissions from your portfolio website.

## Features

- ✅ Contact form submission handling
- ✅ Email delivery via Nodemailer
- ✅ Input validation and sanitization
- ✅ Rate limiting (10 requests per 15 minutes per IP)
- ✅ CORS configuration
- ✅ Security headers with Helmet
- ✅ Error handling and logging
- ✅ Professional HTML email templates

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Configuration

Copy the example environment file and configure it:

```bash
cp env.example .env
```

Edit `.env` file with your settings:

```env
# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=moharerajath@gmail.com
EMAIL_PASS=your_app_password_here

# Server Configuration
PORT=5000
NODE_ENV=development

# CORS Configuration
FRONTEND_URL=http://localhost:5173
```

### 3. Gmail App Password Setup

Since you're using Gmail, you need to create an App Password:

1. Go to your Google Account settings
2. Navigate to Security → 2-Step Verification
3. At the bottom, select "App passwords"
4. Generate a new app password for "Mail"
5. Use this password in your `.env` file (not your regular Gmail password)

### 4. Start the Server

**Development mode:**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Health Check
```
GET /api/health
```
Returns server status and timestamp.

### Contact Form
```
POST /api/contact
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'd like to discuss a potential project..."
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Message sent successfully! I'll get back to you soon.",
  "messageId": "message-id-from-email-service"
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email address"
    }
  ]
}
```

## Validation Rules

- **Name**: 2-100 characters
- **Email**: Valid email format
- **Subject**: 5-200 characters
- **Message**: 10-2000 characters

## Security Features

- **Rate Limiting**: 10 requests per 15 minutes per IP address
- **Input Validation**: All inputs are validated and sanitized
- **CORS**: Configured for your frontend domain
- **Helmet**: Security headers for protection against common vulnerabilities
- **Error Handling**: Comprehensive error handling with appropriate HTTP status codes

## Deployment Options

### Option 1: Railway (Recommended)
1. Connect your GitHub repository to Railway
2. Add environment variables in Railway dashboard
3. Deploy automatically on push

### Option 2: Heroku
1. Create a Heroku app
2. Add environment variables
3. Deploy using Git

### Option 3: Vercel (Serverless)
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the backend directory
3. Configure environment variables

### Option 4: DigitalOcean App Platform
1. Create a new app from GitHub
2. Configure environment variables
3. Deploy

## Environment Variables for Production

Update your frontend to use the production API URL:

```typescript
// In your Contact.tsx, update the fetch URL:
const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-api-domain.com/api/contact'
  : 'http://localhost:5000/api/contact';
```

## Monitoring and Logs

The server logs important events:
- Email sending status
- Rate limiting violations
- Validation errors
- Server startup information

## Troubleshooting

### Common Issues:

1. **Email not sending**: Check your Gmail app password
2. **CORS errors**: Verify FRONTEND_URL in environment variables
3. **Rate limiting**: Wait 15 minutes or use a different IP
4. **Validation errors**: Check input field requirements

### Testing the API:

```bash
# Test health endpoint
curl http://localhost:5000/api/health

# Test contact endpoint
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Message",
    "message": "This is a test message from the API"
  }'
```

## Support

For issues or questions, check the logs or contact the developer.





