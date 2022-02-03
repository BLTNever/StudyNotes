
export const preorderTraversal = `
/**
 * 二叉树前序遍历（深度遍历）递归
 * 1. 先处理根节点
 * 2. 左子树
 * 3. 右子树
 * @param root 
 */
function preorderTraversal(root: any) {
    let result = []
    function preorder(node) {
        if (!node) return
        result.push(node.val)
        preorder(node.left)
        preorder(node.right)
    }
    preorder(root)
    return result
}
/**
 * 二叉树前序遍历（深度遍历）遍历
 * 前序遍历： 根 左 右
 * 压栈顺序：初始化将 root 压入stack栈
 * -> 从stack栈顶取出 root
 * -> 将root的val压入result栈，node的 right、left 压入stack栈 （这样保证取出的顺序是 left、right）
 * -> 压入result栈的顺序是根 左 右
 * -> 下一轮从 stack 栈顶取出的是 left ，val压入result栈 ...循环执行。 
 * @param root 
 */
function _preorderTraversal(root: any) {
    if (!root) return
    let result = []
    let stack = []
    stack.push(root) // 将跟元素压入栈中
    while (stack?.length) {
        const node = stack.pop()             // 当 stack 栈中有数据时，从栈顶部取出数据
        result.push(node.val)                // 将从 stack 栈中取出的数据，压入 result 栈
        node.right && stack.push(node.right) // 因为栈时先进后出，所以先压入右子树
        node.left && stack.push(node.left)
    }
    return result
}
`

export const inorderTraversal = `
/**
 * 二叉树中序遍历（深度优先遍历）， 递归
 * 1. 左子树
 * 2. 中根节点
 * 3. 右子树
 * 4. 无论是前、中、后序遍历，都是先访问根节点，再访问它的左子树，再访问它的右子树
 * @param root 
 */
function inorderTraversal(root: any) {
    let result = []
    function inorder(root) {
        if (!root) return
        inorder(root.left) // 遍历左子树
        result.push(root.val) // 压入根节点
        inorder(root.right) // 遍历右子树
    }
    inorder(root)
    return result
}
/**
 * 二叉树中序遍历（深度优先遍历）， 循环
 * 1. 先处理左子树 压入栈中
 * 2. 中根节点
 * 3. 右子树
 * 中序遍历： 左 根 右
 * 压栈顺序： -> root存在。将root跟最底层left压入stack栈， 
 *          -> 从stack栈顶取出left push到result栈，取出left的root push到result栈
 *          -> 压入root的right到stack栈，取出 压入到result栈
 * @param root 
 */
function _inorderTraversal(root: any) {
    if (!root) return []
    let result = []
    let stack = []
    while (root || stack?.length) {
        while (root) {              // 只要节点有左子节点，就一路向左走到底并压入栈
            stack.push(root)        // 将访问的节点依次压进栈
            root = root.left        // 指针指向左子树
        }
        const node = stack.pop()    // 从栈顶取出来要处理的数据
        result.push(node.val)       // push到result
        root = node.right           // 每一个加入到result的元素都要看一下它是否有右结果，如果有右结点，还是要入栈
    }
    // let stack = [root]
    // while (stack?.length) {
    //     const node = stack.pop()
    //     if(!node) {
    //         result.push(stack.pop().val)
    //         continue
    //     } 
    //     node.right && stack.push(node.right)
    //     result.push(node)
    //     result.push(null) // 切节点
    //     node.left && stack.push(node.left)
    // }
    return result
}
`

