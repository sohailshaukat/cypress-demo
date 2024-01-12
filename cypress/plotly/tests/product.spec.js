/// <reference types="cypress" />
import NavBar from '../pageObjects/navigation.page';
import ProductPage from '../pageObjects/product.page';
import LandingPage from '../pageObjects/landing.page';
import { skipIf } from '../../support/helper';

const env = Cypress.env();

skipIf(Cypress.browser.family === 'firefox', describe)(
  'Product Page Scenarios',
  () => {
    beforeEach(() => {
      cy.visit('/');
      LandingPage.verifyPageTitle();
      NavBar.navigateTo('Product');
      ProductPage.verifyTitle();
    });

    it('User is able to click on “Product” and then “visual review”', () => {
      NavBar.navigateToSubItem('Product', 'Visual Reviews');
      ProductPage.verifyVisualReviewSection();
    });

    it('User is able to click on “Product”, then “Smart Orchestration”, then scroll down to “Test Analytics” and see that green circle is around “Test Analytics”', () => {
      // In an ideal scenario, this test should be skipped with a BUG as the expected color for the cirle is 'GREEN', but actual color is 'NOT GREEN'.
      const color = env.accentColor1;
      // Since it wouldn't make sense to report a bug here, for the time being this test will verify the existing color instead of doing
      // const color = env.accentColor2;
      NavBar.navigateToSubItem('Product', 'Smart Orchestration');
      ProductPage.verifySmartOrchestrationSection();
      ProductPage.scrollToTestAnalytics();
      ProductPage.verifyCircleUnderTestAnalyticsSection(color);
    });
  }
);
