import React from 'react'

export interface Base64Props {
  label: string,
  data: string
}

const utf8_to_b64 = (str: string) => {
  return window.btoa(unescape(encodeURIComponent(str)));
}

const b64_to_utf8 = (str: string) => {
  return decodeURIComponent(escape(window.atob(str)));
}

const Base64 = (props: Base64Props) => {
  return <p>{props.label}: {utf8_to_b64(props.data)}</p>
}

export default Base64