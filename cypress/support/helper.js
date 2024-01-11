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

module.exports = {
  verifyClipboardContent,
};
