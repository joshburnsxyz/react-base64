# react-base64

A simple React.js component to handle encoding and decoding of base64 data.

## Usage

```jsx
import Base64 from 'react-base64'

const DATA = "SGVsbG8sIFdvcmxkIQo="


const DataRender = () => {
  return <Base64 mode="decode" data={DATA}/>
}
```
