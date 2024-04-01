class TreeNode<T> {
  value: T;
  children: Array<TreeNode<T>>;

  constructor(value: T) {
    this.value = value;
    this.children = [];
  }

  add(node: TreeNode<T>) {
    this.children.push(node);
  }
}

/**
 *              Alice
 *              / | \
 *          Bob  Dan  Mike
 *          /\          |
 *       Nadia Jane     Tom
 */

const initTree = () => {
  const alice = new TreeNode("Alice");
  const bob = new TreeNode("Bob");
  const dan = new TreeNode("Dan");
  const mike = new TreeNode("Mike");
  const nadia = new TreeNode("Nadia");
  const jane = new TreeNode("Jane");
  const tom = new TreeNode("Tom");

  alice.add(bob);
  alice.add(dan);
  alice.add(mike);
  bob.add(nadia);
  bob.add(jane);
  mike.add(tom);

  return alice;
};

/**
 * Complexity analysis
 * We loop over the nodes of the tree to print the valus => Time complexity is O(n)
 * We have a recursive call for each node => Space comlexity is O(n)
 * We have an intermediary array nextLine that holds all children of a line => Space comlexity is O(n)
 * Eventually time complexity and space complexity are O(n)
 */
const printBreadthFirstTraversal = (
  nodes: TreeNode<string> | Array<TreeNode<string>>
) => {
  // The root node is not an array as chidlren
  if (!Array.isArray(nodes)) {
    printBreadthFirstTraversal([nodes]);
  }

  const n = nodes as Array<TreeNode<string>>;

  let line = "";
  let nextLine = [];
  if (n.length) {
    for (const current of n) {
      line = line ? `${line} - ${current.value}` : current.value;
      nextLine.push(...current.children);
    }
    console.log(line);
    printBreadthFirstTraversal(nextLine);
  }
};

/**
 * Complexity analysis
 * We loop over the nodes of the tree to print the valus => Time complexity is O(n)
 * We have a recursive call for each node => Space comlexity is O(n)
 * Eventually time complexity and space complexity are O(n)
 */
const printDepthFirstTraversal = (node: TreeNode<string>) => {
  console.log(node.value);

  if (node.children.length) {
    for (node of node.children) {
      printDepthFirstTraversal(node);
    }
  }
};

const root = initTree();

console.log("\n ** Breadth First Traversal: **");
printBreadthFirstTraversal(root);

console.log("\n ** Depth First Traversal: **");
printDepthFirstTraversal(root);
