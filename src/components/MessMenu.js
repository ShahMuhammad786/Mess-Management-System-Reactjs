import { Divider, Col, Row, Card } from 'antd';
import { Table, Avatar , Button, Image } from 'antd';
import { DownloadOutlined, FileExcelOutlined, FileExcelFilled } from '@ant-design/icons';

const columns = [
    {
      title: 'Meal Type',
      dataIndex: 'Meal Type',
    },
    {
      title: 'Timings',
      dataIndex: 'Timings',
    },
    {
      title: 'Monday',
      dataIndex: 'Monday',
    },
    {
      title: 'Tuesday',
      dataIndex: 'Tuesday',
    },
    {
        title: 'Wednesday',
        dataIndex: 'Wednesday',
    },
    {
        title: 'Thursday',
        dataIndex: 'Thursday',
    },
    {
        title: 'Friday',
        dataIndex: 'Friday',
    },
    {
        title: 'Saturday',
        dataIndex: 'Saturday',
    },
    {
        title: 'Sunday',
        dataIndex: 'Sunday',
    },
];

  const data = [
    {
      'Meal Type': <b>Breakfast/Brunch</b>,
      'Timings':'8:00am - 9:00am',
      'Monday': 'Aamlet + Yogurt',
      'Tuesday': 'Aaloo + Yogurt',
      'Wednesday': 'Aaloo Pratay + Yogurt',
      'Thursday':'Anda Qeema + Yogurt', 
      'Friday': 'Chola + Yogurt',
      'Saturday': 'Aaloo + Yogurt',
      'Sunday':'Shahi Chola',
    },
    {
        'Meal Type': <b>Lunch</b>,
        'Timings':'1:45pm - 3:00pm',
        'Monday': 'N/A',
        'Tuesday': 'N/A',
        'Wednesday': 'N/A',
        'Thursday':'N/A', 
        'Friday': 'N/A',
        'Saturday': 'N/A',
        'Sunday':'N/A',
    },
    {
    'Meal Type': <b>Dinner</b>,
    'Timings':'8:00pm - 9:00pm',
    'Monday': 'Chicken Karahi',
    'Tuesday': 'Daal Channa + Salad',
    'Wednesday': 'Chicken Korma',
    'Thursday':'Vegitable', 
    'Friday': 'Biryani + Raita',
    'Saturday': 'Vegitable',
    'Sunday':'Haleem Chawal/Chinese Chawal',
    },
    
];

/**Monthly bills data  */
const columnsMon = [
    {
      title: 'S.No.',
      dataIndex: 'S.No.',
    },
    {
      title: 'Item',
      dataIndex: 'Item',
    },
    {
      title: 'Units',
      dataIndex: 'Units',
    },    
];
const dataMon = [
    {
      'S.No.': '1',
      'Item':'Aaamlet',
      'Units': '2 Units',
    },
    {
        'S.No.': '2',
        'Item':'Aaloo',
        'Units': '2 Units',
    },
    {
        'S.No.': '3',
        'Item':'Anda Qeema',
        'Units': '2 Units',
    },
    {
    'S.No.': '4',
    'Item':'Chola',
    'Units': '2 Units',
    },
    {
    'S.No.': '5',
    'Item':'Shahi Chola',
    'Units': '3 Units',
    },
    {
    'S.No.': '6',
    'Item':'Chicken',
    'Units': '3 Units',
    },
    {
    'S.No.': '7',
    'Item':'Daal',
    'Units': '3 Units',
    },
    {
    'S.No.': '8',
    'Item':'Vegitable',
    'Units': '3 Units',
    },
    {
    'S.No.': '9',
    'Item':'Birayi/Chawal',
    'Units': '3 Units',
    },
]


export default function MessMenu(){

    return (
        <>
            <Divider orientation="left" style={{color:'gray'}}> ---Mess Menu--- </Divider>
            <Button  style={{backgroundColor:'lightgreen' ,display: "flex",}} icon={<FileExcelOutlined />}  >Export Menu as Excel file</Button> <br/>
            <h6 style={{display: "flex",}}>Kindly Follow the timings for proper service. Thank You!</h6>
            <Table columns={columns} dataSource={data} size="small" scroll={{ y: 240 }} style={{backgroundColor:"lightblue"}} />


            <br/><br/>
            <Divider orientation="left" style={{color:'gray'}}> ---Menu Items' Units---</Divider>
            <Button  style={{backgroundColor:'lightgreen' ,display: "flex",}} icon={<FileExcelOutlined />}  >Export Items' Units as Excel file</Button> <br/>           
            <Table columns={columnsMon} dataSource={dataMon} size="small" scroll={{ y: 240 }} style={{backgroundColor:"lightblue"}} />

        </>
    )
}