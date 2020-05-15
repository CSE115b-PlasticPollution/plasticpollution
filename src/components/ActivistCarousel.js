import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react';
import {render} from 'react-dom';

const ActivistCarousel = () => {

  const style = {
      height:'55vh',
  }
  const formatPicCarousel ={
    height:'35vh',
  }

  const CarouselFont = {
    fontWeight: '430',
    color:'white'
  }
  const colorFont ={
    color:'white'
  }

  return(
    <div>
    <Carousel style={style}>
      <Carousel.Item style={formatPicCarousel}>
        <img
          className="c-block w-100"
          src="https://img5.goodfon.com/wallpaper/nbig/2/ec/more-okean-butylka-musor-zagriaznenie-sea-ocean-bottle-fish.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 style={CarouselFont}>Fight Plastic Pollution</h1>
          <h3 style={colorFont}>The little things matter</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="c-block w-100 "
          src="https://nicolepanethere.com/wp-content/uploads/2019/06/16-Graphic-A-940x675.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="c-block w-100"
          src="https://i.pinimg.com/originals/99/be/34/99be3467f3cf84bcfaa7c8bf9d730599.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default ActivistCarousel;
