class TrieNode {
    constructor() {
        this.children = {};
        this.endWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            let insertData = word[i];
            if (!(insertData in current.children)) {  
                current.children[insertData] = new TrieNode();
            }
            current = current.children[insertData];
        }
        current.endWord = true;
    }

    search(word){
        let current = this.root
        for(let i =0;i<word.length;i++){
            let insertData = word[i]
            if(!(insertData in current.children)){
                return false
            }
            current = current.children[insertData]
        }
        return current.endWord
    }
   
    delete(word){
        this.deleteWord(this.root,word,0)
    }

    deleteWord(root,word,index){
      if(!root){
        return false
      }

      if(index === word.length){
        if(!root.endWord){
            return false
        }
        root.endWord = false
        return Object.keys(root.children).length === 0
      }

      let char = word[index]
      if(this.deleteWord(root.children[char],word,index + 1)){
        delete root.children[char]
        return Object.keys(root.children).length ===0 && !root.endWord
      }
    return false
    }


    autoComplete(prefix){
        let current = this.root
        for(let char of prefix){
            if(!current.children[char]){
                return []
            }
            current = current.children[char]
        }
        return this.collectWords(current,prefix)
    }

    collectWords(node,prefix){
        let words = []
        if(node.endWord){
         words.push(prefix)
        }

        for(let char in node.children){
            words = words.concat(this.collectWords(node.children[char],prefix + char))
        }
        return words
    }

    print(node = this.root, word = "") {
        if (node.endWord) {
            console.log(word); 
        }
        for (let char in node.children) {
            this.print(node.children[char], word + char); 
        }
    }
   
}

let trie = new Trie();
trie.insert("cat");
trie.insert("car");
trie.insert("cap")
trie.insert("caps")
trie.insert("auto")
console.log(trie.search("cat"));

trie.delete("cat")

trie.print()
