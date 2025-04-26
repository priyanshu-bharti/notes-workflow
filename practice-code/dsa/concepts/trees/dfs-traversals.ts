interface TreeNode<T> {
  value: T;
  left: TreeNode<T>;
  right: TreeNode<T>;
}

function walk<T>(currentNode: TreeNode<T>, path: TreeNode<T>[]) {
  // Base case, if we have a leaf node, we return.
  if (!currentNode) return;

  // Preorder: Current, Left, Right
  // Change the ordering for inorder and postorder
  path.push(currentNode); // Visit current node
  walk(currentNode.left, path); // Visit Left subtree
  walk(currentNode.right, path); // Visit Right subtree
}
