import { Avatar } from "antd";
import React, { useEffect} from "react";
import { IAllLights } from "../model/all-lights.model";
import { ILight } from "../model/light.model";
import { LightsService } from "../services/lights.service";
import { useAppDispatch, useAppSelector } from "../state/hook";
import { getInitialAllLightState, getInitialState } from "../state/reducers/lights.reducer";

interface Props {}

function Lights(props: Props) {
  const {} = props;
  const dispatch = useAppDispatch();
  const lightsState = useAppSelector((state) => state.lights);
  const allLightsState = useAppSelector((state) => state.lights.allLights);

  useEffect(() => {
    LightsService.getAllLights().then((val)=>{
     dispatch(getInitialState(val as ILight[]))
    })    
  }, []);

  useEffect(() => {
    LightsService.getInitialAllLightsState().then((val)=>{
      dispatch(getInitialAllLightState(val as IAllLights));
    })
  }, [])


  return (
    <>
      <div className="container lights-row">
        <div className="lights-row-item">
          {lightsState.lights.map((light) => 
            { return <Avatar style={{backgroundColor: `${allLightsState.on ? light.on? light.color: "grey" : "grey"}`}}
                             className={allLightsState.on ? 
                                        light.on?
                                        allLightsState.pattern==1 ?
                                        'blinking lights-row-item' :
                                        allLightsState.pattern == 2 ?
                                        'blinking_2 lights-row-item'  :'lights-row-item' :'lights-row-item': 'lights-row-item'} 
                             key={light.id}/>}           
          )}        
        </div>
   
      </div>
    </>
  );
}

export default Lights;
