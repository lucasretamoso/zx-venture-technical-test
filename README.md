<a href="https://gitmoji.dev">
  <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square" alt="Gitmoji">
</a>

# BITTERNESS: ZX Venture

## Description

There are many factors to consider when picking your next beer. One of the most important ones is bitterness. The International Bitternes Unit (IBU) is the unit used to measure the bitterness of a beer.

Beers

We would love to be able to recommend our customers what is the best combination of beers for them.

How do we do it? We ask our customers what's the exact level of bitterness they are looking for and we will suggest them two different beers that together sum up to that number.

## Structure

The project has 3 part, the stack definition, the CDK project definition and the Lambdas code.

- The stack definition is hosted on src/lib and define all the Stack which will deploy on CloudFormation. These have all the AWS architecture.

- CDK project is a file which get all the stack in the same file. It is the main file needing to deploy using CDK. It is hosted on src/bin

- The Lambda code are hosted on src/handler. If is necessary, each Lambda will have a Service code.

## Pre-requirements

1. [AWS Command Line Interface](https://aws.amazon.com/cli/): This tool helps us to configure the AWS account and provides us the credential to deploy the solution.
2. [Docker](https://www.docker.com/): We use @aws-cdk/aws-lambda-nodejs which compiles the code using a docker image.
    1. WSL: Docker needs this program to work.
3. [NodeJS](https://nodejs.org/en/)
4. [Typescript](https://www.typescriptlang.org/)

## Testing

I planned to create a test for CDK and the Lambda services. Is a good practice that the lambda handler doesn't have a lot of code or complex code, so is not necessary to check it with a test.

The tests are hosted in the `test` folder.

### Run the test

To test the project you need to run the following command:
``` bash
npm run test
```

This command run the test and the coverage.

## Deploy the soluction

To deploy the CDK solution you need to configurate the AWS account using the AWS CLI. You can do that following this [tutorial](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html#getting_started_prerequisites).

After that, you need to install cdk running the script `npm install -g aws-cdk`.

CDK uses a S3 bucket to upload the assets like Lambda codes, ECS files, etc. So, you need to start that running the following script `cdk bootstrap`.

Now you can deploy the solution, you only need to run the script `npm install` and `cdk deploy`.

## Test the application

Right now, you can test the soluction using this endpoint:
- https://30v09oy7c9.execute-api.us-east-2.amazonaws.com/staging/

This endpoint requires a body with the following json:

``` text
{
  beers: number[],
  target: number
}
```

And you need to use the header `x-api-key` with the API Key which I will send you in an email. In case, you didn't recieve anything, request me writting in this email: lucasretamoso@gmail.com

## Contact

If you have problems or issues, you can write me in the email lucasretamoso@gmail.com or via [LinkedIn](https://www.linkedin.com/in/ing-llrg/).