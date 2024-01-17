import React, { useState } from "react";
import Phonebook from "./Filter";
import { DateRange } from "react-date-range";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendar,
  faCat,
  faChildren,
  faCoffee,
  faFaceGrimace,
  faHotTub,
  faHotel,
  faMoon,
  faPaw,
  faPerson,
  faSolarPanel,
  faSpa,
  faSwimmingPool,
  faTag,
  faWater,
  faWheatAwn,
} from "@fortawesome/free-solid-svg-icons";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { faHotjar } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const [opendate, setOpendate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="searchform">
      <h2>Where to?</h2>
      <div className="form-input">
        <div className="search1">
        <label className="label-icon1">
          <FontAwesomeIcon icon={faBed} />
        </label>
        <input
          type="text"
          placeholder="Where are you going to?"
          className="form-control"
        /></div>
        <div className="search1">
        <label className="label-icon1">
          <FontAwesomeIcon icon={faCalendar} />
        </label>
        <span onClick={() => setOpendate(!opendate)} className="input-span">
          {`${format(date[0].startDate, "MM/dd")} - ${format(
            date[0].endDate,
            "MM/dd"
          )} `}
        </span>
        {opendate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            format="MM-dd"
            className="date1"
          />
        )}
        </div>
        <div className="search1">
        <label className="label-icon1">
          <FontAwesomeIcon icon={faPerson} />
        </label>
        <input type="text" className="form-control" />
        </div>
        <button type="submit" className="btn-search1">
          Search
        </button>
      </div>
      <hr />
      <div className="discount-banner">
        <div className="span1">
          <span className="ban1-span">Find and book your perfect stay</span>
        </div>
        <div className="flex1">
          <div className="span2">
            <p className="ban2-span">
              <FontAwesomeIcon icon={faMoon} />
              <p className="r1">Get rewards on every night you stay</p>
            </p>
          </div>
          <div className="span2">
            <p className="ban2-span">
              <FontAwesomeIcon icon={faTag} />
              <p className="r1">Save more with Members price</p>
            </p>
          </div>
          <div className="span2">
            <p className="ban2-span">
              <FontAwesomeIcon icon={faCalendar} />
              <p className="r1">free cancelation option if plan change</p>
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="discovery-icons">
        <h2 className="hs1">Discover your new favourite stay</h2>
        <div className="disco-icon">
          <div className='flex001'>
          <button className="btn01-disco">
            <FontAwesomeIcon icon={faPaw} className="icon10"/>
          </button><p className="p-disco">Animals</p>
          </div>
          <div className='flex001'>
          <button className="btn01-disco">
            <FontAwesomeIcon icon={faSpa} className="icon10"/>
          </button><p className="p-disco">Spa</p>
          </div>
          <div className='flex001'>
          <button className="btn01-disco">
            <FontAwesomeIcon icon={faSwimmingPool} className="icon10"/>
          </button><p className="p-disco">Pool</p>
          </div>
          <div className='flex001'>
          <button className="btn01-disco">
            <FontAwesomeIcon icon={faHotTub} className="icon10"/>
          </button><p className="p-disco">Hot</p>
          </div>
          <div className='flex001'>
          <button className="btn01-disco">
            <FontAwesomeIcon icon={faWater}  className="icon10"/>
          </button><p className="p-disco">Sea</p>
          </div>
          <div className='flex001'>
          <button className="btn01-disco">
            <FontAwesomeIcon icon={faHotel}  className="icon10"/>
          </button><p className="p-disco">chatel</p>
          </div>
          <div className='flex001'>
          <button className="btn01-disco">
            <FontAwesomeIcon icon={faCoffee} className="icon10"/>
          </button><p className="p-disco">Apartment</p>
          </div>
          <div className='flex001'>
          <button className="btn01-disco">
            <FontAwesomeIcon icon={faChildren}  className="icon10"/> 
          </button><p className="p-disco">family</p>
          </div>
          <div className='flex001'>
          <button className="btn01-disco">
            <FontAwesomeIcon icon={faWheatAwn} className="icon10"/> 
          </button><p className="p-disco">Farm</p>
          </div>
          <div className='flex001'>
          <button className="btn01-disco">
            <FontAwesomeIcon icon={faSolarPanel}  className="icon10"/>
          </button><p className="p-disco">chatel</p>
          </div>
          <Phonebook />
        </div>
      </div>
    </div>
  );
};

export default Home;

// <div className="form">
// <h1 className="nav-title">Search</h1>
// <div className="form-input">
//   <label className="desti">
//     Destination:
//     <input
//       type="text"
//       className="desti-input"
//       placeholder="Where are you going"
//     />
//   </label>
// </div>
// <br />
// <div className="form-input">
//   <label className="desti">
//     Check-in:
//     <input type="date" className="desti-input-check" />
//   </label>
//   <label className="desti">
//     Check-out:
//     <input type="date" className="desti-input-check" />
//   </label>
// </div>
// <br />
// <div className="form-input">
//   <label className="desti">
//     Max. price:
//     <input
//       type="number"
//       className="desti-input-number"
//       placeholder={boom}
//     />
//   </label>
//   <label className="desti">
//     Min. price:
//     <input
//       type="number"
//       className="desti-input-number"
//       placeholder={check}
//     />
//   </label>
// </div>
// <br />
// <div className="form-input-2">
//   <label className="desti">
//     Adults:
//     <input
//       type="number"
//       className="desti-input-persons"
//       placeholder="Where are you going"
//     />
//   </label>
//   <label className="desti">
//     Children:
//     <input
//       type="number"
//       className="desti-input-persons"
//       placeholder="Where are you going"
//     />
//   </label>
//   <label className="desti">
//     Animals:
//     <input
//       type="number"
//       className="desti-input-persons"
//       placeholder=""
//     />
//   </label>
// </div>
// </div>
// <div className="home-pic">
// <img src={img10} className="img-bg" />
// <img src={img11} className="img-bg1" />
// </div>
