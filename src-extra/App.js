import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import About from "./pages/About"
import Footer from "./components/footer/footer"

function App() {
  return (
  <div>   
    <Router>
    <Navbar />
  <main>
    <Route exact path="/" component={About} />

  </main>
    </Router>
    <Footer />
    </div>

  
  )
}

export default App;