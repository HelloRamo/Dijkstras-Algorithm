function validateInput() {

    const startNode = 'A';
    const result = dijkstra('A');
    const dijkstraResult = dijkstra(startNode);
    var correctDistances = result.distances;
    var userAnswers = { 'A': 0 };

    // Iterate through each node from A to E
    for (let i = 1; i < 6; i++) {
        // Convert the number to a letter (65 is the ASCII value for 'A')
        let node = String.fromCharCode(65 + i);

        let userInput;
        do {
            // Ask the user for their input
            userInput = prompt('Bitte geben Sie die kürzeste Distanz zum Knoten ' + node + ' ein:');

            if (correctDistances[node] == userInput) {
                userAnswers[node] = userInput;
                alert('Richtig! Die kürzeste Distanz zum Knoten ' + node + ' beträgt ' + userInput + '.');
                document.getElementById('distanceTo' + node).value = userInput;
                break;
            }
            else {
                alert('Falsch für Knoten ' + node + '. Versuchen Sie es erneut.');
            }
        } while (true);
    }
}