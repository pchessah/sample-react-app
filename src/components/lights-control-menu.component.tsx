import React, { useState } from "react";
import { PageHeader, Button, Switch, Modal} from "antd";
import AddLightModal from "./add-light-modal.component";

interface Props {}

function LightsControlMenu(props: Props) {
  const {} = props;
  const [isAddBulbModalVisible, setIsAddBulbModalVisible] = useState(false);


  function toggleLight(checked: any) {
    console.log(`switch to ${checked}`);
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
                    <Switch defaultChecked onChange={toggleLight} />,
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
        <AddLightModal />
      </Modal>
    </>
  );
}

export default LightsControlMenu;
