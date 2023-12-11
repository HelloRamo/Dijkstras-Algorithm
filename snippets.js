// input container 
 let currentIndex = 0;
            let distances = {};

            function validateAndProceed() {
                let input = document.getElementById('distanceInput');
                let distance = input.value;

                // Validate input
                if (isNaN(distance) || distance < 0) {
                    alert('Please enter a valid number');
                    return;
                }

                // Save distance
                distances[nodes[currentIndex]] = distance;

                // Move to next node
                currentIndex++;

                // Update prompt
                if (currentIndex < nodes.length) {
                    document.getElementById('inputContainer').children[0].innerText =
                        `Enter the shortest distance from node A to node ${nodes[currentIndex]}:`;
                    input.value = '';
                } else {
                    alert('All distances have been entered');
                    input.disabled = true;
                }
            }
            <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shortest path Dijkstra algorithm by Ramo</title>
</head>

<body>
    <div id="mainContainer">
        <canvas id="graphCanvas" width="800" height="600"></canvas>

        <div class="PriorityQueue">
            <p class="placeholder"></p>

        </div>

        <style>
            body {
                margin: 0;
                display: flex;
                justify-content: center;
            }

            #graphContainer {
                flex-grow: 1;
            }

            canvas {
                border: 1px solid black;
                width: 100%;
                flex: 1;
            }

            #mainContainer {
                display: flex;
                justify-content: center;
                /* Center the flex items horizontally */
                align-items: start;
                /* Align the flex items to the top */
            }
        </style>