let str = "Yes! I do\t know & 10 \ntimes I_say.";
let ptrn = /[\n\t]/g;
console.log(str.match(ptrn));