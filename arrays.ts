// arrays are contigious memory space.
// 0 or more pieces of memory understood in an array
// a= int[3] - 3 ints in a space


// array buffer

const a = new ArrayBuffer(6)
console.log(a);

const a8 = new Uint8Array(a);
a8[0] = 50;
console.log(a);

a8[2] = 100;

const a16 = new Uint16Array(a)
console.log(a)

a16[2] = 3500;
console.log(a)

// cant grow an array simply you insert, this avoids memory being overridden that you cant guarentee is being used. 
// a + width * offset finds value of array. for deletion nothing is truely deleted (space in mem still reserved) it simply removes the value (zeros it out)

// big o of getting a value from an array
// O(1) constant time as no matter input does not grow
// there is no way to grow it, no insertAt, push or pop - in a static or traditional array
