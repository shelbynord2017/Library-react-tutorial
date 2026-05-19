import Nav from "./components/Nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from "./components/Footer"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Books from "./pages/Books";
import { books } from "./data.js"
import BookInfo from "./pages/BookInfo"
import Cart from "./pages/Cart"
import React, { useState, useEffect } from "react"


function App() {
  const [cart, setCart] = useState([])
  

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }])
  }

  function changeQuantity(book, quantity) {
    setCart(
    cart.map((item) => item.id === book.id
        ? {
          ...item, 
          quantity: +quantity, 
        }
        : item
      )
    )
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

useEffect(() => {
  console.log(cart)
}, [cart])

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route path="/books/:id" element={
            <BookInfo 
              books={books} 
              addToCart={addToCart} 
              cart={cart} />} 
          />
          <Route path="/cart" element={
            <Cart 
              books={books} 
              cart={cart} 
              changeQuantity={changeQuantity} 
              removeItem={removeItem} />} 
            />
        </Routes>
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
