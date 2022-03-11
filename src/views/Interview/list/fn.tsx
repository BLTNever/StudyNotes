export const nodes = {
    data: 6,
    left: {
        data: 5,
        left: {
            data: 4
        },
        right: {
            data: 3
        }
    },
    right: {
        data: 2,
        right: {
            data: 1
        }
    }
}
export const BSTree = {
    // 前序递归遍历
    preOrderRec1: function (node: any) {
        let result = ''
        if (node) {
            result += `${node.data} `
            result += this.preOrderRec1(node.left)
            result += this.preOrderRec1(node.right)
        }
        return result
    },

    // 前序遍历非递归
    preOrderRec2: function (node: any) {
        let stack = []
        let result = ''
        while (node || stack?.length) {
            if (node) {
                result += `${node.data} `
                stack.push(node)
                node = node.left
            } else {
                node = stack.pop()
                node = node.right
            }
        }
        return result
    },
    // 中序遍历递归
    inOrderRec1: function (node: any) {
        let result = ''
        if (node) {
            result += this.inOrderRec1(node.left)
            result += `${node.data} `
            result += this.inOrderRec1(node.right)
        }
        return result
    },
    // 中序遍历非递归
    inOrderRec2: function (node: any) {
        let stack = []
        let result = ''
        while (node || stack?.length) {
            if (node) {
                stack.push(node)
                node = node.left
            } else {
                node = stack.pop()
                result += `${node.data} `
                node = node.right
            }
        }
        return result
    },
    // 后序遍历递归
    postOrderRec1: function (node: any) {
        let result = ''
        if (node) {
            result += this.postOrderRec1(node.left)
            result += this.postOrderRec1(node.right)
            result += `${node.data} `
        }
        return result
    },

    // 后序遍历非递归
    postOrderRec2: function (node: any) {
        let stack = []
        let ret = node
        let result = ''
        while (node || stack?.length) {
            if (node) {
                stack.push(node)
                node = node.left // 找到最左端的节点,路径上的节点全部入栈,包括叶子节点
            } else {
                node = stack[stack.length - 1] // 获取栈顶节点
                if (node.right && node.right !== ret) { // 如果node有有节点且从未访问过
                    node = node.right
                    stack.push(node)
                    node = node.left // 再走到最左
                } else {
                    node = stack.pop()
                    result += `${node.data} `
                    ret = node
                    node = null
                }
            }
        }
        return result
    },
    // 层次遍历
    levelOrder: function (node: any) {
        let queue = []
        let result = ''

        queue.push(node) // 根节点入队
        while (queue?.length) {
            node = queue.shift() // 出队
            result += `${node.data} ` // 访问该节点
            if (node.left) { // 如果左子树不为空
                queue.push(node.left) // 将左子树的根节点压入队
            }
            if (node.right) { // 如果右子树不为空
                queue.push(node.right) // 将右子树的根节点压入队
            }
        }

        return result
    }
}