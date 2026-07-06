import { useState, useEffect } from "react";
import { products as staticProducts } from "../data/products";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const categories = [...new Set(products.map((p) => p.category))];

  useEffect(() => {
    const cached = JSON.parse(localStorage.getItem("products_cache"));
    const now = Date.now();

    if (cached && now - cached.timestamp < 5 * 60 * 1000) {
      setProducts(cached.data);
    } else {
      setTimeout(() => {
        setProducts(staticProducts);
        localStorage.setItem(
          "products_cache",
          JSON.stringify({
            data: staticProducts,
            timestamp: now,
          }),
        );
      }, 500);
    }
  }, []);

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (category ? p.category === category : true),
  );

  return (
    <div>
      <Navbar />

      <div className="p-4">
        <div className="flex gap-4 mb-4">
          <input
            className="border p-2 rounded w-full"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border p-2 rounded"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>

            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
