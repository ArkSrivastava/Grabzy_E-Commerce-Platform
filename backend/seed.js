const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: './config.env' });

// Import models
const User = require('./models/User');
const Product = require('./models/Product');

// Sample products data
const sampleProducts = [
  {
    name: "Wireless Bluetooth Headphones",
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    price: 89.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    stock: 50,
    brand: "AudioTech",
    tags: ["wireless", "bluetooth", "noise-cancellation"],
    rating: 4.5,
    numReviews: 128
  },
  {
    name: "Smart Fitness Watch",
    description: "Advanced fitness tracking with heart rate monitor, GPS, and water resistance.",
    price: 199.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    stock: 30,
    brand: "FitTech",
    tags: ["fitness", "smartwatch", "health"],
    rating: 4.3,
    numReviews: 89
  },
  {
    name: "Organic Cotton T-Shirt",
    description: "Comfortable organic cotton t-shirt available in multiple colors and sizes.",
    price: 24.99,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    stock: 100,
    brand: "EcoWear",
    tags: ["organic", "cotton", "sustainable"],
    rating: 4.2,
    numReviews: 156
  },
  {
    name: "Wireless Gaming Mouse",
    description: "High-precision gaming mouse with customizable RGB lighting and programmable buttons.",
    price: 79.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
    stock: 45,
    brand: "GameTech",
    tags: ["gaming", "wireless", "rgb"],
    rating: 4.6,
    numReviews: 203
  },
  {
    name: "Yoga Mat Premium",
    description: "Non-slip yoga mat made from eco-friendly materials, perfect for all types of yoga.",
    price: 39.99,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
    stock: 75,
    brand: "ZenFit",
    tags: ["yoga", "eco-friendly", "non-slip"],
    rating: 4.4,
    numReviews: 92
  },
  {
    name: "Stainless Steel Water Bottle",
    description: "Insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    price: 29.99,
    category: "Home",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
    stock: 120,
    brand: "HydroLife",
    tags: ["insulated", "stainless-steel", "eco-friendly"],
    rating: 4.7,
    numReviews: 234
  },
  {
    name: "Wireless Charging Pad",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    price: 34.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400",
    stock: 60,
    brand: "ChargeTech",
    tags: ["wireless", "charging", "qi"],
    rating: 4.1,
    numReviews: 67
  },
  {
    name: "Natural Face Moisturizer",
    description: "Hydrating face moisturizer with natural ingredients, suitable for all skin types.",
    price: 19.99,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400",
    stock: 85,
    brand: "NaturalGlow",
    tags: ["natural", "moisturizer", "skincare"],
    rating: 4.3,
    numReviews: 178
  }
];

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB for seeding'))
.catch(err => console.error('MongoDB connection error:', err));

// Seed function
const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Product.deleteMany({});
    
    console.log('Cleared existing data');
    
    // Create admin user
    const adminPassword = await bcrypt.hash('admin123', 10);
    const adminUser = new User({
      name: 'Admin User',
      email: 'admin@grabzy.com',
      password: adminPassword,
      role: 'admin'
    });
    
    await adminUser.save();
    console.log('Created admin user');
    
    // Create sample products
    for (const productData of sampleProducts) {
      const product = new Product(productData);
      await product.save();
    }
    
    console.log(`Created ${sampleProducts.length} sample products`);
    
    console.log('Database seeded successfully!');
    console.log('Admin credentials:');
    console.log('Email: admin@grabzy.com');
    console.log('Password: admin123');
    
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase(); 