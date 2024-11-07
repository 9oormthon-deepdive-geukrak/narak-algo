class Node:
    def __init__(self, x, y, idx):
        self.x = x
        self.y = y
        self.idx = idx
        self.left = None
        self.right = None
        
def build_tree(nodeinfo):
    nodes = [(x, y, i + 1) for i, (x, y) in enumerate(nodeinfo)]
    nodes.sort(key=lambda x: (-x[1], x[0]))
    
    root = Node(nodes[0][0], nodes[0][1], nodes[0][2])

    for i in range(1, len(nodes)):
        curr = root
        x, y, idx = nodes[i]
        new_node = Node(x, y, idx)
        
        while True:
            if x < curr.x:
                if curr.left is None:
                    curr.left = new_node
                    break
                else:
                    curr = curr.left
            else:
                if curr.right is None:
                    curr.right = new_node
                    break
                else:
                    curr = curr.right
        
    return root

def preorder(root, result):
    stack=[root]
    while stack:
        node = stack.pop()
        if node is None:
            continue
        result.append(node.idx)
        stack.append(node.right)
        stack.append(node.left)        
    
def postorder(root, result):
    stack = [root]
    temp = []
    while stack:
        node = stack.pop()
        if node is None:
            continue
        temp.append(node.idx)
        stack.append(node.left)
        stack.append(node.right)
    
    result.extend(temp[::-1])   

def solution(nodeinfo):
    tree = build_tree(nodeinfo)
    pre_res = []
    post_res = []
    
    preorder(tree, pre_res)
    postorder(tree, post_res)
    
    return [pre_res, post_res]