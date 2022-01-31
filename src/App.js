import * as React from "react"
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import TopImage from './components/TopImage';


function App() {
  return (
    <div className="App">
      <TopImage />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
