import React,{Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import firstImage from "./images/organ-donation1.jpg";
import secondImage from "./images/Slider_2.jpeg";
import thirdImage from "./images/one-organ-donor-saves-8-lives_0.png";

export class Home extends Component{

    render(){
        return(
            <div className="md-5 d-flex justify-content-center" style={{width:"100%"}}>
               <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-80"
          src={firstImage}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-200"
          src={secondImage}
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={thirdImage}
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel>
            </div>
        )
    }
}