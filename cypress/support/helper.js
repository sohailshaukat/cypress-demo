/**
 * Verifies clipboard content.
 * @param {string} expectedContent - Text expected to be copied to clipboard.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/readText}
 */
function verifyClipboardContent(expectedContent) {
  cy.window().then((win) => {
    win.navigator.clipboard.readText().then((content) => {
      expect(content).to.eq(expectedContent);
    });
  });
}

/**
 * Description
 * @param {boolean} expression - Provide an expression that results to boolean
 * @example
 * skip
 */
const skipIf = (expression, block) => (expression ? block.skip : block);

module.exports = {
  verifyClipboardContent,
  skipIf,
};
