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
console.log(encodeUri);
const decodeUri = decodeURI(encodeUri);
console.log(decodeUri);

/**
 * 2.
 * decodeUriComponent()
 * encodeUriComponent()
 * These are very useful when decoding/encoding
 * strings with special characters with special 
 * meanings like '=' or '&'
 */