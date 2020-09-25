//binary trees walkthrough
class Treenode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right= null;
    }
}

let a = new Treenode('a');
let b = new Treenode('b');
let c = new Treenode('c');
let d = new Treenode('d');
let e = new Treenode('e');
let f = new Treenode('f'); 

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//console.log(a)

//binary trees traversal walkthrough

function inOrderPrint(root) {
    if (!root) return; //if doing base case for recursion, tree should be empty

    inOrderPrint(root.left); //print out everything down left side
    console.log(root.value); //print root or "self"
    inOrderPrint(root.right); //print everything down right side
}

function preOrderPrint(root) {
    if (!root) return; //if doing base case for recursion, tree should be empty

   console.log(root.value); //print root or "self"
   preOrderPrint(root.left); //print out everything down left side
   preOrderPrint(root.right); //print everything down right side
}

function postOrderPrint(root) {
    if (!root) return; //if doing base case for recursion, tree should be empty

    postOrderPrint(root.left); //print out everything down left side
    postOrderPrint(root.right); //print everything down right side
    console.log(root.value); //print root or "self"
}

inOrderPrint(a);
console.log(' ');
preOrderPrint(a);
console.log(' ');
postOrderPrint(a);