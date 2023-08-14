abstract class Chess {
    x: number = 0
    y: number = 0

    // 抽象成员
    abstract readonly name: string;
    move(targetX: number, targetY: number): boolean {
        console.log('1. 边界判断')
        console.log('2. 目标位置是否存在己方棋子')

        if(this.rule(targetX, targetY)) {
            this.x = targetX
            this.y = targetY
            console.log(`${this.name}移动成功`)
            return true
        }
        return false
    }

    protected abstract rule(targetX: number, targetY: number): boolean;
}

class Horse extends Chess {
    readonly name: string = '马';

    protected rule(targetX: number, targetY: number): boolean {
        return true;
    }
}

class Pao extends Chess {
    readonly name: string
    constructor() {
        super();
        this.name = '炮'
    }

    protected rule(targetX: number, targetY: number): boolean {
        return false;
    }
}

class Soldier extends Chess {
    get name() {
        return '兵'
    }

    protected rule(targetX: number, targetY: number): boolean {
        return true;
    }

}

const h = new Horse()
const p = new Pao()
const s = new Soldier()
