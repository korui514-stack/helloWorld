console.log('こんにちは世界！');

let msg = 'こんにちは、JavaScript!';
console.log(msg);

const TAX = 1.1;
let price = 100;
console.log(price*TAX);

let date = ['JavaScript','Python','PHP','Ruby','Perl'];
console.log(date[0]);

let date1 = [
    ['javaScript','js'],
    ['python','py'],
    ['Ruby','rb'],
];
console.log(date1[1][0]);

let book = {
    title: 'JavaScript本格入門',
    price: 2980,
    publisher: '技術評論社',
};
console.log(book.title);
console.log(book['title']);

let me = {
    name:'田中',
    age:21,
    high:176,
};
console.log(`私は${me.name}で${me.age}歳で、身長は${me.high}cmです`);

function getPeroson(peroson){
    console.log(`私は${peroson.name}で${peroson.age}歳で、身長は${peroson.high}cmです`);
}
getPeroson(me);

function a (b,c){
    return b*c/2
};