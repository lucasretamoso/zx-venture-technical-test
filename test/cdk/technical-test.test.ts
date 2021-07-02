import {
  expect as expectCDK, matchTemplate, MatchStyle,
} from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import TechnicalTest from '../../src/lib/technical-test-stack';

test('The stack should not empty', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new TechnicalTest(app, 'MyTestStack');
  // THEN
  expectCDK(stack).notTo(matchTemplate({
    Resources: {},
  }, MatchStyle.EXACT));
});
