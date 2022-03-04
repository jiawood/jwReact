function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object"
          ? child
          : createTextElement(child)
      ),
    },
  }
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  }
}

const jwReact = {
  createElement
}

function Counter() {
  return (
    <h1 title="test">
      <div>
        <span>this</span>
      </div>
    </h1>
  )
}

const elment = Counter()
