import React, { useState } from "react";
import dataSlider from "./dataSlider";
import './Slider.css';
import BtnSlider from "./BtnSlider";

export default function Slider() {

  const [slideAnim, setSlideAnim] = useState({
    index: 1,
    inProgress: false,
  });

  const prevSlide = () => {
    if (slideAnim.index !== 1) {
      setSlideAnim({index: slideAnim.index - 1, inProgress: true})
    } else if (slideAnim.index === 1) {
      setSlideAnim({index: dataSlider.length, inProgress: true})
    }
  }

  const nextSlide = () => {
    if (slideAnim.index !== dataSlider.length) {
      setSlideAnim({index: slideAnim.index+1, inProgress: true})
    } else if (slideAnim.index === dataSlider.length) {
      setSlideAnim({index: 1 , inProgress: true})
    }
  }

  return (
    <div className='container-slider'>
      {dataSlider.map((obj, index) => {
        return (
          <div key={obj.id} className={slideAnim.index === index + 1 ? 'slide active-anim': 'slide'}>
            <img src={`/Imgs/img${index+1}.jpg`} alt=""/>
            <BtnSlider moveSlide={prevSlide} direction={'prev'}/>
            <BtnSlider moveSlide={nextSlide} direction={'next'}/>
          </div>
        )
      })}
    </div>
  )
}
