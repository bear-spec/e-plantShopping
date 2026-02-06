import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../redux/CartSlice";

function CartItem() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () =>
    items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>

      {items.map(item => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>
          <p>Total: ₹{item.price * item.quantity}</p>

          <button
            onClick={() =>
              item.quantity > 1
                ? dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                : dispatch(removeItem(item.id))
            }
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
            }
          >
            +
          </button>
        </div>
      ))}

      <h3>Total Amount: ₹{calculateTotalAmount()}</h3>

      <button>Checkout (Coming Soon)</button>
      <button>Continue Shopping</button>
    </div>
  );
}

export default CartItem;
