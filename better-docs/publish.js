/** @module publish */

/**
 * Generate documentation output.
 *
 * @param {TAFFY} data - A TaffyDB collection representing
 *                       all the symbols documented in your code.
 * @param {object} opts - An object with options information.
 */
exports.publish = function(data, opts) {
  // do stuff here to generate your output files
  console.log(data({}).map((a) => a.memberof))
}