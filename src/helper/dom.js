const create = nodeType => document.createElement(nodeType)
const append = (childNode, parentNode = document.body) => {
  debugger
	parentNode.appendChild(childNode)
}
export {
	create,
	append
}