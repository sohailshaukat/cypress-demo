import { verifyClipboardContent } from '../../support/helper';

class InstallationModal {
  constructor() {
    this.content = {
      title: { text: 'Installing Cypress', locator: '[id="cy_modal_label"]' },
      installationButton: {
        text: 'npm install cypress',
        copiedInstallationCommand: 'npm install cypress --save-de',
        locator: '[data-cy="modal-install-copy"]',
        tag: 'button',
      },
    };
  }

  /**
   * Verify title on Installation Modal
   * @param {string} [status='be.visible']  - Chainer
   * @example
   * // For positive test
   * InstallModal.verifyPageTitle('be.visible');
   * // OR
   * InstallModal.verifyPageTitle();
   * // For negative test
   * InstallModal.verifyPage('not.exist');
   * @see — https://on.cypress.io/should
   * */
  verifyModal(status = 'be.visible') {
    const { text, locator } = this.content.title;
    cy.get(locator).should('have.text', text).should(status);
  }

  /**
   * Verifies the innerHTML Text of Install button.
   * */
  verifyInstallButton() {
    const { locator, text } = this.content.installationButton;
    cy.get(locator).should('have.text', text).should('be.visible');
  }

  /**
   * Clicks the installation button (npm install cypress) and veirifies the copied text to the clipboard.
   * */
  clickInstallButtonAndVerifyClipboard() {
    const { tag, text, copiedInstallationCommand } =
      this.content.installationButton;
    cy.contains(tag, text).click();
    verifyClipboardContent(copiedInstallationCommand);
  }
}

export default new InstallationModal();
