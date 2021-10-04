const Block = require("./Block.js")
const SHA256 = require("crypto-js/sha256")

module.exports = class {
  constructor () {
    this.chain = [new Block("genesis", "0", null)]
  }

  addBlock(data) {
    const lastHash = this.chain[this.chain.length - 1].hash
    const hash = SHA256(data + lastHash).toString()

    const block = new Block(data, hash, lastHash)
    this.chain.push(block)
  }
}