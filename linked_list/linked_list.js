class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head
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
            next: null
        }

        const previousNode = this.traverseIndex(index - 1)
        const holdingPointer = previousNode.next
        previousNode.next = newNode
        newNode.next = holdingPointer
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
        this.length--
        return this.printList()
    }
}

const newLinkedList = new LinkedList(16)
newLinkedList.append(5);
newLinkedList.append(10);
console.log(newLinkedList.append(100));
newLinkedList.prepend(12);
console.log(newLinkedList.prepend(1));
newLinkedList.insert(1, 99);
newLinkedList.insert(2, 120);
newLinkedList.remove(2);
newLinkedList.remove(5);
// newLinkedList.printList();