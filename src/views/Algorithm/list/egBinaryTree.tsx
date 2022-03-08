
export const preorderTraversal = `
/**
 * 二叉树前序遍历(深度遍历)递归
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
 * 二叉树前序遍历(深度遍历)遍历
 * 前序遍历:  根 左 右
 * 压栈顺序: 初始化将 root 压入stack栈
 * → 从stack栈顶取出 root
 * → 将root的val压入result栈，node的 right、left 压入stack栈 (这样保证取出的顺序是 left、right)
 * → 压入result栈的顺序是根 左 右
 * → 下一轮从 stack 栈顶取出的是 left ，val压入result栈 ...循环执行。 
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
 * 二叉树中序遍历(深度优先遍历)， 递归
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
 * 二叉树中序遍历(深度优先遍历)， 循环
 * 1. 先处理左子树 压入栈中
 * 2. 中根节点
 * 3. 右子树
 * 中序遍历:  左 根 右
 * 压栈顺序:  → root存在。将root跟最底层left压入stack栈， 
 *           → 从stack栈顶取出left push到result栈，取出left的root push到result栈
 *           → 压入root的right到stack栈，取出 压入到result栈
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
    return result
}
function _inorderTraversal(root: TreeNode) {
    if (!root) return
    let stack = []
    let res = []
    while (root) {
        stack.push(root)
        root = root.left
    }
    while (stack.length) {
        const node = stack.pop() // 栈顶的节点出栈
        res.push(node.val)       // 在压入右子树之前，处理它的数值部分
        node = node?.right       // 获取它的右子树
        while (node) {           // 右子树存在，执行while循环
            stack.push(node)     // 压入当前root
            node = node.left     // 不断压入左子节点
        }
    }
    return res
}

`

export const postorderTraversal = `
/**
 * 二叉树后序遍历 (递归)
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
 * 压栈顺序A:  → 根 压入stack栈 
 *           → stack栈顶取出 root根 ，root根的left、right 压入 stack栈顶，root根值 插入 result栈底
 *           → stack栈顶部取出 right, right根的left、right 压入 stack栈顶。 right根值 插入 result栈底 
 *           → stack栈顶部取出 left, left根的left、left 压入 stack栈顶。 left根值 插入 result栈底 ...(循环执行)
 *              从 result 栈底插入，所以此时栈中的顺序是左 右 根 ，符合后续遍历 左 右 根 的顺序
 * 压栈顺序B:  → 根 压入stack栈 
 *           → stack栈顶取出 root根, root根值 压入 result栈顶, root根的left、right 压入 stack 栈顶
 *           → stack栈顶部取出 right, right根值 压入 result栈顶, right根的left、right 压入 stack 栈顶 
 *           → stack栈顶部取出 left, left根值 压入 result栈顶,  left根的left、right 压入 stack 栈顶 ...(循环执行)
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
    if(!root) return 0
    // 解1:
    let left = maxDepth(root.left)
    let right = maxDepth(root.right)
    return Math.max(left, right) + 1
    // 解2:
    let ans = 0
    if(root.left) ans = Math.max(maxDepth(root.left), ans)
    if(root.right) ans = Math.max(maxDepth(root.right), ans)
    return ans + 1
    // 解3:
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

    let ans: number = 0
    if (root.left) ans = Math.min(ans, minDepth(root.left))
    if (root.right) ans = Math.min(ans, minDepth(root.right))
    return ans + 1 // 只要最根节点的left或right有一个有值 要在ans基础上 + 1
}
`

