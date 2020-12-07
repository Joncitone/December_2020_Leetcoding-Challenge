// Definition for a Node.
/** function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root === null) {
    return root;
  }

  function getNext(currentNode) {
    if (currentNode === null) return null;

    if (currentNode.left) return currentNode.left;
    else if (currentNode.right) return currentNode.right;
    else return getNext(currentNode.next);
  }

  function connectNext(currentNode) {
    if (currentNode === null) {
      return;
    }
    // connect left child with its closest sibling, in following order
    // a) right child, if present
    // b) left child of closest sibling, if present
    // c) right child of closest sibling, if present
    if (currentNode.left) {
      currentNode.left.next = currentNode.right
        ? currentNode.right
        : getNext(currentNode.next);
    }

    // connect left child with its closest sibling, in following order
    // a) left child of closest sibling, if present
    // b) right child of closest sibling, if present
    if (currentNode.right) {
      currentNode.right.next = getNext(currentNode.next);
    }

    // This is crucial, you have to traverse right subtree before left subtree.
    // So that, when you go to left subtree, the next pointers of siblings of
    // that node are already setup for use.
    connectNext(currentNode.right);
    connectNext(currentNode.left);
  }

  root.next = null;
  connectNext(root);

  return root;
};
