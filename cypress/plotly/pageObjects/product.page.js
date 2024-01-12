class ProductPage {
  constructor() {
    this.content = {
      title: 'Test modern apps directly in your browser',
      visualReviewSection: {
        title: 'Review and debug failures visually ',
        id: 'visual_reviews',
      },
      smartOrchestrationSection: {
        title: 'Optimize your runs for a faster feedback loop',
        id: 'smart_orchestration',
      },
      testAnalyticsSection: {
        title: 'Gain actionable insights into your test suite',
        id: 'test_analytics',
      },
    };
  }

  /**
   * Veriy that user is redirected to Product page
   * @param {string} [status='be.visible']  - Chainer
   * @example
   * // For positive test
   * ProductPage.verifyPageTitle('be.visible');
   * // OR
   * ProductPage.verifyPageTitle();
   * // For negative test
   * ProductPage.verifyPage('not.exist');
   * @see — https://on.cypress.io/should
   * */
  verifyTitle(status = 'be.visible') {
    cy.contains('h1', this.content.title).should(status);
  }

  /**
   * Verifies that user is redirected to Visual review section
   * @param {string} [status='be.visible']  - Chainer
   * @see {@link verifyPageTitle} for usage examples.
   * */
  verifyVisualReviewSection(status = 'be.visible') {
    const { title, id } = this.content.visualReviewSection;
    cy.get(`#${id}`).should(status);
    cy.contains('h2', title).should(status);
  }

  /**
   * Verifies that user is redirected to Smart Orchestration section
   * @param {string} [status='be.visible']  - Chainer
   * @see {@link verifyPageTitle} for usage examples.
   * */
  verifySmartOrchestrationSection(status = 'be.visible') {
    const { title, id } = this.content.visualReviewSection;
    cy.get(`#${id}`).should(status);
    cy.contains('h2', title).should(status);
  }

  /**
   * To scroll to a specific test analytics section of product page
   * */
  scrollToTestAnalytics() {
    const { title, id } = this.content.testAnalyticsSection;
    cy.get(`#${id}`).scrollIntoView().should('be.visible');
    cy.contains('h2', title).should('be.visible');
  }

  /**
   * Verifies the SVG (Green Circle) under Test Analytics section
   * @param {string} [color='Cypress.env().accentColor2'] - Expected Color of the circle, by default set to verify for product color green
   * */
  verifyCircleUnderTestAnalyticsSection(color = Cypress.env().accentColor2) {
    const { id } = this.content.testAnalyticsSection;
    cy.get(`#${id} p svg`)
      .should('be.visible')
      .and('have.attr', 'width', 16)
      .and('have.attr', 'height', 16)
      .find('path')
      .last()
      .should('have.css', 'stroke', color);
  }
}

export default new ProductPage();
