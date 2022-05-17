import React, { useState } from "react";
import { Button, Select } from "antd";
import { useAppDispatch } from "../state/hook";
import { ILightPattern } from "../model/light.model";
import { togglePattern, togglePatternInState } from "../state/reducers/lights.reducer";

interface Props {}

const { Option } = Select;

function ChangePatternModal(props: any) {
  const [currentPattern, setCurrentPattern] = useState(ILightPattern.P1);

  const dispatch = useAppDispatch();

  const {} = props

  function handleChange(value:ILightPattern )
  {
    setCurrentPattern(value);
  }

  const changePattern = () => {
    dispatch(togglePattern(currentPattern));
    dispatch(togglePatternInState(currentPattern));

    (props as any).onChanged(true); //Close modal after light has been changed

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
        <Button onClick={changePattern} className="light-submit" type="primary">
         Change Pattern
        </Button>
      </div>
    </>
  )
}

export default ChangePatternModal
