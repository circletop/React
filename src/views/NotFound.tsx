import { Button, Result } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const View: React.FC = () => {
  const navigateTo = useNavigate()
  const backHome = ()=> {
    navigateTo("/")
  }
  return <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button type="primary" onClick={backHome}>Back Home</Button>}
  />
};

export default View;
