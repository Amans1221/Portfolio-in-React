import React from 'react'
import data from "../assests/data.json"


const Experince = () => {
  return (
    <div id='experince'>
        <div className="experinceBox">
        {
    data.experince.map((item,index )=> (
        <ExperinceItem 
        heading={item.title}
        text={item.date} 
        index={index}
        key={item.title}/>
    ))
    }
        </div>
    </div>
  );
};

const   ExperinceItem =  ({heading,text,index}) => (
<div className={`experinceItem ${index % 2 === 0? "leftExperince":"rightExperince"}`}
>
  <div>
  <h2>{heading}</h2>
    <p>{text}</p>
  </div>
</div>
  
);

export default Experince