import React, {useState,useEffect} from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from "react-fusioncharts";
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { Divider, Col, Row, Card, Avatar } from 'antd';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const { Meta } = Card;

/*Daily unit price*/
const Data1 = {
  chart: {
    caption: "Unit Price",
    subCaption: "Daily unit price of the mess",
    xAxisName: "Days",
    yAxisName: "Unit Price",
    theme: "fusion"
  },
  data: [
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
    "anchorbgcolor": "#72D7B2",
    "palettecolors": "#72D7B2"
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

/*Daily students' mess ON*/
const Data3={
  chart: {
    caption: "Std: Mess ON vs OFF",
    // subcaption: "For all users in 2017",
    showpercentvalues: "1",
    // defaultcenterlabel: "Android Distribution",
    aligncaptionwithcanvas: "0",
    captionpadding: "0",
    decimals: "1",
    plottooltext:"<b>$percentValue</b> of users whos mess is <b>$label</b>",
    centerlabel: "# Users: $value",
    theme: "fusion"
  },
  data: [
    {
      label: "Mess ON",
      value: "3000"
    },
    {
      label: "Mess OFF",
      value: "5300"
    },
  ]
};


export default function Chart() {
  const chartConfigs = {
    type: 'column2d',
    width: 600,
    height: 500,
    dataFormat: 'json',
    dataSource: Data1,
  };

  const chartConfigsMonthly = {
    type: 'bar2d',
    width: 600,
    height: 500,
    dataFormat: 'json',
    dataSource: Data1,
  };

  return (
      <>
          <Divider orientation="left" style={{color:'gray'}}>Daily Analytics</Divider>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{padding:0,}}>
              <Col className="gutter-row" span={15} >
                  <Card loading={false}>
                      <ReactFC {...chartConfigs} />
                  </Card>
              </Col>
              <Col className="gutter-row" span={9}>
                  <Row>
                      <Card loading={false} style={{ width:"100%", }}>
                          
                          <ReactFusioncharts
                              type="spline"
                              width="100%"
                              height="300%"
                              dataFormat="JSON"
                              dataSource={Data2}
                          />
                      </Card>
                  </Row>
                  <Row>
                      <Card loading={false} style={{ width:"100%", }}>
                           <ReactFusioncharts
                            type="doughnut2d"
                            width="100%"
                            height="300%"
                            dataFormat="JSON"
                            dataSource={Data3}
                          />
                      </Card>
                  </Row>                    
              </Col>              
          </Row>    
          <br/><br/><br/>              
          <Divider orientation="left" style={{color:'gray'}}>Monthly Analytics</Divider>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{padding:0,}}>              
              <Col className="gutter-row" span={9}>
                  <Row>
                      <Card loading={false} style={{ width:"100%", }}>
                          
                          <ReactFusioncharts
                              type="splinearea"
                              width="100%"
                              height="300%"
                              dataFormat="JSON"
                              dataSource={Data2}
                          />
                      </Card>
                  </Row>
                  <Row>
                      <Card loading={false} style={{ width:"100%", }}>
                           <ReactFusioncharts
                            type="doughnut3d"
                            width="100%"
                            height="300%"
                            dataFormat="JSON"
                            dataSource={Data3}
                          />
                      </Card>
                  </Row>                    
              </Col> 
              <Col className="gutter-row" span={15} >
                  <Card loading={false}>
                    <ReactFC {...chartConfigsMonthly} />
                  </Card>
              </Col>             
          </Row>


      </>
  )
}

