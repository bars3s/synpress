const networkSwitcher = {
  button: '.network-display',
  networkName: '.typography',
  dropdownMenuItem: '.dropdown-menu-item',
  networkButton: number => `.dropdown-menu-item:nth-child(${3 + number})`,
};

const walletOverview = '.wallet-overview';
const popup = {
  container: '.popover-container',
  closeButton: '.popover-header__button',
};

const accountMenu = {
  button: '.account-menu__icon',
  accountButton: number => `.account-menu__account:nth-child(${number})`,
  accountName: '.account-menu__name',
  createAccountButton: '.account-menu__item--clickable:nth-child(6)',
  importAccountButton: '.account-menu__item--clickable:nth-child(7)',
  settingsButton: '.account-menu__item--clickable:nth-child(11)',
};


// at new WaitTask (/builder/node_modules/puppeteer-core/src/common/DOMWorld.ts:788:28)
//     at DOMWorld.waitForFunction (/builder/node_modules/puppeteer-core/src/common/DOMWorld.ts:710:22)
//     at Frame.waitForFunction (/builder/node_modules/puppeteer-core/src/common/FrameManager.ts:1239:28)
//     at Page.waitForFunction (/builder/node_modules/puppeteer-core/src/common/Page.ts:3263:29)
//     at Object.waitFor (/builder/node_modules/@synthetixio/synpress/commands/puppeteer.js:113:16)
//     at Object.waitAndClick (/builder/node_modules/@synthetixio/synpress/commands/puppeteer.js:121:26)
//     at Object.getWalletAddress (/builder/node_modules/@synthetixio/synpress/commands/metamask.js:556:21)
//     at processTicksAndRejections (node:internal/process/task_queues:96:5)
//     at Object.initialSetup (/builder/node_modules/@synthetixio/synpress/commands/metamask.js:600:23)
//     at setupMetamask (/builder/node_modules/@synthetixio/synpress/plugins/index.js:211:7) +1m

const optionsMenu = {
  button: '[data-testid=account-options-menu-button]',
  accountDetailsButton: '[data-testid="account-options-menu__account-details"]',
  connectedSitesButton: '[data-testid="account-options-menu__connected-sites"]',
};

const connectedSitesSelector = '.connected-sites';
const connectedSites = {
  modal: connectedSitesSelector,
  trashButton: `${connectedSitesSelector} .connected-sites-list__trash`,
  cancelButton: `${connectedSitesSelector} .btn-secondary`,
  disconnectButton: `${connectedSitesSelector} .btn-primary`,
  closeButton: `${connectedSitesSelector} [data-testid="popover-close"]`,
};

const accountModal = {
  walletAddressInput: '.qr-code__address',
  closeButton: '.account-modal__close',
};

const importAccountSelector = '.new-account';
const importAccount = {
  page: importAccountSelector,
  input: `${importAccountSelector} #private-key-box`,
  cancelButton: `${importAccountSelector} .btn-default`,
  importButton: `${importAccountSelector} .btn-secondary`,
};

const createAccount = {
  page: importAccountSelector,
  input: `${importAccountSelector} .new-account-create-form__input`,
  cancelButton: `${importAccountSelector} .btn-default`,
  createButton: `${importAccountSelector} .btn-secondary`,
};

module.exports.mainPageElements = {
  networkSwitcher,
  walletOverview,
  popup,
  accountMenu,
  optionsMenu,
  connectedSites,
  accountModal,
  importAccount,
  createAccount,
};
