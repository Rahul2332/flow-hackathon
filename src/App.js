import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.css'
import './style/index.scss'

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { HomeBanner } from './components/HomeBanner';
import { Footer } from './components/Footer';
import { Dashboard } from './components/Dashboard';
import {CandlestickChart}  from './components/CandlestickChart';
import {ReactGraph} from './components/ReactGraph'
import {Navbar} from './components/Navbar'
import {WhyUs} from './components/WhyUs'
import { OneStopSolution } from './components/OneStopSolution';
import { SignupPage } from './components/SignupPage';
import {Home} from './components/Home';

export const App = () => {
  return (
    <>
      {/* <Navbar/>
      <HomeBanner/>
      <WhyUs/>
      <OneStopSolution/> */}
      {/* <SignupPage/> */}
      {/* <Dashboard/> */}
      {/* <CandlestickChart/> */}
      {/* <ReactGraph/> */}
      {/* <Footer/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
    </Router>
    </>
  );
};
