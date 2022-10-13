class HashTable {
    constructor(size) {
        this.data = new Array(size)
    }

    _hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }

    set(key, value) {
        let address = this._hash(key)
        if (!this.data[address]) {
            this.data[address] = []
        }
        this.data[address].push([key, value])
        return this.data
    }

    get(key) {
        let address = this._hash(key)
        if (!this.data[address]) {
            return undefined
        }
        for (let i = 0; i < this.data[address].length; i++){
            if (this.data[address][i][0] === key) {
                return this.data[address][i][1]
            }
        }
    }

    keys() {
        const keysArray = []
        for (let i = 0; i < this.data.length; i++){
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray
    }
}

const myHashTable = new HashTable(50)
console.log(myHashTable.set('grapes', 10000)); 
console.log(myHashTable.set('apples', 54)); 
console.log(myHashTable.set('oranges', 1254)); 
console.log(myHashTable.get('grapes')); 
console.log(myHashTable.keys()); 