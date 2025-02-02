import React from 'react';
import "../../style/service.css"
import aIbIimage from "../../assets/service-image/ai-bi-cover-image.jpg"
import sidebarimg from "../../assets/service-image/ai-bi-sidebar-img.png"
import datagraph from "../../assets/service-image/data-pie-chart.png"
import iotIcon  from '../../assets/service-image/iot.svg'
import ainlp from '../../assets/service-image/ai-nlp.svg'
import bimodernization from '../../assets/service-image/bi-modernization.png'
import cloudsolutions from '../../assets/service-image/cloud-solutions.png'


function Services() {
  return <>
    <div id='service' className='infoser'  >
      <div className="upper-container">
        {/* <div className="ai-bi-cover-image">
          <img src={aIbIimage} alt="" srcset="" />
        </div> */}

        <div className="ai-bi-discription">
          {/* <h1 >BI and AI</h1> */}
        
        <div style={{width:"20vw"}} className="nlp-enabled">
        <img src={ainlp} style={{height:"100px",width:"100px"}} alt="" srcset="" />
          <h5 style={{ marginBottom: "10px" }} >Nlp Enabled  <svg style={{ height: "20px", width: "50px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-boxes" viewBox="0 0 16 16">
            <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z" />
          </svg> </h5>
          <p style={{ color: "grey", marginBottom: "40px" }} >NLP enables bots to continuously
            add new synonyms and uses Machine Learning to
            expand chatbot vocabulary while also transfer
            vocabulary from one bot to the next.</p>
            <button className='btn btn-success' >Explore More</button>
            </div>
        
        <div style={{width:"25vw"}} className="bi">
        <img src={bimodernization} style={{height:"100px",width:"100px"}} alt="" srcset="" />
          <h5 style={{ marginBottom: "10px" }} >BI Modernization & Analytics <svg style={{ height: "20px", width: "50px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
          </svg> </h5>
          <p style={{ color: "grey" }} >We offer predictive analytics solutions
            that are self-service, agile deployments using dev-ops methodologies,
            continuous monitoring and operational efficiencies in your data warehouse deployments
            and cloud based offerings that help you save capital expenditures</p>
            <button className='btn btn-success' >Explore More</button>
            </div>

            <div style={{width:"25vw"}} className="cloud solutions">
        <img src={cloudsolutions} style={{height:"100px",width:"100px"}} alt="" srcset="" />
          <h5 style={{ marginBottom: "10px" }} >Cloud Solutions  </h5>
          <p style={{ color: "grey" }} >Cloud computing is the on-demand availability of computer system resources,
           especially data storage and computing power, without direct active management by the user.
            Large clouds often have functions distributed over multiple locations,
             each location being a data center</p>
            <button className='btn btn-success' >Explore More</button>
            </div>
        </div>

        {/* <div className="sidebar-box">
          <img style={{ opacity: "75%" }} src={sidebarimg} alt="" srcset="" />
        </div> */}
      </div>
      <div className="mid-span">
        <span></span>
      </div>

      <div className="lower-container">


        {/* Service Carousel Big Banner slidder section  */}

        <div className="axios-data-carousel">
          <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active carousel-one" data-bs-interval="5000">


                <h3 style={{ color: "white", fontSize: "45px", marginLeft: "100px", marginTop: "100px" }} >Artificial Intelligence</h3>
                <p style={{ color: "whitesmoke", width: "480px", marginLeft: "100px", marginTop: "25px" }} >  AI systems work by ingesting large amounts of labeled training data,
                  analyzing the data for correlations and patterns, and using these patterns
                  to make predictions about future states</p>
                <h6 style={{ color: "goldenrod", marginLeft: "250px", marginTop: "25px", cursor: "pointer" }} >Know More ..  </h6>

              </div>
              <div class="carousel-item carousel-two" data-bs-interval="5000">

                <h3 style={{ color: "white", fontSize: "45px", marginLeft: "100px", marginTop: "80px", width: "470px" }} >Business Intelligence Services</h3>
                <p style={{ color: "whitesmoke", width: "480px", marginLeft: "100px", marginTop: "20px" }} > Our  business analytics, data mining, data visualization,
                  data tools and infrastructure, and best practices to help organizations make more data-driven decisions </p>
                <h6 style={{ color: "goldenrod", marginLeft: "250px", marginTop: "25px", cursor: "pointer" }} >Know More ..  </h6>

              </div>
              <div class="carousel-item carousel-three" data-bs-interval="5000">

                <div style={{ marginLeft: "370px", background: "#143437eb", borderRadius: "20px", height: "270px", width: "480px", marginTop: "200px" }} className="bg-iot">
                  <h5 style={{ color: "#d5f93e", fontSize: "25px", marginLeft: "100px", marginTop: "40px" }} > {'>'} Machine Learing</h5>
                  <h5 style={{ color: "#d5f93e", fontSize: "25px", marginLeft: "100px", marginTop: "30px" }} > {'>'} Internet of things</h5>
                  <h5 style={{ color: "#d5f93e", fontSize: "25px", marginLeft: "100px", marginTop: "30px" }} > {'>'} Embedded system</h5>
                  <h5 style={{ color: "#d5f93e", fontSize: "25px", marginLeft: "100px", marginTop: "30px" }} > {'>'} Data Analytics</h5>
                  <h6 style={{ color: "#d5f93e", marginLeft: "180px", marginTop: "25px", cursor: "pointer" }} >More ...  </h6>
                </div>

              </div>

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>


      {/* Service Data analytics and Graph Section  */}

        <div style={{ display: "flex" }} className="data-analytics-sec">
          <div style={{ marginLeft: "35px", marginTop: "10px" }} className="data-graph-img">
            <img style={{ width: "45vw" }} src={datagraph} alt="" srcset="" />
          </div>

          <div style={{ marginTop: "70px",width:"40vw",marginLeft:"20px" }} className="data-graph-info">
            <h2>Business Solutions</h2>
            <p style={{marginTop:"30px"}}> Our business solution is a combination of ideas used
             to help your company achieve its objectives. Our business solution comes in terms of marketing, 
             payroll, auditing, accounting market research and analysis, among other essential business activities etc. </p>
             <h5>Cloud : Data Analytics : IT Security : Infotech Management - more</h5>

             <button style={{marginTop:"45px",}} type="button" class="btn btn-primary">Explore More</button>

          </div>
        </div>


     {/* Service Robotic Automation and IOT Banner Section  */}
     <div className="ra-iot-banner-container">
      <div className="ra-iot-banner">
        <img src={iotIcon} alt="" srcset="" />
        <div style={{display:"flex",flexDirection:"column"}} className="iot-infodiv">
        <h4>Explore Internet of things and Robotic Automation with AXIOS Infotech</h4>
         <p>Know more {'>>'}</p>
        </div>
       
      </div>
     </div>

      </div>
    </div>
  </>;
}

export default Services;

