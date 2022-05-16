import React, { useState } from "react";
import { Button, Select } from "antd";
import { ILight } from "../model/light.model";
import { useAppDispatch } from "../state/hook";
import { addLight, addLightToState } from "../state/reducers/lights.reducer";

const { Option } = Select;

function AddLightModal(props: any) {
  const dispatch = useAppDispatch();

  const [currentLightColor, setCurrentLightColor] = useState("#198754");

  function handleChange(value: string) {
    setCurrentLightColor(value);
  }

  const add=()=>{
    const light = {
      on: false,
      color: currentLightColor,
    } as ILight;

    dispatch(addLight(light));
    dispatch(addLightToState(light));
    (props as any).onAdded(true); //Close modal after light has been added
  }

  const {} = props;

  return (
    <>
    <div className="light-selector">
      <Select defaultValue="#198754"
              style={{ width: 120 }}
              onChange={handleChange}>
        <Option value="#198754">Green</Option>
        <Option value="#FF0000">Red</Option>
      </Select>
      <Button onClick={add} className="light-submit" type="primary">Add Light</Button>
    </div>
    </>
  );
}

export default AddLightModal;
