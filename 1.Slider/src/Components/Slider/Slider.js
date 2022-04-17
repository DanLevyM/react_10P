import React, { useState } from "react";
import dataSlider from "./dataSlider";
import './Slider.css';
import BtnSlider from "./BtnSlider";

export default function Slider() {

  const [slideAnim, setSlideAnim] = useState({
    index: 1,
    inProgress: false,
  });

  const nextSlide = () => {
    if (slideAnim.index !== dataSlider.length && !slideAnim.inProgress) {
      setSlideAnim({index: slideAnim.index + 1, inProgress: true})
      setTimeout(() => {
        setSlideAnim({index: slideAnim.index + 1, inProgress: false})
      }, 400)

    } else if (slideAnim.index === dataSlider.length && !slideAnim.inProgress) {
      setSlideAnim({index: 1 , inProgress: true})
      setTimeout(() => {
        setSlideAnim({index: 1, inProgress: false})
      }, 400)
    }
  }

  const prevSlide = () => {
    if (slideAnim.index !== 1 && !slideAnim.inProgress && !slideAnim.inProgress) {

      setSlideAnim({index: slideAnim.index - 1, inProgress: true})
      setTimeout(() => {
        setSlideAnim({index: slideAnim.index - 1, inProgress: false})
      }, 400)

    } else if (slideAnim.index === 1 && !slideAnim.inProgress) {
      setSlideAnim({index: dataSlider.length, inProgress: true})
      setTimeout(() => {
        setSlideAnim({index: dataSlider.length, inProgress: false})
      }, 400)
    }
  }

  const moveDot = index => {
    setSlideAnim({index: index, inProgress: true})
    setTimeout(() => {
      setSlideAnim({index: index, inProgress: false})
    }, 400)

  }

  return (
    <div className='container-slider'>
      {dataSlider.map((obj, index) => {
        return (
          <div key={obj.id} className={slideAnim.index === index + 1 ? 'slide active-anim': 'slide'}>
            <img src={`/Imgs/img${index+1}.jpg`} alt=""/>
            <BtnSlider moveSlide={prevSlide} direction={'prev'}/>
            <BtnSlider moveSlide={nextSlide} direction={'next'}/>

            <div className="container-dots">
              {dataSlider.map((obj, indexForDots) => {
                return (
                  <div key={obj.id} className={slideAnim.index === indexForDots + 1 ? 'dot active' : 'dot'}
                  onClick={() => moveDot(indexForDots + 1)}
                  />
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
