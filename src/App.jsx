import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <nav>
          <ul>
            <li>
              <Link to ="/">Home</Link>
            </li>

          </ul>
        </nav>

        <switch>
          <Route path='/' exact>
            <Home />
          </Route>
        </switch>
      </div>
      <Footer />
    </Router>
  )
}