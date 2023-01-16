import React from 'react'

export interface Base64Props {
  data: string
  mode: string
  className: string
}

const utf8_to_b64 = (str: string) => {
  return window.btoa(unescape(encodeURIComponent(str)));
}

const b64_to_utf8 = (str: string) => {
  return decodeURIComponent(escape(window.atob(str)));
}

const Base64 = (props: Base64Props) => {
  switch(props.mode) {
    case "encode":
      return <p className={props.className}>{utf8_to_b64(props.data)}</p>
    case "decode":
      return <p className={props.className}>{b64_to_utf8(props.data)}</p>
  }
}

export default Base64