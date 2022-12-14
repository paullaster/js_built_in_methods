/**
 * The ability to harness the capabilities 
 * that are already built into JavaScript can
 * improve the effectiveness of the code, save 
 * time, and comply with various best
 * practices for developing solutions
 */
/**
 * 1.
 * Encoding and decoding URIs
 * Query parameters
 * decodeURI()
 * encodeURI()
 * these methods do not take special
 * character into account
 * they are useful when fixin broken URIs
 */
const uri = 'http://linkedin.com/in/paul laster/';
const encodeUri = encodeURI(uri);
//console.log(encodeUri);
const decodeUri = decodeURI(encodeUri);
//console.log(decodeUri);

/**
 * 2.
 * decodeUriComponent()
 * encodeUriComponent()
 * These are very useful when decoding/encoding
 * strings with special characters with special 
 * meanings like '=' or '&'
 */
const uri2 = 'https://www.example.com/submit?name=maaike van putten';
const encodedUri = encodeURIComponent(uri2);
//console.log(encodedUri); 
const decodedUri = decodeURIComponent(encodedUri);
//console.log(decodedUri); 


/**
 * 3.
 * escape()
 * unescape()
 * ... usage not very encouraged!
 */

const uri3 = 'https://www.example.com/submit?name=maaike van putten';
const escaped_uri = escape(uri3);
//console.log(escaped_uri);
const unescaped_uri = unescape(escaped_uri);
//console.log(unescaped_uri);


/**
 * 4.
 * parse numbers
 * all inputs from users; from html forms or
 * console are in strings and must be converted 
 * to numbers incase a mathematical operation is to be performed.
 *  
 * parseInt(); returns an integer value.
 */
let str_num = '56';
let num = parseInt (str_num);
//console.log(num + '  is a   ' + typeof num);
/**
 * 5.
 * parseFloat(); returns a floating point value.
 * 
 */
let str_float = '5.6.7';
let num2 = 9;
let floating_num = parseFloat (num2);
let num_float = parseFloat (str_float);
console.log(num_float + ' is a ' + typeof num_float);
console.log(floating_num);