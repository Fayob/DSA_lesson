class Node {
    constructor(value) {
        this.value = value;
        this.next = null
        this.prev = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = new Node(value)
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.length++
        return this
    }

    printList() {
        let currentNode = this.head
        const ListArray = []

        while (currentNode !== null) {
            ListArray.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(ListArray);
        return ListArray
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value)
        }

        if (typeof index !== 'number') {
            return 'please provide a valid number'
        }

        const newNode = {
            value: value,
            next: null,
            prev: null
        }

        const leader = this.traverseIndex(index - 1)
        const follower = leader.next
        leader.next = newNode
        newNode.prev = leader
        newNode.next = follower
        follower.prev = newNode
        this.length++
        return this.printList()
    }

    traverseIndex(index) {
        let currentNode = this.head
        let counter = 0
        while (counter < index) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }

    remove(index) {
        const previousNode = this.traverseIndex(index - 1)
        const targetNode = previousNode.next
        previousNode.next = targetNode.next
        targetNode.next.prev = previousNode
        this.length--
        return this
    }
}

const newLinkedList = new LinkedList(16)
newLinkedList.append(5);
console.log(newLinkedList.append(10)); 
console.log(newLinkedList.append(100));
newLinkedList.prepend(12);
console.log(newLinkedList.prepend(1));
newLinkedList.insert(1, 99);
newLinkedList.insert(2, 120);
console.log(newLinkedList.remove(1)); 
console.log(newLinkedList.remove(5)); 
// newLinkedList.printList();