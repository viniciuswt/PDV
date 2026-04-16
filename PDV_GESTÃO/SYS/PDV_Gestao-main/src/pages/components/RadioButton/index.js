import {Radio,Label} from './style.js'

const radioButton = ({ label,checked, disabled }) => {
    return (
     
        <Label>
          <Radio name='screen' defaultChecked={checked ? true : false} disabled = {disabled ? true : false} />
          <span>&nbsp;{label}</span>
        </Label>
  
    );
  };
  export default radioButton;