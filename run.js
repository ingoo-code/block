const BlockChain = require('./blockchain')
const ingoo = new BlockChain();

//새로운 블럭 만들기
ingoo.createNewBlock(1111,"aaaaa","582558255825")
ingoo.createNewBlock(1111,"bbbbb","583558355835")
ingoo.createNewBlock(1111,"ccccc","584558455845")


//새로운 트랜잭션 생성 - (총금액 , 보내는이, 받는이)

ingoo.createNewTransaction(111,'aaaaa','bbbbb')
ingoo.createNewTransaction(222,'bbbbb','ccccc')
ingoo.createNewTransaction(1000,'aaaaa','ccccc')


ingoo.createNewBlock(1,"hi","585558555855")

console.log(ingoo)