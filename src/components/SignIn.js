import { Card, Row, Col, Avatar,InputNumber ,
    Form, Input, Button, message 
} from 'antd';
import { useNavigate, Routes,Route } from 'react-router-dom';
import React, { useState } from 'react';
import { 
    UserOutlined,
    FacebookFilled,
    GoogleSquareFilled,
    KeyOutlined,

} from '@ant-design/icons';
import SignUp from './SignUp';
import NotFound from './404';
import AppLayout from './AppLayout';

const onFinish = (values) => {
    message.info('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    message.error('Failed:', errorInfo);
};
  
export default function SignIn(){
    const navigate = useNavigate();
    const moveAhead = (path)=>{
        navigate(path)
    }

    return(
        <div style={{
            minHeight:"650px",
            background: 'rgb(53,208,217)',
            background: 'linear-gradient(100deg, rgba(53,208,217,0.7539390756302521) 31%, rgba(21,244,28,0.7847514005602241) 76%)', }}>
            
            <h1 style={{color:"white",
               paddingTop:"20px", }}>
                <b>Kali</b> Mess Management System                
            </h1>
            
            <Row>
                <Col span={12} offset={8}>
                    <Card style={{marginBottom:"20px", width:"65%", border:"none", backgroundColor:"Background", borderRadius:"5px"}}>
                        <h1 style={{color:"white"}}>Sign In</h1>

                        <Button type="primary" size="large" icon={<FacebookFilled />} style={{width:"48%", marginRight:"10px",}}> Facebook</Button>
                        <Button type="danger" size="large" icon={<GoogleSquareFilled />} style={{width:"48%"}}> Google</Button>
                        <br/><br/>
                        
                        <Form name="basic" 
                            labelCol={{span: 8,}}                            
                            initialValues={{remember: true,}}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="on"
                        >
                            <Form.Item                                
                                name="username"
                                rules={[{
                                    required: true,
                                    message: 'Please input your username!',
                                },]}
                            >
                                <Input size='large' placeholder="Username" prefix={<UserOutlined />}  />
                            </Form.Item>
                            
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

                            <Form.Item
                                name="remember"
                                valuePropName="checked"                                
                            >
                                <span style={{color:"white", float:"right"}}><a>Forgot the password?</a> </span>
                            </Form.Item>

                            <Form.Item>
                                <Button onClick={() =>  moveAhead('/main')} size='large' type="primary" htmlType="submit" style={{width:"100%"}}>Sign In </Button>
                            </Form.Item>

                            <Form.Item>
                                <span style={{fontSize:"15px", color:"white"}}>Don't you have account, <a onClick={() =>  moveAhead('SignUp')}>Make One!</a></span>
                            </Form.Item>

                        </Form>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}