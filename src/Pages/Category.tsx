import CategoriesBar from "../Components/CategoriesBar";
import "../styles/PagesStyle.css";

const Category = () => {
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
                        src="http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/cache/d0/d0a53c759d8f4dc00eeb74099da0aa688447a91e_480x320_c.jpg?_=1735044217"
                        style={{ aspectRatio: "3/2" }}
                      />
                    </div>
                  </div>

                  <div className="col-md-8">
                    <h1 className="title">Bank Logs</h1>
                  </div>
                </div>
                <section
                  className="listing categories"
                  style={{ marginBottom: "var(--gutter-y)" }}
                >
                  <article
                    className="category"
                    data-id="10"
                    data-name="CANADIAN BANK LOGS"
                  >
                    <a
                      className="link"
                      href="http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/bank-logs-c-4/canadian-bank-logs-c-10/"
                    >
                      <img
                        className="img-responsive hidden-xs hidden-sm"
                        src="http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/cache/c4/c4856facdc9a7384a7d8780eb2be28aba9168edf_480x320_c.png?_=1734993529"
                        loading="lazy"
                        style={{ aspectRatio: "3/2" }}
                        alt=""
                      />

                      <div className="caption">
                        <div className="name">CANADIAN BANK LOGS</div>
                        <div className="short-description"></div>
                      </div>
                    </a>
                  </article>
                  <article
                    className="category"
                    data-id="31"
                    data-name="OFFSHORE BANK"
                  >
                    <a
                      className="link"
                      href="http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/bank-logs-c-4/offshore-bank-c-31/"
                    >
                      <img
                        className="img-responsive hidden-xs hidden-sm"
                        src="http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/cache/62/6255ce111b7fee831f5236a7cb8b2257d8b844fb_480x320_c.png?_=1736968070"
                        loading="lazy"
                        style={{ aspectRatio: "3/2" }}
                        alt=""
                      />

                      <div className="caption">
                        <div className="name">OFFSHORE BANK</div>
                        <div className="short-description">
                          offshore banks are located in jurisdictions with
                          strict privacy laws, making it difficult for law
                          enforcement or other entities to trace funds or
                          uncover account holders.
                        </div>
                      </div>
                    </a>
                  </article>
                  <article
                    className="category"
                    data-id="5"
                    data-name="USA BANK LOGS"
                  >
                    <a
                      className="link"
                      href="http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/bank-logs-c-4/usa-bank-logs-c-5/"
                    >
                      <img
                        className="img-responsive hidden-xs hidden-sm"
                        src="http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/cache/88/88bc143a226e00e0511a68a21cf5e69bd1808a5b_480x320_c.png?_=1734988184"
                        loading="lazy"
                        style={{ aspectRatio: "3/2" }}
                        alt=""
                      />

                      <div className="caption">
                        <div className="name">USA BANK LOGS</div>
                        <div className="short-description"></div>
                      </div>
                    </a>
                  </article>
                </section>
              </article>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
