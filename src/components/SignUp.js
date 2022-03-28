import { Card, Row, Col, Avatar,InputNumber ,
    Form, Input, Button, Checkbox 

} from 'antd';
import React, { useState } from 'react';
import { 
    UserOutlined,
    FacebookFilled,
    GoogleSquareFilled,
    MailOutlined,
    HomeOutlined,
    KeyOutlined,

} from '@ant-design/icons';


const onFinish = (values) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
  
export default function SignUp(){
    
    return(
        <div style={{
            background: "rgb(53,53,217)",
            background: "linear-gradient(128deg, rgba(53,53,217,0.5214460784313726) 45%, rgba(21,244,28,0.7847514005602241) 100%)",}}>
            
            <h1 style={{color:"white",
               paddingTop:"20px", }}>
                <b>Kali</b> Mess Management System                
            </h1>
            
            <Row>
                <Col span={12} offset={8}>
                    <Card style={{marginBottom:"20px", width:"65%", border:"none", backgroundColor:"Background", borderRadius:"5px"}}>
                        {/* <Avatar size={70} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined style={{fontSize:"50px", }}/>} /> */}
                        <h1 style={{color:"white"}}>Sign Up</h1>

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
                                name="email"
                                rules={[{
                                    required: true,
                                    message: 'Please input your email!',
                                },]}
                            >
                                <Input size='large' placeholder="email" prefix={<MailOutlined />}  />
                            </Form.Item>

                            <Form.Item                                
                                name="hostel"
                                rules={[{
                                    required: true,
                                    message: 'Please input your hostel #!',
                                },]}
                            >
                                <InputNumber min={1} max={100} style={{width:"100%"}}  size='large' placeholder="Hostel #" prefix={<HomeOutlined />}  />
                            </Form.Item>

                            <Form.Item                                
                                name="room"
                                rules={[{
                                    required: true,
                                    message: 'Please input your room #!',
                                },]}
                            >
                                <InputNumber min={1} max={50} style={{width:"100%"}}  size='large' placeholder="room #" prefix={<HomeOutlined />}  />
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
                                <Checkbox style={{color:"white"}}>Agree to <a>Term of Use</a> and <a>Privacy Policy.</a> </Checkbox>
                            </Form.Item>

                            <Form.Item>
                                <Button size='large' type="primary" htmlType="submit" style={{width:"100%"}}>Sign Up </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
            
        </div>
    )
}