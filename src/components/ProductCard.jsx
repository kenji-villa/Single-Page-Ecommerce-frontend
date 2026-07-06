import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt=""
        className="w-full h-40 object-cover mb-3"
      />

      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">ETB {product.price}</p>

      <p className={product.stock > 0 ? "text-green-600" : "text-red-500"}>
        {product.stock > 0 ? "In Stock" : "Out of Stock"}
      </p>

      <div className="flex gap-2 mt-3">
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Add
        </button>

        <Link
          to={`/product/${product.id}`}
          className="border px-3 py-1 rounded"
        >
          View
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
