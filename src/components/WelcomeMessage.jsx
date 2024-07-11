import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio, Space, Tooltip } from 'antd';

function WelcomeMessage({onGetPostClick}) {
    const [position, setPosition] = useState('end');
  return (
    <center className="m-4">
      <h1>There are no posts</h1>
      <Button className='my-4' type='primary' icon={<SearchOutlined />} iconPosition={position} onClick={onGetPostClick}>
        fetch posts from server
      </Button>
    </center>
  );
}

export default WelcomeMessage;
