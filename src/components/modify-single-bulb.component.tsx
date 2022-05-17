import React, { useState } from "react";
import { Button, Select } from "antd";
import { useAppDispatch } from "../state/hook";
import { ILight, ILightPattern } from "../model/light.model";

interface Props {}

const { Option } = Select;

function ModifySingleBulbModalComponent(props: any) {
const [currentLightState, setCurrentLightState] = useState({} as ILight)

  const dispatch = useAppDispatch();

  const {} = props

  function handleChange( )
  {

  }

  const changeColor = () => {   
    closeModalAfterAction();

  }

  const removeBulb = () =>{
    closeModalAfterAction();
  }

  function closeModalAfterAction(){
    (props as any).onClosed(true); 
  }

  return (
    <>
       <div className="light-selector">
        <Select
          defaultValue={1}
          style={{ width: 120 }}
          onChange={handleChange}
        >
          <Option value={1}>Pattern 1</Option>
          <Option value={2}>Pattern 2</Option>
        </Select>
        <Button className="light-submit" type="primary">
         Change Pattern
        </Button>
      </div>
    </>
  )
}

export default ModifySingleBulbModalComponent
