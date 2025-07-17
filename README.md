# Grabzy E-Commerce Platform

A modern, full-stack e-commerce platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring user authentication, product management, shopping cart functionality, and Stripe payment integration.

## Features

### User Features
- **User Authentication**: JWT-based authentication with registration and login
- **Product Browsing**: Browse products with search and filtering capabilities
- **Shopping Cart**: Add, update, and remove items from cart
- **Checkout**: Secure checkout process with Stripe payment integration
- **Order Management**: View order history and track order status
- **User Profile**: Update personal information and shipping address

### Admin Features
- **Dashboard**: Overview of sales, orders, and inventory
- **Product Management**: Add, edit, and delete products
- **Order Management**: Process and update order status
- **User Management**: View and manage customer accounts
- **Inventory Tracking**: Monitor stock levels and low stock alerts

### Technical Features
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Real-time Updates**: Live cart and inventory updates
- **Search & Filters**: Advanced product search and category filtering
- **Payment Processing**: Secure payment processing with Stripe
- **Image Management**: Product image handling with cloud storage
- **Error Handling**: Comprehensive error handling and user feedback

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Stripe** - Payment processing
- **CORS** - Cross-origin resource sharing

### Frontend
- **React.js** - UI library
- **React Router** - Client-side routing
- **React Query** - Data fetching and caching
- **Axios** - HTTP client
- **React Icons** - Icon library
- **React Toastify** - Notifications
- **CSS3** - Styling with custom properties

## Project Structure

```
E-Commerce/
├── backend/                 # Backend API
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── config.env          # Environment variables
│   ├── package.json        # Backend dependencies
│   ├── server.js           # Main server file
│   └── seed.js             # Database seeding script
├── frontend/               # React frontend
│   ├── public/             # Static files
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── contexts/       # React contexts
│   │   ├── pages/          # Page components
│   │   ├── App.js          # Main app component
│   │   └── index.js        # Entry point
│   └── package.json        # Frontend dependencies
└── README.md               # Project documentation
```

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)
- **Stripe Account** (for payment processing)

## Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd E-Commerce
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create environment file
cp config.env.example config.env
# Edit config.env with your configuration

# Start MongoDB (if running locally)
mongod

# Seed the database with sample data
npm run seed

# Start the development server
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

### 4. Environment Configuration

Create a `config.env` file in the backend directory:

```env
PORT=5011
MONGODB_URI=mongodb://localhost:27017/grabzy
JWT_SECRET=your_jwt_secret_key_here
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### Products
- `GET /api/products` - Get all products (with filters)
- `GET /api/products/:id` - Get single product
- `GET /api/products/categories/list` - Get product categories

### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update/:productId` - Update cart item
- `DELETE /api/cart/remove/:productId` - Remove item from cart
- `DELETE /api/cart/clear` - Clear cart

### Orders
- `POST /api/orders/create-payment-intent` - Create Stripe payment intent
- `POST /api/orders` - Create order
- `GET /api/orders/my-orders` - Get user's orders
- `GET /api/orders/:id` - Get single order
- `PUT /api/orders/:id/status` - Update order status (admin)

### Admin
- `GET /api/admin/dashboard` - Get dashboard stats
- `GET /api/admin/products` - Get all products (admin)
- `POST /api/admin/products` - Create product
- `PUT /api/admin/products/:id` - Update product
- `DELETE /api/admin/products/:id` - Delete product
- `GET /api/admin/orders` - Get all orders (admin)
- `GET /api/admin/users` - Get all users (admin)

## Default Admin Account

After running the seed script, you can login with the default admin account:

- **Email**: admin@grabzy.com
- **Password**: admin123

## Usage

### For Users
1. Register a new account or login with existing credentials
2. Browse products using search and filters
3. Add items to cart
4. Proceed to checkout and complete payment
5. Track your orders in the orders section

### For Admins
1. Login with admin credentials
2. Access the admin dashboard
3. Manage products, orders, and users
4. Monitor sales and inventory

## Payment Integration

This project uses Stripe for payment processing. To enable payments:

1. Create a Stripe account
2. Get your API keys from the Stripe dashboard
3. Update the environment variables with your Stripe keys
4. Test payments using Stripe's test card numbers

## Deployment

### Backend Deployment
1. Set up a MongoDB database (MongoDB Atlas recommended)
2. Deploy to platforms like Heroku, Railway, or DigitalOcean
3. Set environment variables in your hosting platform
4. Update CORS settings for your frontend domain

### Frontend Deployment
1. Build the project: `npm run build`
2. Deploy to platforms like Vercel, Netlify, or GitHub Pages
3. Update API endpoints to point to your backend URL

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact:
- Email: support@grabzy.com
- GitHub Issues: [Create an issue](https://github.com/your-repo/issues)

## Acknowledgments

- [Stripe](https://stripe.com/) for payment processing
- [React Icons](https://react-icons.github.io/react-icons/) for icons
- [Unsplash](https://unsplash.com/) for sample product images 
