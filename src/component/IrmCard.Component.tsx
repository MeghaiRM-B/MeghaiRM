import {Card, Space } from "antd";
import { ReactNode } from "react";

export interface CardProps{
  bordered?:boolean;
  cover?:ReactNode;
  extra?:ReactNode;
  hoverable?:boolean;
  loading?:boolean;
  size?:"default" | "small";
  title?:string;
  cardType?: 'inner';
  description?:string;
  avatar?:ReactNode;
  style?: React.CSSProperties;
  children: ReactNode;
  onClick?: () => void;
  spaceProps?: {
    direction?: 'horizontal' | 'vertical';
    size?: 'small' | 'middle' | 'large' | number;
  };
}


const IrmCard = (props: CardProps) => {
  const { onClick, spaceProps,...cardProps } = props;

  return (
    <Space {...spaceProps}>
      <Card {...cardProps} onClick={onClick}>
        {props.children}
      </Card>
    </Space>
  );
}

export default IrmCard;