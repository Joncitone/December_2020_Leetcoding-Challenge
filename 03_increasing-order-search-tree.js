var increasingBST = function (root) {
  let dummy = new TreeNode();
  let node = dummy;

  const traverse = function (root) {
    if (!root) return;
    traverse(root.left);
    node.right = root;
    node = node.right;
    node.left = null;
    traverse(root.right);
  };

  traverse(root);
  return dummy.right;
};
