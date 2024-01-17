import { useState } from "react";
import img010 from "../images/pexels-mikhail-nilov-7820320.jpg";


const List = (props) => {
  const [dates, setDates] = useState([
    {
      postdate: new Date(),
      nextdate: new Date(),
    }
  ]);

  const formatDate = (date) => {
    const options = { month: 'numeric', day: 'numeric', year: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return (
    <div>
      <div className="listcontainer">
        <div className="listWrapper">
          <div className="blog-content-container">
            <div className="blog-content">
              <img src={props.img}  class="img-fluid" alt="Blog Post" />
              <div className="blog-details">
                <span className="span-date">{formatDate(dates[0].postdate)}</span><span className="span-filter">Quality</span>
               <a href="#" className="detail-href"><h6 className="blog-detail-h6">{props.title1}</h6></a>
              </div>
            </div>
            <div className="blog-content-2">
              <img src={props.img2}  class="img-fluid" alt="Blog Post" />
              <div className="blog-details">
                <span className="span-date">{formatDate(dates[0].postdate)}</span><span className="span-filter">Quality</span>
               <a href="#" className="detail-href"><h6 className="blog-detail-h6">{props.title2}</h6></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
