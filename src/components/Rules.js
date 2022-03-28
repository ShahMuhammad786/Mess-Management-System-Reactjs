import { Divider, Card, Collapse  } from 'antd';


const { Panel } = Collapse; 
const text = (
    <p style={{ paddingLeft: 24 }}>
      A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
      as a welcome guest in many households across the world.
    </p>
  );

export default function Rules(){

    return(
        <>
            <Divider orientation="left" style={{color:'gray'}}>---Rules and Regulations of the Mess</Divider>
            <Card loading={false} style={{
                display:"flex",
                border:"none",
            }}>

                <Collapse bordered={false} defaultActiveKey={['1']} style={{width:"100%"}}>
                    <Panel header="Mess Rule#01" key="1" style={{width:"100%"}}>
                        {text}
                    </Panel>
                    <Panel header="Mess Rule#02" key="2" style={{width:"100%"}}>
                        {text}
                    </Panel>
                    <Panel header="Mess Rule#03" key="3" style={{width:"100%"}}>
                        {text}
                    </Panel>
                </Collapse>

            </Card>

            <br/> <br/>
            <Divider orientation="left" style={{color:'gray'}}>---Announcements from the Mess Manager---</Divider>
            <Card loading={false} style={{
                display:"flex",
                border:"none",
            }}>

                No Announcements Yet!

            </Card>
        </>
    )
}