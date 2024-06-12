import React, { ReactNode } from 'react';
import { Result, ConfigProvider } from 'antd';

export interface ResultProps {
  icon?: ReactNode;
  status?: "success" | "error" | "info" | "warning" | "404" | "403" | "500";
  title?: ReactNode;
  subTitle?: ReactNode;
  extra?: React.ReactNode;
  children?: ReactNode;
}

const IrmErrorPage = (props: ResultProps) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Result: {
            subtitleFontSize: 14,
            titleFontSize: 24,
          },
        },
      }}
    >
      <Result {...props} />
    </ConfigProvider>
  );
};

export default IrmErrorPage;