import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import TechnicalTestStack from '../lib/technical-test-stack';

const app = new cdk.App();
new TechnicalTestStack(app, 'TechnicalTestStack');
