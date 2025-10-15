// import logo from './logo.svg';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Home from './Components/CivicHome/Home';
import FeedbackForm from './Components/FeedbackForm/FeedbackForm';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
<>
<Navbar/>
<Home/>
<AboutUs/>
<FeedbackForm/>
<Footer/>
</>
  );
}

export default App;
