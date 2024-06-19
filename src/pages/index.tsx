import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Store } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { Button, ConfigProvider, Space } from "antd";
import IrmButton from "@/component/IrmButton.Component";
import { IconArrowLeft } from "@tabler/icons-react";
import IrmErrorPage from "../component/IrmErrorPage.Component";
import IrmSelect from "@/component/IrmSelect.Component";
import IrmProgress from "@/component/IrmProgress.Component";
import IrmDrawer from "@/component/IrmDrawer.Component";
import { useState } from "react";


export default function Home() {

  const handleClick =() => {
    console.log('clicked');
  }


  const handleChange = (value: any) => {
    console.log('Selected:', value);
  };
  
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  

  return (
      <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={
                <div>
                  <IrmButton type="default" children='Hello' click={handleClick} size="large" icon={<IconArrowLeft/>} iconPosition="end"/>
                  <h1></h1>
                  <IrmButton type="primary" children='Hello' click={handleClick} size="middle" icon={<IconArrowLeft/>} iconPosition="start"/>
                  <h1></h1>
                  <IrmButton type="default" variant="danger" children='Hello' click={handleClick} size="small" icon={<IconArrowLeft/>} iconPosition="end"/>
                  <h1></h1>
                  <IrmButton type="default" variant="secondary" children='Hello' click={handleClick} size="large" icon={<IconArrowLeft/>} iconPosition="start"/>
                  <h1></h1>
                  <IrmButton type="default" variant="success" children='Hello' click={handleClick} size="middle" icon={<IconArrowLeft/>} iconPosition="end"/>
                  <h1></h1>
                  <IrmButton type="default" variant="warning" children='Hello' click={handleClick} size="small" icon={<IconArrowLeft/>} iconPosition="start"/>
                  <h1></h1>
                  <IrmSelect
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
        ]}
        placeholder="Select options"
        size="middle"
        showSearch
        onChange={handleChange}
      />
      <IrmSelect
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
          { value: '4', label: 'Option 1' },
          { value: '5', label: 'Option 2' },
         
        ]}
        mode="multiple"
        placeholder="Select options"
        size="large" 
        allowClear
        onChange={handleChange}
      />
     <IrmDrawer placement="top" title="drawer page" width={"50px"}
     extra={
      <Space>
        <Button onClick={onClose}>Cancel</Button>
        <Button type="primary" onClick={onClose}>
          OK
        </Button>
      </Space>
    }  children="hello" keyboard footer="footer" footerPaddingBlock={60} footerPaddingInline={80} zIndexPopup={60000}  openButtonProps={{ type: 'default', children: 'Open Drawer' }}/> 
    <IrmDrawer
        placement="right"
        size="default"
        title="First Level Drawer"
        secondDrawerProps={{
          placement: "right",
          title: "Second Level Drawer",
          loading: true,
          openButtonProps: { type: 'default', children: 'Open Second Drawer' },
        }}
        openButtonProps={{ type: 'default', children: 'Open ' }}
      >
        This is the content of the first-level drawer.
      </IrmDrawer>
       <IrmProgress  percent={70} type="circle" status="exception" size={"small"} format={(percent) => `${percent} Days`} gapDegree={30} success={{ percent: 30 }} strokeLinecap="butt" strokeWidth={60}/>
       <IrmProgress strokeLinecap="round" percent={100} align="start" showInfo
       strokeWidth={30} gapPosition="bottom" size={'default'} steps={8} successPercent={60} percentPosition={{ align: 'center', type: 'inner' }} />
          <IrmProgress strokeLinecap="square" percent={70} status="active" percentPosition={{ align: 'center', type: 'inner' }}/>
                  <div>
    <IrmErrorPage status="error" />
    <IrmErrorPage status="500" />
    <IrmErrorPage status="404" titleFontSize={40}/>
  </div>
                </div>
              }/>
            
            </Routes>
          </BrowserRouter>
      </Provider>
  );
}
