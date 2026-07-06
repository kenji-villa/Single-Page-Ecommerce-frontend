import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center mt-10">Product not found</h2>;
  }

  return (
    <div>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow p-4 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-h-[400px] object-contain hover:scale-105 transition duration-300"
          />
        </div>

        <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

            <p className="text-gray-600 mb-4">{product.description}</p>

            <p className="text-2xl font-semibold text-blue-600 mb-4">
              ETB {product.price}
            </p>

            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                product.stock > 0
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          <button
            onClick={() => addToCart(product)}
            disabled={product.stock === 0}
            className={`mt-6 py-3 rounded-lg text-white font-semibold transition ${
              product.stock > 0
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
