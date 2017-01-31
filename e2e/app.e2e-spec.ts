import { WeissSchwarzAng2Page } from './app.po';

describe('weiss-schwarz-ang2 App', function() {
  let page: WeissSchwarzAng2Page;

  beforeEach(() => {
    page = new WeissSchwarzAng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
