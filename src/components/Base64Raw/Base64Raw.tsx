import React from 'react'

export interface Base64RawProps {
  data: string
  mode: string
}

const utf8_to_b64 = (str: string) => {
  return window.btoa(unescape(encodeURIComponent(str)));
}

const b64_to_utf8 = (str: string) => {
  return decodeURIComponent(escape(window.atob(str)));
}

const Base64Raw = (props: Base64RawProps) => {
  switch(props.mode) {
    case "encode":
      return <>{utf8_to_b64(props.data)}</>
    case "decode":
      return <>{b64_to_utf8(props.data)}</>
  }
}

export default Base64Raw