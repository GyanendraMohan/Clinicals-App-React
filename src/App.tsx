import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./components/NavBar";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <MyFooter />
    </BrowserRouter>
  )
}

export default App;
