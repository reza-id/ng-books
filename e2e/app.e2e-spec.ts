import { DevBooksPage } from './app.po';

describe('dev-books App', () => {
  let page: DevBooksPage;

  beforeEach(() => {
    page = new DevBooksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
