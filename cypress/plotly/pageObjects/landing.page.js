class LandingPage {
  constructor() {
    this.content = {
      ossTagLine: 'Loved by OSS, trusted by Enterprise',
      title: 'Test. Automate. Accelerate.',
    };
  }

  /**
   * Verify title on Cypress.io landing page
   * @param {string} [status='be.visible']  - Chainer
   * @example
   * // For positive test
   * LandingPage.verifyPageTitle('be.visible');
   * // OR
   * LandingPage.verifyPageTitle();
   * // For negative test
   * LandingPage.verifyPage('not.exist');
   * @see — https://on.cypress.io/should
   * */
  verifyPageTitle(status = 'be.visible') {
    cy.contains('h1', this.content.title).should(status);
  }

  /**
   * Scroll to the title on Cypress.io landing page.
   * @param {string} [status='be.visible']  - Chainer
   * @see {@link verifyPageTitle} for usage examples.
   * */
  verifyOSSTagLine(status = 'be.visible') {
    cy.contains(this.content.ossTagLine).scrollIntoView().should(status);
  }

  /**
   * Verifies the 'Weekly Downloads' component is visible.
   * @param {string} [status='be.visible']  - Chainer
   * @see {@link verifyPageTitle} for usage examples.
   * */
  verifyWeeklyDownloads(status = 'be.visible') {
    // Used regex to check for exact innerHTML text match, to avoid matching same text in long form text content.
    cy.contains(/^Weekly downloads$/)
      .should(status)
      .prev('div')
      .invoke('text')
      .then((text) => {
        // Verifying that the weekly download count content starts with AT LEAST one decimal integer. Has a symbol to represent the order of magnitude (K for thousand, M for million, B for billion) and a plus sign in the end.
        // Verifying first number is nonzero, to avoid matching '0M+'
        expect(text).to.match(/^\S[1-9]?\d*(M|K|B)\+$/);
      });
  }
}

export default new LandingPage();
