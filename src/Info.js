import React from "react";

const Info = (props) => {
    let data = props.data;
    let searched = props.firstSearch;
    let info;   
    if(data){
        info = JSON.stringify(data);
        info = info.replaceAll(",", ",\n\n");
    }
    console.log(searched);
    
    if(searched === false){
        return <p className="white">Search Something...</p>
    }

    else if(!data.name){
        return <p className="white">Couldn't find anything...</p>
    }
    else{return(
        <pre className="ba bw1 b--silver shadow-3">{info}</pre>
        );
    }
    
}


export default Info;