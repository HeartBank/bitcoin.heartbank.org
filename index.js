// "type": "module",
// import Block from "./Block.mjs"

const Blockchain = require("./Blockchain.js")

const blockchain = new Blockchain()
blockchain.addBlock("two")
blockchain.addBlock("three")
blockchain.addBlock("four")

console.log(blockchain)