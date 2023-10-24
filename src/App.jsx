import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./page/Layout";
import Home from "./page/Home";
import Contact from "./page/Contact";
import Reservation from "./page/Reservation";
import Chat from "./page/chat";
import Register from "./page/Register";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Register" element={<Register />} />
        
      </Route>
    </Routes>
  </BrowserRouter>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);