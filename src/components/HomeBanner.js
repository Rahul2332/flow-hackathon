import Button from '@mui/material/Button';
import { useState } from 'react';
import flowSVG from '../images/flow.svg'
import ethereumImg from '../images/ethereumImg.png'
import * as fcl from "@onflow/fcl";
import tradingImg from '../images/tradingImg.svg'
import cryptoCoin2 from '../images/cryptoCoin2.png'
import angelFlow from '../images/angelFlow.png'
import { useNavigate } from 'react-router-dom';

export const HomeBanner = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({ loggedIn: null });
  fcl.currentUser.subscribe(setUser)

  return (
    <>
      <div className='main-bnr style-1' style={{ flexDirection: 'column', paddingTop: '0px' }}>
        <nav className="shadow-lg navbar sticky-top navbar-expand-lg navbar-light text-dark" id="home-nav" style={{ zIndex: '9' }}>
          <div className="container">
            <a className="navbar-brand me-2" href="https://mdbgo.com/">
              <img
                src={angelFlow}
                height="50px"
                alt="MDB Logo"
                loading="lazy"
                style={{ marginTop: "-1px" }}
              />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarButtonsExample"
              aria-controls="navbarButtonsExample"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarButtonsExample">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#"></a>
                </li>
              </ul>

              <div className="d-flex align-items-center">
                <Button onClick={()=>{navigate("/login")}} variant='outlined' className="home-login px-4 py-2 me-2 fw-bold" style={{ borderColor: '#9467fe', color: '#9467fe', textTransform: 'capitalize' }}>
                  {user.loggedIn ? 
                    <>
                      <p>{user.addr}</p>
                      <Button onClick={fcl.unauthenticate}> Logout </Button> 
                    </>
                  : "Login"}
                </Button>
                <Button className='fw-bold px-4 py-2' style={{textTransform:'capitalize'}} variant='outlined' color='error'>Log Out</Button>
              </div>
            </div>
          </div>
        </nav>
        <div className='container' style={{ paddingTop: '0px' }}>

          <div className='row align-items-center'>
            <div className='col-12 text-center'>
              {/* <h1>Your Globel OTC desk for <br />Cryptocurrencies</h1>
              <p className="text text-primary text-gradient">Transfer USD, EUR, or Crypto and start trading today!</p> */}
              <img className='w-50' src={tradingImg}/>
              <h1 className='mb-3'>Invest in everything</h1>
              <p className="mb-5 text text-primary text-gradient w-50 mx-auto">Online platform to invest in <br/>
              <span className='text-white fw-bold'> Stocks </span>
               , 
              <span className='text-white fw-bold'> Liquidity Pool </span>
               , 
              <span className='text-white fw-bold'> Staking Pool </span>
              </p>
              
              <Button onClick={()=>{navigate("/signup")}} variant='contained' className='px-5 py-3 fw-bold' style={{ background: 'linear-gradient(90deg,#9568ff,#9568ff 99.31%)', textTransform: 'capitalize' }} >Sign Up</Button>
              <ul className='image-before'>
                <li className='left-img'>
                  <img src="https://cryptozone.dexignzone.com/frontend/react/static/media/img1.90c6f431a59671ada976.png"></img>
                </li>
                <li className='right-img'>
                  <img src={cryptoCoin2}></img>
                </li>
              </ul>
            </div>
          </div>
          <img className="bg-shape1" src="data:image/png;base64,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" alt=""></img>
          <img className="bg-shape2" src="data:image/png;base64,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" alt=""></img>
          <img className="bg-shape3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAlCAYAAAA9ftv0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUGSURBVHgB1ZhPchtVEMa/dlSVrW4g3wCdgOgGzpZVFHZhZRepokhVypMCyoTCsbFJhaIgioDAggXyCWJOEJ8AxRfAYhcSz+v0+98zGklJ7NjOq4xn5r03M7/u93X3U4D3tNGiCX/+wE+ZcVACdz66Qc9wQdpc8L+2uP3yMv611wJPDDziF2LA2vkbsDRv8HkLXWNA9mAj8AZ9voSnf+zy+uPvuYNzbEsLxnv2j3jbH8beoC2GrOMY+4+3uI9zaovArwgwO29b9mCAvTGMZel++Os9/ue3e3wNZ9zmavz3HXawrrFjpnAvd/6a/R2Y8EyMKT6+SUOcQZsJLtDW209sUCLAR2jXF2/9KhCiDYy/UeL69c/fbQDPlIoAuMBM+uYkFXJyt0FbysF5Tph/xRDGP2/w4Kcv310AzwQXiB5CQLLXdISzfQ6W4PTPIQ5sH8cMJPP7Vj4/fsWDBwUv45TbTKn8sslHcmo7I3xA2r/Ju0Qe0o6rOMhjUT5ZSoWs0PBGcToSagQffMPdJcnXLv1FJp4+R0jn7dBHOQacpfEd7I04lPvvPrlD2zhhmyWVbvpglEc+c9Q7vFQorUiUSpCWeDjHhzeuI8fW/XUe3799shrQCC7uWlEBySpAEXSf9KyMopRtgiE6C7E3hEIh68hjg53bPN55SwMapfLwLo9FAp2ahrMEgiSsjkmBxbG6rGo1YCpe5N+BGLO29jXt423BBxu8bNNZ+rAqMuHEMbdXAIPW01Q1rt7FalWIlVHkz8PyJYqbm3SIBW1KKqXkb8Qyz8GBUbM57dW9ylYG/kIdnFOp8SnSwYbcn+pC2ELYWOnTJYw3P+PBxur8FDoFLg/30tJnPVe0XS9KWlLKi3FjxjB5Bdy9Ag5O0u8kLnGt1cL42095IEfntcCXGB+amrei95FlwiYGpJ4bPF3rJ6MDOzuF4yrE6guTjbDXsvr90mD/7iqv1zkrGh8U8sOhhSOowDPTe5WsV1QLUMrtrPYxSFquzoOfp+4rAU7BOcjvOZT+4taO38RVwB98wT154ImuikBKa9DZowKKVF2Rhnk6SOtZJmUbEwyBkpoqYm4lsgPsLnStpcHJ4CooFxEFSI0Zwn7LOHUkr6ZvexjS88MgAUka2b5qta1mJ//MRC5GAj0sWziogEv7oL7/iC9MXzDKcfGlaunrS67AkxycDJAkSH53nyu0ahNWsMU2TeJABVyCoacLSpABK/j0QdbGIAdiU7Gp5XuYPE7Jo6WDd54Vw0bHDbC6JfDdgnsp6sMH7YtVcFYMQPZ2TH2xiob0o1ZMG2hCUJLXdrDfe9bMh20Ep1J+OKgB79pKkFCIdAqeyV5GXgGjjItjJq5cDkTr8Yn0jWRg+EJKfrG7GLYRXF60ogBiSeaka/KbqFBEvLHaML0CepVCgNrYkQubavcS7PabwTaCC0uXMrD7GNVSWtQ8kH4oR1AtG1LOsH1HHGCfnxB2CnzrFtv9SduEiFeFIwVRSAzQHtaZAmpMJk+kayTH8H86PdgpcHF31+3uuJZ7Q2NT86TJAWhXIGjKwu1Z2NP07HxwworhSsBlaK5kjJxx/Jz/5Dnv2TOAnQb3/xWRIj8CQ6U2pWErgz25OHPYCrjd9wr0sr3RXlepz1JbuJHs1M4VVrfW5ZaU+SZ5wGu2LC8OrG4tyc9XVXl2FaxcEtjjiwerW8vKRGAfOdjyYsNWWrHKbbyH7RUC0vLbckXj2gAAAABJRU5ErkJggg==" alt=""></img>
          <img className="bg-shape4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAlCAYAAAA9ftv0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUGSURBVHgB1ZhPchtVEMa/dlSVrW4g3wCdgOgGzpZVFHZhZRepokhVypMCyoTCsbFJhaIgioDAggXyCWJOEJ8AxRfAYhcSz+v0+98zGklJ7NjOq4xn5r03M7/u93X3U4D3tNGiCX/+wE+ZcVACdz66Qc9wQdpc8L+2uP3yMv611wJPDDziF2LA2vkbsDRv8HkLXWNA9mAj8AZ9voSnf+zy+uPvuYNzbEsLxnv2j3jbH8beoC2GrOMY+4+3uI9zaovArwgwO29b9mCAvTGMZel++Os9/ue3e3wNZ9zmavz3HXawrrFjpnAvd/6a/R2Y8EyMKT6+SUOcQZsJLtDW209sUCLAR2jXF2/9KhCiDYy/UeL69c/fbQDPlIoAuMBM+uYkFXJyt0FbysF5Tph/xRDGP2/w4Kcv310AzwQXiB5CQLLXdISzfQ6W4PTPIQ5sH8cMJPP7Vj4/fsWDBwUv45TbTKn8sslHcmo7I3xA2r/Ju0Qe0o6rOMhjUT5ZSoWs0PBGcToSagQffMPdJcnXLv1FJp4+R0jn7dBHOQacpfEd7I04lPvvPrlD2zhhmyWVbvpglEc+c9Q7vFQorUiUSpCWeDjHhzeuI8fW/XUe3799shrQCC7uWlEBySpAEXSf9KyMopRtgiE6C7E3hEIh68hjg53bPN55SwMapfLwLo9FAp2ahrMEgiSsjkmBxbG6rGo1YCpe5N+BGLO29jXt423BBxu8bNNZ+rAqMuHEMbdXAIPW01Q1rt7FalWIlVHkz8PyJYqbm3SIBW1KKqXkb8Qyz8GBUbM57dW9ylYG/kIdnFOp8SnSwYbcn+pC2ELYWOnTJYw3P+PBxur8FDoFLg/30tJnPVe0XS9KWlLKi3FjxjB5Bdy9Ag5O0u8kLnGt1cL42095IEfntcCXGB+amrei95FlwiYGpJ4bPF3rJ6MDOzuF4yrE6guTjbDXsvr90mD/7iqv1zkrGh8U8sOhhSOowDPTe5WsV1QLUMrtrPYxSFquzoOfp+4rAU7BOcjvOZT+4taO38RVwB98wT154ImuikBKa9DZowKKVF2Rhnk6SOtZJmUbEwyBkpoqYm4lsgPsLnStpcHJ4CooFxEFSI0Zwn7LOHUkr6ZvexjS88MgAUka2b5qta1mJ//MRC5GAj0sWziogEv7oL7/iC9MXzDKcfGlaunrS67AkxycDJAkSH53nyu0ahNWsMU2TeJABVyCoacLSpABK/j0QdbGIAdiU7Gp5XuYPE7Jo6WDd54Vw0bHDbC6JfDdgnsp6sMH7YtVcFYMQPZ2TH2xiob0o1ZMG2hCUJLXdrDfe9bMh20Ep1J+OKgB79pKkFCIdAqeyV5GXgGjjItjJq5cDkTr8Yn0jWRg+EJKfrG7GLYRXF60ogBiSeaka/KbqFBEvLHaML0CepVCgNrYkQubavcS7PabwTaCC0uXMrD7GNVSWtQ8kH4oR1AtG1LOsH1HHGCfnxB2CnzrFtv9SduEiFeFIwVRSAzQHtaZAmpMJk+kayTH8H86PdgpcHF31+3uuJZ7Q2NT86TJAWhXIGjKwu1Z2NP07HxwworhSsBlaK5kjJxx/Jz/5Dnv2TOAnQb3/xWRIj8CQ6U2pWErgz25OHPYCrjd9wr0sr3RXlepz1JbuJHs1M4VVrfW5ZaU+SZ5wGu2LC8OrG4tyc9XVXl2FaxcEtjjiwerW8vKRGAfOdjyYsNWWrHKbbyH7RUC0vLbckXj2gAAAABJRU5ErkJggg==" alt=""></img>
        </div>
      </div>

      <div className='container justify-content-center' style={{ marginTop: '-100px' }}>
        <div className='row'>
          <div className='col my-3 d-flex justify-content-center'>
            <div className='icon-box shadow-lg'>
              <div className='mb-3 d-flex'>
                <div className='icon-media me-3'>
                  <img src="data:image/png;base64,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"></img>
                </div>
                <div className='icon-info'>
                  <h5 className='title mb-0 fw-bold' style={{ color: '#1c2e9e' }}>Bitcoin</h5>
                  <span className='text-secondary'>BTC</span>
                </div>
              </div>
              <div className='icon-content'>
                <div className='d-flex'>
                  <div className='w-50'>
                    <h6 className='mb-0 fw-bold' style={{ color: '#1c2e9e' }}>$23,471.80 USD</h6>
                    <span className='text-secondary'>Latest Price</span>
                  </div>
                  <div className='w-50 text-end'>
                    <h6 className='mb-0 text-danger'>-1.26%</h6>
                    <span className='text-secondary'>24h change</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col my-3 d-flex justify-content-center'>
            <div className='icon-box shadow-lg'>
              <div className='mb-3 d-flex'>
              <div className='icon-media me-3'>
                <img src={flowSVG}/>
              </div>
                <div className='icon-info'>
                  <h5 className='title mb-0 fw-bold' style={{ color: '#1c2e9e' }}>Flow</h5>
                  <span className='text-secondary'>FLOW</span>
                </div>
              </div>
              <div className='icon-content'>
                <div className='d-flex'>
                  <div className='w-50'>
                    <h6 className='mb-0 fw-bold' style={{ color: '#1c2e9e' }}>$1.19 USD</h6>
                    <span className='text-secondary'>Latest Price</span>
                  </div>
                  <div className='w-50 text-end'>
                    <h6 className='mb-0 text-danger'>-1.26%</h6>
                    <span className='text-secondary'>24h change</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col my-3 d-flex justify-content-center'>
            <div className='icon-box shadow-lg'>
              <div className='mb-3 d-flex'>
              <div className='icon-media me-3'>
                <img src={ethereumImg}/>
              </div>
                <div className='icon-info'>
                  <h5 className='title mb-0 fw-bold' style={{ color: '#1c2e9e' }}>Ethereum</h5>
                  <span className='text-secondary'>ETH</span>
                </div>
              </div>
              <div className='icon-content'>
                <div className='d-flex'>
                  <div className='w-50'>
                    <h6 className='mb-0 fw-bold' style={{ color: '#1c2e9e' }}>$1,638.44 USD</h6>
                    <span className='text-secondary'>Latest Price</span>
                  </div>
                  <div className='w-50 text-end'>
                    <h6 className='mb-0 text-danger'>-1.26%</h6>
                    <span className='text-secondary'>24h change</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}