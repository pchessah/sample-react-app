import React, { useState } from "react";
import { PageHeader, Button, Switch, Modal} from "antd";
import AddLightModal from "./add-light-modal.component";
import { useAppDispatch, useAppSelector } from "../state/hook";
import { toggleSingleLight } from "../state/reducers/lights.reducer";

interface Props {}

function LightsControlMenu(props: Props) {
  const {} = props;
  const lightsState = useAppSelector((state) => state.lights);
  const dispatch = useAppDispatch();
  const [isAddBulbModalVisible, setIsAddBulbModalVisible] = useState(false);


  function toggleLight(checked: boolean) {
    let toggleAction = checked ? 'on' : 'off';
    lightsState.lights.map(light => {
      const payLoad = { light: light, toggleAction: toggleAction as 'on' | 'off'}
      dispatch(toggleSingleLight(payLoad));      
    });   
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


  return (
    <>
      <PageHeader ghost={false}
                  onBack={() => window.history.back()}
                  title="🎄Christmass Lights🎄"
                  subTitle=""
                  extra={[
                    <Switch onChange={toggleLight} />,
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
