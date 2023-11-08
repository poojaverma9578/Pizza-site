const express = require('express');
const bodyParser = require('body-parser');
const Razorpay = require('razorpay');
const cors = require('cors'); // Import the 'cors' middleware
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000;

const razorpay = new Razorpay({
  key_id: 'rzp_test_nJrb86XPPhldI3',
  key_secret: 'UEC7bZlVrDeOYWTjVebxfrIe',
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Enable CORS for all routes
app.use(cors());

app.post('/create-order/:amount', (req, res) => {
  const { amount } = req.params; // Get the amount from the URL parameter

  const options = {
    amount: parseInt(amount), // Convert the amount to an integer
    currency: 'INR',
    receipt: uuidv4(),
  };

  razorpay.orders.create(options, (err, order) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Failed to create order' });
    }
    res.json(order);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
