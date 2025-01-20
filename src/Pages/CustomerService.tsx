import React from "react";

const CustomerService = () => {
  return (
    <div className="content-wrapper">
      <div className="fourteen-forty">
        <div className="layout row">
          <div className="col-md-3">
            <div id="sidebar">
              <section
                id="box-customer-service-links"
                style={{ margin: "0px" }}
              >
                <div className="card-header">
                  <h2 className="card-title">Customer Service</h2>
                </div>

                <div className="card-body">
                  <ul className="nav nav-stacked nav-pills">
                    <li className="page-0 active">
                      <a href="http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/customer-service">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>

          <div className="col-md-9">
            <main id="content">
              <ul className="breadcrumb">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Customer Service</li>
              </ul>
              <section id="box-contact-us" className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-8">
                      <h1 style={{ marginTop: "0" }}>Contact Us</h1>

                      <form
                        name="contact_form"
                        method="post"
                        encType="application/x-www-form-urlencoded"
                        accept-charset="UTF-8"
                      >
                        <div className="row">
                          <div className="form-group col-md-6 required">
                            <label>First Name</label>
                            <input
                              className="form-control"
                              type="text"
                              name="firstname"
                              value=""
                              data-type="text"
                              required
                            />{" "}
                          </div>

                          <div className="form-group col-md-6 required">
                            <label>Last Name</label>
                            <input
                              className="form-control"
                              type="text"
                              name="lastname"
                              value=""
                              data-type="text"
                              required
                            />{" "}
                          </div>
                        </div>

                        <div className="form-group required">
                          <label>Email Address</label>
                          <div className="input-group">
                            <span className="input-group-text">
                              <i className="fa fa-envelope-o fa-fw"></i>
                            </span>
                            <input
                              className="form-control"
                              type="email"
                              name="email"
                              value=""
                              data-type="email"
                              required
                            />
                          </div>{" "}
                        </div>

                        <div className="form-group required">
                          <label>Subject</label>
                          <input
                            className="form-control"
                            type="text"
                            name="subject"
                            value=""
                            data-type="text"
                            required
                          />{" "}
                        </div>

                        <div className="form-group required">
                          <label>Message</label>
                          <textarea
                            className="form-control"
                            name="message"
                            required
                            style={{ height: "250px" }}
                          ></textarea>{" "}
                        </div>

                        <div className="row">
                          <div className="form-group col-md-6 required">
                            <label>CAPTCHA</label>
                            <div className="input-group">
                              <span
                                className="input-group-text"
                                style={{ padding: "0" }}
                              >
                                <input
                                  type="hidden"
                                  name="captcha_id"
                                  value="contact_us"
                                />
                                <img
                                  src="data:image/gif;base64,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"
                                  alt=""
                                  style={{ width: "100px", height: "40px" }}
                                  //   align="absbottom"
                                />
                              </span>
                              <input
                                className="form-control"
                                type="text"
                                name="captcha"
                                value=""
                                data-type="text"
                                required
                                style={{
                                  fontSize: "24px",
                                  padding: "0",
                                  textAlign: "center",
                                }}
                              />
                            </div>{" "}
                          </div>
                        </div>

                        <p>
                          <button
                            className="btn btn-default"
                            type="submit"
                            name="send"
                            value="Send"
                            style={{ fontWeight: "bold" }}
                          >
                            Send
                          </button>
                        </p>
                      </form>
                    </div>

                    <div className="col-md-4">
                      <h2>Contact Details</h2>

                      <p className="address">ANONYMOUS LOCATION</p>

                      <p className="phone">
                        <i className="fa fa-phone"></i>{" "}
                        <a href="tel:ANONYMOUS CALL">ANONYMOUS CALL</a>
                      </p>
                      <p className="email">
                        <i className="fa fa-envelope"></i>{" "}
                        <a href="mailto:shirovkastore@iosoftver.com">
                          shirovkastore@iosoftver.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </section>{" "}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
