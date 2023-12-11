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