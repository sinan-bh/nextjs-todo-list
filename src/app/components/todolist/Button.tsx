import React from 'react'

type Button = {
    children: JSX.Element | string;
    onClick?:()=> void;
    className?: string;
}

const Button = ({children,onClick,className}: Button) => {
  return (
    <div className={className}>
      <button onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button
