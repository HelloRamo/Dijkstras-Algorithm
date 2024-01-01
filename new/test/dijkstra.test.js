
/*
describe('PriorityQueue', () => {
    let pq;

    beforeEach(() => {
        pq = new PriorityQueue();
    });

    it('should enqueue elements with priority and sort them', () => {
        pq.enqueue('element1', 3);
        pq.enqueue('element2', 1);
        pq.enqueue('element3', 2);

        expect(pq.queue.length).toBe(3);
        // BEGIN: Test Cases
        // Test case 4: Enqueue elements with different priorities
        const priorityQueue = new PriorityQueue();
        priorityQueue.enqueue('Task 1', 3);
        priorityQueue.enqueue('Task 2', 1);
        priorityQueue.enqueue('Task 3', 2);
        priorityQueue.enqueue('Task 4', 4);
        priorityQueue.enqueue('Task 5', 2);
        priorityQueue.enqueue('Task 6', 5);
        priorityQueue.printQueue();
        // Expected output: 'Task 2', 'Task 3', 'Task 5', 'Task 1', 'Task 4', 'Task 6'

        // Test case 5: Dequeue elements from the queue
        const dequeuedElement1 = priorityQueue.dequeue();
        const dequeuedElement2 = priorityQueue.dequeue();
        console.log(dequeuedElement1);
        console.log(dequeuedElement2);
        // Expected output: 'Task 2', 'Task 3'

        // Test case 6: Check if the queue is empty
        const isEmpty = priorityQueue.isEmpty();
        console.log(isEmpty);
        // Expected output: false
        // END: Test Cases        expect(pq.queue[0].element).toBe('element2');
        expect(pq.queue[1].element).toBe('element3');
        expect(pq.queue[2].element).toBe('element1');
    });

    it('should dequeue the element with the highest priority', () => {
        pq.enqueue('element1', 3);
        pq.enqueue('element2', 1);
        pq.enqueue('element3', 2);

        const dequeuedElement = pq.dequeue();

        expect(dequeuedElement).toBe('element2');
        expect(pq.queue.length).toBe(2);
        expect(pq.queue[0].element).toBe('element3');
        expect(pq.queue[1].element).toBe('element1');
    });

    it('should return "Queue is empty" when dequeue is called on an empty queue', () => {
        const dequeuedElement = pq.dequeue();

        expect(dequeuedElement).toBe('Queue is empty');
    });

    it('should return true if the queue is empty', () => {
        expect(pq.isEmpty()).toBe(true);

        pq.enqueue('element1', 3);
        expect(pq.isEmpty()).toBe(false);
    });

    it('should print the elements in the queue', () => {
        const consoleSpy = jest.spyOn(console, 'log');

        pq.enqueue('element1', 3);
        pq.enqueue('element2', 1);
        pq.enqueue('element3', 2);

        pq.printQueue();

        expect(consoleSpy).toHaveBeenCalledTimes(3);
        expect(consoleSpy).toHaveBeenCalledWith('element2');
        expect(consoleSpy).toHaveBeenCalledWith('element3');
        expect(consoleSpy).toHaveBeenCalledWith('element1');

        consoleSpy.mockRestore();
    });
});

describe('dijkstra', () => {
    it('should calculate the shortest distances from the start node to all other nodes', () => {
        const startNode = 'A';
        const result = dijkstra(startNode);

        expect(result.distances).toEqual({
            A: 0,
            B: 1,
            C: 1,
            D: 1,
            E: 2,
            F: 1
        });
    });
});
*/

const PriorityQueue = require('G:\Andere Computer\Mein PC\FH STUDIUM + Arbeit\Bachelor_Dijkstra\code\git\Dijkstras-Algorithm\new\pq.js'); // Pfad zur Datei, die PriorityQueue enthält

describe('PriorityQueue', () => {
    let pq;

    beforeEach(() => {
        pq = new PriorityQueue();
    });

    test('enqueue fügt Elemente zur Warteschlange hinzu und sortiert sie', () => {
        pq.enqueue('A', 2);
        pq.enqueue('B', 1);
        expect(pq.queue).toEqual([{ element: 'B', priority: 1 }, { element: 'A', priority: 2 }]);
    });

    test('dequeue entfernt das Element mit der höchsten Priorität', () => {
        pq.enqueue('A', 2);
        pq.enqueue('B', 1);
        expect(pq.dequeue()).toBe('B');
    });

    test('isEmpty gibt true zurück, wenn die Warteschlange leer ist', () => {
        expect(pq.isEmpty()).toBe(true);
    });

    test('isEmpty gibt false zurück, wenn die Warteschlange nicht leer ist', () => {
        pq.enqueue('A', 2);
        expect(pq.isEmpty()).toBe(false);
    });
});