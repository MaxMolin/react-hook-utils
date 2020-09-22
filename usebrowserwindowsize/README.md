# 📐 useBrowserWindowSize

React hook for getting width and height of browser window. Will update on window resize event.

## 🚀 Getting Started

### Usage: useBrowserWindowSize react hook

Add to your project `npm i useBrowserWindowSize` or using yarn `yarn add useBrowserWindowSize`.

Simply import the hook to your component.

`import useBrowserWindowSize from 'useBrowserWindowSize';`

Then you can destruct either width or height (or both) from the hooks return value 
(Array). _Please note that it will be [0, 0] initially._
 
`const [ windowWidth, windowHeight ] = useBrowserWindowSize();`

_All properties typed as integers._
