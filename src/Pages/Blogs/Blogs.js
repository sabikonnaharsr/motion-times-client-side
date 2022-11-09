import React from 'react';
import UseTitle from '../Hooks/UseTitle';

const Blogs = () => {
    UseTitle('Blogs')
    return (
        
       <div>  
        <h1 className='mb-10 mt-10 text-blue-800 text-6xl font-bold font-GreatVibes'>This is About Blog Contents</ h1>
         <div className='grid grid-cols md:grid-cols-3 lg:grid-cols-2 gap-4  mb-20'>     
         <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 squire-box">
          <div className="collapse-title text-xl font-medium">
            <p>What is difference between SQL and noSQL ?</p>
         </div>
         <div className="collapse-content"> 
         <p> SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
       </div>
     </div>  
        
    <div tabIndex={0} className="collapse collapse-plus border border-base-300  bg-base-100 squire-box">
       <div className="collapse-title text-xl font-medium">
          <p>What is JWT? And how does it works?</p>
       </div>
         <div className="collapse-content"> 
         <p className=''>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
         <div>  
         </div>
       </div>
     </div>  
    <div tabIndex={0} className="collapse collapse-plus border border-base-300  bg-base-100 squire-box">
       <div className="collapse-title text-xl font-medium">
          <p>What is the difference between Javascript and Node Js?</p>
       </div>
         <div className="collapse-content"> 
          <p> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>
          <div>   
         </div>
       </div>
     </div>  
    <div tabIndex={0} className="collapse collapse-plus border border-base-300  bg-base-100 squire-box">
       <div className="collapse-title text-xl font-medium">
          <p> How does nodeJS handle multiple request at the same time?</p>
       </div>
         <div className="collapse-content"> 
         <p>tabIndex={0} attribute is necessary to make the div focusable</p>
         <div>
           How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
         </div>
       </div>
     </div>  
     </div>
       </div>
    );
};

export default Blogs;