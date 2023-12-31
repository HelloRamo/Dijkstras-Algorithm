// Define your variables and constants here

// Define your functions here

// Start your program execution here

//== variables and constants  ========================================================================================================


/*                                                      // creates data type dict with A set to 0
function validateInput(node) {
  var userInput = document.getElementById('distanceTo' + node).value;

  if (correctDistances[node] == userInput) {
      userAnswers[node] = userInput;
      alert('Correct! The distance to node ' + node + ' is ' + userInput + '.');
  } else {
      alert('Incorrect for node ' + node + '. Try again.');
  }
}
  // validates user input with result and sets js alert func

/*
  function validateInput(node) {
  var userInput = document.getElementById('distanceTo' + node).value;
 // var nodes = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];

/* Iterieren Sie über alle Knoten
// for (var i = 0; i < nodes.length; i++) 
{
// Fügen Sie einen Event-Listener für jeden Knoten hinzu
// document.getElementById(nodes[i]).addEventListener('input', function(event) {
// Überprüfen Sie die Eingabe für den aktuellen Knoten
// validateInput(event.target.id, event.target.value);
}); *\
      if (correctDistances[node] == userInput) {
          userAnswers[node] = userInput;
          alert('Correct! The distance to node ' + node + ' is ' + userInput + '.');
      } else {
          alert('Incorrect for node ' + node + '. Try again.');
      }
  }
  }
// starts algorithm from start node A


// var distanceToB = dijkstraResult.distances['B'];

/*
for (var node in dijkstraResult.distances) {
console.log('Die Entfernung von A zu ' + node + ' ist ' + dijkstraResult.distances[node]);
}
  document.getElementById('validateButton').addEventListener('click', function() {
validateInput(distances); // oder ein anderer Knoten
});
document.getElementById('validateButton').addEventListener('click', function() {
var selectedNode = document.getElementById('nodeSelect').value;
validateInput(selectedNode);
});

*/

#pageHeader {
  position: absolute;
  top: 1 %;
  right: 15 %;
  transform: translateY(5 %);
}

// Liste aller Knoten von B bis O
var nodes = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];

// Holen Sie sich das Tabellenelement
var table = document.getElementById('distanceTable');

// Iterieren Sie über alle Knoten
for (var i = 0; i < nodes.length; i++) {
  // Erstellen Sie eine neue Tabellenzeile
  var row = document.createElement('tr');

  // Erstellen Sie eine Zelle für den Knoten
  var nodeCell = document.createElement('td');
  nodeCell.textContent = nodes[i];
  row.appendChild(nodeCell);

  // Erstellen Sie eine Zelle für das Eingabefeld
  var inputCell = document.createElement('td');
  var input = document.createElement('input');
  input.type = 'text';
  input.id = 'distanceTo' + nodes[i];
  input.placeholder = 'Distance';
  inputCell.appendChild(input);
  row.appendChild(inputCell);

  // Erstellen Sie eine Zelle für den Button
  var buttonCell = document.createElement('td');
  var button = document.createElement('button');
  button.textContent = 'Verify';
  button.onclick = function () { validateInput(nodes[i]); };
  buttonCell.appendChild(button);
  row.appendChild(buttonCell);

  // Fügen Sie die Zeile zur Tabelle hinzu
  table.appendChild(row);
}