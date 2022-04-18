import React, {useContext} from "react";
import SpanishFlag from '../../assets/spain.svg';
import FrenchFlag from '../../assets/france.svg';
import UkFlag from '../../assets/united-kingdom.svg';
import './ToggleLangs.css';
import {Context} from "../../context/langContext";

export default function Togglelangs () {
  const {toggleLang} = useContext(Context);

  return (

    <div className='container-langs'>

      <img onClick={() => toggleLang('FR')} src={FrenchFlag} alt=""/>
      <img onClick={() => toggleLang('ES')} src={SpanishFlag} alt=""/>
      <img onClick={() => toggleLang('EN')} src={UkFlag} alt=""/>

    </div>
  )
}
