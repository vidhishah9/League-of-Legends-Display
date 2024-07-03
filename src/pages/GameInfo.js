import { useState } from 'react';
import { EnemeyChampionNameArrayTotal } from "./GameFunction.js";
import { matchDataArray } from "./GameFunction.js";
import { kills } from "./GameFunction.js";
import { assists } from "./GameFunction.js";
import { deaths } from "./GameFunction.js";
import { AllyChampionNameArrayTotal } from "./GameFunction.js";
import { CS } from "./GameFunction.js";
import { vision } from "./GameFunction.js";
import React from 'react'


export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
  
    function handleNextClick() {
      setIndex(index + 1);
    }
  
    function handleMoreClick() {
      setShowMore(!showMore);
    }
  
    let sculpture = matchDataArray[index];
    return (
      <>
        <button onClick={handleNextClick}>
          Next
        </button>
        <h2>
          Ally Team: {sculpture.AllyChampions} 
        </h2>
        <h2>
        Enemy Team: {sculpture.EnemyChampions}
        </h2>
        <h2>
        KDA: {sculpture.Kills} / {sculpture.Deaths} / {sculpture.Assists}
        </h2>
        
        <h3>  
          ({index + 1} of {matchDataArray.length})
        </h3>
      </>
    );
  }
  



