export const OneStopSolution = () => {
    return (
        <div className="py-5 bg-white">
            <div className="w-50 mx-auto">
                <h1 className="fw-bold text-center">One-stop solution to buy and sell <mark className="text-gradient" style={{ background: 'none' }}>cryptocurrency</mark> with Cash</h1>
            </div>
            <div className="my-5 container">
                <div className="row">
                    <div className="col">
                        <div className="icon-bx-wraper style-3 shadow-lg rounded-4 my-3" style={{ height: '350px', width: '320px' }}>
                            <div className="icon-media">
                            <img src="https://cryptozone.dexignzone.com/frontend/react/static/media/icon9.f5125a1b5ffa634d35f1e4a3628589ce.svg"/>
                            </div>
                            <div className="icon-content">
                                <h3 className="title fw-bold text-center">Competitive Pricing</h3>
                            </div>
                            <p className="text-center text-secondary">Flow's sharding architecture allows it to process transactions in parallel, making it highly scalable. This means that it can support a large number of users.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="icon-bx-wraper style-3 shadow-lg rounded-4 my-3" style={{ height: '350px', width: '320px' }}>
                            <div className="icon-media">
                            <img src="https://cryptozone.dexignzone.com/frontend/react/static/media/icon10.641a351a05f606bb3f3f960ae2ce0b95.svg"/>
                            </div>
                            <div className="icon-content">
                                <h3 className="title fw-bold text-center">Low Transaction Fees</h3>
                            </div>
                            <p className="text-center text-secondary">Flow has a unique fee model that allow users to use DeFi applications built on Flow, reducing the barrier to entry and making it more accessible to a wider range of users.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="icon-bx-wraper style-3 shadow-lg rounded-4 my-3" style={{ height: '350px', width: '320px' }}>
                            <div className="icon-media">
                            <img src="https://cryptozone.dexignzone.com/frontend/react/static/media/icon11.b57775f2326f7e657c75000b7edf2ff9.svg"/>
                            </div>
                            <div className="icon-content">
                                <h3 className="title fw-bold text-center">Robost Security</h3>
                            </div>
                            <p className="text-center text-secondary">Flow uses an isolation approach to smart contract execution, preventing them from interfering with each other, which enhances security and reduces the risk of hacks.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}