import { Tabs } from "antd";
import { ReactNode, MouseEvent } from "react";

export interface Tab {
  key: string;
  label: ReactNode;
  children?: ReactNode;
  disabled?: boolean;
  closable?: boolean;
  forceRender?: boolean;
  destroyInactiveTabPane?: boolean;
}

export interface TabsProps {
  tabPosition: "top" | "right" | "bottom" | "left";
  items: Tab[];
  type?: "line" | "card";
  size?: "large" | "middle" | "small";
  tabBarGutter?: number;
  activeKey?: string;
  icon?: ReactNode;
  addIcon?: React.ReactNode;
  animated?: boolean;
  centered?: boolean;
  defaultActiveKey?: string;
  indicator?: { size?: number; align?: "start" | "center" | "end"; };
  onChange?: (activeKey: string) => void;
}

const IrmTabs = (props: TabsProps) => {
  const { ...restProps } = props;
  return (
    <Tabs
    {...restProps}
  ></Tabs>
  );
}

export default IrmTabs;