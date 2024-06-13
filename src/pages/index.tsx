import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Store } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { Button, ConfigProvider } from "antd";
import IrmButton from "@/component/IrmButton.Component";
import { IconArrowLeft } from "@tabler/icons-react";
import IrmErrorPage from "../component/IrmErrorPage.Component";
import IrmSelect from "@/component/IrmSelect.Component";
import IrmTextArea from "@/component/IrmTextArea.Component";

export default function Home() {

  const handleClick =() => {
    console.log('clicked');
  }


  const handleChange = (value: any) => {
    console.log('Selected:', value);
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
        ]}
        mode="multiple"
        placeholder="Select options"
        size="large" 
        loading
        allowClear
        onChange={handleChange}
      />
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
