import React, { useState,useEffect } from 'react';
function App() {
  const [color,setcolor]=useState("");

  useEffect(()=>{
    document.body.style.backgroundColor=color;
  },[color])

  function changebg(colorr){
    setcolor(colorr);
  }

  return(
    <div>
     <button id='red' onClick={()=>changebg('red')}>
      Red
     </button>
    </div>
  );
}

export default App;
