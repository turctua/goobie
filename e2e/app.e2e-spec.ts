import { ProjPage } from './app.po';

describe('proj App', () => {
  let page: ProjPage;

  beforeEach(() => {
    page = new ProjPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
