// eslint-disable-next-line
import React from 'react'

const Body = ({ children, customClasses, bgImage }) => {
  const bgStyle = bgImage?.src ? `url(${bgImage?.src || ' '})` : 'unset'
  return (
    <div
      className={`boilerplate ${customClasses}`}
      style={{ backgroundImage: bgStyle }}
    >
      {children}
    </div>
  )
}
export default Body
