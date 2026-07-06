import Navbar from "../components/Navbar";

function Orders() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div>
      <Navbar />

      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Order History</h1>

        {orders.length === 0 ? (
          <p className="text-gray-500">No orders yet </p>
        ) : (
          orders.map((order, i) => (
            <div key={i} className="bg-white shadow rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-500">
                {new Date(order.date).toLocaleString()}
              </p>

              <div className="mt-2">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                    <span>{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="mt-3 font-bold text-right">
                Total: {order.total}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Orders;
