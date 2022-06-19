import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../style/header.css"
import logo from "../../assets/axlogo.svg";
import manufactuting from "../../assets/header-image/factory.svg"
import auto from "../../assets/header-image/auto.svg"
import media from "../../assets/header-image/media.svg"
import edu from "../../assets/header-image/edu.svg"
import bank from "../../assets/header-image/bank.svg"
import health from "../../assets/header-image/health.svg"
import retail from "../../assets/header-image/retail.svg"
import travel from "../../assets/header-image/travel.svg"
import reale from "../../assets/header-image/realestate.svg"
import database from "../../assets/header-image/database.svg"
import bi from "../../assets/header-image/business-intelligence.svg"
import serviceCorner2 from "../../assets/header-image/service-corner2.svg"
import chatbot from "../../assets/header-image/chatbot.svg"
import iot from "../../assets/header-image/iot.svg"
import app from "../../assets/header-image/app.svg"
import rpa from "../../assets/header-image/rpa.svg"








const HamburgerBtn = styled.button`
  display: none;
  @media only Screen and (max-width: 48em) {
    display: inline-block;
  }
  position: relative;
  background-color: transparent;
  width: 2rem;
  height: 1.5px;
  margin-top: 0rem;
  transition: all 0.3s;
  cursor: pointer;
  &::before,
  &::after {
    content: "";
    background-color: var(--black);
    width: 1.8rem;
    height: 1.5px;
    display: inline-block;
    position: absolute;
    left: 0;
    cursor: pointer;

    transition: all 0.2s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.2rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const MobileMenu = styled.nav`
  display: none;
  @media only Screen and (max-width: 48em) {
    display: flex;
  }
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  overflow-x: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  opacity: ${(props) => (props.clicked ? "1" : 0)};
  visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
  transition: all 0.5s;
  z-index: -10;
  background-color: rgb(53 53 63 / 100%);
  border-radius: 20px;
  margin: 0.5rem;
  a {
    color: var(--white);
    font-size: 1.5rem;
    
    margin: 1.5rem;
    cursor: pointer;
  }
