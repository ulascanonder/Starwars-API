import React from "react";

const SearchBox = (props) =>{
    let {searchField, searchChange} = props;
    const onButtonClick = props.onPress;
    return(
        <div className="search shadow-3">
            <form className="pa4 black-80">
                <div className="measure">
                    <label for="name" className="f6 white-60 b db mb2">Try searching something</label>
                    <input id="name" placeholder="people/1" onChange = {searchChange} 
                     className="input-reset ba b--black-20 pa2 mb2 db w-100"
                      type="text" aria-describedby="name-desc"/>
                    <small id="name-desc" className="f6 white-60 db mb2">Try these: <strong>people/1</strong> or <strong>planets/1</strong> or <strong>starships/9</strong> </small>
                </div>
            </form>
            <p class="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue pointer" href="#0" onClick={onButtonClick}>Search</p>
        </div>
    );
};

export default SearchBox;