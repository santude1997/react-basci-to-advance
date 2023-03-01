import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  let name = "Santu De"
  return (
    <>
    <Header />
      <h1>{name}</h1>
    <Footer />
    </>
  );
}

export default App;
