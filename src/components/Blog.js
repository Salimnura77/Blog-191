import "../components/blog.css"
import ScrollProgressBar from "./scrollbar";
import List from "../components/searchpage";
import img040 from "../images/cybertwo.jpg"
import img060 from "../images/pexels-realtoughcandycom-11035380.jpg"
import img050 from "../images/pexels-realtoughcandycom-11035364.jpg";
import img070 from "../images/pexels-realtoughcandycom-11035473.jpg"
import img030 from "../images/pexels-realtoughcandycom-11035385.jpg"
import img020 from "../images/cyber-security-company-developers-encrypting-cloud-processing-data-system-using-blockchain-technology-cybernetics-engineers-reviewing-lines-code-order-secure-mainframe-database-storage.jpg";
import { useState } from "react";

const Blog = () => {
  const [openfilter, setopenfilter] = useState(false)
  const [Filtersearch, setFiltersearch] = useState("all categories")
  return (
    <div className="blog">
      <div className="blog-container">
        <div className="blog-header">
          <div className="div-span">
          <button className="back-button">&#8249;</button>
          </div>
          <div className="bread-crumb">
            <ul className="breadcrumb">
              <li><a className="l1" href="#">home</a></li>
              <li><a className="l2" href="#">blog</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="header-h1">
      <h1 className="h1h1">Our</h1>
        <h1 className="h2h1">Blog</h1>
        </div>
        <div className="content">
        <p className="h1h5">
            Filter by:<button  onClick={() => setopenfilter(!openfilter) }className="btn11">{Filtersearch}</button>
           {openfilter && <ul className="filter-list">
              <li><button className="all"onClick={() => setFiltersearch("all categories")}>all categories</button></li>
              <li><button className="TECH" onClick={() => setFiltersearch("Tech")}>TECH</button></li>
              <li><button className="news" onClick={() => setFiltersearch("news")}>NEWS</button></li>
            </ul> }
            <List  img={img020} title1="Why and Where is Brianstrom ?" img2={img050} title2="How to get and Fetch an API"/>
            <List img={img030} title1="Our Developers" img2={img060} title2="How to install and use NODE"/>
            <List img={img040} title1="Introduction to react" img2={img070} title2="Who is a fullstack developer"/>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
