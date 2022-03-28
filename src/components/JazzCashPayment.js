import React, {useState} from 'react';
import { Popconfirm, message, Col, Row, Card } from 'antd';
import { Input, Tooltip, Select,Button  } from 'antd';
import { 
    InfoCircleOutlined, 
    UserOutlined,
    EyeInvisibleOutlined, 
    EyeTwoTone, 
    KeyOutlined,
    QuestionCircleOutlined,
} from '@ant-design/icons';

import jcPic from '../resources/jazzCash.png'

const confirm = () =>
    new Promise(resolve => {
      setTimeout(() => resolve(message.success('Paid Successfully!')),3000);      
    });

function cancel(e) {
    message.error('Payment Cancelled!');
}
export default function CardPayment(){

    return (
        <>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{padding:0, margin:0}}>
              <Col className="gutter-row" span={12} >
                  <Card loading={false} style={{border:"none", }}>
                    <div>
                        <Input placeholder="Account Number" prefix="#" 
                        suffix={
                            <Tooltip title="Bank Account Number">
                            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                            </Tooltip>
                        }/> <br/><br/>
                        <Input
                            placeholder="Enter Name"
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            suffix={
                                <Tooltip title="Account Holder Name">
                                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                                </Tooltip>
                            }
                        /><br/><br/>
                        <Input placeholder="Enter Balance" prefix="PKR" 
                        suffix={
                            <Tooltip title="Balance to Transfer">
                            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                            </Tooltip>
                        }/> <br/><br/>
                        <Input.Password prefix={<KeyOutlined className="site-form-item-icon" />}
                            placeholder="Enter password"
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        /><br/><br/>
                        <Button type="danger"  style={{marginRight:10}}> Clear </Button>
                        
                        <Popconfirm
                            title="Are you sure to Pay?"
                            onConfirm={confirm}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                        >
                            <Button type="primary" >Confirm Payment </Button>
                        </Popconfirm> 
                    </div>
                  </Card>
              </Col>
              <Col className="gutter-row" span={12}>
                <Card loading={false} style={{ width:"100%",border:"none", padding:0, margin:0}}>
                <img
                    width={350}
                    src={jcPic}                    
                />
                </Card>                  
              </Col>              
          </Row> 
        </>
    )
}