import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import MyFooter from "./components/MyFooter";
import HomePage from "./pages/HomePage";
import PatientPage from "./pages/PatientPage";
import AddPatientPage from "./pages/AddPatientPage";
import AddClinicalDataPage from "./pages/AddClinicalDataPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/patient" element={<PatientPage />} />
        <Route path="/addPatient" element={<AddPatientPage />} />
        <Route path="/patient/:id" element={<AddClinicalDataPage />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  )
}

export default App;
