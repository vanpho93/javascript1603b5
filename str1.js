const str = 'Khoa Pham';
const str2 = "Khoa Pham";

const str3 = 'Khoa " Pham';
const str4 = `Khoa ' " Pham`;

const firstName = 'Khoa';
const lastName = 'Pham';

console.log('Chao ' + firstName + ' ' + lastName + '!');
console.log(`Chao ${firstName} ${lastName}!`);

const b = ` 
Training ning `;

// console.log(b.indexOf('ni', 5));

// console.log(b.includes('ning1'));
console.log(b.trim());

const sentence = 'How are you today?';
console.log(sentence.split(' '));