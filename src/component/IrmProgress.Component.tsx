import React from 'react';
import { Progress, ConfigProvider } from 'antd';
import {
  ProgressGradient,
  ProgressSize,
} from 'antd/es/progress/progress';

export interface SuccessProps {
  percent?: number;
  progress?: number;
  strokeColor?: string;
}

export interface PercentPositionType {
  align?: 'start' | 'center' | 'end';
  type?: 'inner' | 'outer';
}
export interface ProgressProps {
  type?: 'circle' | 'dashboard';
  align?: 'start' | 'center' | 'end';
  status?: "active" | "normal" | "exception" | "success"
  percent?: number;
  strokeLinecap?: 'butt' | 'square' | 'round';
  format?: (percent?: number, successPercent?: number) => string;
  showInfo?: boolean;
  strokeWidth?: number;
  strokeColor?: string | string[] | ProgressGradient;
  trailColor?: string;
  success?: SuccessProps;
   gapDegree?: number;
  gapPosition?: 'top' | 'bottom' | 'left' | 'right';
  size?: number | [number | string, number] | ProgressSize | { width?: number; height?: number };
  steps?: number | { count: number; gap: number };
  successPercent?: number;
  percentPosition?: PercentPositionType;
  children?: string;
}

const IrmProgress = (props: ProgressProps) => {
  const { children, ...restProps } = props;

  return (
    <ConfigProvider>
      <Progress {...restProps}>{children}</Progress>
    </ConfigProvider>
  );
};

export default IrmProgress;