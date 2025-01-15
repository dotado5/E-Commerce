import "../styles/Components.css";
import CategoryBox, { categoryBoxProps } from "./CategoryBox";

const categories: categoryBoxProps[] = [
  {
    dataName: "Bank Logs",
    link: "/bank-logs-c-4",
    img: "/assets/bank-log.jpg",
    title: "Bank Logs",
    description: "",
  },
  {
    dataName: "CARDED-GIFT",
    link: "/carded-gift-c-20",
    img: "/assets/carded-gift.jpg",
    title: "CARDED-GIFT",
    description: "",
  },
  {
    dataName: "Cloned Credit Card",
    link: "/cloned-credit-card-c-3",
    img: "/assets/credit-card.jpg",
    title: "Cloned Credit Card",
    description: "Physical Cloned Card Fullz",
  },
  {
    dataName: "Dumps(Online Card)",
    link: "/dumpsonline-card-c-18",
    img: "/assets/dumps.jpg",
    title: "Dumps(Online Card)",
    description: "",
  },
  {
    dataName: "HACKING TOOLS",
    link: "/hacking-tools-c-21",
    img: "/assets/hacking-tools.jpg",
    title: "HACKING TOOLS",
    description: "",
  },
  {
    dataName: "Paypal & Cashapp Log",
    link: "/paypal-cashapp-log-c-15",
    img: "/assets/paypal.png",
    title: "Paypal & Cashapp Log",
    description: "",
  },
  {
    dataName: "SSN-FULLZ",
    link: "/ssn-fullz-c-19",
    img: "/assets/ssn.jpg",
    title: "SSN-FULLZ",
    description: "",
  },
];

const CategoriesSection = () => {
  return (
    <section id="box-categories" className="box">
      <div className="card-header">
        <h1 className="card-title">Browse By Category</h1>
      </div>
      <div className="card-body">
        <div className="listing categories">
          {categories.map((category, index) => (
            <CategoryBox
              dataName={category.dataName}
              link={category.link}
              img={category.img}
              title={category.title}
              description={category.description}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
