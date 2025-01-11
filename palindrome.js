const palindrome = (str) => {
	let len =str.length;
	for(let i = 0; i < len / 2;i++)
	{
		if (str[i] != str[len - i - 1]){
			console.log("Ceci n'est pas un palindrome");
			return;
		}
	}
	console.log("Ceci est un palindrome");
}
// palindrome("test")
palindrome("kayak")
