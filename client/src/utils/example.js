const MerkleTree = require('./MerkleTree');
const niceList = require('./niceList');
const verifyProof = require('./verifyProof');

// create the merkle tree for the whole nice list
const merkleTree = new MerkleTree(niceList);

// console.log("Merkle Tree Of The Nice List is", merkleTree);

// get the root
const root = merkleTree.getRoot();
console.log("Merkle Root Of The Nice List is", typeof(root));

// find the proof that norman block is in the list 
const name = 'Norman Block';
const index = niceList.findIndex(n => n === name);
console.log(" Name From NiceList Are In the Root or not", index);
const proof = merkleTree.getProof(index);
console.log(" Name From NiceList Are In the Root or Not Proof", proof);

// verify proof against the Merkle Root
console.log( verifyProof(proof, name, root) ); // true, Norman Block is in the list!

// TRY IT OUT: what happens if you try a name not in the list, or a fake proof?


