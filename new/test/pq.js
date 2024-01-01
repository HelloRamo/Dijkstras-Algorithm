
class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(element, priority) {                                            // adds element to queue with a given priority and sorts them
        this.queue.push({ element, priority });
        this.sort();
    }

    dequeue() {                                                            // removes the first element (highest priority) from array
        if (this.isEmpty()) {
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