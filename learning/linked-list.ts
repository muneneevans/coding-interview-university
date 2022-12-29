export class ListNode {
    next: null | ListNode
    data: any
    constructor(data: any) {
        this.data = data
        this.next = null
    }

    toString() {
        return `value: ${this.data}, next: ${this.next}`
    }
}

export class LinkedList {
    private head: ListNode | null
    private tail: ListNode | null
    constructor(node: ListNode | null) {
        this.head = node
        this.tail = node
    }

    private append(currentNode: ListNode, newNode: ListNode) {
        if (currentNode.next) {
            this.append(currentNode.next, newNode)
        } else {
            currentNode.next = newNode
            this.tail = newNode
        }
    }

    public add(node: ListNode) {
        if (this.head) {
            // if there is an element in next, keep moving
            // this.append(this.head, node)
            this.head.next = node
            this.tail = node

        } else {
            this.head = node
            this.tail = node
        }
    }

    public prepend(node: ListNode) {
        if (this.head) {
            node.next = this.head
            this.head = node
        } else {
            this.head = node
            this.tail = node
        }
    }


    private findNode(currentNode: ListNode, value: any) {
        if (
            currentNode.data === value
        ) {
            return currentNode
        }
        else if (currentNode.next) {
            return this.findNode(currentNode.next, value)
        }
        return null
    }





    public contains(value: any) {
        return this.findNode(this.head, value) !== null
    }
    public delete(value) {

        const removeNode = (currentNode: ListNode, prevNode: ListNode | null, value) => {
            if (currentNode.data === value) {
                // do deletion
                prevNode.next = currentNode.next

                if (this.head === currentNode) {
                    this.head = currentNode.next
                }
                else if (this.tail === currentNode) {
                    this.tail = prevNode
                }


            } else {
                removeNode(currentNode.next, currentNode, value)
            }
        }
        if (this.head) {
            removeNode(this.head, this.head, value)
        } else {
            this.head = this.tail = null
        }
    }


    concat(currentNode: ListNode, output: string) {
        output += `, ${currentNode.data}`
        if (currentNode.next) {
            return this.concat(currentNode.next, output)
        }
        return output
    }
    toString() {
        return (this.concat(this.head, ''))
    }


}


// let myList = new LinkedList(null)
// const newNode1 = new ListNode(10)
// const newNode2 = new ListNode(20)
// const newNode3 = new ListNode(30)
// const newNode4 = new ListNode(40)
// const newNode5 = new ListNode(50)
// myList.add(newNode1)
// myList.add(newNode2)
// myList.add(newNode3)
// myList.add(newNode4)
// myList.add(newNode5)
// console.log(myList.toString())

// Prepend
// const newNode6 = new ListNode(5)
// myList.prepend(newNode6)
// console.log(myList.toString())

// Find
// console.log(myList.contains(40))            // True
// console.log(myList.contains(45))            // False


// Delete
// console.log(myList.toString())
// myList.delete(30)
// console.log(myList.toString())

// End
// console.log("End")