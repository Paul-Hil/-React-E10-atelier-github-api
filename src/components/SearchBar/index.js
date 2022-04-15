import React, { useEffect, useRef }  from 'react';

import Icon from 'src/assets/images/search-solid.svg'
import './index.scss'

const SearchBar = ({sendRequest, setValue, setPerPage}) => {

  const textInput = useRef(null);

  useEffect(() => {
    // => utilisation d'une ref : raccourci vers un élément du DOM (balise ou composant)
    // https://fr.reactjs.org/docs/refs-and-the-dom.html

    // console.log(textInput.current);
   textInput.current.focus();
  }, []);

  return (
      <form onSubmit={(evt) => {
        evt.preventDefault();
        sendRequest();
      }}>
        <div>
          <img src={Icon}></img>

          <input ref={textInput} type="text" className="searchBar" onChange={(evt) => {
            setValue(evt.currentTarget.value);
            setPerPage(9);
          }}></input>
        </div>
      </form>
  )
}



export default SearchBar;
