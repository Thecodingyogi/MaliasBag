import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Save cart data to local storage whenever the cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, []);

  // Handle quantity change for a product in the cart
  const handleQuantityChange = (productId, newQuantity) => {
    const quantity = parseInt(newQuantity, 10);
    if (!isNaN(quantity) && quantity > 0) {
      updateQuantity(productId, quantity);
    }
  };

  // Handle removing a product from the cart
  const handleRemoveItem = (productId) => {
    const productIndex = cart.findIndex((product) => product.id === productId);

    if (productIndex !== -1 && cart[productIndex].quantity > 1) {
      updateQuantity(productId, cart[productIndex].quantity - 1);
    } else if (productIndex !== -1) {
      removeFromCart(productId);
    }
  };

  // Calculate total amount
  const totalAmount = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  // Format the total amount for display
  const formattedTotalAmount = `KSH ${totalAmount.toLocaleString()}`;

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <>
          <p className="text-xl">Your cart is empty.</p>
          <Link
            to="/shop"
            className="text-[#BC4C2A] text-sm my-6 hover:underline"
          >
            Back to Shop
          </Link>
        </>
      ) : (
        <div>
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between mb-4 p-4 bg-white rounded-lg shadow-md"
            >
              <div className="flex items-center">
                <img
                  src={product.image} // Assuming each product has an 'image' property
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p>Price: Ksh {product.price}</p>
                  <label htmlFor={`quantity-${product.id}`}>Quantity:</label>
                  <input
                    id={`quantity-${product.id}`}
                    type="number"
                    value={product.quantity}
                    onChange={(e) =>
                      handleQuantityChange(product.id, e.target.value)
                    }
                    className="w-12 p-1 text-center border border-gray-300"
                  />
                </div>
              </div>
              <button
                onClick={() => handleRemoveItem(product.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-8">
            <p className="text-xl font-semibold">
              Total Amount: {formattedTotalAmount}
            </p>
            <div className="flex justify-between items-center">
              <Link to="/shop" className="text-[#BC4C2A] hover:underline">
                Back to Shop
              </Link>
              <Link to="/checkout">
                <button
                  className="bg-[#BC4C2A] text-[#fff] rounded-sm px-4 py-2 mx-4"
                  type="button"
                >
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
