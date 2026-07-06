import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  return (
    <div>
      <Navbar />

      <div className="p-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border p-3 mb-2 rounded"
          >
            <h4>{item.name}</h4>

            <input
              type="number"
              value={item.quantity}
              className="border w-16"
              onChange={(e) => updateQuantity(item.id, +e.target.value)}
            />

            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-2 rounded"
            >
              Remove
            </button>
          </div>
        ))}

        <h2 className="text-xl font-bold mt-4">Total: ETB {total}</h2>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Total: ETB {total}</h2>

        <Link to="/checkout">
          <button className="bg-green-500 text-white px-4 py-2 rounded mt-3">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
import { Link } from "react-router-dom";
