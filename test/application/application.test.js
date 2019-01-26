import path from 'path';
import electronPath from 'electron';
import test from 'ava';
import {Application} from 'spectron';

test.beforeEach(async t => {
  t.context.app = new Application({
    path: electronPath,
    args: ['-r', '@babel/register', path.join(__dirname, '../..')]
  });

  await t.context.app.start();
});

test.afterEach.always(async t => {
  await t.context.app.stop();
});

test('launches application', async t => {
  const {app} = t.context;
  const count = await app.client.getWindowCount();
  t.is(count, 1);
});
