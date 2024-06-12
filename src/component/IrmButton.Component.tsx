import { Button, ConfigProvider } from 'antd'
import React from 'react'
// import theme from '../app/theme.json'
 
export interface ButtonProps {
  children?: String
  type: "link" | "text" | "default" | "primary" | "dashed" | undefined
  variant?: "secondary" | "warning" | "danger" | "success"
  size?: "large" | "middle" | "small"
  click?(): any
  icon?: React.ReactNode
  iconPosition?: 'start' | 'end'
}
 
const IrmButton = (props: ButtonProps) => {
    let activeBg: string;
    let activeBorderColor: string;
    let activeColor: string;
    let bg: string;
    let borderColor: string;
    let color: string;

    if (props.variant == 'danger') {
        activeBg = ''
        activeBorderColor = ''
        activeColor = ''
        bg = '#FF5733'
        borderColor = ''
        color = ''
    } else if (props.variant == 'secondary') {
        activeBg = ''
        activeBorderColor = ''
        activeColor = ''
        bg = 'light blue'
        borderColor = ''
        color = ''
    } else if (props.variant == 'warning') {
        activeBg = ''
        activeBorderColor = ''
        activeColor = ''
        bg = 'orange'
        borderColor = ''
        color = ''
    } else if (props.variant == 'success') {
        activeBg = ''
        activeBorderColor = ''
        activeColor = ''
        bg = 'green'
        borderColor = ''
        color = ''
    } else {
        activeBg = ''
        activeBorderColor = ''
        activeColor = ''
        bg = 'white'
        borderColor = ''
        color = ''
    }
 
  return (
    <ConfigProvider
      theme={{
        components:{
          Button: {
            defaultActiveBg: activeBg,
            defaultActiveBorderColor: activeBorderColor,
            defaultActiveColor: activeColor,
            defaultBg: bg,
            defaultBorderColor: borderColor,
            defaultColor: color,
          }
        }
      }}>
        <Button type={props.type} onClick={props?.click} size={props?.size} icon={props?.icon} iconPosition={props?.iconPosition}>{props.children}</Button>
    </ConfigProvider>
  )
}
 
export default IrmButton    