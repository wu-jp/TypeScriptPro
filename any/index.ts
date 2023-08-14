function fn(x:string|number) {
    if (typeof x === 'string') {
        // ...
    } else if (typeof x === 'number') {
        // ...
    } else {
        x; // never 类型
    }
}


function f():never {
    throw new Error('Error');
}

let v1:number = f(); // 不报错
let v2:string = f(); // 不报错
let v3:boolean = f(); // 不报错
