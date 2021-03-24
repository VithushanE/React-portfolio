import Header from "./components/header/MainHeader";
import Footer from "./components/footer/footer";
import mainPage from "./pages/mainPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

function App (){

    return (
        <div>
      <Header/>
        
    <mainPage/>
  
        <Footer />

        </div>
    )
}


export default App;