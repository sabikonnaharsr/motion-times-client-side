import  React, { useEffect } from 'react';

const UseTitle = (title) => {
    useEffect(() =>  {
        document.title = `${title}  - Motion Times`;
       
    },[title])
};

export default UseTitle;

