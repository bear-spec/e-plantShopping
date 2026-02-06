import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 200, category: "Indoor", image: "aloe.jpg" },
  { id: 2, name: "Snake Plant", price: 250, category: "Indoor", image: "snake.jpg" },
  { id: 3, name: "Money Plant", price: 180, category: "Indoor", image: "money.jpg" },
  { id: 4, name: "Rose", price: 150, category: "Outdoor", image: "rose.jpg" },
  { id: 5, name: "Tulsi", price: 100, category: "Medicinal", image: "tulsi.jpg" },
  { id: 6, name: "Mint", price: 80, category: "Medicinal", image: "mint.jpg" },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isAdded = id => cartItems.some(item => item.id === id);

  return (
    <div>
      <h2>Plants</h2>
      {plants.map(plant => (
        <div key={plant.id}>
          <img src={plant.image} alt={plant.name} width="100" />
          <h4>{plant.name}</h4>
          <p>₹{plant.price}</p>
          <button
            disabled={isAdded(plant.id)}
            onClick={() => dispatch(addItem(plant))}
          >
            {isAdded(plant.id) ? "Added" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
