import { useState } from 'react';
import { View } from '../components/alt/View';
import { Text } from '../components/alt/Text';
import { FaGooglePay, FaPhone, FaPaypal } from 'react-icons/fa'; // Assuming these icons are available, otherwise use appropriate icon libraries
import { SiPaytm } from 'react-icons/si';
import NavBar from '../components/Navbar';

const PaymentPage = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const paymentMethods = [
    { id: 'gpay', name: 'GPay', icon: <FaGooglePay className="text-2xl" /> },
    { id: 'phonepe', name: 'PhonePe', icon: <FaPhone className="text-2xl" /> },
    { id: 'paytm', name: 'Paytm', icon: <SiPaytm className="text-2xl" /> },
    { id: 'paypal', name: 'PayPal', icon: <FaPaypal className="text-2xl" /> },
  ];

  return (
    <>
    <NavBar name={"payments"} back={"home"}/>
    <View className="p-4 mt-16">
      {/* Payment Information Card */}
      <View className="bg-white shadow-md rounded-lg p-4 mb-6">
        <Text className="text-xl font-bold mb-2">Payment Information</Text>
        <Text className="text-gray-600 mb-1">Registration Amount: ₹1000</Text>
        <Text className="text-gray-600">GST (18%): ₹180</Text>
      </View>

      {/* Payment Method Selection Card */}
      <View className="bg-white shadow-md rounded-lg p-4 mb-6">
        <Text className="text-xl font-bold mb-4">Select Payment Method</Text>
        <View className="grid grid-cols-4 gap-1">
          {paymentMethods.map((method) => (
            <label key={method.id} className="flex items-center border border-gray-300 rounded-lg cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value={method.id}
                checked={selectedPaymentMethod === method.id}
                onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                className="hidden"
              />
              <View className="flex flex-col items-center justify-center space-x-1 p-1">
                {method.icon}
                <Text className="font-medium text-xs text-left">{method.name}</Text>
              </View>
            </label>
          ))}
        </View>
      </View>

      {/* Debit/Credit Card Option */}
      <View className="bg-white shadow-md rounded-lg p-4 mb-6">
        <Text className="text-xl font-bold mb-2">Pay with Debit/Credit Card</Text>
        <input 
          type="text" 
          placeholder="Card Number" 
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        />
        <View className="flex gap-4">
          <input 
            type="text" 
            placeholder="MM/YY" 
            className="w-1/2 p-2 border border-gray-300 rounded-lg"
          />
          <input 
            type="text" 
            placeholder="CVV" 
            className="w-1/2 p-2 border border-gray-300 rounded-lg"
          />
        </View>
      </View>

      {/* Net Banking Option */}
      <View className="bg-white shadow-md rounded-lg p-4">
        <Text className="text-xl font-bold mb-2">Net Banking</Text>
        <select 
          value={selectedPaymentMethod} 
          onChange={(e) => setSelectedPaymentMethod(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        >
          <option value="">Select your bank</option>
          <option value="sbi">State Bank of India</option>
          <option value="hdfc">HDFC Bank</option>
          <option value="icici">ICICI Bank</option>
          <option value="axis">Axis Bank</option>
        </select>
      </View>
    </View>
    </>
  );
};

export default PaymentPage;