export const postorderTraversal = `
/**
 * 二叉树后序遍历 （递归）
 * 1. 左子树
 * 2. 右子树
 * 3. 根节点
 * @param root 
 */
function postorderTraversal(root: any) {
    if (!root) return
    let result = []

    function order(root) {
        if (!root) return
        order(root.left)
        order(root.right)
        result.push(root.val)
    }
    order(root)
    return result
}
/**
 * 二叉树后序遍历  循环
 * 1. 左子树
 * 2. 右子树
 * 3. 根节点
 * 压栈顺序A： -> 根 压入stack栈 
 *           -> stack栈顶取出 root根 ，root根的left、right 压入 stack栈顶，root根值 插入 result栈底
 *           -> stack栈顶部取出 right, right根的left、right 压入 stack栈顶。 right根值 插入 result栈底 
 *           -> stack栈顶部取出 left, left根的left、left 压入 stack栈顶。 left根值 插入 result栈底 ...(循环执行)
 *              从 result 栈底插入，所以此时栈中的顺序是左 右 根 ，符合后续遍历 左 右 根 的顺序
 * 压栈顺序B： -> 根 压入stack栈 
 *           -> stack栈顶取出 root根, root根值 压入 result栈顶, root根的left、right 压入 stack 栈顶
 *           -> stack栈顶部取出 right, right根值 压入 result栈顶, right根的left、right 压入 stack 栈顶 
 *           -> stack栈顶部取出 left, left根值 压入 result栈顶,  left根的left、right 压入 stack 栈顶 ...(循环执行)
 *              压入result栈的顺序是 根 右 左 需要 reverse
 * @param root 
 */
function _postorderTraversal(root: any) {
    if (!root) return
    let result = []
    let stack = [root]
    while (stack?.length) {
        const node = stack.pop()
        if (!node) return
        //     node.left && stack.push(node.left)
        //     node.right && stack.push(node.right)
        //     result.unshift(node.val)
        result.push(node.val)
        node.left && stack.push(node.left)
        node.right && stack.push(node.right)
    }
    // return result
    return result.reverse()
}
`

export const maxDepth = `

/**
 * 二叉树最大深度
 * 定义一个ans 默认值0
 * 递归left跟right节点，每次递归 传进去depth + 1
 * 递归函数中 比较depth和ans，
 * @param root 
 */
function maxDepth(root: any) {
    let ans = 0
    function traversal(node: any, depth: number) {
        if (!node) return
        if (ans < depth) ans = depth
        node.left && traversal(node.left, depth + 1)
        node.right && traversal(node.right, depth + 1)
    }
    traversal(root, 1)
    return ans
}
`
export const minDepth = `
/**
 * 二叉树的最小深度
 * 递归 -  定义ans 默认为最大值
 * 存在left, 比较ans和 递归 left 返回的值
 * 存在right, 比较ans和 递归 right 返回的值
 * @param root 
 * @returns 
 */
function minDepth(root: any): number {
    if (!root) return 0
    if (!root.left && !root.right) return 1

    let ans: number = Number.MAX_SAFE_INTEGER
    if (root.left) ans = Math.min(ans, minDepth(root.left))
    if (root.right) ans = Math.min(ans, minDepth(root.right))
    return ans + 1 // 只要最根节点的left或right有一个有值 要在ans基础上 + 1
}
`

export const hasPathSum = `
function hasPathSum(root: any, sum: number): number | boolean | null {
    if (!root) return false

    if (!root.left && !root.right) { // 是否递归到了叶子节点
        return sum === root.val // sum -  叶子节点的值是否和最后传进来的sum相同
    }
    // 未是叶子节点 就遍历 left right子树。直到叶子节点， 有一个树的叶子节点  被sum减到值为0
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
}
`


export const levelOrder = `
/**
 * BFS，时间复杂度O(n),空间复杂度O(n)
 * 遍历每一层
 */
function levelOrder(root: any) {
    if (!root) return []
    let res = []
    let queue = []
    queue.push(root)                                    // 队列中先放入 root 节点
    while (queue.length !== 0) {
        const len = queue.length                        // 先记录一下 队列的长度 因为队列长度一直在变化
        let curLevel = []                               // 记录当前 层级树的数据
        for (let i = 0; i < len; i++) {
            const node = queue.shift()                  // 从队列头部取出
            curLevel.push(node.val)                     // 依次放入当前层
            if (node.left) queue.push(node.left)        // 当前层级每个节点放入前 查看是否有 left right节点 存在就放入队列中
            if (node.right) queue.push(node.right)
        }
        res.push(curLevel)
    }
    return res
}
`