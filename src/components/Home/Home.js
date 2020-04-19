import React from 'react'
import 'antd/dist/antd.css'
import { Menu, Col } from 'antd'
import {
  QqOutlined
} from '@ant-design/icons'

const Home = () => {
  const handleClick = () => {
    console.log('click click')
  }

  return (
    <Menu onClick={handleClick} mode='horizontal'>
      <Col span={12}>
        <Menu.Item style key='coso1'>
          <QqOutlined />
          Coso 1
        </Menu.Item>
      </Col>
      <Col span={12}>
        <Menu.Item style key='coso1'>
          <QqOutlined />
          Coso 1
        </Menu.Item>
      </Col>
    </Menu>
  )
}
export default Home
