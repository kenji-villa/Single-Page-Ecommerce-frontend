import { useState } from "react";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";

function Checkout() {
  const { cart, total, setCart } = useCart();
  const [showMessage, setShowMessage] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.address) {
      alert("All fields required");
      return;
    }

    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.push({
      date: new Date(),
      items: cart,
      total,
    });

    localStorage.setItem("orders", JSON.stringify(orders));
    setCart([]);
    localStorage.removeItem("cart");

    setOrderPlaced(true);
    console.log("Order placed triggered");
  };

  if (orderPlaced) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-green-600 mb-3">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-600 mb-4">Your order has been confirmed.</p>

        <button
          onClick={() => (window.location.href = "/")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      {showMessage && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow">
          Order placed successfully!
        </div>
      )}

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">Contact Info</h2>

          <input
            className="w-full border p-2 rounded mb-3"
            placeholder="Full Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            className="w-full border p-2 rounded mb-3"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <textarea
            className="w-full border p-2 rounded"
            placeholder="Address"
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>ETB {item.price * item.quantity}</span>
            </div>
          ))}

          <hr className="my-3" />

          <h3 className="text-lg font-bold">Total: ETB {total}</h3>

          <button
            onClick={handleSubmit}
            className="bg-black text-white w-full py-3 mt-4 rounded-lg hover:bg-gray-800 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
