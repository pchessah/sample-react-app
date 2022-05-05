import React, { FunctionComponent, useEffect, useState } from "react";
import { Table, Button, Modal, Spin } from "antd";

import { User } from "../model/user.model";

import SingleUserPostsModal from "./SingleUserPostsModal";
import SingleEditUserModal from "./SingleEditUserModal";
import { useAppDispatch, useAppSelector } from "../state/hook";

import UserPostsService from "../services/UserPostsService";
import { getUsers } from "../state/reducers/users.reducer";

const UsersTable: FunctionComponent = () => {

  const [currentUser, setCurrentUser] = useState<User>({} as  User);
  const [isPostsModalVisible, setIsPostModalVisible] = useState<boolean>(false);
  const [isEditUserModalVisible, setIsEditUserModalVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const dispatch= useAppDispatch();
  const users = useAppSelector((state => state.users.value));

  const showModal = (type: 'posts' | 'users') => {
    switch (type) {
      case 'posts':
        setIsPostModalVisible(true);        
        break;
      case 'users':
        setIsEditUserModalVisible(true);
        break;    
      default:
        break;
    }   
  };

  const handleOk = (type: 'posts' | 'users') => {
    switch (type) {
      case 'posts':
        setIsPostModalVisible(false);        
        break;
      case 'users':
        setIsEditUserModalVisible(false);
        break;
    
      default:
        break;
      }
      
      setCurrentUser({} as User);
  };

  const handleCancel = (type: 'posts' | 'users') => {
    switch (type) {
      case 'posts':
        setIsPostModalVisible(false);        
        break;
      case 'users':
        setIsEditUserModalVisible(false);
        break;
    
      default:
        break;
    }

    setCurrentUser({} as User);
  };

  const viewUserPosts = (user: User) => {
    setCurrentUser(user);
    showModal('posts');
  };

  const editUser = (user: User) => {
    setCurrentUser(user);
    showModal('users');
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (address: any) => <>{address.suite}</>,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <>
          <Button>View User Posts</Button>
        </>
      ),
      onCell: (user: User) => {
        return {
          onClick: () => {
            viewUserPosts(user);
          },
        };
      }
    },
    {
      title: "Edit User",
      dataIndex: "edit",
      key: "edit",
      render: () => (
        <>
          <Button>Edit User</Button>
        </>
      ),
      onCell: (user: User) => {
        return {
          onClick: () => {
            editUser(user);
          },
        };
      }
    },
  ];


  useEffect(() => {
    UserPostsService.getUsers()
      .then((response) => {
        const data = response.data as User[];
         dispatch(getUsers(data));        
        })
      .then(() => setIsLoading(false));
  }, [dispatch]);



  return (
    <>
      <h1>Savannah Informatics Users</h1>
      {isLoading ? (
        <Spin />
      ) : (

    
        <Table
          columns={columns}
          dataSource={users}
        />
      )}
      

      <Modal
        width={650}
        title={currentUser.name}
        visible={isPostsModalVisible}
        onOk={() => handleOk('posts')}
        onCancel={() => handleCancel('posts')}
        footer={[
          <Button key="submit" type="primary" onClick={() => handleOk('posts')}>
            Back
          </Button>,
        ]}
      >
        <SingleUserPostsModal {...currentUser} />
      </Modal>


      <Modal
        width={650}
        title={currentUser.name}
        visible={isEditUserModalVisible}
        onOk={() => handleOk('users')}
        onCancel={() => handleCancel('users')}
        footer={[
          <Button key="submit" type="primary" onClick={() => handleCancel('users')}>
            Back  
          </Button>,
          <Button key="submit" type="primary" onClick={() => handleOk('users')}>
            Save
          </Button>
        ]}
      >
        <SingleEditUserModal {...currentUser} />
      </Modal>
    </>
  );
};

export default UsersTable;
