import Nav from "./components/Nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from "./components/Footer"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from "./pages/Home"
import Books from "./pages/Books";
import { books } from "./data.js"
import BookInfo from "./pages/BookInfo"



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books" exact render={() => <Books books={books} />} />
          <Route path="/books/1" render={() => <BookInfo books={books} />} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
