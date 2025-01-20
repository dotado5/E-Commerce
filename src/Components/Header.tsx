import { Link } from "react-router-dom";
import "../styles/Components.css";
import {
  FaSearch,
  FaGlobeAmericas,
  FaUser,
  FaPhoneAlt,
  FaShoppingBasket,
  FaHome,
} from "react-icons/fa";

const Header = () => {
  return (
    <nav className="site-menu">
      <div className="fourteen-forty">
        <div className="navbar navbar-sticky" style={{ marginBottom: "5em" }}>
          <div className="navbar-header">
            <Link
              className="logotype"
              to={
                "http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/"
              }
            >
              <img
                src="/assets/logo.png"
                alt="Shirovka Hackers"
                title="Shirovka Hackers"
              />
            </Link>
            {/* enctype="application/x-www-form-urlencoded" */}
            <form
              name="search_form"
              method="get"
              accept-charset="UTF-8"
              action="http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/search"
              className="navbar-search"
            >
              {" "}
              <div className="input-group">
                <span className="input-group-icon">
                  {/* <i className="fa fa-search fa-fw"></i> */}
                  <FaSearch className="fa fa-search fa-fw" />
                </span>
                <input
                  className="form-control"
                  type="search"
                  name="query"
                  value=""
                  data-type="search"
                  placeholder="Search products …"
                />
              </div>{" "}
            </form>

            <div className="quick-access">
              <Link
                className="regional-setting text-center"
                to={
                  "http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/regional_settings#box-regional-settings"
                }
                data-toggle="lightbox"
                data-seamless="true"
              >
                <div className="navbar-icon">
                  {/* <i className="fa fa-globe"></i> */}
                  <FaGlobeAmericas className="fa fa-globe" />
                </div>
                <small className="hidden-xs">en / US / USD</small>
              </Link>

              <Link
                className="account text-center"
                to={
                  "http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/edit_account"
                }
              >
                <div className="navbar-icon">
                  {/* <i className="fa fa-user-o"></i> */}
                  <FaUser
                    className="fa fa-user-o"
                    // style={{ backgroundColor: "transparent", color: "white" }}
                  />
                </div>
                <small className="hidden-xs">Account</small>
              </Link>

              <Link className="phone text-center" to={"tel:ANONYMOUS CALL"}>
                <div className="navbar-icon">
                  {/* <i className="fa fa-phone"></i> */}
                  <FaPhoneAlt className="fa fa-phone" />
                </div>
                <small className="hidden-xs">Call Us</small>
              </Link>

              <Link
                id="cart"
                className="text-center"
                to={
                  "http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/checkout"
                }
              >
                <div className="navbar-icon">
                  {/* <i className="fa fa-shopping-basket"></i> */}
                  <FaShoppingBasket className="fa fa-shopping-basket" />
                </div>
                <small className="hidden-xs">Cart</small>
                <div className="badge quantity"></div>
              </Link>
            </div>
          </div>

          <div id="offcanvas" className="offcanvas">
            <div className="offcanvas-body">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to={"/"}>
                    {/* <i className="fa fa-home hidden-xs hidden-sm"></i>{" "} */}
                    <FaHome className="fa fa-home hidden-xs hidden-sm" />
                    {/* <span className="hidden-md hidden-lg hidden-xl hidden-xxl">
                      Home
                    </span> */}
                  </Link>
                </li>

                <li className="nav-item categories dropdown">
                  <Link
                    className="nav-link"
                    to={"/category"}
                    data-toggle="dropdown"
                  >
                    Categories
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={
                          "http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/bank-logs-c-4/"
                        }
                      >
                        Bank Logs
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={
                          "http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/carded-gift-c-20/"
                        }
                      >
                        CARDED-GIFT
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={
                          "http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/cloned-credit-card-c-3/"
                        }
                      >
                        Cloned Credit Card
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={
                          "http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/dumpsonline-card-c-18/"
                        }
                      >
                        Dumps(Online Card)
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={
                          "http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/hacking-tools-c-21/"
                        }
                      >
                        HACKING TOOLS
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={
                          "http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/paypal-cashapp-log-c-15/"
                        }
                      >
                        Paypal &amp; Cashapp Log
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={
                          "http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/ssn-fullz-c-19/"
                        }
                      >
                        SSN-FULLZ
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item page">
                  <Link className="nav-link" to={"/howto"}>
                    How to Order
                  </Link>
                </li>

                <li className="nav-item page">
                  <Link className="nav-link" to={"/referral"}>
                    Referral Program
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item information dropdown">
                  <Link
                    className="nav-link"
                    to={"/information"}
                    data-toggle="dropdown"
                  >
                    Information
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link className="nav-link" to={"/about"}>
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={
                          "http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/delivery-information-i-5"
                        }
                      >
                        Delivery Information
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={
                          "http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/frequently-asked-questions-i-6"
                        }
                      >
                        Frequently Asked Questions
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={
                          "http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/privacy-policy-i-3"
                        }
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={
                          "http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/refund-policy-i-4"
                        }
                      >
                        Refund Policy
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item customer-service">
                  <Link className="nav-link" to={"/customer_service"}>
                    Customer Service
                  </Link>
                </li>
                {/* enctype="application/x-www-form-urlencoded" */}
                <li className="nav-item account dropdown">
                  <Link
                    className="nav-link"
                    to={"#"}
                    data-toggle="dropdown"
                    style={{
                      display: "flex",
                      alignItems: "start",
                      gap: "2px",
                    }}
                  >
                    {/* <i className="fa fa-user"></i>  */}
                    <FaUser className="fa fa-user" />
                    Sign In
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li className="nav-item">
                      <form
                        name="login_form"
                        method="post"
                        accept-charset="UTF-8"
                        action="http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/login"
                        className="navbar-form"
                      >
                        {" "}
                        <input
                          type="hidden"
                          name="redirect_url"
                          value="http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/"
                        />
                        <div className="form-group required">
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
                              placeholder="Email Address"
                            />
                          </div>{" "}
                        </div>
                        <div className="form-group">
                          <div className="input-group">
                            <span className="input-group-text">
                              <i className="fa fa-key fa-fw"></i>
                            </span>
                            <input
                              className="form-control"
                              type="password"
                              name="password"
                              value=""
                              data-type="password"
                              placeholder="Password"
                            />
                          </div>{" "}
                        </div>
                        <div className="form-group">
                          <div className="checkbox text-start">
                            <label>
                              <input
                                className="form-check"
                                type="checkbox"
                                name="remember_me"
                                value="1"
                              />{" "}
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <div className="btn-group btn-block">
                          <button
                            className="btn btn-default"
                            type="submit"
                            name="login"
                            value="Sign In"
                          >
                            Sign In
                          </button>{" "}
                        </div>
                      </form>
                    </li>

                    <li className="nav-item text-center">
                      <a
                        className="nav-link"
                        href="http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/create_account"
                      >
                        New customers click here
                      </a>
                    </li>

                    <li className="nav-item text-center">
                      <a
                        className="nav-link"
                        href="http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/reset_password"
                      >
                        Lost your password?
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
