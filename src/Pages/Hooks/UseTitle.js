import  React, { useEffect } from 'react';

const UseTitle = (title) => {
    useEffect(() =>  {
        document.title = `${title}  -Sequel Extract`;
       
    },[title])
};

export default UseTitle;

