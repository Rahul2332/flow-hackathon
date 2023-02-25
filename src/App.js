import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.css'
import './style/index.scss'

import { NavigationBar } from "./components/NavigationBar"
import { HomeBanner } from './components/HomeBanner';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <>
      {/* <NavigationBar /> */}
      <HomeBanner/>
      <Footer/>
    </>
  );
};