`;
const Header = () => {
  const [click, setClick] = useState(false);
  //const handleClick = () => setClick(!click);
  const ref = useRef(null);
  const [industry,setIndustry] = useState("displayoff")
  const [Solution,setSolution] = useState("displayoff")
  const [product,setProduct] = useState("displayoff")
  const [service,setService] = useState("displayoff")


 const OpenIndustry =() =>{
   if(industry==="displayoff"){
     setIndustry("industry");
   }
   else{
     setIndustry("displayoff")
   }
 }


 const OpenSolution =() =>{
  if(Solution==="displayoff"){
    setSolution("solution");
  }
  else{
    setSolution("displayoff")
  }
}


const OpenProduct =() =>{
  if(product==="displayoff"){
    setProduct("product");
  }
  else{
    setProduct("displayoff")
  }
}

const OpenService =() =>{
  if(service==="displayoff"){
    setService("service");
  }
  else{
    setService("displayoff")
  }
}




  gsap.registerPlugin(ScrollTrigger);

  const scrollUp = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const handleClick = (id, e) => {
    setClick(!click);
    scrollUp(id, e);
  };

  useEffect(() => {
    const element = ref.current;

    const mq = window.matchMedia("(max-width: 40em)");
    // console.log("mq", mq);
    if (mq.matches) {
      gsap.to(element, {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        padding: "16px 14px 10px",



        border: "2px solid var(--white)",

        duration: 1,
        ease: "power1.out",

        scrollTrigger: {
          trigger: element,
          start: "bottom+=200 top",
          end: "+=100",
          scrub: true,
        },
      });
    } else {
      gsap.to(element, {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        padding: "5px 80px 3px",



        border: "3px solid var(--white)",

        duration: 1,
        ease: "power1.out",

        scrollTrigger: {
          trigger: element,
          start: "bottom+=300 top",
          end: "+=250",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div className="header" ref={ref}>
      <div className="logo">
        <img src={logo} alt="CodeBucks" />
      </div>
      <div className="navbar">
        <a href="/" onClick={(e) => scrollUp("home", e)}>
          Home
        </a>

        <a href="/" >
          <div class="dropdown">
            <button className="industry-btn"  style={{ backgroundColor: 'transparent', color: "black", boxShadow: "none", border: "none" }}class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
              Industries
            </button>
            <ul style={{left:"-200px"}} class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <div className="industry-box" style={{display:"flex"}} >
                  <div className="box1">
                <li  ><a style={{fontSize:"17px",fontWeight:"500"}} class="dropdown-item" href="/"> <span><img style={{width:"18px" ,marginRight:"10px"}} src={manufactuting} alt="" srcset="" /></span> Manufacturing</a></li>
              <li  ><a style={{fontSize:"17px",fontWeight:"500"}} class="dropdown-item" href="/"><span><img style={{width:"18px" ,marginRight:"10px"}} src={auto} alt="" srcset="" /></span> Automobile</a></li>
              <li  ><a style={{fontSize:"17px",fontWeight:"500"}} class="dropdown-item" href="/"> <span><img style={{width:"18px" ,marginRight:"10px"}} src={retail} alt="" srcset="" /> </span> Retail & e-commerce</a></li>
              <li  ><a style={{fontSize:"17px",fontWeight:"500"}} class="dropdown-item" href="/"> <span><img style={{width:"18px" ,marginRight:"10px"}} src={travel} alt="" srcset="" /> </span>  Hospitality & Travel</a></li>
              <li  ><a style={{fontSize:"17px",fontWeight:"500"}} class="dropdown-item" href="/"> <span><img style={{width:"18px" ,marginRight:"10px"}} src={health} alt="" srcset="" /> </span>  Healthcare & Insurance</a></li>
             </div>

              <div style={{margin:"0 100px"}} className="box2">
              <li  ><a style={{fontSize:"17px",fontWeight:"500"}} class="dropdown-item" href="/"> <span><img style={{width:"20px" ,marginRight:"10px"}} src={edu} alt="" srcset="" /></span> Education</a></li>
              <li  ><a style={{fontSize:"17px",fontWeight:"500"}} class="dropdown-item" href="/"><span><img style={{width:"20px" ,marginRight:"10px"}} src={bank} alt="" srcset="" /></span> Finance</a></li>
              <li  ><a style={{fontSize:"17px",fontWeight:"500"}} class="dropdown-item" href="/"> <span><img style={{width:"18px" ,marginRight:"10px"}} src={reale} alt="" srcset="" /> </span>  Real Estate & Construction</a></li>
              <li  ><a style={{fontSize:"17px",fontWeight:"500"}} class="dropdown-item" href="/"><span><img style={{width:"16px" ,marginRight:"10px"}} src={media} alt="" srcset="" /></span>News & Media</a></li>
              </div>
              
              </div>
            
              
            </ul>
          </div>

        </a>


        <a href="/" >
          <div class="dropdown">
            <button style={{ backgroundColor: 'transparent', color: "black", boxShadow: "none", border: "none" }} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Solutions
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="/">AI NLP Engineering</a></li>
              <li><a class="dropdown-item" href="/">Conversational AI</a></li>
              <li><a class="dropdown-item" href="/">Application Automation</a></li>
              <li><a class="dropdown-item" href="/">Saas Development </a></li>
              <li><a class="dropdown-item" href="/">Microcontroller Programme</a></li>
            </ul>
          </div>

        </a>


        <a href="/" >
          <div class="dropdown">
            <button style={{ backgroundColor: 'transparent', color: "black", boxShadow: "none", border: "none" }} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Products
            </button>
            <ul style={{left:"-370px",padding:"50px"}} class="dropdown-menu" aria-labelledby="dropdownMenuButton1">

              <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}} className="product-box">
            <div style={{width:"50%"}} className="chat-bot">
              <li><a style={{fontWeight:"600",fontSize:"17px"}} class="dropdown-item" href="/"><span><img style={{width:"28px" ,marginRight:"10px",marginBottom:"7px"}} src={chatbot} alt="" srcset="" /></span> AX-Chat Bot</a></li>
              <p style={{textAlign:"justify",width:"90%",fontSize:"14px"}} > A bot is an automated application 
              used to execute simple and Continuous tasks that would be time-consuming,
               humdrum or impossible for a human to perform.</p>
              </div>

              <div style={{width:"50%"}} className="IOT">
                <li><a style={{fontWeight:"600",fontSize:"17px"}} class="dropdown-item" href="/"> <span><img style={{width:"17px" ,marginRight:"10px",marginBottom:"7px"}} src={iot} alt="" srcset="" /></span>  AXI-IOT</a></li>
                <p style={{textAlign:"justify",width:"90%",fontSize:"14px"}} > The Internet of Things (IoT) is a network of physical objects
                 – which is transforming across all industries, giving business access to Information and control like never before
                </p>
              </div>
              
              <div style={{width:"50%"}} className="Windows-Application">
                <li><a style={{fontWeight:"600",fontSize:"17px"}} class="dropdown-item" href="/"> <span><img style={{width:"23px" ,marginRight:"10px",marginBottom:"7px"}} src={app} alt="" srcset="" /></span> EPM - Windows Application</a></li>
                <p style={{textAlign:"justify",width:"90%",fontSize:"14px"}} > Solution for enterprise software needs and 
                resource managements with Advanced Automation </p>
              </div>
              
              <div  style={{width:"50%"}} className="RPA">
                <li><a style={{fontWeight:"600",fontSize:"17px"}} class="dropdown-item" href="/"> <span><img style={{width:"25px" ,marginRight:"10px",marginBottom:"7px"}} src={rpa} alt="" srcset="" /></span> ANOM - Robotic Process Automation</a></li>
                <p style={{textAlign:"justify",width:"90%",fontSize:"14px"}} > Robotic process automation (RPA) is a software technology that makes it easy to build, deploy,
                 and manage software robots that emulate humans
                  actions interacting with digital systems and software</p>
              </div>

              </div>
              
              
            </ul>
          </div>

        </a>




        <a href="/" >
          <div class="dropdown">
            <button style={{ backgroundColor: 'transparent', color: "black", boxShadow: "none", border: "none" }} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Company
            </button>
            <ul  class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <div style={{display:"flex",flexWrap:"wrap",flexDirection:"row",width:"200px"}} className="company-box">
                <li><a style={{fontWeight:"500",margin:"10px",borderBottom:"1px solid black"}} class="dropdown-item" href="/">About</a></li>
                <hr />
              <li><a style={{fontWeight:"500",margin:"10px",borderBottom:"1px solid black"}} class="dropdown-item" href="/">Team</a></li>
              <hr />
              <li><a style={{fontWeight:"500",margin:"10px",borderBottom:"1px solid black"}} class="dropdown-item" href="/">Career</a></li>
              <li><a style={{fontWeight:"500",margin:"10px",borderBottom:"1px solid black"}} class="dropdown-item" href="/">News</a></li>
              </div>
              

            </ul>
          </div>

        </a>




        <a href="/" >
          <div class="dropdown">
            <button style={{ backgroundColor: 'transparent', color: "black", boxShadow: "none", border: "none" }} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Services
            </button>
             <ul style={{right:"-190px",backgroundColor:"white"}} class="dropdown-menu" aria-labelledby="dropdownMenuButton1">

            <div style={{display:"flex",padding:"25px"}} className="service-box">

            <img style={{width:"160px",position:"absolute",left:"80px",opacity:"0.6"}} src={serviceCorner2} alt="" srcset="" />
           
           <div style={{display:"flex",position:"absolute",bottom:"50px",right:"30px"}} className="btn-box">
          <div  >    <button style={{margin:"20px",backgroundColor:"#545252",color:"white",height:"50px",width:"150px",borderRadius:"2px"}} >Cloud Migration</button>  </div>  
           <div >   <button style={{margin:"20px",backgroundColor:"#545252",color:"white",height:"50px",width:"180px",borderRadius:'2px'}} >AI & ML Integration</button> </div>  
           </div>

                 <div style={{marginTop:"160px"}} className="service_box1">
             
              <li><a class="dropdown-item" href="/">Application Services</a></li>
              <li><a class="dropdown-item" href="/">Enterprise Digital Solutions</a></li>
              <li><a class="dropdown-item" href="/">Cloud Solutions</a></li>
              <li><a class="dropdown-item" href="/">Azure Services</a></li>
              <li><a class="dropdown-item" href="/">Application testing & QA</a></li>
              <li><a class="dropdown-item" href="/">Cloud VPS</a></li>
              
                 </div>
                <div style={{marginLeft:"100px",marginTop:"20px",}} className="service_box2">
               <h4 style={{borderBottom:"2px solid #80808047",paddingBottom:"15px",marginBottom:"40px"}} > <span><img style={{width:"26px"}} src={database} alt="" srcset="" /></span> Big Data</h4>
               <li><a class="dropdown-item" href="/">Big Data Analytics</a></li>
              <li><a class="dropdown-item" href="/">Data Pipeline</a></li>
              <li><a class="dropdown-item" href="/">Data Strategy</a></li>
              <li><a class="dropdown-item" href="/">Data Warehouse</a></li>
              <li><a class="dropdown-item" href="/">Data Architecture</a></li>
              <li><a class="dropdown-item" href="/">Data Processing Systems</a></li>
            
               
                </div>
                <div style={{marginLeft:"100px"}} className="service_box3">
               <h4 style={{width:"150px",color:"grey", border:"1px solid rgb(128 59 236 / 15%)", padding:"6px",borderRadius:"3px",marginBottom:"30px"}} > <span><img style={{width:"26px",marginRight:"10px"}} src={bi} alt="" srcset="" /></span>Business <span style={{fontSize:"20px"}} > Intelligence</span> </h4>
                
               <li><a class="dropdown-item" href="/">User Adoption</a></li>
              <li><a class="dropdown-item" href="/">Data Visualization</a></li>
              <li><a class="dropdown-item" href="/">Data Preparation</a></li>
              <li><a class="dropdown-item" href="/">BI Modernization</a></li>
              <li><a class="dropdown-item" href="/">Data science & Advanced analytics</a></li>
                
                
                </div>
            </div>
            </ul>
          </div>

        </a>

        <a href="/" >
          <div class="dropdown">
            <button style={{ backgroundColor: 'transparent', color: "black", boxShadow: "none", border: "none" }} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Resources
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="/">Media</a></li>
              <li><a class="dropdown-item" href="/">Case Studies</a></li>
              <li><a class="dropdown-item" href="/">White Papers</a></li>
              <li><a class="dropdown-item" href="/">Blog</a></li>
              <li><a class="dropdown-item" href="/">Events & Visual Gallery</a></li>

            </ul>
          </div>

        </a>


        <a href="#contact" onClick={(e) => scrollUp("contact", e)}>
          <div className="main-btn"> <button>Contact Us</button> </div>
        </a>
      </div>

      <div className="mobile-header">
        <button className="mobile-btn" >Contact Us</button>

        <HamburgerBtn clicked={click} onClick={() => setClick(!click)}>
          <span></span>
        </HamburgerBtn>
      </div>

      <MobileMenu clicked={click}>
        <a href="#home" onClick={(e) => handleClick("home", e)}>
          Home
        </a>

      
          <div className="mobile-menu-li" >
            <button 
              onClick={OpenIndustry}
            style={{ backgroundColor: 'transparent', color: "white", boxShadow: "none", border: "none",fontSize:"22px" }} >
              Industries <span>{industry==="displayoff" ?
               <svg style={{width:"18px"}} xmlns="http://www.w3.org/2000/svg" width="1" height="1" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
  <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
</svg> :
<svg style={{width:"18px"}} xmlns="http://www.w3.org/2000/svg" width="1" height="1" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
  <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
</svg>
} </span>
            </button>
            <ul id="mobile-menu-sub" style={{color:"white",listStyle:"none",border:"1px solid",padding:"18px"}} className={industry} >
              <li>Manufacturing</li>
              <li>Automobile</li>
              <li>Retail & e-commerce</li>
              <li>Hospitality & Travel</li>
              <li>Healthcare & Insurance</li>
              <li>Education</li>
              <li>Finance</li>
              <li>Real Estate</li>
              <li>News & Media</li>
            </ul>
          </div>



          <div className="mobile-menu-li" >
            <button 
              onClick={OpenSolution}
            style={{ backgroundColor: 'transparent', color: "white", boxShadow: "none", border: "none",fontSize:"22px" }} >
              Solutions <span>{Solution==="displayoff" ?
               <svg style={{width:"18px"}} xmlns="http://www.w3.org/2000/svg" width="1" height="1" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
  <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
</svg> :
<svg style={{width:"18px"}} xmlns="http://www.w3.org/2000/svg" width="1" height="1" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
  <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
</svg>
} </span>
            </button>
            <ul id="mobile-menu-sub" style={{color:"white",listStyle:"none",border:"1px solid",padding:"18px"}} className={Solution} >
            <li>AI NLP Engineering</li>
              <li>Conversational AI</li>
              <li>Application Automation</li>
              <li>Saas Development </li>
              <li>Microcontroller Programme</li>
            </ul>
          </div>



        
          <div className="mobile-menu-li" >


            <button 
              onClick={OpenProduct}
            style={{ backgroundColor: 'transparent', color: "white", boxShadow: "none", border: "none",fontSize:"22px" }} >
              Products <span>{product==="displayoff" ?
               <svg style={{width:"18px"}} xmlns="http://www.w3.org/2000/svg" width="1" height="1" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
  <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
</svg> :
<svg style={{width:"18px"}} xmlns="http://www.w3.org/2000/svg" width="1" height="1" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
  <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
</svg>
} </span>
            </button>
            <ul id="mobile-menu-sub" style={{color:"white",listStyle:"none",border:"1px solid",padding:"18px"}} className={product} >
            <li>Chat Bot</li>
              <li>IOT</li>
              <li>Windows Applications</li>
              <li> Robotic Process Automation</li>
            </ul>
          </div>


        <a href="#about" onClick={(e) => handleClick("about", e)}>
          About
        </a>



        <div className="mobile-menu-li" >


<button 
  onClick={OpenService}
style={{ backgroundColor: 'transparent', color: "white", boxShadow: "none", border: "none",fontSize:"22px" }} >
  Services <span>{service==="displayoff" ?
   <svg style={{width:"18px"}} xmlns="http://www.w3.org/2000/svg" width="1" height="1" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
<path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
</svg> :
<svg style={{width:"18px"}} xmlns="http://www.w3.org/2000/svg" width="1" height="1" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
<path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
</svg>
} </span>
</button>
<ul id="mobile-menu-sub" style={{color:"white",listStyle:"none",border:"1px solid",padding:"18px"}} className={service} >
              <li>Web & Application Development</li>
              <li>Software Maintenance</li>
              <li>Cloud Solutions</li>
              <li>Azure Service</li>
              <li>Application testing & QA</li>
              <li>Cloud VPS</li>
</ul>
</div>

        <a href="#contact" onClick={(e) => handleClick("contact", e)}>
         
        </a>
      </MobileMenu>
    </div>
  );
};

export default Header;
