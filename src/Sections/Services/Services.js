import React from 'react';
import "../../style/service.css"
import aIbIimage from "../../assets/service-image/ai-bi-cover-image.jpg"

function Services() {
  return <>
  <div id='service' className='infoser'  >
  <div className="upper-container">
      <div className="ai-bi-cover-image">
        <img src={aIbIimage} alt="" srcset="" />
      </div>
      
      <div className="ai-bi-discription">
        <h1 >BI and AI</h1>
     
        <h5 style={{marginBottom:"10px",marginTop:"50px"}} >Nlp Enabled</h5>
        <p style={{color:"grey",marginBottom:"40px"}} >NLP enables bots to continuously 
          add new synonyms and uses Machine Learning to 
          expand chatbot vocabulary while also transfer
           vocabulary from one bot to the next.</p>


           <h5 style={{marginBottom:"10px"}} >BI Modernization & Analytics</h5>
          <p style={{color:"grey"}} >We offer predictive analytics solutions
             that are self-service, agile deployments using dev-ops methodologies, 
             continuous monitoring and operational efficiencies in your data warehouse deployments 
             and cloud based offerings that help you save capital expenditures</p>
         </div>
         </div>

  <div className="lower-container">

  </div>
</div>
  </>;
}

export default Services;

