const swap = (obj) => {
	let tmp = obj.a;
	obj.a = obj.b;
	obj.b = tmp;
}
let values = {a: 'a', b: 'b'}
swap(values);
console.log(`la variable a = ${values.a}, la variable b = ${values.b}`)