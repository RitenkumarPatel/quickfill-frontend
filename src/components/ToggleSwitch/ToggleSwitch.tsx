import React, { ChangeEventHandler } from 'react'
import './ToggleSwitch.css'

interface ToggleSwitchProps {
  height?: number;
  width?: number;
  toggled?: boolean;
  onToggle?: ChangeEventHandler<HTMLInputElement>;
}

const ToggleSwitch = (props: ToggleSwitchProps): JSX.Element => {
  return (
    <>
      <label className="switch"
             style={{ height: props.height, width: props.width }}>
        <input type="checkbox" checked={props.toggled}
               onChange={props.onToggle}/>
        <span className="slider"/>
      </label>
    </>
  )
}

export default ToggleSwitch
