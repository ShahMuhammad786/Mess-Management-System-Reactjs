import { Divider, Col, Row, Card } from 'antd';
import {
    ClockCircleOutlined,
    MoneyCollectFilled,
    BarChartOutlined,
    MoneyCollectOutlined

} from '@ant-design/icons';
import Chart from './Chart';


const { Meta } = Card;
export default function Dashboard(){
        
    return (
        <>
            <Divider orientation="left" style={{color:'gray'}}>Statistics</Divider>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                    <Card loading={false} style={{
                        backgroundColor: 'lightblue', paddingTop:20,
                        maxHeight:150,
                        }}>
                        <Meta
                            avatar={<BarChartOutlined style={{fontSize:'50px'}} />}
                            title="150"
                            description="Total Mess Units"
                        />
                    </Card>
                </Col>
                <Col className="gutter-row" span={6}>
                    <Card loading={false} style={{backgroundColor: 'lightgreen', paddingTop:20,
                        maxHeight:150,}}>
                        <Meta
                            avatar={<MoneyCollectFilled style={{fontSize:'50px'}} />}
                            title="RS: 3500"
                            description="Total Cost"
                        />
                    </Card>
                </Col>
                <Col className="gutter-row" span={6}>
                    <Card loading={false} style={{backgroundColor: 'gold', paddingTop:20,
                        maxHeight:150}}>
                        <Meta
                            avatar={<ClockCircleOutlined style={{fontSize:'50px'}} />}
                            title="26"
                            description="Total days mess on"
                        />
                    </Card>
                </Col>
                <Col className="gutter-row" span={6}>
                    <Card loading={false} style={{backgroundColor: 'violet', paddingTop:20,
                        maxHeight:150}}>
                        <Meta
                            avatar={<MoneyCollectOutlined style={{fontSize:'50px'}} />}
                            title="RS: 1100"
                            description="Remaining Balance"
                        />
                    </Card>
                </Col>
            </Row>

            <br/>           
            <div>
                <Chart/>                                
            </div>
            

        </>
    )
}