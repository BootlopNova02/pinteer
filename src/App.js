import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";
import './script/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import './script/testi.js';

const Header = lazy(() => import("./component/header/index"));
const Footer = lazy(() => import("./component/footer/index"));
const Footer2 = lazy(() => import("./component/bottom/index"));
const Home = lazy(() => import("./pages/Home"));
const Magang = lazy(() => import("./pages/Magang"));
const TentangKami = lazy(() => import("./pages/TentangKami"));
const Kontak = lazy(() => import("./pages/Kontak"));


function App() {
  return (
    <Router>
      <Suspense fallback={null}>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/magang' component={Magang} />
          <Route path='/tentangkami' component={TentangKami} />
          <Route path='/kontak' component={Kontak} />
        </Switch>
        <Footer />
        <Footer2 />
      </Suspense>
    </Router>
  );
};

export default App;
