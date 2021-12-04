import React, { useState, useEffect } from 'react'

const Image = (props) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      setWidth(window.innerWidth);
    },[]);
    
    return <img src={props.src} style={{ width: width }} />;
}