/**
    1、类中的构造器不是必须写的。要对实例进行一些初始化的操作，如添加指定属性时才写。
    2、如果A类继承了B类，如果A类中写了构造器，那么A类构造器中super是必须要调用的。
    3、类中所定义的方法，都放在了类的原型对象上。供实例去使用。
 **/
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
/**继承父类的实例也可以调用父类的方法，通过原型链一层一层查找
 * 
 */
class Studes extends Person {
    constructor(name, age, ipone) {
        super(name, age);
        this.ipone = ipone;
    }
    // 类中可以直接写属性（赋值语句）
    sex = "男"
    // 重写父类继承的方法
    open() {
        return `${this.name}今年${this.age}岁了！,他的手机号是${this.ipone}`;
    };
    speak() {
        return console.log("我是王五");
    }
}

const p2 = new Studes('王五', 39);
p2.open();
console.log(p2)
