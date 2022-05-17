import { Avatar, Button, Modal } from "antd";
import React, { useEffect, useState} from "react";
import { IAllLights } from "../model/all-lights.model";
import { ILight } from "../model/light.model";
import { LightsService } from "../services/lights.service";
import { useAppDispatch, useAppSelector } from "../state/hook";
import { getInitialAllLightState, getInitialState } from "../state/reducers/lights.reducer";
import ModifySingleBulbModalComponent from "./modify-single-bulb.component";

interface Props {}

function Lights(props: Props) {
  const [isModifyBulbModalVisible, setIsModifyBulbModalVisible] = useState(false);
  const [bulbToModify, setBulbToModify] = useState<ILight | null>(null);

  const {} = props;
  const dispatch = useAppDispatch();
  const lightsState = useAppSelector((state) => state.lights);
  const allLightsState = useAppSelector((state) => state.lights.allLights);


  const handleOk = () => {
    setIsModifyBulbModalVisible(false);
  };

  const handleCancel = () => {
    setIsModifyBulbModalVisible(false);
  };

  const editBulb = (id: string) => {
    setBulbToModify(lightsState.lights.find((light) => light.id === id));
    setIsModifyBulbModalVisible(true);
  }

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
          {lightsState.lights.map((light, index) => 
            { return (
              <>
              <div className="lights-container">
              <Button onClick={() => editBulb(light.id)}> Edit Bulb `${index +1}`</Button>
                  <Avatar style={{backgroundColor: `${allLightsState.on ? light.on? light.color: "grey" : "grey"}`}}
                             className={allLightsState.on ? 
                                        light.on?
                                        allLightsState.pattern==1 ?
                                        'blinking lights-row-item' :
                                        allLightsState.pattern == 2 ?
                                        'blinking_2 lights-row-item'  :'lights-row-item' :'lights-row-item': 'lights-row-item'} 
                             key={light.id}/>
                             </div>
              </>
            )
        }           
          )}        
        </div>   
      </div>

      <Modal title="Modify Bulb"
             visible={isModifyBulbModalVisible}
             footer={<Button onClick={handleCancel}>
             Cancel
            </Button>}
            onCancel={handleCancel}>
     <ModifySingleBulbModalComponent bulbToModify={bulbToModify} onChanged={handleOk} />
     </Modal>
    </>
  );
}

export default Lights;
