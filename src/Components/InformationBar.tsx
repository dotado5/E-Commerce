import "../styles/Components.css";

const InformationBar = () => {
  return (
    <div className="col-md-3">
      <div id="sidebar">
        <section id="box-information-links" style={{ margin: "0px" }}>
          <div className="card-header">
            <h2 className="card-title">Information</h2>
          </div>

          <div className="card-body">
            <ul className="nav nav-stacked nav-pills">
              <li className="page-1 opened active">
                <a href="http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/about-us-i-1">
                  About Us
                </a>
              </li>
              <li className="page-5">
                <a href="http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/delivery-information-i-5">
                  Delivery Information
                </a>
              </li>
              <li className="page-6">
                <a href="http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/frequently-asked-questions-i-6">
                  Frequently Asked Questions
                </a>
              </li>
              <li className="page-3">
                <a href="http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/privacy-policy-i-3">
                  Privacy Policy
                </a>
              </li>
              <li className="page-4">
                <a href="http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/refund-policy-i-4">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InformationBar;
