import './utils/styles/_globalStyles.scss'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// components
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

// views
import Home from "./views/home/home";
import NotFound from "./views/notFound/notFound";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path={"/"} element={<Navigate to="/home" />} />
          <Route path={"/home"} element={<Home />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
