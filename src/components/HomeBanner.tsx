import { Button } from 'antd'
import React from 'react';

function HomeBanner(props: {onClick:()=>void}) {
  const {} = props

  return (
    <div className="home-banner container">
      <h3>Savannah Informatics Users</h3>
      <Button onClick={props.onClick}>View Users</Button>
    </div>
    
  )
}

export default HomeBanner;
