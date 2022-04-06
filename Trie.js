class TrieNode {
    constructor() {
        this.keys = new Map();
        this.end = false;
        this.setEnd = (() => {
            this.end = true;
        });
        this.isEnd = (() => {
            return this.end;
        });
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    addNode = (word, node = this.root) => {
        if (word.length == 0){
            node.setEnd();
            return;
        }
        if (!node.keys.has(word[0])){
            node.keys.set(word[0], new TrieNode());
            return this.addNode(word.substr(1), node.keys.get(word[0]));
            //The code above is the recursive bit. It returns the addNode function with input.substr(1)
        }

        return this.addNode(word.substr(1), node.keys.get(word[0]));
    }


    isWord = (word) => {
        let node = this.root;
        while (word.length > 1) {
            if (!node.keys.has(word[0])){
                return false;
            } else {
                node = node.keys.get(word[0]);
                word = word.substr(1);
            };
        };
        return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true : false;
    };
}

testTrie = new Trie();

const wordArray = ["Test", "Teach", "Tech", "Technical", "Worry", "Wombat", "Woman", "Worth", "Mechanical", "Me", "Mech", "Method", "Mechanized", "Work", "Soccer", "Social", "Sock", "Snake", "Snack", "Sniffle", "Sofa", "Somber"];

for (let i = 0; i < wordArray.length; i++)
{
    let word = wordArray[i];
    testTrie.addNode(word);
}

console.log("Worry: " + testTrie.isWord("Worry"));
console.log("Children: " + testTrie.isWord("Children"));