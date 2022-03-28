import { Divider, Col, Row, Card } from 'antd';
import React, { useState } from 'react';
import FusionCharts from "fusioncharts";
import CardPayment from './CardPayment';
import BankPayment from './BankPayment';
import JazzCashPayment from './JazzCashPayment';
import EasyPaisaPayment from './EasyPaisaPayment';
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import {
    MoneyCollectFilled,
    MoneyCollectOutlined

} from '@ant-design/icons';
const { Meta } = Card;

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
    chart: {
        caption: "Daily Mess Expense of a User",
        yaxisname: "Daily Balance (PKR)",
        plottooltext: "<div><b>$dataValue</b> PKR on $label date</div>",
        theme: "fusion"
    },
    data: [
        {
        label: "1",
        value: "138"
        },
        {
        label: "2",
        value: "145"
        },
        {
        label: "3",
        value: "161"
        },
        {
        label: "4",
        value: "140"
        },
        {
        label: "5",
        value: "180"
        },
        {
        label: "6",
        value: "1573000"
        },
        {
        label: "7",
        value: "2232000"
        },
        {
        label: "8",
        value: "2476000"
        },
        {
        label: "9",
        value: "2832000"
        },
        {
        label: "10",
        value: "3808000"
        },
        {
        label: "11",
        value: "1380000"
        },
        {
        label: "12",
        value: "1450000"
        },
        {
        label: "13",
        value: "1610000"
        },
        {
        label: "14",
        value: "1540000"
        },
        {
        label: "15",
        value: "1480000"
        },
        {
        label: "16",
        value: "1573000"
        },
        {
        label: "17",
        value: "2232000"
        },
        {
        label: "18",
        value: "2476000"
        },
        {
        label: "19",
        value: "2832000"
        },
        {
        label: "20",
        value: "3808000"
        },
        {
        label: "21",
        value: "1380000"
        },
        {
        label: "22",
        value: "1450000"
        },
        {
        label: "23",
        value: "1610000"
        },
        {
        label: "24",
        value: "1540000"
        },
        {
        label: "25",
        value: "1480000"
        },
        {
        label: "26",
        value: "1573000"
        },
        {
        label: "27",
        value: "0"
        },
        {
        label: "28",
        value: "0"
        },
        {
        label: "29",
        value: "0"
        },
        {
        label: "30",
        value: "0"
        },
        {
        label: "31",
        value: "0"
        }
        
    ]
};
  
/** Monthly user payment Analytics*/

const dataSourceMon = {
    chart: {
      caption: "Monthly Expenditure of a user",
      showpercentvalues: "0",
      aligncaptionwithcanvas: "0",
      captionpadding: "0",
      decimals: "1",
      plottooltext: "<b>$value pkr</b> in <b>$label</b>",
      theme: "fusion"
    },
    data: [
      {
        label: "Jan",
        value: "1000"
      },
      {
        label: "Feb",
        value: "5300"
      },
      {
        label: "March",
        value: "10500"
      },
      {
        label: "April",
        value: "18900"
      },
      {
        label: "May",
        value: "17904"
      },
      {
        label: "June",
        value: "17904"
      },
      {
        label: "July",
        value: "17904"
      },
      {
        label: "Aug",
        value: "17904"
      },
      {
        label: "Sep",
        value: "17904"
      },
      {
        label: "Oct",
        value: "17904"
      },
      {
        label: "Nov",
        value: "17904"
      },
      {
        label: "Dec",
        value: "17904"
      }
    ]
};
 
/**Payment methods tabs */
const tabListNoTitle = [
    {
      key: 'Card',
      tab: 'Card',
    },
    {
      key: 'Bank',
      tab: 'Bank',
    },
    {
      key: 'JazzCash',
      tab: 'JazzCash',
    },
    {
        key: 'EasyPaisa',
        tab: 'EasyPaisa',
    },
];
  
const contentListNoTitle = {
    Card: <CardPayment/>  ,
    Bank: <BankPayment/>,
    JazzCash: <JazzCashPayment/>,
    EasyPaisa: <EasyPaisaPayment/>,
};
  

export default function Payment(){

    const [activeTabKey2, setActiveTabKey2] = useState('Card');
    const onTab2Change = key => {
        setActiveTabKey2(key);
    };

    return(
        <>
            <Divider orientation="left" style={{color:'gray'}}>User Account Details</Divider>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                    <Card loading={false} style={{paddingTop:20,
                        maxHeight:150,
                        background: "rgb(53,53,217)",
                        background: "linear-gradient(128deg, rgba(53,53,217,0.5214460784313726) 45%, rgba(21,244,28,0.7847514005602241) 100%)",
                        }}>
                        <Meta
                            avatar={<MoneyCollectFilled style={{fontSize:'50px'}} />}
                            title="15000 PKR"
                            description="Total Balance Added to Account"
                        />
                    </Card>
                </Col>
                <Col className="gutter-row" span={8}>
                    <Card loading={false} style={{paddingTop:20,
                        maxHeight:150, 
                        background: "rgb(150,217,53)",
                        background: "linear-gradient(321deg, rgba(150,217,53,1) 53%, rgba(131,20,235,1) 100%)", }}>
                        <Meta
                            avatar={<MoneyCollectOutlined style={{fontSize:'50px'}} />}
                            title="RS: 3500"
                            description="Remaining Balance in Account"
                        />
                    </Card>
                </Col>
                <Col className="gutter-row" span={8}>
                    <Card loading={false} style={{fontSize:"15px",
                        maxHeight:150 , background: "rgb(194,223,178)",
                        background: "linear-gradient(127deg, rgba(194,223,178,1) 53%, rgba(20,233,235,1) 100%)"}}>
                        
                        <span style={{backgroundColor:"lightblue", padding:"5px",width:"70px",}}><b>Balance: </b> +ve</span> <br/><br/>
                        <span style={{backgroundColor:"lightgreen", padding:"5px",width:"70px", }}><b>Mess Status: </b> ON</span>

                    </Card>
                </Col>
                
            </Row>


            <br/><br/>
            <Divider orientation="left" style={{color:'gray'}}>Payment's Analytics</Divider>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{padding:0,}}>
              <Col className="gutter-row" span={8} >
                  <Card loading={false}>
                  <ReactFusioncharts
                        type="spline"
                        width="100%"
                        height="500%"
                        dataFormat="JSON"
                        dataSource={dataSource}
                    />
                  </Card>
              </Col>
              <Col className="gutter-row" span={16}>
                <Card loading={false} style={{ width:"100%", }}>
                <ReactFusioncharts
                    type="doughnut2d"
                    width="100%"
                    height="500%"
                    dataFormat="JSON"
                    dataSource={dataSourceMon}
                />        
                </Card>                  
              </Col>              
          </Row> 

            <br/><br/>
            <Divider orientation="left" style={{color:'gray'}}>Payment Methods</Divider>
            <Card
                style={{ width: '100%' }}
                tabList={tabListNoTitle}
                activeTabKey={activeTabKey2}
                onTabChange={key => {
                    onTab2Change(key);
                }}
            >
                {contentListNoTitle[activeTabKey2]}
            </Card>
        </>
    )

}