import React, { useState } from 'react'
import { Button, Spin } from 'antd'

const SpinAntd = () => {
  const [loading, setLoading] = useState(false)
  return (
    <>
      <Spin spinning={loading}></Spin>
      <Button onClick={() => { setLoading(preValue => !preValue) } }>Toggle Spinning</Button>
      <Spin spinning={loading}>
      <p>P tag 1</p>
      <p>P tag 2</p>
      <p>P tag 3</p>
      </Spin>
    </>
  )
}

export default SpinAntd
