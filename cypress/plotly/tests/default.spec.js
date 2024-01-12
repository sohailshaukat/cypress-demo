/// <reference types="cypress" />

import LandingPage from '../pageObjects/landing.page';
import NavBar from '../pageObjects/navigation.page';
import AboutPage from '../pageObjects/about.page';
import InstallModal from '../pageObjects/installation.page';
import { skipIf } from '../../support/helper';

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

  // Since the navigator.clipboard functionality is not fully supported for Firefox, this test is skipped for firefox.
  skipIf(Cypress.browser.family === 'firefox', it)(
    'User is able to click “Install” and then on “npm install cypress” and make sure the copied text is “npm install cypress —save-dev”',
    () => {
      NavBar.navigateTo('Install');
      InstallModal.verifyModal();
      InstallModal.verifyInstallButton();
      InstallModal.clickInstallButtonAndVerifyClipboard();
    }
  );
});
