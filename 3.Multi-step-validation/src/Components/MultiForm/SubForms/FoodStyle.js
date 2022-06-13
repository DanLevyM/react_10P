import React, { useRef } from 'react';
import './SubForm.css';

export default function FoodStyle(props) {
  const preventFunc = (e) => {
    e.preventDefault();

    const styleData = {
      foodStyle: [],
    };

    allCheckboxes.current.forEach((checkbox) => {
      if (checkbox.checked) {
        styleData.foodStyle.push(checkbox.value);
      }
    });

    props.modifyIndex(4, styleData);
  };

  const allCheckboxes = useRef([]);

  const addCheck = (el) => {
    if (el && !allCheckboxes.current.includes(el)) {
      allCheckboxes.current.push(el);
    }
  };

  const handleReturn = () => {
    props.modifyIndex(2);
  };

  console.log(allCheckboxes);

  return (
    <div>
      <form className='checkbox-form' onSubmit={preventFunc}>
        <p>Quelles sont tes cuisines préférées ?</p>
        <span>Choix multiple.</span>

        <label htmlFor='italian'>Italienne</label>
        <input
          ref={addCheck}
          type='checkbox'
          id='italian'
          value='italian'
        ></input>

        <label htmlFor='japanese'>Japonaise</label>
        <input
          ref={addCheck}
          type='checkbox'
          id='japanese'
          value='japanese'
        ></input>

        <label htmlFor='thai'>Thailandaise</label>
        <input ref={addCheck} type='checkbox' id='thai' value='thai'></input>

        <label htmlFor='french'>Francaise</label>
        <input
          ref={addCheck}
          type='checkbox'
          id='french'
          value='french'
        ></input>

        <label htmlFor='chinese'>Chinoise</label>
        <input
          ref={addCheck}
          type='checkbox'
          id='chinese'
          value='chinese'
        ></input>

        <div className='container-nav-btns'>
          <button type='button' className='prev'>
            Précédent
          </button>
          <button>Valider</button>
        </div>
      </form>
    </div>
  );
}
