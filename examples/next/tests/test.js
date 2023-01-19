import { Selector, fixture, test } from 'testcafe';

fixture`scheduler-localization`
  .page`localhost:3100/scheduler-localization`;

test('Render scheduler', async (t) => {
  await t
    .expect(Selector('#scheduler').exists).ok();
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
