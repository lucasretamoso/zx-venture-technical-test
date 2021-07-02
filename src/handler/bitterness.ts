/* eslint-disable import/prefer-default-export */
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

exports.bitterness = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  console.log(event);
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
