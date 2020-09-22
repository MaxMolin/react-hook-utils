# 📐 useWindowSize

React hook for getting width and height of browser window. Will update on window resize event.

## 🚀 Getting Started

### Usage: useWindowSize react hook

Add to your project `npm i useWindowSize` or using yarn `yarn add useWindowSize`.

Simply import the hook to your component.

`import useWindowSize from 'useWindowSize';`

Then you can destruct either width or height (or both) from the hooks return value 
(Array). _Please note that it will be [0, 0] initially._
 
`const [ windowWidth, windowHeight ] = useWindowSize();`

_All properties typed as integers._
