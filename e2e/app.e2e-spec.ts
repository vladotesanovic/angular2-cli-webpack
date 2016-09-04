import { Ngsuicli2Page } from './app.po';

describe('ngsuicli2 App', function() {
  let page: Ngsuicli2Page;

  beforeEach(() => {
    page = new Ngsuicli2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
