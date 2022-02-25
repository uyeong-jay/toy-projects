//기본타입: string, number, boolean + any, |(유니온)
const str: string = "hello";
const num: number = 1;
const bool: boolean = true;
//+
const any: any = "any";
const every: string | number | boolean = "every";


//배열: 
const arr1: number[] = [1, 2];
const arr2: string[] = ['a','b'];
const arr3: [string, number] = ['a', 1]; // 튜플(tuple)
//+
const arr4: Array<number> = [1, 2];
const arr5: Array<string> = ['a','b'];


//객체: 
const obj1: object = { 
  a: 1, 
  b: "a" 
};
const obj2: {a: string, b: number} = { 
  a: "2", 
  b: 1 
};


//함수: 1.인자에 타입정의, 2.반환값에 타입정의(반환값이 없을땐 void)
function sum1(a:number, b: string): string {
  return a + b;
}
sum1(1, '2');

function sum2(a:number, b: string): void {}

//----------------------------------

//interface: 일반
interface Person1 {
  name: string;
  age: number;
};

const me1: Person1 = {
  name: 'a',
  age: 1
}

//interface: 상속
interface Person2 {
  name: string;
  age: number;
};

interface Developer2 extends Person2 {
  skills: string[];
};

const me2: Developer2 = {
  name: 'a',
  age: 1,
  skills: ['js', 'react']
}


//interface: 함수
interface func1 {
  (a: number, b: string): string;
}

let myfunc: func1; //간단히 지정 가능
myfunc = function(a: number, b: string): string {
  return a + b;
}
myfunc(1, '2');

//----------------------------------

//type-alias 일반
type Person3 = {
  name: string;
  age?: number; //?(= 옵셔널 파라미터: 설정해도 되고 안해도 되도록 만듦)
}

const type: Person3 = {
  name: 'a'
};


//type-alias 확장1
type Person4 = {
  name: string;
  age: number;
}

type Developer4 = Person4 & { //확장 &: intersection(두개 이상의 타입을 합쳐줌)
  skills: string[];
}

const me4: Developer4 = {
  name: 'a',
  age: 1,
  skills: ['js', 'react']
}


//type-alias 확장2-1
type Person5 = {
  name: string;
  age: number;
}

const me5: Person5 = {
  name: 'a',
  age: 1
};
const me6: Person5 = {
  name: 'a',
  age: 1
};

//1
type People = Person5[];//확장
const people1: People = [me5, me6];

//2
const people2: Person5[] = [me5, me6];//확장


//type-alias 확장2-2
type Color = 'red' | 'blue' | 'green';
const colors: Color[] = ['red', 'blue'];

//interface와 type은 객체를 위한 타입을 쓸 경우엔 무엇이든 써되지만 하나를 골라 일관성 있게 쓰는 것이 중요하다.

//----------------------------------

//generics: 최초 타입 유추가 복잡하고 어려울때 주로 사용

//generics 함수1: 
//1.함수이름, 인자, 반환값자리에 타입을 넣을 자리를 만듬(인자느낌)
//2.호출시 정확한 타입을 지정해 넣어줌(인수느낌)
function func2<T>(text: T): T { //함수 선언식ver
  return text;
};
func2<string>('a');

const func3 = <T> (text: T): T => { //화살표 함수ver
  return text;
};
func3<string>('a');


//generics with interface:
interface Item1<T> {
  list: T[];
}
const items1: Item1<string> = {
  list: ['a', 'b'],
};


//generics with type-alias
type Items2<T> = {
  list: T[];
};
const items2: Items2<string> = {
  list: ['a', 'b'],
};



