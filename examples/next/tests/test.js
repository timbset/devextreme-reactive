import { Selector, fixture, test } from 'testcafe';

fixture`scheduler`
  .page`localhost:3100/scheduler`;

test('Render scheduler', async (t) => {
  await t
    .expect(Selector('.home-page').exists).ok();
});

fixture`chart`
  .page`localhost:3100`;

test('Render chart', async (t) => {
  await t
    .expect(Selector('#chart').exists).ok();
});

fixture`grid`
  .page`localhost:3100/grid`;

test('Render grid', async (t) => {
  await t
    .expect(Selector('#grid').exists).ok();
});
