import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import CartList from "./components/CartList";
import 'bootstrap/dist/css/bootstrap.min.css';

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cartState, setCartState] = useState([]);
  const [currentM, setCurrentM] = useState({ text: '', price: '', key: '' });

  const handleInput = (item) => {
    setCartState([...cartState, { text: item.name, price: item.price, key: Date.now() }]);
    console.log(cartState)
  };

  return (
    <div class="flex-col" className="App">
      <div class='d-flex row'>
        <div class="flex col-sm-7">
          <h1>My Bakery</h1>
          <div class='row row-cols-md-2'>
            {bakeryData.map((item, index) => (
              <BakeryItem item={item} handleInput={handleInput} />
            ))}
          </div>
        </div>
        <aside class='col-sm-5'>
          <h2>Cart</h2>
          <CartList cartState={cartState}/>
        </aside>
      </div>
    </div>
  );
}

export default App;
