import React from "react"

 const Book=({img,title,Author}) =>{
   
   const ClickMesaage=()=>{
     alert('Books');
   }
    return(
        <article className='book'>
         <img src={img} alt=''/>
          <h4 onClick={()=>title}>{Author}</h4>
          <h1>{title}</h1>
          <button type='button' onClick={ClickMesaage}>
            Mesaage
          </button>
        </article>
    );
  };
  
 export default Book