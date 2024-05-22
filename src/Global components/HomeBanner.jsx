import React from "react";

function HomeBanner() {
    return (
        <section className="home-banner d-flex align-items-center justify-content-center mx-5 mt-5">
            <div className="inner-content px-4">
                <div className="row">
                    <div className="col-md-3">
                        <div className="left-content pb-3">
                            <p className="mb-0">REMEMBER TO SELECT THE</p>
                            <h2 className="mb-0">COUNTRY</h2>
                            <p className="">YOU WANT THE FILE FOR</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="slider-center">
                            <div className="carousel-inner">
                                <div className="carousel-item f-item active">
                                    <div className="top-info">
                                        <p className="mb-0">REMEMBER TO ADD</p>
                                        <h2 className="mb-0">WEIGHT </h2>
                                        <p className="">TO YOUR PRODUCTS</p>
                                    </div>
                                    <div className="right-bottom-info">
                                        <h1>KG</h1>
                                    </div>
                                </div>
                                <div className="carousel-item s-item">
                                    <div className="top-info">
                                        <p className="mb-0">REMEMBER TO ADD</p>
                                        <h2 className="mb-0">WEIGHT </h2>
                                        <p className="">TO YOUR PRODUCTS</p>
                                    </div>
                                    <div className="right-bottom-info">
                                        <h1>KG</h1>
                                    </div>
                                </div>
                                <div className="carousel-item t-item">
                                    <div className="top-info">
                                        <p className="mb-0">REMEMBER TO ADD</p>
                                        <h2 className="mb-0">WEIGHT </h2>
                                        <p className="">TO YOUR PRODUCTS</p>
                                    </div>
                                    <div className="right-bottom-info">
                                        <h1>KG</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="right-content pt-5">
                            <p className="mb-0 text-end">REMEMBER TO </p>
                            <h2 className="mb-0">CATEGORIES </h2>
                            <p className="mt-0 text-end"> ALL YOUR PRODUCTS</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeBanner;
