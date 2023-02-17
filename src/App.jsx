import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import ToDo from "./Components/ToDo/ToDo";
import { When } from "react-if";
import SettingsForm from "./Components/SettingsForm";
import { AuthContext } from "./Context/Auth";
import Footer from './Components/Footer';

export default function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <BrowserRouter>
        <Header />
        <When condition={isLoggedIn}>
          <Routes>
            <Route path='/' element={<ToDo />} />
            <Route path='/settings' element={<SettingsForm />} />
          </Routes>
        </When>
        <Footer />
      </BrowserRouter>
    </>
  );
}
