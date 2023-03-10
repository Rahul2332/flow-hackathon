import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/main.css";
import "./style/index.scss";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { HomeBanner } from "./components/HomeBanner";
import { Footer } from "./components/Footer";
import { Dashboard } from "./components/Dashboard";
// import {CandlestickChart}  from './components/CandlestickChart';

import { SignupPage } from './components/SignupPage';
import { SignupPageSign } from './components/SignupPageSign';
import {Home} from './components/Home';
import { LiquidityPool } from './components/LiquidityPool';
import { Navbar } from "./components/Navbar";
import { WhyUs } from "./components/WhyUs";
import { OneStopSolution } from "./components/OneStopSolution";
import { Admin } from "./components/Admin";
import { UserSignup } from "./components/UserSignup";

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
          <Route path="/login" element={<SignupPage />} />
          <Route path="/user-signup" element={<UserSignup />} />
          <Route path="/signup" element={<SignupPageSign />} />
          <Route path='/liquidity-pool' element={<LiquidityPool/>} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </>
  );
};
