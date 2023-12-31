
// 
const inputField = document.createElement('input');
inputField.type = 'text';
document.body.appendChild(inputField);

const resultWindow = document.createElement('div');
document.body.appendChild(resultWindow);

let currentNode = 'A';

inputField.addEventListener('keyup', function (event) {
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