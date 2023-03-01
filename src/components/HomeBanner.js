import Button from '@mui/material/Button';
import { useState } from 'react';
import flowSVG from '../images/flow.svg'
import ethereumImg from '../images/ethereumImg.png'
import * as fcl from "@onflow/fcl";
import tradingImg from '../images/tradingImg.svg'
import cryptoCoin2 from '../images/cryptoCoin2.png'
import angelFlow from '../images/angelFlow.png'
import { useNavigate } from 'react-router-dom';

import company1 from '../images/companies/apple-logo.png';
import company2 from '../images/companies/microsoft.png';
import company3 from '../images/companies/google.png';

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
                {user.loggedIn ?
                  <>
                    <p>{user.addr}</p>
                    <Button onClick={fcl.unauthenticate}> Logout </Button>
                  </>
                  :
                  <>
                    <Button onClick={() => { navigate("/login") }} variant='outlined' className="home-login px-4 py-2 me-2 fw-bold" style={{ borderColor: '#9467fe', color: '#9467fe', textTransform: 'capitalize' }}>
                      Company Login
                    </Button>
                    <Button onClick={fcl.logIn} variant='outlined' className="home-login px-4 py-2 me-2 fw-bold" style={{ borderColor: '#9467fe', color: '#9467fe', textTransform: 'capitalize' }}>
                      User Login
                    </Button>
                  </>
                }
              </div>
            </div>
          </div>
        </nav>
        <div className='container' style={{ paddingTop: '0px' }}>

          <div className='row align-items-center'>
            <div className='col-12 text-center'>
              {/* <h1>Your Globel OTC desk for <br />Cryptocurrencies</h1>
              <p className="text text-primary text-gradient">Transfer USD, EUR, or Crypto and start trading today!</p> */}
              <img className='w-50' src={tradingImg} />
              <h1 className='mb-3'>Invest in everything</h1>
              <p className="mb-5 text text-primary text-gradient w-50 mx-auto">Online platform to invest in <br />
                <span className='text-white fw-bold'> Stocks </span>
                ,
                <span className='text-white fw-bold'> Liquidity Pool </span>
                ,
                <span className='text-white fw-bold'> Staking Pool </span>
              </p>

              <Button  onClick={() => { navigate("/signup") }} variant='contained' className='px-3 py-3 fw-bold me-2' style={{ background: 'linear-gradient(90deg,#9568ff,#9568ff 99.31%)', textTransform: 'capitalize', zIndex: '9' }} >Company Sign Up</Button>
              <Button  onClick={() => { navigate("/user-signup") }} variant='contained' className='px-3 py-3 fw-bold' style={{ background: 'linear-gradient(90deg,#9568ff,#9568ff 99.31%)', textTransform: 'capitalize', zIndex: '9' }} >User Sign Up</Button>
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
          <img className="bg-shape2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAABiCAYAAABAkr0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXOSURBVHgB7Z3dbhtFFMf/449ChIqsfodEIZGAO6T2DZzrkiq5htL4CUgvEBRV1IgKblDTvgBx4QEaygM0b9Dc0at2ERQVgcSqENIk3h3OWds0CajZj5kza2d+0sYrx4rW8/f5z5wzZx3A4/F4PB6Px+PxeDwej8fj8Xg8nlKjcMj48mM9XY3QqNQwffwYwtaHag2OGRkRdg+u0mjQU9MV4HXweQXT6D83eP0rR4HxKYTdLs4ttFQAh9RQcjINbpUOve8PqP8+99LLwOnJ5LRRq2GFHmfhkNJFwldX9HxVYzkZXJUMsFFqdWBypvc4QGu0LryvOnBEqURY/kSfRYR7Ngaf+T8B+rAtzZAthXBABSXBoQBMo1rHNTiiFJFgW4AKfdQmZnpzwQvpYnauJb9ach4JyzTx2hSA4Un4QAGYOs1FDnAqQiIA7Apw4kxvOZoKjbPf3dZtCOPMjv4VYNfa3TTHTtFxElkRzx2cREKJBWAGuYMY4iJICNA4nluAAc273+p5CCFqRxICHKXZ5fQECqMUgp2dxJas5w5ikSAhAK+ATo7DCJRFT0vlDiKRICEAJ2FTb/RyAqMI5A7WI2F5SXMN6A4sC8DZcMXGuxHIHayKkAgwRhFA629Y4oByRHHo2u9+o5dgEWt2JCEAf/LZgqwJ8ByruYO9SBijtbZFAZiJGREBGKu5gxURaCJmAayus3kZmqoeZI7m9yu6CQsYt6NEAGARFimQDRfCVu5gNBJGWQDGVu5gLBJIAL64NiziUoA9GM4djESChABcjiiFAEzNbDQUFkFCgKQ7wkA9yCBNk7lDITuSEmDCVjZcDGO5Q+63JiEA5wDjU6UUgOHcwUhJI1ckSAkwKZeM5cfAJJ1ZBC/AXkzkDpkC/cZH+gNYECCOewd5LLa3gFOvDYcADOcOZJeFJunUkXDjir6kNDoHvY4HM3mMeud0kXSuoeNeS2jyezqJouev28+ZSSrMvTlcvcokxLnz76p15CBVQ/AXS9357c2eAPsHlAeRBzo5Yhjhyc8061FO8Kq1Rhjz0FjwJJ2rsTiVHW2H1bWNpzqkA5sbwLNNYIuOHbKOqNsXwpAAAx79oBN7GiJy5w6pRGh3VKjjuAVBtp4BvzzSGCZokr52Z0Vnjt/UE/P1Tm2VHlYhCNvSUyd90rlp1HNsh2ZaHVVjxdEgOizDZks0Ny5m3XfIJELPlqIFCMK29OtPQ2ZL9Wy7cJkLAtc79TWt9S0I8jgANv7C0EArpc+yvD5XVaamK216CCAI29JQQAJkvfUqlwh9WxJdLf1NkfC47KslEmDukmojI7nrk65sieeIUpJTAKZQkdiFLT0spy3dyisAU0gEF7b0Jy2Qn5RotURXcnvuoipUwCu8XXLIbWn9wkW1iIIY2bOStiWuV5XAltYpiTTyTQBGRDhstkQl/YAEWDDVBGZs9/aw2BILsBNh1mRzsNEt9FG3JRsCMEZFGGlb0ghtCMAYbyYZSVsiASqWBGCsdPSMmi3RX758vpVv/zgNVkQYJVui3bLLtr8LyVpvmytbMroBRPWgd95TN2EZ630ln7bi+1rZvW1qN40TwFtvG3hbBQpyWbHe5VnRXVFbCn8H/vgNxRAUgLEuQrtzZF1DZ9ppKsrDB/n3pZOCnKAAjFibm7Qt5eziW6WKqOgeOiPWdN63JbFOjRztMlyQE7XOAWIisC1B2JbStsv0C3Kzh+LbID//unpTa6xBiDRdfLvqQc7azMTvgalpVRpbslWQy4q4CJRNB2WwpbIIkFwLHHG1Fd+jkkATQuxZLfULcjbrQVlwdkueU1tSWCiLAIwzERzYUhg8QMBfTk65wBpKhPN7kgzYUpD8VKBPNlVvdfwjvakwinV4BDE9F4XtzliAEuP8/yewLUVK36fT/TdXBJRhhyoZ5N7gxrEOKHTDGuJgGAY3LaW4O+/q4k6TLqUxaoPr8Xg8Ho/H4/F4PB6Px+PxeDwez4jwD1fYv3A4odOhAAAAAElFTkSuQmCC" alt=""></img>
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
                  <img src={company2}/>
                </div>
                <div className='icon-info' style={{alignSelf:'center'}}>
                  <h5 className='title mb-0 fw-bold' style={{ color: '#1c2e9e' }}>Microsoft</h5>
                  {/* <span className='text-secondary'>...</span> */}
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
                  <img src={company1} />
                </div>
                <div className='icon-info' style={{alignSelf:'center'}}>
                  <h5 className='title mb-0 fw-bold' style={{ color: '#1c2e9e' }}>Apple</h5>
                  {/* <span className='text-secondary'>...</span> */}
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
                  <img src={company3} />
                </div>
                <div className='icon-info' style={{alignSelf:'center'}}>
                  <h5 className='title mb-0 fw-bold' style={{ color: '#1c2e9e' }}>Google</h5>
                  {/* <span className='text-secondary'>...</span> */}
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