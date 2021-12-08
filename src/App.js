import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Data from "./Data"
import './App.css';

function App() {
  const [people,setpeople]=useState(Data);
  const [valu,setVlaue]=useState(0)
  return (
    <section>
       <div className="title">
        <h2> <span>/</span>Review</h2>
       </div>
       <div className="section-center">
          {people.map((person,personItem)=>{
            const {id,image,name,title,quote}=person
            return(
              <article key={id}> 
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className='title'>{title}</p>
                <p className="text">{quote}</p>                 
              </article>
            )
          })}
          <button className="prev">
            <FaAngleLeft/>
          </button>

          <button className="next">
            <FaAngleRight />
          </button>
       </div>
    </section>
  );
}

export default App;
