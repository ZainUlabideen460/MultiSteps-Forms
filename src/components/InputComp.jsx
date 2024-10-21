import React from 'react'
import TextField from '@mui/material/TextField';
const InputComp = ({label,type,value,onChange, placeholder}) => {
  return (
    <div>
        <TextField 
  sx={{width:{lg:"530px",xs:"300px"}}}
  label={label}
  variant="outlined"
  type={type}
//   placeholder="sneha@example.com"
  value={value}
  onChange={onChange}
  placeholder={placeholder}
/>
    </div>
  )
}

export default InputComp
