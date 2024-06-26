import "./App.css";
import Home from "./components/Home";
import Item from "./components/Item";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Otp from "./components/Otp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact strict path="/home" element={<Home />}></Route>
        <Route exact strict path="/Menu" element={<Menu />}></Route>
        <Route exact strict path="/Item" element={<Item />}></Route>
        <Route exact strict path="/Cart" element={<Cart />}></Route>
        <Route exact strict path="/home" element={<Home />}></Route>
        <Route exact strict path="/otp" element={<Otp />}></Route>
        <Route exact strict path="/login" element={<Login />}></Route>
        <Route exact strict path="/*" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
