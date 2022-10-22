
class Person {
    constructor(name, age) {
        // 构造器的this指向类的实例对象
        this.name = name;
        this.age = age;
    }
    // 方法放在类的原型上，供实例使用
    // 通过Person的实例调用open时，this就指向Person实例；
    open() {
        return `${this.name}今年${this.age}岁了！`
    }
};
class Studes extends Person {
    constructor(name, age, ipone) {
        super(name, age);
        this.ipone = ipone;
    }
    open() {
        return `${this.name}今年${this.age}岁了！,他的手机号是${this.ipone}`;
    }
}

const p2 = new Studes('王五',39,13895676787);
p2.open();
console.log(p2.open())