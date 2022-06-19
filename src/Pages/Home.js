//This is home page, It will contains all the sections require in this page.

//Import all the require sections here
import HomeCover from "../Sections/HomeCover/index";
import About from "../Sections/About/index";
import Services from "../Sections/Services/index";
import Infoservice from "../Sections/Services/Services"
import Testimonials from "../Sections/Testimonials/index";
import Contact from "../Sections/Contact/index";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

const Home = () => {
  return (
    <Container>
      <HomeCover />
      <About />
      {/* <Services /> */}
      <Infoservice/>
      <Testimonials />
      <Contact />
    </Container>
  );
};

export default Home;
