/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function (head) {
  this.list = [];
  while (head) {
    this.list.push(head.val);
    head = head.next;
  }
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  const minIndex = 0;
  const maxIndex = this.list.length;
  const randomIndex =
    Math.floor(Math.random() * (maxIndex - minIndex)) + minIndex;
  return this.list[randomIndex];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
