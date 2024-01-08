import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import {useSelector} from "react-redux";

function App() {
  const cartItems = useSelector((state) => state.cart.itemsList)
  console.log(cartItems)
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
