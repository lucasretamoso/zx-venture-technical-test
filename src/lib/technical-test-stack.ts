import { Stack, Construct, StackProps } from '@aws-cdk/core';
import { RestApi, LambdaIntegration, Cors } from '@aws-cdk/aws-apigateway';
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs';
import Constants from '../utils/Constants';

export default class TechnicalTestStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bitterness = new NodejsFunction(this, Constants.IDs.BITTERNES_LAMBDA, {
      functionName: Constants.NAMES.BITTERNES_LAMBDA,
      entry: 'src/handler/bitterness.ts',
      handler: 'bitterness',
    });

    const api = new RestApi(this, Constants.IDs.API_GATEWAY, {
      restApiName: Constants.NAMES.API_GATEWAY,
      deployOptions: {
        stageName: 'staging',
      },
      defaultCorsPreflightOptions: {
        allowOrigins: Cors.ALL_ORIGINS,
        allowMethods: Cors.ALL_METHODS,
        allowHeaders: Cors.DEFAULT_HEADERS,
      },
    });

    const bitternessIntegration = new LambdaIntegration(bitterness);

    api.root.addMethod('POST', bitternessIntegration, {
      apiKeyRequired: true,
    });

    const plan = api.addUsagePlan(Constants.IDs.API_PLAN, {
      name: Constants.NAMES.API_PLAN,
      throttle: {
        rateLimit: 10,
        burstLimit: 2,
      },
    });

    const key = api.addApiKey(Constants.IDs.API_KEY, {
      apiKeyName: Constants.NAMES.API_KEY,
    });
    plan.addApiKey(key);
    plan.addApiStage({ stage: api.deploymentStage });
  }
}
