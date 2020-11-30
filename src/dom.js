window.dom = {
    // 查找选择器下的元素数组
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    // 查找第一个
    findOne(selector, scope) {
        return (scope || document).querySelectorAll(selector)[0]
    },
    style(node, name, value) {
        // 调用方式1：style(testdiv,'color','red')
        if (arguments.length === 3) {
            node.style[name] = value
        } else if (arguments.length === 2) {
            // 调用方式2：style(testdiv,'color')
            if (typeof name === 'string') {
                return node.style[name]
                // 调用方式3：style(testdiv,{color:'red'})
            } else if (name instanceof Object) {
                for (let key in name) {
                    node.style[key] = name[key]
                }
            }
        }
    },
    each(nodeList,fn){
        for(let i=0;i<nodeList.length;i++){
            fn.call(null,nodeList[i])
        }
    }
}