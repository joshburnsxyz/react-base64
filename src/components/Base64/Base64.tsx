import React from 'react'

export interface Base64Props {
  label: string,
  data: string
}

const Base64 = (props: Base64Props) => {
  return <p>{props.label}: {props.data}</p>
}

export default Base64