import React from "react";

const Btn = (props) =>{
    const onButtonClick = props.onPress;
    return(
        <a class="f6 link dim ba bw1 h2 ph3 pv2 mb2 dt v-top purple" href="#0" onClick={onButtonClick} >Search</a>
    );
};


export default Btn;