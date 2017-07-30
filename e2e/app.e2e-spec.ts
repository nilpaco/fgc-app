import { FgcAppPage } from './app.po';

describe('fgc-app App', () => {
  let page: FgcAppPage;

  beforeEach(() => {
    page = new FgcAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
