import { Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer/Footer"
import Header from "./layout/Header";
import { routes } from "./helpers/routes";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <Routes>
        {routes.map((item) => (
          <Route path={item.path} element={<item.element />} key={item.path}/>
        ))}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
