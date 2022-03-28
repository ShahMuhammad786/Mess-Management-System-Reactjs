import React, {useState, useEffect} from 'react';
import { useNavigate, Routes,Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Payment from './Payment'
import Bills from './Bills'
import MessMenu from './MessMenu';
import Units from './Units'
import NotFound from './404';
import Rules from './Rules';
import logo from '../resources/logo.png';  
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout, Space, Popover, Breadcrumb, Menu, Button, PageHeader ,
  Modal,  Form, Input, message,
} from 'antd';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  LogoutOutlined,
  HeartOutlined,
  SettingOutlined,
  BellOutlined,
  MailOutlined,
  MailFilled,
  ScheduleFilled,
  DashboardFilled,
  DollarCircleFilled,
  FileTextFilled,
  ProfileFilled,
  FundFilled,
  WechatOutlined,
  NotificationFilled,
  LoginOutlined,
  KeyOutlined,

} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

export default function AppLayout(){
  const [collapsed, setState] = useState(false)
  const [width, setLogo] = useState(150)
  const [logoPadding, setPadding] = useState(10)
  const [logoMargin, setMargin] = useState(10)
  const navigate = useNavigate()
  const [page, setPage] = useState()
  const [isAdmin, setIsAdmin] = useState(false);

  function toggle(){
    setState(!collapsed);
    (!collapsed) ? logoWidth(70) : logoWidth(150)
  };

  function logoWidth(par){
    setLogo(par);
    setMargin(0);
    setPadding(20);
  };

  const moveAhead = (path) => {
    navigate(path);
  }

  const showAdmin = () => {
    setIsAdmin(true);
  };

  const handleOk = () => {
    setIsAdmin(false);
  };

  const handleCancel = () => {
    setIsAdmin(false);
  };

  const onFinish = (values) => {
      message.info('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
      message.error('Failed:', errorInfo);
  };

  const profile = (
    <div>
      <Menu>
        <Menu.Item key="1" icon={<LoginOutlined />} onClick={showAdmin}>Log in as Admin</Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>User Profile</Menu.Item>
        <Menu.Item key="3" icon={<HeartOutlined />}>Help Center</Menu.Item>
        <Menu.Item key="4" icon={<SettingOutlined />}>Settings</Menu.Item>
        <Menu.Item key="5" icon={<LogoutOutlined />}>Log out</Menu.Item>   
      </Menu>  
    </div>
  );

  
  return(
    <>    
      <Modal title="Login as Admin" width={300} visible={isAdmin} okText={"Login"} onOk={handleOk} onCancel={handleCancel}>
        <Form name="basic" 
          labelCol={{span: 8,}}                            
          initialValues={{remember: true,}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
        >
          <Form.Item
            name="password"                                
            rules={[{
              required: true,
              message: 'Please input your password!',
            },]}
          >
            <Input.Password prefix={<KeyOutlined />}
            placeholder="input password"
            size='large'width={100} />
          </Form.Item>
        </Form>
        
      </Modal>

      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} style={{
          backgroundColor: 'black',
          height:600,         
          position:'sticky',
          top:0, 
          }} >
          <div className="logo" style={{
            minHeight:50, 
            margin: logoMargin,
            paddingTop: logoPadding,    
            }}>
            <img src={logo} style={{width:width}} />
          </div> 
          <br/>
          
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{
                backgroundColor:'#131e26',
                width:'100%',
                height:600,                
                overflow: 'auto', 
                paddingTop: 20,              
                }}>                
                <Menu.Item key="1" icon={<DashboardFilled />} onClick={() => {moveAhead('dashboard')
                  setPage("Dashboard")}}>
                    Dashboard
                </Menu.Item>
                <Menu.Item key="2" icon={<DollarCircleFilled />} onClick={() =>{ moveAhead('payment')
                  setPage("Payment")}}>
                    Payments
                </Menu.Item>
                <Menu.Item key="3" icon={<FileTextFilled />} onClick={() => {moveAhead('bills')
                  setPage("Bills")}}>
                    Mess Bills
                </Menu.Item>
                <Menu.Item key="4" icon={<ProfileFilled />} onClick={() => {moveAhead('messmenu')
                  setPage("Menus")}}>
                    Mess Menus
                </Menu.Item>
                <Menu.Item key="5" icon={<FundFilled />} onClick={() => {moveAhead('units')
                  setPage("Units")}}>
                    Mess Units
                </Menu.Item>
                <Menu.Item key="6" icon={<WechatOutlined />} onClick={() => {moveAhead('')
                  setPage("Discussions")}}>
                    Discussions
                </Menu.Item>
                <Menu.Item key="7" icon={<NotificationFilled />} onClick={() => {moveAhead('')
                  setPage("Complaints")}}>
                    Complaints
                </Menu.Item>
                <Menu.Item key="8" icon={<MailFilled />} onClick={() => {moveAhead('')
                  setPage("Post Requests")}}>
                    Post Requests
                </Menu.Item>
                <Menu.Item key="9" icon={<ScheduleFilled />} onClick={() => {moveAhead('rules')
                  setPage("Rules and Announcements")}}>
                    Rules & Announcements
                </Menu.Item>
                
            </Menu>
        </Sider>

        {/*********  Header ***********/}
        <Layout className="site-layout">
          <PageHeader
            className="site-page-header-responsive"
            title={
              <Space>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: toggle, 
                })}               
              </Space>
            }
            
            subTitle="Mess Management System @BityCodz"
            extra={[
              <Popover placement="bottomLeft" title={"Notification Center"} content={""} trigger="click">
                <Button style={{backgroundColor:'lightgray'}} shape='circle' icon={<BellOutlined />}></Button>
              </Popover>,
              <Popover placement="bottom" title={"Emails"} content={""} trigger="click">
                <Button style={{backgroundColor:'lightgray'}} shape='circle' icon={<MailOutlined />}></Button>
              </Popover>,
              <Popover placement="bottomRight" title={"User Center"} content={profile} trigger="click">
                <Button style={{backgroundColor:'lightgray'}} shape='circle' icon={<UserOutlined />}></Button>
              </Popover>,
            ]}
            style={{ 
              backgroundColor: 'white',
              position:'sticky',
              top:0,   
              zIndex: '1',             
              boxShadow: 'rgba(149, 157, 165, 0.3) 0px 8px 24px',              
            }}
            >                                 
          </PageHeader>
          
          {/******** Main Content *************/}
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              backgroundColor: "white",
              boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
            }}>
            <Breadcrumb style={{ margin: '16px 0',display:"flex" }}>
              <Breadcrumb.Item>User Side</Breadcrumb.Item>
              <Breadcrumb.Item>{page}</Breadcrumb.Item>
            </Breadcrumb>   
            <Routes>
              <Route path='dashboard' element={<Dashboard/>}/>
              <Route path='payment' element={<Payment/>}/>
              <Route path='/bills' element={<Bills/>}/>
              <Route path='/messmenu' element={<MessMenu/>}/>
              <Route path='/units' element={<Units/>}/>
              <Route path='/rules' element={<Rules/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}
  