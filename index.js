import React from 'react';
import ReactDOM from 'react-dom';
import'./index.css';
import {data} from './books';
import Book from './Book';


function Greeting(){
 return(
        <section className='booklist'>
          {data.map((book, id)=>{
              return <Book key={book.id} {...book}></Book>;
          })}
     
        </section>
  );
}


ReactDOM.render(<Greeting/>,document.getElementById('root'));