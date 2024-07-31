// 2. Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      return this.items.shift();
    }
  
    front() {
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  class PrinterQueue {
    constructor() {
      this.queue = new Queue();
    }
  
    addJob(job) {
      this.queue.enqueue(job);
      console.log(`Added job: ${job}`);
    }
  
    processJob() {
      if (this.queue.isEmpty()) {
        console.log("No jobs to process.");
        return;
      }
      const job = this.queue.dequeue();
      console.log(`Processing job: ${job}`);
    }
  }
  
  // Example usage:
  const printerQueue = new PrinterQueue();
  printerQueue.addJob("Print document 1");
  printerQueue.addJob("Print document 2");
  printerQueue.processJob(); // Processing job: Print document 1
  printerQueue.processJob(); // Processing job: Print document 2
  printerQueue.processJob(); // No jobs to process.

  



//   PrinterQueue uses the Queue class to manage print jobs.
// addJob(job): Adds a print job to the queue.
// processJob(): Processes (removes) the first job in the queue.





