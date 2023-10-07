import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./components/NavBar";
import MyFooter from "./components/MyFooter";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <HomePage />
      <MyFooter />
    </BrowserRouter>
  )
}

export default App;
