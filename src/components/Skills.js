import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <br></br> <br></br><br></br>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Here is some of my technical skills </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                           <img src={meter1} alt="Image"/>
                                <h4>Programming Languages</h4>
                                <br></br>
                                <h5>Java</h5>
                                <h5>C++</h5>
                                <h5>HTML/CSS</h5>
                                <h5>Python</h5>
                                <h5>JavaScript</h5>
                                <h5>C</h5>
                                <h5>SQL</h5>
                                <h5>R</h5>
                                <h5>LaTeX</h5>
                                <h5>MATLAB</h5>
                            </div>
                            <div className="item">
                                 <img src={meter2} alt="Image" />  
                                <h4>Tools/Frameworks</h4>
                                <br></br>
                                <h5>JUnit</h5>
                                <h5>Vue.js</h5>
                                <h5>Node.js</h5>
                                <h5>React</h5>
                                <h5>JavaScript</h5>
                                <h5>MongoDB</h5>
                                <h5>DynamoDB</h5>
                                <h5>AWS</h5>
                                
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}