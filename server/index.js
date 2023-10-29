const express = require('express');
const cors = require('cors');
const verifyProof = require('./utils/verifyProof');
const MerkleTree = require('./utils/MerkleTree');
const niceList = require('./utils/niceList.json')

const port = 1225;
const emoji1 = String.fromCodePoint(128521)
const emoji2 = String.fromCodePoint(128540)

const app = express();
app.use(cors());
app.use(express.json());

// TODO: hardcode a merkle root here representing the whole nice list
// paste the hex string in here, without the 0x prefix
const merkleTree = new MerkleTree(niceList);
const MERKLE_ROOT = merkleTree.getRoot();


app.post('/gift', (req, res) => {
  // grab the parameters from the front-end here
  const body = req.body;// body will contain credentials object which is sen t from front-end
  const name_to_verfy = body.data.name;
  const root_from_client = body.data.root;
  const proof_from_client = body.data.proof;

  
  let isInTheList;
  if((MERKLE_ROOT === root_from_client)){
    // Need to check both root and proof from cleint
    // with the root we have in server and also we need the proof to check in case
    // of of some one change the prrof with his name  
    isInTheList =verifyProof(proof_from_client,name_to_verfy,MERKLE_ROOT);
  }
  else{
    isInTheList=false;
  }
 
  

 
  if(isInTheList) {
    res.send(`You May Get A Macbook Pro Air 2025  In Future !!! ${emoji1} `);
  }
  else {
    res.send(`You are not on the list ${emoji2}`);
  }

});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
