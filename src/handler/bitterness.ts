/* eslint-disable import/prefer-default-export */
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import StatusCode from 'http-status-codes';
import selectBeerByBitterness from './services/bitternessService';

const BODY_EXCEPTION: string = "The body doesn't have the beer and the target parameters, these are obligatory";
const BODY_TYPE_INCORRECT: string = "The beers or the target parameter don't have the correct parameter (array and number)";

exports.bitterness = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const parameters = event && event.body && JSON.parse(event.body);

  if (!parameters) {
    return {
      statusCode: StatusCode.BAD_REQUEST,
      body: JSON.stringify({
        error: BODY_EXCEPTION,
      }),
    };
  }

  if (!('beers' in parameters) || !('target' in parameters)) {
    return {
      statusCode: StatusCode.BAD_REQUEST,
      body: JSON.stringify({
        error: BODY_EXCEPTION,
      }),
    };
  }

  if (!Array.isArray(parameters.beers) || !(typeof parameters.target === 'number')) {
    return {
      statusCode: StatusCode.BAD_REQUEST,
      body: JSON.stringify({
        error: BODY_TYPE_INCORRECT,
      }),
    };
  }

  if (typeof [...parameters.beers].pop() !== 'number') {
    return {
      statusCode: StatusCode.BAD_REQUEST,
      body: JSON.stringify({
        error: BODY_TYPE_INCORRECT,
      }),
    };
  }

  return {
    statusCode: StatusCode.OK,
    body: JSON.stringify({
      index: selectBeerByBitterness(parameters.beers, parameters.target),
    }),
  };
};
