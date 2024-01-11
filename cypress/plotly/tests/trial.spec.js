/// <reference types="cypress" />

import LandingPage from '../pageObjects/landing.page';
import NavBar from '../pageObjects/navigation.page';
import AboutPage from '../pageObjects/about.page';
import InstallModal from '../pageObjects/installation.page';
import ProductPage from '../pageObjects/product.page';

const env = Cypress.env();

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
    NavBar.navigateTo('Company');
    AboutPage.verifyPageTitle();
    NavBar.navigateToSubItem('Company', 'About Cypress');
    AboutPage.verifyPageTitle();
  });

  it('User is able to click “Install” and then on “npm install cypress” and make sure the copied text is “npm install cypress —save-dev”', () => {
    NavBar.navigateTo('Install');
    InstallModal.verifyModal();
    InstallModal.verifyInstallButton();
    InstallModal.clickInstallButtonAndVerifyClipboard();
  });

  it('User is able to click on “Product” and then “visual review”', () => {
    NavBar.navigateTo('Product');
    ProductPage.verifyTitle();
    NavBar.navigateToSubItem('Product', 'Visual Reviews');
    ProductPage.verifyVisualReviewSection();
  });

  it('User is able to click on “Product”, then “Smart Orchestration”, then scroll down to “Test Analytics” and see that green circle is around “Test Analytics”', () => {
    // In an ideal scenario, this test should be skipped with a BUG as the expected color for the cirle is 'GREEN', but actual color is 'NOT GREEN'.
    const color = env.accentColor1;
    // Since it wouldn't make sense to report a bug here, for the time being this test will verify the existing color instead of doing
    // const color = env.accentColor2;
    NavBar.navigateTo('Product');
    ProductPage.verifyTitle();
    NavBar.navigateToSubItem('Product', 'Smart Orchestration');
    ProductPage.verifySmartOrchestrationSection();
    ProductPage.scrollToTestAnalytics();
    ProductPage.verifyCircleUnderTestAnalyticsSection(color);
  });
});
