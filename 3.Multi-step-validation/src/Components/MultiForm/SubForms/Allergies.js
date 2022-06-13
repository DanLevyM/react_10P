import React, { useRef } from 'react';
import './SubForm.css';

export default function Allergies(props) {
  const preventFunc = (e) => {
    e.preventDefault();

    const styleData = {
      allergies: [],
    };

    allCheckboxes.current.forEach((checkbox) => {
      if (checkbox.checked) {
        styleData.allergies.push(checkbox.value);
      }
    });

    props.modifyIndex(5, styleData);
  };

  const allCheckboxes = useRef([]);

  const addCheck = (el) => {
    if (el && !allCheckboxes.current.includes(el)) {
      allCheckboxes.current.push(el);
    }
  };

  const handleReturn = () => {
    props.modifyIndex(3);
  };

  // console.log(allCheckboxes);

  return (
    <div>
      <form className='checkbox-form' onSubmit={preventFunc}>
        <p>As tu des allergies ?</p>
        <span>Choix multiple.</span>

        <label htmlFor='milk'>Lait</label>
        <input ref={addCheck} type='checkbox' id='milk' value='milk'></input>

        <label htmlFor='pollen'>Pollen</label>
        <input
          ref={addCheck}
          type='checkbox'
          id='pollen'
          value='pollen'
        ></input>

        <label htmlFor='nuts'>Noix</label>
        <input ref={addCheck} type='checkbox' id='nuts' value='nuts'></input>

        <label htmlFor='eggs'>Oeuf</label>
        <input ref={addCheck} type='checkbox' id='eggs' value='eggs'></input>

        <label htmlFor='shellfish'>Fruits de mer</label>
        <input
          ref={addCheck}
          type='checkbox'
          id='shellfish'
          value='shellfish'
        ></input>

        <div className='container-nav-btns'>
          <button onClick={handleReturn} type='button' className='prev'>
            Précédent
          </button>
          <button>Valider</button>
        </div>
      </form>
    </div>
  );
}
