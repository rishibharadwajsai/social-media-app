import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio, Space, Tooltip } from 'antd';

function WelcomeMessage() {
    const [position, setPosition] = useState('end');
  return (
    <center className="m-4">
      <h1>There are no posts</h1>
    </center>
  );
}

export default WelcomeMessage;
