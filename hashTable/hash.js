class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total % this.table.length
    }
    set(key,value){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            let sameItem = bucket.find(item=>item[0]===key)
            if(sameItem){
                sameItem[1]=value
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(bucket){
            let sameItem = bucket.find(item=>item[0]===key)
            if(sameItem){
                return sameItem[1]
            }
        }
        return undefined
    }
    remove(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(bucket){
            let sameItem = bucket.findIndex(item=>item[0]===key)
            if(sameItem !== -1){
                bucket.splice(sameItem,1)
                if(bucket.length===0){
                    this.table[index] = undefined
                }
            }
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

const table = new HashTable(10)

table.set('name','vinayak')
table.set('age',23)
table.display()
console.log(table.get('age'))

table.set('mane','sadik')

table.display()

table.remove('name')
table.display()




