import { Avatar } from "antd";
import React, { useEffect} from "react";
import { ILight } from "../model/light.model";
import { LightsService } from "../services/lights.service";
import { useAppDispatch, useAppSelector } from "../state/hook";
import { getInitialState } from "../state/reducers/lights.reducer";

interface Props {}

function Lights(props: Props) {
  const {} = props;
  const dispatch = useAppDispatch();
  const lightsState = useAppSelector((state) => state.lights);

  useEffect(() => {
    LightsService.getAllLights().then((val)=>{
     dispatch(getInitialState(val as ILight[]))
    })    
  }, []);

  return (
    <>
      <div className="container lights-row">
        <div className="lights-row-item">
          {lightsState.lights.map((light) => 
            { return <Avatar style={{backgroundColor: `${light.on? light.color: "grey"}`}} className={light.on? 'blinking lights-row-item' : 'lights-row-item'} key={light.id}/>}           
          )}        
        </div>
   
      </div>
    </>
  );
}

export default Lights;
