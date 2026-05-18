import Nav from "./components/Nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from "./components/Footer"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Books from "./pages/Books";
import { books } from "./data.js"
import BookInfo from "./pages/BookInfo"



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" exact element={<Books books={books} />} />
          <Route path="/books/:id" element={<BookInfo books={books} />} />
        </Routes>
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
