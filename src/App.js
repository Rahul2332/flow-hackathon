import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.css'
import './style/index.scss'

import { HomeBanner } from './components/HomeBanner';
import { Footer } from './components/Footer';
import { Dashboard } from './components/Dashboard';

export const App = () => {
  return (
    <>
      {/* <HomeBanner/> */}
      <Dashboard/>
      {/* <Footer/> */}
    </>
  );
};
