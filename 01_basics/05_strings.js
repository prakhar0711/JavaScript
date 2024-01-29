const name = "tushar";
const repoCount = 50;

//outdated syntax
console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//another string declaration, it is an object {0:"t" ,1:"u" ,2:"s" ,3:"h" ,4:"a" ,5:"r", length:6}
const gameName = new String("tushar");
console.log(gameName);
console.log(gameName[3]);
console.log(gameName.__proto__);
console.log(gameName.length);

console.log(gameName.charAt(4));
console.log(gameName.indexOf("r"));

const newString = gameName.substring(1, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   tushar    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.google.com/tushar%20kumar";
console.log(url.replace("%20", "-"));

console.log(url.includes("tushar"));

//generate array of string
const myName = "tushar-123-@-gmail";
console.log(myName.split("-"));
/* 
**********DIFFERENT STRING METHODS*********
anchor(): Creates an HTML anchor element with the string as the text and the specified name as the href attribute.

at(): Returns the character at a specified index in the string.

big(): Wraps the string in a <big> tag.

blink(): Wraps the string in a <blink> tag (deprecated and not widely supported).

bold(): Wraps the string in a <b> tag.

**charAt(): Returns the character at a specified index in the string.

charCodeAt(): Returns the Unicode of the character at a specified index in the string.

codePointAt(): Returns the Unicode code point value at the specified index in a string.

concat(): Concatenates the string arguments to the calling string and returns a new string.

constructor(): Returns the function that created the string's prototype.

endsWith(): Checks if the string ends with the specified value.

fixed(): Wraps the string in a <tt> tag.

fontcolor(): Wraps the string in a <font> tag with the specified color.

fontsize(): Wraps the string in a <font> tag with the specified size.

includes(): Checks if the string contains the specified value.

**indexOf(): Returns the index within the calling string of the first occurrence of the specified value, or -1 if not found.
isWellFormed(): Checks if the string contains well-formed UTF-16 code units.

italics(): Wraps the string in an <i> tag.

lastIndexOf(): Returns the index within the calling string of the last occurrence of the specified value, or -1 if not found.
length: Returns the length of the string.

link(): Wraps the string in an <a> tag with the specified URL.

localeCompare(): Compares two strings in the current locale.

match(): Searches a string for a match against a regular expression, and returns the matches.

matchAll(): Returns an iterator of all results matching a string against a regular expression.

normalize(): Returns the Unicode Normalization Form of the calling string.

padEnd(): Pads the string with a given string repeatedly until the resulting string reaches the given length.

padStart(): Pads the string with a given string repeatedly until the resulting string reaches the given length.

repeat(): Returns a new string with a specified number of copies of the string.

replace(): Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.

replaceAll(): Replaces all occurrences of a specified value with another value.

search(): Searches a string for a specified value or regular expression and returns the position of the match.

slice(): Extracts a section of a string and returns a new string.

small(): Wraps the string in a <small> tag.

split(): Splits a string into an array of substrings using a specified separator.

startsWith(): Checks if the string starts with the specified value.

strike(): Wraps the string in a <strike> tag (deprecated and not widely supported).

sub(): Wraps the string in a <sub> tag.

substr(): Returns the characters in a string beginning at the specified location through the specified number of characters.

substring(): Returns the characters in a string between two specified indices.

sup(): Wraps the string in a <sup> tag.

toLocaleLowerCase(): Returns the calling string value converted to lower case, according to the host's current locale.

toLocaleUpperCase(): Returns the calling string value converted to upper case, according to the host's current locale.

toLowerCase(): Returns the calling string value converted to lower case.

toString(): Returns the string representation of the object.

toUpperCase(): Returns the calling string value converted to upper case.

toWellFormed(): Returns the string as well-formed UTF-16 code units.

trim(): Removes whitespace from both ends of the string.

trimEnd(): Removes trailing whitespace from the string.

trimLeft(): Removes leading whitespace from the string.

trimRight(): Removes trailing whitespace from the string.

trimStart(): Removes leading whitespace from the string.

valueOf(): Returns the primitive value of the specified object.

*/
