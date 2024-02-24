import { Object } from 'ts-toolbelt';

type AAA = {
    type: 'aaa',
    aaa: string;
}

type BBB = {
    type: 'bbb',
    bbb: string
}

type Union = AAA | BBB

type New = Object.Merge<AAA, BBB>

const x: New = {
    type: 'aaa',
    aaa: '111',
    bbb: '222'
}

console.log(x);








