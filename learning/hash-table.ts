import { ListNode, LinkedList } from "./linked-list"




export class HashTable {
    buckets: LinkedList[] | null
    tableSize: number
    constructor(hashTableSize: number) {
        this.buckets = new Array(hashTableSize).fill(null)
        this.tableSize = hashTableSize
    }


    hash = (key: string, maxSize: number) => {
        return (key.charCodeAt(0)) % maxSize

    }

    // Insert an entry
    insert = (key, data) => {
        // get key
        // get index from hash
        const index = this.hash(key, this.tableSize)
        const newNode = new ListNode({ data, key: key })
        // check if bucket is null Y
        if (this.buckets[index]) {
            // if not null
            // Append the item to the liked list

            this.buckets[index].add(newNode)

        }
        else {
            // if null
            // create new linked list with item as head            
            this.buckets[index] = new LinkedList(newNode)
        }
    }

    // Find item

}


const myHashTable = new HashTable(8)
myHashTable.insert("Evans", 24)
myHashTable.insert("Emmet", 26)
myHashTable.insert("Ruth", 26)
console.log(myHashTable)
console.log(myHashTable)