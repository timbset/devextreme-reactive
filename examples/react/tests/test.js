import { Selector, fixture, test } from 'testcafe';

fixture`scheduler`
  .page`localhost:3100`;

test('Render scheduler', async (t) => {
  await t
    .expect(Selector('.home-page').exists).ok();
});
