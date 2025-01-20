import React from "react";
import CategoriesBar from "../Components/CategoriesBar";

const Product = () => {
  return (
    <div className="content-wrapper">
      <div className="fourteen-forty">
        <div className="layout row">
          <CategoriesBar />
          <div className="col-md-9">
            <main id="content">
              <ul className="breadcrumb">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/categories">
                    Categories
                  </a>
                </li>
                <li>Bank Logs</li>
              </ul>

              <article id="box-category">
                <div className="row" style={{ marginBottom: "0" }}>
                  <div className="hidden-xs hidden-sm col-md-4">
                    <div
                      className="thumbnail"
                      style={{ marginBottom: "var(--gutter-y)" }}
                    >
                      <img
                        src="http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/cache/5c/5c606233b144ba4cf197bbdd42bebf5236316cd0_480x320_c.png?_=1735989873"
                        style={{ aspectRatio: "3/2" }}
                      />
                    </div>
                  </div>

                  <div className="col-md-8">
                    <h1 className="title">Bank Of America(BOA)</h1>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <div id="box-filter" className="box">
                      {/* enctype="application/x-www-form-urlencoded" */}
                      <form
                        name="filter_form"
                        method="get"
                        accept-charset="UTF-8"
                      >
                        <div className="filters">
                          <div className="input-group">
                            <span className="input-group-icon">
                              <i className="fa fa-search fa-fw"></i>
                            </span>
                            <input
                              className="form-control"
                              type="search"
                              name="product_name"
                              value=""
                              data-type="search"
                              autoComplete="off"
                              data-token-group="name"
                              data-token-title="Name"
                              placeholder="Filter by product name"
                            />
                          </div>

                          <div className="dropdown" style={{ flexGrow: "0" }}>
                            <div
                              className="form-control"
                              data-toggle="dropdown"
                            >
                              Sort By{" "}
                            </div>
                            <ul className="dropdown-menu">
                              <li>
                                <label className="option">
                                  <input
                                    className="form-check"
                                    type="radio"
                                    name="sort"
                                    value="name"
                                  />{" "}
                                  <span className="title">Name</span>
                                </label>
                              </li>
                              <li>
                                <label className="option">
                                  <input
                                    className="form-check"
                                    type="radio"
                                    name="sort"
                                    value="price"
                                    checked
                                  />{" "}
                                  <span className="title">Price</span>
                                </label>
                              </li>
                              <li>
                                <label className="option">
                                  <input
                                    className="form-check"
                                    type="radio"
                                    name="sort"
                                    value="popularity"
                                  />{" "}
                                  <span className="title">Popularity</span>
                                </label>
                              </li>
                              <li>
                                <label className="option">
                                  <input
                                    className="form-check"
                                    type="radio"
                                    name="sort"
                                    value="date"
                                  />{" "}
                                  <span className="title">Date</span>
                                </label>
                              </li>
                            </ul>
                          </div>

                          <div
                            className="btn-group btn-group-inline"
                            data-toggle="buttons"
                            style={{ flexGrow: "0" }}
                          >
                            <label className="btn btn-default active">
                              <input
                                type="radio"
                                name="list_style"
                                value="columns"
                                checked
                              />
                              <i className="fa fa-th"></i>
                            </label>
                            <label className="btn btn-default">
                              <input
                                type="radio"
                                name="list_style"
                                value="rows"
                              />
                              <i className="fa fa-th-list"></i>
                            </label>
                          </div>
                        </div>

                        <div className="tokens"></div>
                      </form>
                    </div>

                    <section className="listing products columns">
                      <article className="product">
                        <a
                          className="link"
                          href="http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/bank-logs-c-4/usa-bank-logs-c-5/bank-of-americaboa-c-27/bank-of-americaboa-p-77"
                          title="Bank Of America(BOA)"
                          data-id="77"
                          data-sku=""
                          data-name="Bank Of America(BOA)"
                          data-price="250.00"
                        >
                          <div className="image-wrapper">
                            <img
                              className="image img-responsive"
                              src="http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/cache/45/45eeb4ddf9c1b68d31e94db516230a626c137efd_320x320_fwb.jpg?_=1735989827"
                              srcSet="http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/cache/45/45eeb4ddf9c1b68d31e94db516230a626c137efd_320x320_fwb.jpg?_=1735989827 1x, http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/cache/45/45eeb4ddf9c1b68d31e94db516230a626c137efd_640x640_fwb.jpg?_=1735989827 2x"
                              loading="lazy"
                              style={{ aspectRatio: "1/1" }}
                              alt="Bank Of America(BOA)"
                            />
                          </div>

                          <div className="info">
                            <h4 className="name">Bank Of America(BOA)</h4>
                            <div className="manufacturer-name">&nbsp;</div>
                            <div className="description">
                              B0A LOG Balance: 4.8k
                            </div>
                            <div className="price-wrapper">
                              <span className="price">$250</span>
                            </div>
                          </div>
                        </a>

                        <button
                          className="preview btn btn-default btn-sm"
                          data-toggle="lightbox"
                          data-target="http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/bank-logs-c-4/usa-bank-logs-c-5/bank-of-americaboa-c-27/bank-of-americaboa-p-77"
                          data-seamless="true"
                          data-require-window-width="768"
                          data-max-width="980"
                        >
                          <i className="fa fa-search-plus"></i>{" "}
                        </button>
                      </article>
                      <article className="product">
                        <a
                          className="link"
                          href="http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/bank-logs-c-4/usa-bank-logs-c-5/bank-of-americaboa-c-27/bank-of-americaboa-p-78"
                          title="Bank Of America(BOA)"
                          data-id="78"
                          data-sku=""
                          data-name="Bank Of America(BOA)"
                          data-price="1500.00"
                        >
                          <div className="image-wrapper">
                            <img
                              className="image img-responsive"
                              src="http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/cache/87/87f8ceb567c93f5cc5afea4389abedf9d5ebe8f6_320x320_fwb.jpg?_=1735989827"
                              srcSet="http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/cache/87/87f8ceb567c93f5cc5afea4389abedf9d5ebe8f6_320x320_fwb.jpg?_=1735989827 1x, http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/cache/87/87f8ceb567c93f5cc5afea4389abedf9d5ebe8f6_640x640_fwb.jpg?_=1735989827 2x"
                              loading="lazy"
                              style={{ aspectRatio: "1/1" }}
                              alt="Bank Of America(BOA)"
                            />
                          </div>

                          <div className="info">
                            <h4 className="name">Bank Of America(BOA)</h4>
                            <div className="manufacturer-name">&nbsp;</div>
                            <div className="description">
                              B0A LOG Balance: 11k
                            </div>
                            <div className="price-wrapper">
                              <span className="price">$1,500</span>
                            </div>
                          </div>
                        </a>

                        <button
                          className="preview btn btn-default btn-sm"
                          data-toggle="lightbox"
                          data-target="http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/bank-logs-c-4/usa-bank-logs-c-5/bank-of-americaboa-c-27/bank-of-americaboa-p-78"
                          data-seamless="true"
                          data-require-window-width="768"
                          data-max-width="980"
                        >
                          <i className="fa fa-search-plus"></i>{" "}
                        </button>
                      </article>
                    </section>
                  </div>
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
