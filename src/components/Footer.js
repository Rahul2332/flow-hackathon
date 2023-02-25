export const Footer = () => {
    return (
        <>
            <div id="footer">
                <footer className="text-center text-lg-start bg-light text-muted" id='footer-content'>
                    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                        <div className="me-5 d-none d-lg-block">
                            <span>Get connected with us on social networks:</span>
                        </div>

                        <div>
                            <a href="" className="me-4 text-reset">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="" className="me-4 text-reset">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="" className="me-4 text-reset">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="" className="me-4 text-reset">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="" className="me-4 text-reset">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="" className="me-4 text-reset">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </section>

                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h5 className=" fw-bold mb-4" style={{color:'#9467fe'}}>
                                        <i className="fas fa-gem me-3"></i>Company name
                                    </h5>
                                    <p>
                                        Here you can use rows and columns to organize your footer content. Lorem ipsum
                                        dolor sit amet, consectetur adipisicing elit.
                                    </p>
                                </div>

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h5 className=" fw-bold mb-4" style={{color:'#9467fe'}}>
                                        Other Links
                                    </h5>
                                    <hr />
                                    <p>
                                        <a href="#!" className="text-reset">Angular</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">React</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Vue</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Laravel</a>
                                    </p>
                                </div>

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h5 className=" fw-bold mb-4" style={{color:'#9467fe'}}>
                                        Blog Posts
                                    </h5>
                                    <hr/>
                                    <p>
                                        <a href="#!" className="text-reset">Pricing</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Settings</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Orders</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Help</a>
                                    </p>
                                </div>

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h5 className=" fw-bold mb-4" style={{color:'#9467fe'}}>Locations</h5>
                                    <hr/>
                                    <p className="fw-bold mb-0">Washington</p>
                                    <p>1559 Alabama Ave SE, DC 20032, Washington, USA</p>
                                    <img src="data:image/png;base64,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" alt=""></img>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="text-center p-4" style={{ background: "#9467fe !important" }}>
                        © 2021 Copyright:
                        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">GoWithTheFlow.com</a>
                    </div>
                </footer>
            </div>
        </>
    );
}