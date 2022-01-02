import dotenv from 'dotenv-safe';
import add from '@src/math/add';

dotenv.config(); // dotenv-safe용

console.log(add(1, 4));
console.log(process.env.MY_NAME);
console.log('staged');
