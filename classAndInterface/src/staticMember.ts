// 静态成员
 class User {
    static users: User[] = []

     constructor(
         public loginId: string,
         public loginPwd: string,
         public name: string,
         public age: number
     ) {
        User.users.push(this)
     }

     sayHello() {
        console.log(`大家好，我是${this.name}，今年${this.age}岁了，我的账号是${this.loginId}`)
     }

     static login(loginId: string, loginPwd: string): User | undefined {
        return undefined
     }
}


// 单例模式
class Board {
    width: number = 500
    height: number = 700

    init() {
        console.log('初始化棋盘')
    }

    private constructor() {}

    private static _board?: Board

    static createBoard (): Board {
        if(this._board) {
            return this._board
        }else {
            this._board = new Board()
            return this._board
        }
    }
}

const b1 = Board.createBoard()
const b2 = Board.createBoard()
console.log(b1 === b2) // true
