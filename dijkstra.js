


let canvas = document.getElementById('graphCanvas');
let ctx = canvas.getContext('2d');
let outputDiv = document.getElementById('output');

const nodes = {
    A: { x: 128, y: 255 },
    B: { x: 212, y: 85 },
    C: { x: 42, y: 127 },
    D: { x: 212, y: 382 },
    E: { x: 340, y: 255 },
    F: { x: 297, y: 425 },
    G: { x: 42, y: 382 },
    H: { x: 467, y: 127 },
    I: { x: 510, y: 382 },
    J: { x: 637, y: 255 },
    K: { x: 42, y: 42 },
    L: { x: 442, y: 34 },
    M: { x: 153, y: 25 },
    N: { x: 425, y: 442 },
    O: { x: 595, y: 442 },
};

const edges = [
    { from: 'A', to: 'B' },
    { from: 'A', to: 'C' },
    { from: 'A', to: 'D' },
    { from: 'A', to: 'G' },
    { from: 'B', to: 'C' },
    { from: 'B', to: 'D' },
    { from: 'B', to: 'E' },
    { from: 'B', to: 'H' },
    { from: 'B', to: 'L' },
    { from: 'B', to: 'M' },
    { from: 'C', to: 'G' },
    { from: 'C', to: 'K' },
    { from: 'D', to: 'F' },
    { from: 'D', to: 'E' },
    { from: 'D', to: 'I' },
    { from: 'D', to: 'G' },
    { from: 'E', to: 'H' },
    { from: 'E', to: 'I' },
    { from: 'E', to: 'J' },
    { from: 'F', to: 'G' },
    { from: 'F', to: 'I' },
    { from: 'F', to: 'N' },
    { from: 'H', to: 'J' },
    { from: 'I', to: 'J' },
    { from: 'I', to: 'N' },
    { from: 'I', to: 'O' },
    { from: 'K', to: 'M' },
    { from: 'L', to: 'H' },
    { from: 'L', to: 'J' },
    { from: 'M', to: 'L' },
    { from: 'N', to: 'O' },
    { from: 'O', to: 'J' },


];


edges.forEach(edge => {
    edge.weight = Math.floor(Math.random() * 14 + 1);
});

edges.forEach(edge => {
    ctx.beginPath();
    ctx.moveTo(nodes[edge.from].x, nodes[edge.from].y);
    ctx.lineTo(nodes[edge.to].x, nodes[edge.to].y);
    ctx.stroke();
    let midX = (nodes[edge.from].x + nodes[edge.to].x) / 2;
    let midY = (nodes[edge.from].y + nodes[edge.to].y) / 2;
    ctx.font = '20px Arial';
    ctx.fillText(edge.weight, midX, midY);
});

// Drawing the nodes as circles
for (let node in nodes) {
    ctx.beginPath();
    ctx.arc(nodes[node].x, nodes[node].y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText(node, nodes[node].x - 10, nodes[node].y + 7);
}
const queue = document.querySelector(".queue");

class PriorityQueue {
    constructor() {                                                          // constructor initializes an empty queue
        this.queue = [];
    }

    enqueue(element, priority) {                                            // adds element to queue with a given priority and sorts them      
        this.queue.push({ element, priority });
        this.sort();
    }

    dequeue() {                                                            // removes the first element (highest priority) from array
        if (this.isEmpty()) {                                              // checks if queue is empty
            return "Queue is empty";
        }
        return this.queue.shift().element;                                // removes first element
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    sort() {                                                            // output difference of priority and sort -> if negative, a has a higher priority than b
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    printQueue() {                                                      // prints the elements in the queue
        this.queue.forEach(item => {
            console.log(item.element);
        });
    }
}

function dijkstra(start) {
    const distances = {};                                               // shortest dist from start to each node
    const prev = {};                                                    // prev node in the shortest path to each node
    const priorityQueue = new PriorityQueue();                          // manages the visited nodes

    Object.keys(nodes).forEach(node => {                                // iterates over nodes and sets starting parameter
        distances[node] = Infinity;
        prev[node] = null;
    });

    distances[start] = 0;                                               // distance start node to itself
    priorityQueue.enqueue(start, 0);                                    // adds start node to pq with rank 0

    // Dijsktras Algorithm 
    while (!priorityQueue.isEmpty()) {                                  // sets condition while loop true if not empty! -!
        let current = priorityQueue.dequeue();                          // dequeues highest pq node

        // iterates over edges and filters only conencted nodes to current node
        edges.filter(edge => edge.from === current || edge.to === current).forEach(edge => {
            let otherNode = edge.from === current ? edge.to : edge.from;                                // checks "from" "to" edges of nodes
            let weight = edge.weight; // retreives weight curr edge

            if (distances[current] + weight < distances[otherNode]) {                                   // if true shorter path is found
                distances[otherNode] = distances[current] + weight;                                     // updates with shorter path
                prev[otherNode] = current;
                priorityQueue.enqueue(otherNode, distances[otherNode]);                                 // enqueues with updated distance
            }
        });
    }

    return { distances, prev };                                                                        // prev has no further function in programm -> const prev = new map() ...
}

// starts algorithm from start node A
const startNode = 'A';
const result = dijkstra('A');
const dijkstraResult = dijkstra(startNode);                                   // ?stores the result of the dijkstra algorithm in a variable?
var correctDistances = result.distances;
var userAnswers = { 'A': 0 };                                                     // creates data type dict with A set to 0


// Hier HTML-Elemente erstellen und Events hinzufügen
/*
    const inputField = document.createElement('input');
    inputField.type = 'text';
    document.body.appendChild(inputField);

    const resultWindow = document.createElement('div');
    document.body.appendChild(resultWindow);

    let currentNode = 'A';

    inputField.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            const inputValue = inputField.value.trim().toUpperCase();
            const shortestDistance = dijkstra(currentNode);

            if (inputValue === currentNode) {
                resultWindow.innerText = 'Richtig!';
                currentNode = getNextNode(); // Funktion implementieren, um den nächsten Knoten zu erhalten
                inputField.value = '';
            } else {
                resultWindow.innerText = 'Falsch. Versuche es erneut.';
            }
        }
    });

    function getNextNode() {
        const nodesArray = Object.keys(nodes); // Get an array of all nodes
        const currentIndex = nodesArray.indexOf(currentNode); // Get the index of the current node

        // If the current node is the last node in the array, return the first node
        if (currentIndex === nodesArray.length - 1) {
            return nodesArray[0];
        } else {
            // Otherwise, return the next node in the array
            return nodesArray[currentIndex + 1];
        }
    }
    */