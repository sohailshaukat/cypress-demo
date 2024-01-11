/// <reference types="cypress" />

import LandingPage from '../pageObjects/landing.page';

describe('Tests for Cypress.io Dashboard', () => {
  beforeEach(() => {
    cy.visit('/');
    LandingPage.verifyPageTitle();
  });

  it('Users are able to visit the website and able to scroll down to “Loved by OSS, trusted by Enterprise” and see the weekly downloads number.', () => {
    LandingPage.verifyOSSTagLine();
    LandingPage.verifyWeeklyDownloads();
  });

  it('User is able to click on Company and then on “About Cypress”', () => {

  });

  it.skip('User is able to click “Install” and then on “npm install cypress” and make sure the copied text is “npm install cypress —save-dev”', () => {});

  it.skip('User is able to click on “Product” and then “visual review”', () => {});

  it.skip('User is able to click on “Product”, then “Smart Orchestration”, then scroll down to “Test Analytics” and see that green circle is around “Test Analytics”', () => {});
});
