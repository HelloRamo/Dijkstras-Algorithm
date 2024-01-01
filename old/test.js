
      let canvas = document.getElementById('graphCanvas');
                let ctx = canvas.getContext('2d');
                let outputDiv = document.getElementById('output');

                const nodes = {
                    A: { x: 150, y: 300 },
                    B: { x: 250, y: 100 },
                    C: { x: 50, y: 150 },
                    D: { x: 250, y: 450 },
                    E: { x: 400, y: 300 },
                    F: { x: 350, y: 500 },
                    G: { x: 50, y: 450 },
                    H: { x: 550, y: 150 },
                    I: { x: 600, y: 450 },
                    J: { x: 750, y: 300 },
                    K: { x: 50, y: 50 },
                    L: { x: 520, y: 40 },
                    M: { x: 180, y: 30 },
                    N: { x: 500, y: 520 },
                    O: { x: 700, y: 520 },
                };

                const edges = [
                    { from: 'A', to: 'B' },
                    { from: 'A', to: 'C' },
                    { from: 'A', to: 'D' },
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
                    edge.weight = Math.floor(Math.random() * 10 + 1);
                });
                               // Drawing a line between two nodes to represent the edge.
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
                    //========================================================================= Dijkstra Priority queue  ========================================================================================================

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
                        let current = priorityQueue.dequeue();                          // dequeues curr highest pq node

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

                    return { distances,prev};                                                                           // prev has no further function -> const prev = new map() ...
                }
                

   
            const startNode = 'A';
            const result = dijkstra('A'); 
            const dijkstraResult = dijkstra(startNode);
            var correctDistances = result.distances;
            var userAnswers = {'A': 0};                                                     // creates data type dict with A set to 0
        
        // validates user input with result and sets js alert func
        function validateInput(node)  {
            var userInput = document.getElementById('distanceTo' + node).value; 
          
            if (correctDistances[node] == userInput) {
                userAnswers[node] = userInput;
                alert('Correct! The distance to node ' + node + ' is ' + userInput + '.');
                    } else {
                alert('Incorrect for node ' + node + '. Try again.'); 
            }
        }
     