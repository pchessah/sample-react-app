import React from 'react'
import LightsControlMenu from '../components/lights-control-menu.component';
import Lights from '../components/lights.component';

interface Props {}

function LightsPage(props: Props) {
  const {} = props

  return (
    <>
   <h3>🎄Christmass Lights🎄</h3>
    <LightsControlMenu/>
    <Lights/>
    </>
    
  )
}

export default LightsPage;
