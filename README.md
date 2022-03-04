# jwReact
实现一个简单的react
参考：[build your own react](https://pomb.us/build-your-own-react/)

## Step 0: 回顾
首先看一个最基础的react代码
```jsx
const element = <h1 title="foo">Hello</h1>
const container = document.getElementById("root")
ReactDOM.render(element, container)
```
第一行是jsx，Babel 将JSX编译成 React.createElement() 调用

React.createElement() 最后返回一个如下面的对象

```js
const element = {
  type: "h1",
  props: {
    title: "foo",
    children: "Hello",
  },
}
```
type：标签名
props：属性
其中children是这个节点包含的子节点

下面是使用原生js根据elment对象渲染dom的示例：
```js
const {type,props} = element
// 根据type创建一个对应的标签
const h1 = document.createElement(type)
type['title'] = props.title 
const text = documnet.createTextElement("")
text["nodeValue"] = props.children
h1.append(text)
container.append(h1)
```

## Step 1: 自己实现createElement