export const hasPathSum = `
function hasPathSum(root: any, sum: number): number | boolean | null {
    if (!root) return false

    if (!root.left && !root.right) { // 是否递归到了叶子节点
        return sum === root.val     // sum -  叶子节点的值是否和最后传进来的sum相同
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
/**
 * 递归，时间复杂度O(n),空间复杂度O(n)
 */
function helper(node: any, result: any, depth: number) {
    if (!node) return
    if (!Array.isArray(result[depth])) result[depth] = []
    result[depth].push(node.val)
    if (node.left) helper(node.left, result, depth + 1)
    if (node.right) helper(node.right, result, depth + 1)
}
function levelOrder(root: any) {
    if (!root) return []
    let res: any = []
    helper(root, res, 0)
    return res
}
`
export const isValidBST = `
/**
 * 中序遍历遍历: 时间复杂度 : O(n)，空间复杂度 : O(n)
 * 「中序遍历」得到的值构成的序列一定是升序的
 * 在中序遍历的时候检查当前节点的值是否大于前一个中序遍历到的节点的值即可
 */

function isValidBST(root: any) {
    if(!root) return true
    let stack = []
    let order = Number.MIN_SAFE_INTEGER
    while (root !== null || stack.length) {
        while (root !== null) {
            stack.push(root)
            root = root.left
        }
        const node = stack.pop()
        if (node.val <= order) return false
        order = node.val
        root = node.right
    }
}
/**
 * 递归: 时间复杂度 : O(n)，空间复杂度 : O(n)
 * 递归比较 left right跟root值的大小
 */
function helper(root: any, min: number, max: number): boolean {
    if (!root) return true
    if (root.val <= min || root.right >= max) return false
    return helper(root.left, min, root.val) && helper(root.right, root.val, max)
}
function isValidBST(root: any) {
    return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
}`

export const sortedArrayToBST = `
function sortedArrayToBST(nums: number[]): TreeNode | null {
    // 解法1-时间复杂度: O(N), 空间复杂度: 每次递归都 copy 了 N 的 空间，因此空间复杂度为 O(N ^ 2)    
    if (!nums.length) return null
    let mid = nums.length >> 1
    let root = new TreeNode(nums[mid])
    root.left = sortedArrayToBST(nums.slice(0, mid))
    root.right = sortedArrayToBST(nums.slice(mid + 1))
    return root
    // 解法2-时间复杂度: O(N) ，空间复杂度: 由于是平衡二叉树，因此隐式调用栈的开销为 O(logN)
    const dfs = (nums: number[], left: any, right: any): TreeNode | null => {
        if (left > right) return null               // left > right证明没有可选的元素了
        const mid = left + ((right - left) >> 1)    // 取中间值
        let root = new TreeNode(nums[mid])          // 中间索引的值当树节点
        root.left = dfs(nums, left, mid - 1)        // 递归生成左树
        root.right = dfs(nums, mid + 1, right)      // 递归生成右树
        return root                                 // 返回生成的树节点
    }
    return dfs(nums, 0, nums.length - 1)
}`

export const BSTIterator = `
/**
 * 使用二叉树的中序遍历
 */
function BSTIterator(root: TreeNode) {
    this.index = 0
    this.list = []
    let stack = []
    while (root || stack.length) {
        while (root) {
            stack.push(root)
            root = root.left
        }
        const node = stack.pop()
        this.list.push(node.val)
        root = root.right
    }
    // const inorder = (root: any) => {
    //     if (!root) return
    //     inorder(root.left)
    //     this.list.push(root.left)
    //     inorder(root.right)
    // }
    // inorder(root)
}
BSTIterator.prototype.next = function () {
    return this.list[this.index++]
}
BSTIterator.prototype.hasNext = function () {
    return this.index < this.list.length
}`

export const isSameTree = `
/**
 * 相同的树
 */
function isSameTree(p: any, q: any): boolean {
    if (!p && !q) return true
    if (!p || !q) return false
    if (p.val !== q.val) return false

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}`

export const preorder = `
/**
 * 遍历、递归 - 时间复杂度O(n)，空间复杂度O(n)
 * @param root 
 * @returns 
 */
function preorder(root: any) {
    if (!root) return []
    // 遍历
    let stack = []
    let res = []
    stack.push(root)
    while (stack.length) {
        const node = stack.pop()
        res.push(node.val)
        node.children.reverse()
        stack.push(...node.children)
    }
    return res
    // 递归
    let res = []
    const dfs = (root: any) => {
        if (!root) return
        res.push(root.val)
        for (let node of root.children) {
            dfs(node)
        }
    }
    dfs(root)
    return res
}`