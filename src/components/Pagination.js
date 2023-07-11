import React, { useEffect, useState } from 'react'
import { Table, Spin } from 'antd'


const Pagination = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data => {
      setDataSource(data)
    }).catch(err => {
      console.log(err)
    }).finally(() => {
      setLoading(false)
    })
  }, []);

  const columns = [
    {
      key: '1',
      title: 'ID',
      dataIndex: 'id'
    },
    {
      key: '2',
      title: 'User ID',
      dataIndex: 'userId',
      sorter:(record1, record2) => {
        return record1.userId > record2.userId
      }
    },
    {
      key: '3',
      title: 'Title',
      dataIndex: 'title'
    },
    {
      key: '4',
      title: 'Status',
      dataIndex: 'completed',
      render:(completed) => {
        return <p>{completed? "Complete" : "In Progress"}</p>
      },
      filters: [
        {text:'Complete', value: true},
        {text:'In Progress', value: false}
      ],
      onFilter:(value, record) => {
        return record.completed === value
      }
    },
  ]
  return (
    <>
      {dataSource ?
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={{
          pageSize: 15,
          total: 500,
        }}
      >
      </Table>
      : <div className="example"><Spin /></div>}
    </>
  )
}

export default Pagination
