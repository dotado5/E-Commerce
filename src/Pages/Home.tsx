import React from "react";
import Hero from "../Components/Hero";
import CategoriesSection from "../Components/CategoriesSection";
import PopularProductsSection from "../Components/PopularProductsSection";
import LatestProductsSection from "../Components/LatestProductsSection";

const Home = () => {
  return (
    <main>
      <Hero />
      <CategoriesSection />
      <PopularProductsSection />
      <LatestProductsSection />

      <section id="box-newsletter-subscribe" className="card text-center">
        <div className="card-body">
          <h2 style={{ fontSize: "1.5em" }}>Subscribe to our newsletter!</h2>

          <p style={{ paddingTop: "0.7em" }}>
            Get the latest news and offers straight to your inbox. Subscribe
            now.
          </p>

          <form
            name="newsletter_subscribe_form"
            method="post"
            // enctype="application/x-www-form-urlencoded"
            accept-charset="UTF-8"
            action="http://w6uowshig4oqhdehbkyykmzb4h5iiaxndfdfwbj6pfixohe5d7bgsyyd.onion/newsletter"
          >
            <div
              className="form-group required"
              style={{ maxWidth: "400px", margin: "0 auto" }}
            >
              <div className="input-group">
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  value=""
                  data-type="text"
                  placeholder="your@email.com"
                  required
                />{" "}
                <button
                  className="btn btn-default"
                  type="submit"
                  name="subscribe"
                  value="Subscribe"
                >
                  Subscribe
                </button>{" "}
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Home;
