import React, { useState } from 'react';
import { Drawer, ConfigProvider, Button, Space } from 'antd';
import type { ClosableType } from 'antd/es/_util/hooks/useClosable';
import type { DrawerProps as RCDrawerProps } from 'rc-drawer';
import type { DrawerProps as AntDrawerProps } from 'antd/es/drawer';
import { ButtonProps } from 'antd/es/button';

export interface DrawerProps {
  placement: "top" | "right" | "bottom" | "left";
  size?: "default" | "large";
  title?: string;
  loading?: boolean;
  open?: boolean;
  width?: string | number;
  zIndex?:number
  extra?: React.ReactNode;
  closable?: ClosableType;
  onClose?: RCDrawerProps['onClose'];
  children?: string;
  footer?:string;
  keyboard?:boolean;
  push?:boolean | { distance: string | number };
  footerPaddingBlock?:number
  footerPaddingInline?:number
  zIndexPopup?:number
  secondDrawerProps?: AntDrawerProps;
  openButtonProps?:ButtonProps;
}

const IrmDrawer = (props: DrawerProps) => {
  const [openFirstDrawer, setOpenFirstDrawer] = useState(false);
  const [openSecondDrawer, setOpenSecondDrawer] = useState(false);

  const showFirstDrawer = () => {
    setOpenFirstDrawer(true);
  };

  const closeFirstDrawer = () => {
    setOpenFirstDrawer(false);
  };

  const showSecondDrawer = () => {
    setOpenSecondDrawer(true);
  };

  const closeSecondDrawer = () => {
    setOpenSecondDrawer(false);
  };

  return (
    <Space>
      {props.openButtonProps ? (
        <Button {...props.openButtonProps} onClick={showFirstDrawer} />
      ) : (
        <Button onClick={showFirstDrawer}>
        </Button>
      )}
      <Drawer onClose={closeFirstDrawer} open={openFirstDrawer} {...props}>
        {props.children}
        {props.secondDrawerProps && (
          <>
            {props.secondDrawerProps.openButtonProps ? (
              <Button {...props.secondDrawerProps.openButtonProps} onClick={showSecondDrawer} />
            ) : (
              <Button onClick={showSecondDrawer}></Button>
            )}
            <Drawer onClose={closeSecondDrawer} open={openSecondDrawer} {...props.secondDrawerProps}>
              {props.secondDrawerProps.children}
            </Drawer>
          </>
        )}
      </Drawer>
    </Space>
  );
};

export default IrmDrawer;

