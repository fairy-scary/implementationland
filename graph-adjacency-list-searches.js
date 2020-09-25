//a>>b>>c>>back to a
class based graph
class GraphNode {
    constructor(val) {
        this.val = val;
        this.neighbors = [];
    }
}

let a = new GraphNode('a');
let b = new GraphNode('b');
let c = new GraphNode('c');

a.neighbors = [b];
b.neighbors = [c];
c.neighbors = [a];

//adjacency list based graph
let graph = {
    'a': ['b'],
    'b': ['c'],
    'c': ['a']
}

//breadth first search(queue implementation)

function breadthFirstSearch(graph, startingNode, targetVal) {
    let queue = [ startingNode ]; //populate queue
    let visited = new Set(); //empty 'set' holds visited nodes

    while(queue.length) {
        let node = queue.shift(); //dequeue first element

        if (visited.has(node)) continue; //goes back up to loop if visited

        visited.add(node); //adds node to visited set

        if (node === targetVal) return true; //checks if node is target

        queue.push(...graph[node]);
    }
    return false;
}

console.log(breadthFirstSearch(graph, 'a','c'))

//depth first search

function depthFirstSearch(graph, startingNode, targetVal, visited=new Set()) {
    if (startingNode === targetVal) return true; //checks if start is target

    let neighbors = graph[startingNode]; 
    for (let neighbor of neighbors) {
        if (visited.has(neighbor)) continue; //skip if visited

        visited.add(neighbor); //neighbor to visited set

        return depthFirstSearch(graph, neighbor, targetVal, visited);
    }
    return true;
}

console.log(depthFirstSearch(graph, 'a', 'c'))
