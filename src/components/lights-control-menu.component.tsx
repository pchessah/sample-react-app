import React, { useEffect, useState } from "react";
import { PageHeader, Button, Switch, Modal} from "antd";
import AddLightModal from "./add-light-modal.component";
import { useAppDispatch, useAppSelector } from "../state/hook";
import { getInitialAllLightState, toggleAllLights, toggleSingleLight } from "../state/reducers/lights.reducer";
import { LightsService } from "../services/lights.service";
import { IAllLights } from "../model/all-lights.model";
import { IToggleAction } from "../model/light.model";

interface Props {}

function LightsControlMenu(props: Props) {
  const {} = props;
  const lightsState = useAppSelector((state) => state.lights);
  const allLightsState = useAppSelector((state) => state.lights.allLights);
  const dispatch = useAppDispatch();
  const [isAddBulbModalVisible, setIsAddBulbModalVisible] = useState(false);


  function toggleLight(checked: boolean) {
    const toggleAction: IToggleAction = checked ? IToggleAction.on : IToggleAction.off;

    lightsState.lights.map(light => {
      const payLoad = { light: light, toggleAction: toggleAction}
      dispatch(toggleSingleLight(payLoad));
    });
    
    dispatch(toggleAllLights({toggleAction}))
  }

  function addBulb(){
    setIsAddBulbModalVisible(true);
  }

  const handleOk = () => {
    setIsAddBulbModalVisible(false);
  };

  const handleCancel = () => {
    setIsAddBulbModalVisible(false);
  };

  useEffect(() => {
    LightsService.getInitialAllLightsState().then((val)=>{
      dispatch(getInitialAllLightState(val as IAllLights));
    })
  }, [])


  return (
    <>
      <PageHeader ghost={false}
                  onBack={() => window.history.back()}
                  title="🎄Christmass Lights🎄"
                  subTitle=""
                  extra={[
                    <Switch checked={allLightsState.on} onChange={toggleLight} />,
                    <Button onClick={addBulb} key="2">Add Bulb</Button>,
                    <Button key="3">Change Pattern</Button>,
                    <Button key="1" danger>
                      Remove Bulb
                    </Button>,
                  ]}>
      </PageHeader>

      <Modal title="Add Light" 
             visible={isAddBulbModalVisible}
             footer={<Button onClick={handleCancel}>
                     Cancel
                    </Button>}
             onCancel={handleCancel}>
        <AddLightModal onAdded={handleOk} />
      </Modal>
    </>
  );
}

export default LightsControlMenu;
