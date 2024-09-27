import React from 'react'

type Button = {
    children: JSX.Element | string;
    onClick?:()=> void;
}

const Button = ({children,onClick}: Button) => {
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button
