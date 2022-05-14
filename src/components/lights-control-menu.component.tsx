import React from "react";
import { PageHeader, Button, Switch } from "antd";

interface Props {}

function LightsControlMenu(props: Props) {
  const {} = props;


  function toggleLight(checked: any) {
    console.log(`switch to ${checked}`);
  }

  return (
    <>
      <PageHeader ghost={false}
                  onBack={() => window.history.back()}
                  title="🎄Christmass Lights🎄"
                  subTitle=""
                  extra={[
                    <Switch defaultChecked onChange={toggleLight} />,
                    <Button key="2">Add Bulb</Button>,
                    <Button key="4">Change Pattern</Button>,
                    <Button key="1" danger>
                    Remove Bulb
                    </Button>,
                  ]}>
      </PageHeader>
    </>
  );
}

export default LightsControlMenu;
