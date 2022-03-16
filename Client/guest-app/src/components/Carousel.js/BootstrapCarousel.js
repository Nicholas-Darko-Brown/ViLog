import React from 'react';
import { Carousel } from 'react-bootstrap'
import Home from '../Home/Home'
import Forms from '../Forms/Forms'
import SignedIn from '../SignedIn/SignedIn';
// import Host from '../Host/Host'


const BootstrapCarousel = () => {
  return (
    <div>
      <Carousel style={{height: '100vh'}} interval={null}>
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src="https://reactjs.org/logo-og.png"
            alt="First slide"
          /> */}

          <div style={{height: '100vh', backgroundColor: "rgba(255, 255, 255, 0.8)"}}>
            <Home />
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src="https://image.shutterstock.com/image-vector/javascript-programming-language-script-code-260nw-1062509657.jpg"
            alt="Second slide"
          /> */}

          <div style={{height: '10', backgroundColor: "rgba(255, 255, 255, 0.8)"}}>
            <Forms />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src="https://www.tutorialrepublic.com/lib/images/bootstrap-5.0-illustration.png"
            alt="Third slide"
          /> */}

          <div style={{height: '100vh', backgroundColor: "rgba(255, 255, 255, 0.8)"}}>
            <SignedIn />
          </div>


        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BootstrapCarousel;
