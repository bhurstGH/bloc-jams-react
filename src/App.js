import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <Link to='/'>Landing</Link>
            <Link to='/library'>Library</Link>
          </nav>
        </header>
        <main>
          <Route exact path="/" component={Logo} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/" component={LibraryButton} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

const Logo = () => <img className="logo" src="/assets/images/bloc_jams_logo.png" alt="Bloc Jams logo" />;

const LibraryButton = () => (
  <Link to='library'><button className="library-button" type="button">Go to Library</button></Link>
)
export default App;
