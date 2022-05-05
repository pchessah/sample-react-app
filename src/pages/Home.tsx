import React, { useEffect, useState } from "react";
import HomeBanner from "../components/HomeBanner";
import UsersTable from "../components/UserTable";

interface Props {}

function Home(props: Props) {
  const {} = props;
  const [viewUsers, setViewUsers] = useState(false);

  const handleViewUsers = () => {
    return setViewUsers(!viewUsers);
  };



  return (
    <>
      <div className="container">
        {viewUsers ? <UsersTable /> : <HomeBanner onClick={handleViewUsers} />}
      </div>
    </>
  );
}

export default Home;
