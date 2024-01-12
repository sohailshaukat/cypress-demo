class AboutPage {
  constructor() {
    this.title = 'About us';
  }

  /**
   * Verify title on About Us page
   * @param {string} [status='be.visible']  - Chainer
   * @returns {void}
   * @example
   * // For positive test
   * AboutPage.verifyPageTitle('be.visible');
   * // OR
   * AboutPage.verifyPageTitle();
   * // For negative test
   * AboutPage.verifyPage('not.exist');
   * @see — https://on.cypress.io/should
   * */
  verifyPageTitle(status = 'be.visible') {
    cy.contains('h1', this.title).should(status);
  }
}

export default new AboutPage();
