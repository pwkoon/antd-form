import React from 'react'
import { Table, Input, Button } from 'antd'
import { useState } from 'react'
import { SearchOutlined } from '@ant-design/icons'

const Search = () => {
  const [dataSource, setDataSource] = useState([
    {
      name: 'John',
      age: 32,
      address: 'New York'
    },
    {
      name: 'Malik',
      age: 33,
      address: 'Turkey'
    },
    {
      name: 'Zayn',
      age: 40,
      address: 'Sydney'
    },
    {
      name: 'Taylor',
      age: 20,
      address: 'New Zealand'
    }
  ])
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
      filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => {
        return (
        <>
          <Input
          autoFocus
          placeholder='Type text here'
          value={selectedKeys[0]}
          onChange={(e) => {
            setSelectedKeys(e.target.value? [e.target.value] : []);
            confirm({ closeDropdown: false });
          }}
          onPressEnter={() => {
            confirm();
          }}
          onBlur={() => {
            confirm();
          }}
          ></Input>
          <Button onClick={() => {
            confirm();
          }}
          type="primary">
            Search
          </Button>
          <Button onClick={() => {
            clearFilters();
          }}
          type="danger">
            Reset
          </Button>
        </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />
      },
      onFilter:(value, record) => {
        return record.name.toLowerCase().includes(value.toLowerCase())
      }
    },
    {
      title: 'Age',
      dataIndex: 'age',
      filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => {
        return (
        <>
          <Input
          autoFocus
          placeholder='Type text here'
          value={selectedKeys[0]}
          onChange={(e) => {
            setSelectedKeys(e.target.value? [e.target.value] : []);
            confirm({ closeDropdown: false });
          }}
          onPressEnter={() => {
            confirm();
          }}
          onBlur={() => {
            confirm();
          }}
          ></Input>
          <Button onClick={() => {
            confirm();
          }}
          type="primary">
            Search
          </Button>
          <Button onClick={() => {
            clearFilters({confirm: true});
          }}
          type="danger">
            Reset
          </Button>
        </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />
      },
      onFilter:(value, record) => {
        return record.age == value;
      }
    },
    {
      title: 'Address',
      dataIndex: 'address',
      filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => {
        return (
        <>
          <Input
          autoFocus
          placeholder='Type text here'
          value={selectedKeys[0]}
          onChange={(e) => {
            setSelectedKeys(e.target.value? [e.target.value] : []);
            confirm({ closeDropdown: false });
          }}
          onPressEnter={() => {
            confirm();
          }}
          onBlur={() => {
            confirm();
          }}
          ></Input>
          <Button onClick={() => {
            confirm();
          }}
          type="primary">
            Search
          </Button>
          <Button onClick={() => {
            clearFilters({confirm: true});
          }}
          type="danger">
            Reset
          </Button>
        </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />
      },
      onFilter:(value, record) => {
        return record.address.toLowerCase().includes(value.toLowerCase())
      }
    }
  ]
  return (
    <Table style={{ display: 'flex', flex: 1, margin: 10, alignItems: 'center'}} columns={columns} dataSource={dataSource}>
    </Table>
  )
}

export default Search
