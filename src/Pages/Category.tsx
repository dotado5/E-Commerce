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
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
