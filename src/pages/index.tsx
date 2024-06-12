import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Store } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { Button, ConfigProvider } from "antd";
import IrmButton from "@/component/IrmButton.Component";
import { IconArrowLeft } from "@tabler/icons-react";
import IrmErrorPage from "../component/IrmErrorPage.Component";

export default function Home() {

  const handleClick =() => {
    console.log('clicked');
  }

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
                  <IrmErrorPage status="404"
    title="404 Not Found"
    subTitle="Sorry, the page you visited does not exist."
  />
                </div>
              }/>
            </Routes>
          </BrowserRouter>
      </Provider>
  );
}
