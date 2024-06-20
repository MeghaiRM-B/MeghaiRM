import React, { useState } from 'react';
import { Drawer, Button, Space } from 'antd';
import type { ClosableType } from 'antd/es/_util/hooks/useClosable';
import type { DrawerProps as RCDrawerProps } from 'rc-drawer';
import type { DrawerProps as AntDrawerProps } from 'antd/es/drawer';
import { ButtonProps } from 'antd/es/button';

export interface DrawerProps {
  placement: "top" | "right" | "bottom" | "left";
  size?: "default" | "large";
  title: string;
  loading?: boolean;
  open?: boolean;
  width?: string | number;
  zIndex?: number;
  extra?: React.ReactNode;
  closable?: ClosableType;
  onClose?: RCDrawerProps['onClose'];
  children: string;
  footer?: string;
  keyboard?: boolean;
  push?: boolean | { distance: string | number };
  secondDrawerProps?: AntDrawerProps;
  mainDrawerButtonProps?: ButtonProps;
  childrenDrawerButtonProps?: ButtonProps;
  spaceProps?: {
    direction?: 'horizontal' | 'vertical';
    size?: 'small' | 'middle' | 'large' | number;
  };
}

const IrmDrawer = (props: DrawerProps) => {
  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };

  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };

  return (
    <>
      <Button onClick={showDrawer} {...props.mainDrawerButtonProps}>
        {props.mainDrawerButtonProps?.children}
      </Button>
      <Drawer onClose={onClose} open={open} {...props}>
        <Space {...props.spaceProps}>
          {props.children}
          {props.secondDrawerProps && (
            <>
              <Button onClick={showChildrenDrawer} {...props.childrenDrawerButtonProps}>
                {props.childrenDrawerButtonProps?.children}
              </Button>
              <Drawer
                onClose={onChildrenDrawerClose}
                open={childrenDrawer}
                {...props.secondDrawerProps}
              >
                {props.secondDrawerProps?.children}
              </Drawer>
            </>
          )}
        </Space>
      </Drawer>
    </>
  );
};

export default IrmDrawer;