import React, {useState,useEffect} from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from "react-fusioncharts";
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { Divider, Col, Row, Card, Avatar } from 'antd';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const { Meta } = Card;

/*Daily units Consumes*/
const Data2 = {
    chart: {
      caption: "Daily Units Consumes",
      yaxisname: "Daily Units consumes",
      xaxisname:"Days",
      anchorradius: "2",
      "plottooltext": "Units consumes on $label is <b>$dataValue</b>",
      "showhovereffect": "1",
      "showvalues": "0",
      "theme": "fusion",
     
    },
    "data": [
      {
        "label": "1",
        "value": "50"
      },
      {
        "label": "2",
        "value": "40"
      },
      {
        "label": "3",
        "value": "45"
      },
      {
        "label": "4",
        "value": "14"
      },
      {
        "label": "5",
        "value": "11.8"
      },
      {
        "label": "6",
        "value": "42"
      },
      {
        "label": "7",
        "value": "37"
      },
      {
        "label": "8",
        "value": "35"
      },
      {
        "label": "9",
        "value": "20.55"
      },
      {
        "label": "10",
        "value": "30.55"
      },
      {
        "label": "11",
        "value": "26"
      },
      {
        "label": "12",
        "value": "27"
      },
      {
        "label": "13",
        "value": "38"
      },
      {
        "label": "14",
        "value": "39"
      },
      {
        "label": "15",
        "value": "30"
      },
      {
        "label": "16",
        "value": "35"
      },
      {
        "label": "17",
        "value": "36"
      },
      {
        "label": "18",
        "value": "35"
      },
      {
        "label": "19",
        "value": "15"
      },
      {
        "label": "20",
        "value": "32"
      },
      {
        "label": "21",
        "value": "40"
      },
      {
        "label": "22",
        "value": "30"
      },
      {
        "label": "23",
        "value": "30"
      },
      {
        "label": "24",
        "value": "30"
      },
      {
        "label": "25",
        "value": "30"
      },
      {
        "label": "26",
        "value": "36"
      },
      {
        "label": "27",
        "value": "29"
      },
      {
        "label": "28",
        "value": "55"
      },
      {
        "label": "29",
        "value": "23"
      },
      {
        "label": "30",
        "value": "22"
      },
      {
        "label": "31",
        "value": "20"
      }
    ]
}

export default function Units() {

    return (
        <>
            <Divider orientation="left" style={{color:'gray'}}>---Daily Units' Details---</Divider><br/>
            <h6 style={{display:"flex"}}>The Units that a user consumes Daily.</h6>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{padding:0,}}>
                <Col className="gutter-row" span={17} >
                    <Card loading={false} style={{ width:"100%", }}>                    
                        <ReactFusioncharts
                            type="splinearea"
                            width="100%"
                            height="500%"
                            dataFormat="JSON"
                            dataSource={Data2}
                        />
                    </Card>  
                </Col>
                <Col className="gutter-row" span={7}>
                    <Card loading={false} style={{  
                        background: 'lightblue',
                        'border-radius': '50%',
                        width: '100px',
                        height: '100px',
                        marginLeft:90,}}
                    >                    
                        <div>Total Units<br/><h3>130</h3></div>                    
                    </Card> 
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" span={12} >
                            <Card loading={false} style={{  
                                background: 'lightpink',
                                'border-radius': '50%',
                                width: '100px',
                                height: '100px', }}
                            >                    
                                <div>Breakfast<br/><h3>ON</h3></div>                    
                            </Card>                            
                        </Col>
                        <Col className="gutter-row" span={12} >
                            <Card loading={false} style={{  
                                background: 'lightgreen',
                                'border-radius': '50%',
                                width: '100px',
                                height: '100px',marginLeft:20, }}
                            >                    
                                <div style={{}}>Lunch<br/><h3>OFF</h3></div>
                            </Card>
                        </Col>                        
                    </Row>
                    <Card loading={false} style={{  
                        backgroundColor:"lightsalmon",
                        'border-radius': '50%',
                        width: '100px',
                        height: '100px', marginLeft:90,}}
                    >                    
                        <div style={{}}>Dinner<br/><h3>ON</h3></div>
                    </Card>
                </Col>              
            </Row>      
        </>
    )
}