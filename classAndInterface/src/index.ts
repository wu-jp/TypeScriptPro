export class Tank {
    x:number = 0
    y:number = 0
    name: string = '坦克'

    sayHello() {
        console.log(`我是一个${this.name}`)
    }
}

export class PlayerTank extends Tank {
    x: number = 20
    y: number = 20
    name: string = '己方坦克'
    life: number = 5


}

export class EnemyTank extends Tank {
    name: string = '敌方坦克'
}

const p: Tank = new PlayerTank()
p.sayHello()
if(p instanceof PlayerTank) {
    console.log('life', p.life)
}
