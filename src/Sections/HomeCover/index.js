// This is HomeCover component, Main top section of website

import styled, { keyframes } from "styled-components";
import arrow from "../../assets/Arrow Right.svg";
import Mobile from "../../assets/home2.svg";
import AutoType from "../../components/AutoType";
import "../../style/homecover.css"


const HomeCover = () => {

  return (

    <div className="homecover-container" id="home">
     

      <div className="homecover-maincontent" id="home">
        <div className="homecover-leftblock" id="leftBlock">
          <div className="homecover-upperbtn">
            {/* <Circle /> */}
           <span>  <AutoType/> </span>
            {/* <span>Axios Infotech</span> */}
          </div>
          <div className="homecover-title">  Digitally and truly yours</div>
          <div className="homecover-subtext">
            we help fast growing companies build award winning technologies , the innovative power of generation 
           and generation of Internet
          </div>
          <div className="homecover-button">
           Enquiry Now &nbsp;
            <img src={arrow} alt="cta" width="100" height="100" />
          </div>
        </div>

        <div className="homecover-rightblock">
          <img  
            src={Mobile}
          alt="Mobile Svg"
          srcset=""
          width="400"
          height="400"
          />
        </div>
        
      </div>
    </div>
  );
};

export default HomeCover;
