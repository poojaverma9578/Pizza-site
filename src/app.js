import React from 'react';

const RazorpayButton = () => {
  const handlePayment = async () => {
    // Initialize Razorpay
    const Razorpay = new Razorpay({
      key_id: 'rzp_test_nJrb86XPPhldI3',
      amount: 1000, // The amount to charge in paisa (e.g., 1000 paisa = ₹10)
      name: 'My Store',
      description: 'Payment for a product',
      image: '/your_logo.png', // URL to your store's logo
      handler: function (response) {
        // Handle the success response from Razorpay here
        alert(`Payment successful. Payment ID: ${response.razorpay_payment_id}`);
      },
    });

    Razorpay.open();
  };

  return (
    <div>
      <button onClick={handlePayment}>Pay with Razorpay</button>
    </div>
  );
};

export default RazorpayButton;
