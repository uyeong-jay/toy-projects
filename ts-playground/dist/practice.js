"use strict";
//기본타입: string, number, boolean + any, |(유니온)
var str = "hello";
var num = 1;
var bool = true;
//+
var any = "any";
var every = "every";
//배열: 
var arr1 = [1, 2];
var arr2 = ['a', 'b'];
var arr3 = ['a', 1]; // 튜플(tuple)
//+
var arr4 = [1, 2];
var arr5 = ['a', 'b'];
//객체: 
var obj1 = {
    a: 1,
    b: "a"
};
var obj2 = {
    a: "2",
    b: 1
};
//함수: 1.인자에 타입정의, 2.반환값에 타입정의(반환값이 없을땐 void)
function sum1(a, b) {
    return a + b;
}
sum1(1, '2');
function sum2(a, b) { }
;
var me1 = {
    name: 'a',
    age: 1
};
;
;
var me2 = {
    name: 'a',
    age: 1,
    skills: ['js', 'react']
};
var myfunc; //간단히 지정 가능
myfunc = function (a, b) {
    return a + b;
};
myfunc(1, '2');
var type = {
    name: 'a'
};
var me4 = {
    name: 'a',
    age: 1,
    skills: ['js', 'react']
};
var me5 = {
    name: 'a',
    age: 1
};
var me6 = {
    name: 'a',
    age: 1
};
var people1 = [me5, me6];
//2
var people2 = [me5, me6]; //확장
var colors = ['red', 'blue'];
//interface와 type은 객체를 위한 타입을 쓸 경우엔 무엇이든 써되지만 하나를 골라 일관성 있게 쓰는 것이 중요하다.
//----------------------------------
//generics: 최초 타입 유추가 복잡하고 어려울때 주로 사용
//generics 함수1: 
//1.함수이름, 인자, 반환값자리에 타입을 넣을 자리를 만듬(인자느낌)
//2.호출시 정확한 타입을 지정해 넣어줌(인수느낌)
function func2(text) {
    return text;
}
;
func2('a');
var func3 = function (text) {
    return text;
};
func3('a');
var items1 = {
    list: ['a', 'b'],
};
var items2 = {
    list: ['a', 'b'],
};
