import React,{useEffect} from 'react';
import Navbartop from '../Navbar/Navbartop';
import {useHistory } from 'react-router-dom';
import { Tabs } from 'antd';

import './Account.css';

const Account = () => {
    const { TabPane } = Tabs;
    const history=useHistory();
    const handleClick= ()=> {
        history.push('/loginclient')
    }
    const userInfo=JSON.parse(localStorage.getItem('User'));
    return (
        <div>
        <div>
            <Navbartop/>
        </div>
        <>
        <Tabs tabPosition="left">
          <TabPane tab="Tab 1" key="1">
            Content of Tab 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab 3
          </TabPane>
        </Tabs>
        </>
        </div>
    )
}

export default Account;
