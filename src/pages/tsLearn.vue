<template>
    <h2> 这里是ts页面 </h2>
</template>
<script lang="ts" setup>
    //断言
    let someValue: any = "this is a string";
    let strLength: number = (someValue as string).length;
    console.log(strLength)
    //类型别名
    type flag = string | number;

    function hello(value: flag) {}
    //类里面的修饰符
    //public 类里面 子类 其它任何地方外边都可以访问 
    //protected 类里面 子类 都可以访问,其它任何地方不能访问 
    //private 类里面可以访问，子类和其它任何地方都不可以访问

    //接口可以用来描述`对象的形状`
    interface Speakable {
    speak(): void;
    readonly lng: string; //readonly表示只读属性 后续不可以更改
    name?: string; //？表示可选属性
    }

    let speakman: Speakable = {
      speak() {}, //少属性会报错
    name: "hello",
    lng: "en",
    // age: 111, //多属性也会报错
    };

    //如果我们在定义接口的时候无法预先知道有哪些属性的时候,可以使用 [propName:string]:any,propName 名字是任意的
    //这个接口表示 必须要有 id 和 name 这两个字段 然后还可以新加其余的未知字段
    interface Person {
    id: number;
    name: string;
    [propName: string]: any;
    }

    let p1 = {
    id: 1,
    name: "hello",
    age: 10,
    };

    //函数类型接口
    interface discount {
    (price: number): number;
    }
    let cost: discount = function (price: number): number {
    return price * 0.8;
    };
</script>
