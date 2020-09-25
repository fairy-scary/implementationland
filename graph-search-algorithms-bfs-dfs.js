//https://youtu.be/cWNEl4HE2OE

//Example Interview Problem: Based on flight connections nodes are airports, edges are whether or not can fly to/from other airports (having distance between them would give us a weighted graph) One-way routes would be directed graph. Both ways would be undirected graph. 
//Simple scenario: Undirected, not-weighted, no cycles

const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

//Matrix(2D array) would be a lot of 0's(sparse = less efficient on space), because not many route combos between airports, so represent as an adjacency list

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

//map is the graph, but empty at this point
//could implement with POJO object, BUT maps tends to be a better option bc it has additional API methods that are useful for probs and behaves like a dictionary or hashmap in other languages.
const adjacencyList = new Map();

//write function to add node to the map
function addNode(airport) {
    adjacencyList.set(airport, []);
}

//add edge, undirected
function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

//create the graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route));

console.log(adjacencyList);
// console.log(airports)
// console.log(routes)

//Graph search scenario: implement and algorithm to figure out if there's a route between Pheonix and Bankok(decide to use DFS or BFS). Example using BFS.

function bfs(start) {

    const visited = new Set();
    const queue = [start];

    while (queue.length > 0) {
        const airport = queue.shift(); //mutates queue
        const destinations = adjacencyList.get(airport);

        for (const destination of destinations) {
            
            if (destination ==='BKK') {
                console.log('bfs found Bangkok');           
            }

            if (!visited.has(destination)) {
                visited.add(destination);
                queue.push(destination);
                console.log(destination)
            }
        }
    }
}

bfs('PHX')

//Example using DFS

function dfs(start, visited = new Set()) {

    console.log(start);
    visited.add(start);

    const destinations = adjacencyList.get(start);

    for (const destination of destinations) {

        if (destination === 'BKK') {
            console.log('dfs found Bangkok')
            return;
        }

        if (!visited.has(destination)) {
            dfs(destination, visited);
        }
    }
}

dfs('PHX')