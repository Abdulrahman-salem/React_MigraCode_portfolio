import React from 'react'
import { useLocation } from 'react-router-dom';

function Project() {
    const { state } = useLocation();
    console.log(state);
    
  return (
    <div>Project</div>
  )
}

export default Project