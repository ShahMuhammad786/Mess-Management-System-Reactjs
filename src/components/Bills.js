import { Divider, Col, Row, Card } from 'antd';
import { Table, Avatar , Button, Image } from 'antd';
import { DownloadOutlined, FileExcelOutlined, FileExcelFilled } from '@ant-design/icons';

const columns = [
    {
      title: 'Bill No#',
      dataIndex: 'Bill No#',
    },
    {
      title: 'Bill Picture',
      dataIndex: 'Bill Picture',
    },
    {
      title: 'Date',
      dataIndex: 'Date',
    },
    {
        title: 'Meal Type',
        dataIndex: 'Meal Type',
    },
    {
        title: 'Actions',
        dataIndex: 'Actions',
    },
];

  const data = [
    {
      'Bill No#': '1',
      'Bill Picture': <Image width={50} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />,
      'Date': '05/12/2022',
      'Meal Type': 'Dinner',
      'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '2',
        'Bill Picture': <Image width={50} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />,
        'Date': '05/12/2022',
        'Meal Type': 'Dinner',
        'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '2',
        'Bill Picture': <Image width={50} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />,
        'Date': '05/12/2022',
        'Meal Type': 'Dinner',
        'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '4',
        'Bill Picture': <Image width={50} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />,
        'Date': '05/12/2022',
        'Meal Type': 'Dinner',
        'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '5',
        'Bill Picture': <Image width={50} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />,
        'Date': '05/12/2022',
        'Meal Type': 'Dinner',
        'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '6',
        'Bill Picture': <Image width={50} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />,
        'Date': '05/12/2022',
        'Meal Type': 'Dinner',
        'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '7',
        'Bill Picture': <Image width={50} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />,
        'Date': '05/12/2022',
        'Meal Type': 'Dinner',
        'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '8',
        'Bill Picture': <Image width={50} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />,
        'Date': '05/12/2022',
        'Meal Type': 'Dinner',
        'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '9',
        'Bill Picture': <Image width={50} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />,
        'Date': '05/12/2022',
        'Meal Type': 'Dinner',
        'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '10',
        'Bill Picture': <Image width={50} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />,
        'Date': '05/12/2022',
        'Meal Type': 'Dinner',
        'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '11',
        'Bill Picture': <Image width={50} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />,
        'Date': '05/12/2022',
        'Meal Type': 'Dinner',
        'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '12',
        'Bill Picture': <Image width={50} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />,
        'Date': '05/12/2022',
        'Meal Type': 'Dinner',
        'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '13',
        'Bill Picture': <Image width={50} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />,
        'Date': '05/12/2022',
        'Meal Type': 'Dinner',
        'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '14',
        'Bill Picture': <Image width={50} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />,
        'Date': '05/12/2022',
        'Meal Type': 'Dinner',
        'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '15',
        'Bill Picture': <Image width={50} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />,
        'Date': '05/12/2022',
        'Meal Type': 'Dinner',
        'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '16',
        'Bill Picture': <Image width={50} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />,
        'Date': '05/12/2022',
        'Meal Type': 'Dinner',
        'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '17',
        'Bill Picture': <Image width={50} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />,
        'Date': '05/12/2022',
        'Meal Type': 'Dinner',
        'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '18',
        'Bill Picture': <Image width={50} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />,
        'Date': '05/12/2022',
        'Meal Type': 'Dinner',
        'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '19',
        'Bill Picture': <Image width={50} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />,
        'Date': '05/12/2022',
        'Meal Type': 'Dinner',
        'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '20',
        'Bill Picture': <Image width={50} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />,
        'Date': '05/12/2022',
        'Meal Type': 'Dinner',
        'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '21',
        'Bill Picture': <Image width={50} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />,
        'Date': '05/12/2022',
        'Meal Type': 'Dinner',
        'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '23',
        'Bill Picture': <Image width={50} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />,
        'Date': '05/12/2022',
        'Meal Type': 'Dinner',
        'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '24',
        'Bill Picture': <Image width={50} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />,
        'Date': '05/12/2022',
        'Meal Type': 'Dinner',
        'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '25',
        'Bill Picture': <Image width={50} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />,
        'Date': '05/12/2022',
        'Meal Type': 'Dinner',
        'Actions':<Button type="primary" icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '27',
        'Bill Picture': <Image width={50} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />,
        'Date': '05/12/2022',
        'Meal Type': 'Dinner',
        'Actions':<Button type="primary" icon={<DownloadOutlined />} > Download </Button>, 
    },
];

/**Monthly bills data  */
const columnsMon = [
    {
      title: 'Bill No#',
      dataIndex: 'Bill No#',
    },
    {
      title: 'Bill File',
      dataIndex: 'Bill File',
    },
    {
      title: 'Month',
      dataIndex: 'Month',
    },    
    {
        title: 'Actions',
        dataIndex: 'Actions',
    },
];
const dataMon = [
    {
      'Bill No#': '1',
      'Bill File':<Avatar icon={<FileExcelFilled />} />,
      'Month': 'January',
      'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '2',
        'Bill File':<Avatar icon={<FileExcelFilled />} />,
      'Month': 'Febuary',
      'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '3',
        'Bill File':<Avatar icon={<FileExcelFilled />} />,
      'Month': 'March',
      'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '4',
        'Bill File':<Avatar icon={<FileExcelFilled />} />,
      'Month': 'April',
      'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '5',
        'Bill File':<Avatar icon={<FileExcelFilled />} />,
      'Month': 'May',
      'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '6',
        'Bill File':<Avatar icon={<FileExcelFilled />} />,
      'Month': 'June',
      'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '7',
        'Bill File':<Avatar icon={<FileExcelFilled />} />,
      'Month': 'July',
      'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '8',
        'Bill File':<Avatar icon={<FileExcelFilled />} />,
      'Month': 'August',
      'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '9',
        'Bill File':<Avatar icon={<FileExcelFilled />} />,
      'Month': 'September',
      'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '10',
        'Bill File':<Avatar icon={<FileExcelFilled />} />,
      'Month': 'October',
      'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '11',
        'Bill File':<Avatar icon={<FileExcelFilled />} />,
      'Month': 'November',
      'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
    {
        'Bill No#': '12',
        'Bill File':<Avatar icon={<FileExcelFilled />} />,
      'Month': 'December',
      'Actions':<Button type="primary"  icon={<DownloadOutlined />} > Download </Button>, 
    },
]


export default function Bills(){

    return (
        <>
            <Divider orientation="left" style={{color:'gray'}}> Daily Mess Bills</Divider>
            <Button  style={{backgroundColor:'lightgreen' ,display: "flex",}} icon={<FileExcelOutlined />}  >Export Daily Data as Excel file</Button> <br/>
            <h6 style={{display: "flex",}}>Click on the Picture to enlarge.</h6>
            <Table columns={columns} dataSource={data} size="small" scroll={{ y: 240 }} style={{backgroundColor:"lightblue"}} />


            <br/><br/>
            <Divider orientation="left" style={{color:'gray'}}> Monthly Mess Bills</Divider>
            <Button  style={{backgroundColor:'lightgreen' ,display: "flex",}} icon={<FileExcelOutlined />}  >Export Monthly Data as Excel file</Button> <br/>           
            <Table columns={columnsMon} dataSource={dataMon} size="small" scroll={{ y: 240 }} style={{backgroundColor:"lightblue"}} />

        </>
    )
}