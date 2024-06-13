import React from 'react';
import { Result } from 'antd';

export interface ResultProps {
  icon?: String;
  status: "error" | "info" | "warning" | "404" | "403" | "500";
  title?: String;
  subTitle?: String;
  extra?: String;
  children?: String;
  subtitleFontSize?: number;
  titleFontSize?: number;
  iconFontSize?: number;
}

const IrmErrorPage = ({ status, titleFontSize, subtitleFontSize, iconFontSize, ...props }: ResultProps) => {
  let title = '';
  let subTitle = '';

  if(status === "error"){
    title = "Submission Failed.";
    subTitle = "Please check and modify the following information before resubmitting."
  }else if (status === "warning") {
    title = "There are some problems with your operation.";
  } else if (status === "info") {
    title = "Your operation has been executed.";
  } else if (status === "403") {
    title = "403";
    subTitle = "Sorry, you are not authorized to access this page.";
  } else if (status === "404") {
    title = "404";
    subTitle = "Sorry, the page you visited does not exist.";
  } else if (status === "500") {
    title = "500";
    subTitle = "Sorry, something went wrong.";
  }

  const titleStyle = titleFontSize ? { fontSize: `${titleFontSize}px` } : {};
  const subTitleStyle = subtitleFontSize ? { fontSize: `${subtitleFontSize}px` } : {};

  return (
   
    <Result
    status={status}
    title={<div style={titleStyle}>{title || props.title}</div>}
    subTitle={<div style={subTitleStyle}>{subTitle || props.subTitle}</div>}
    extra={props.extra}
  >
    {props.children}
  </Result>

  );
};

export default IrmErrorPage;