class NavigationBar {
  constructor() {
    this.header = {
      Company: {
        title: 'Company',
        locator: '[data-cy="dropdown-company"]',
        subItems: {
          'About Cypress': {
            title: 'About Cypress ',
            tag: 'span',
          },
        },
      },
      Install: {
        title: 'Install',
        locator: '[data-cy="header-install"]',
      },
      Product: {
        title: 'Product',
        locator: '[data-cy="dropdown-product"]',
        subItems: {
          'Visual Reviews': {
            title: 'Visual Reviews',
            tag: 'span',
          },
          'Smart Orchestration': {
            title: 'Smart Orchestration',
            tag: 'span',
          },
        },
      },
    };
  }

  /**
   * Used to navigate to items in navbar.
   * @param {string} navItem - should match the visible text on the navbar
   * @see {@link this.header}
   * */
  navigateTo(navItem) {
    cy.get(this.header[navItem].locator)
      .should('contain.text', this.header[navItem].title)
      .and('be.visible')
      .click();
  }

  /**
   * Used to navigate to sub items in navbar.
   * @param {string} navItem - should match the visible text on the navbar
   * @param {string} subItem - should match the visible text under the dropdown menu
   * @see {@link this.header}
   * */
  navigateToSubItem(navItem, subItem) {
    const navItemDetails = this.header[navItem];
    cy.get(navItemDetails.locator)
      .should('contain.text', navItemDetails.title)
      .trigger('mouseover');
    cy.get('[data-cy="submenu"]').should('be.visible');
    const subItemDetails = navItemDetails.subItems[subItem];
    cy.contains(subItemDetails.tag, subItemDetails.title).click();
  }
}

export default new NavigationBar();
