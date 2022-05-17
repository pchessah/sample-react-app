import React, { useState } from "react";
import { Button, Select } from "antd";
import { useAppDispatch } from "../state/hook";
import { ILight, IToggleAction } from "../model/light.model";
import { deleteSingleLight, toggleSingleLight, toggleSingleLightColorChange } from "../state/reducers/lights.reducer";

const { Option } = Select;

function ModifySingleBulbModalComponent(props: any) {

const [bulbToModify, setBulbToModify] = useState<ILight | null>(props.bulbToModify);

  const dispatch = useAppDispatch();

  const {} = props

  function handleToggleChange( val: IToggleAction)
  { 
    const light = { on: val === IToggleAction.on ? true : false, id: bulbToModify.id, color:bulbToModify.color } as ILight;  
    setBulbToModify(light);
    const payLoad = { light: bulbToModify, toggleAction: val}
    dispatch(toggleSingleLight(payLoad));
  }

  function handleColorChange(color: string){
    const light = { on: bulbToModify.on, id: bulbToModify.id, color: color } as ILight;
    setBulbToModify(light);
    const payLoad = { light: bulbToModify, color: color}
    dispatch(toggleSingleLightColorChange(payLoad));
  }

  const removeBulb = () => {
    dispatch(deleteSingleLight(bulbToModify));
    closeModalAfterAction();
  }

  function closeModalAfterAction(){
    (props as any).onClosed(true); 
  }

  return (
    <>
       <div className="modify-container">
         <div>
          <span>Turn on/off</span>
            <Select defaultValue={bulbToModify.on ? IToggleAction.on : IToggleAction.off}
                    onChange={handleToggleChange}
                    style={{ width: 120 }} >
              <Option value={IToggleAction.on}>On</Option>
              <Option value={IToggleAction.off}>Off</Option>
            </Select>           
         </div>
         <div>
           <span>Color</span>
            <Select defaultValue={bulbToModify.color}
                    style={{ width: 120 }}
                    onChange={handleColorChange} >
              <Option value="#198754">Green</Option>
              <Option value="#FF0000">Red</Option>
            </Select>
         </div>

         <div>
           <Button onClick={removeBulb} className="light-submit" type="ghost" color="red">
              Remove Bulb
            </Button>
         </div>
      
        <Button onClick={closeModalAfterAction} className="light-submit" type="primary">
          Done
        </Button>
      </div>
    </>
  )
}

export default ModifySingleBulbModalComponent
