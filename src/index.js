import React, { useEffect } from 'react'

const If = (props) => {
  const { children, exp } = props;
  return exp ? children : null;
}

export default If

