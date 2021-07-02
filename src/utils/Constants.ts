export default abstract class Constants {
    static readonly environment = 'staging';

    static readonly idPrefix = `${Constants.environment}-id-bitterness-`;

    static readonly namePrefix = `${Constants.environment}-bitterness-`;

    static readonly IDs = {
      API_GATEWAY: `${Constants.idPrefix}apigateway`,
      API_PLAN: `${Constants.idPrefix}api-plan`,
      API_KEY: `${Constants.idPrefix}api-key`,
      BITTERNES_LAMBDA: `${Constants.idPrefix}lambda`,
    };

    static readonly NAMES = {
      API_GATEWAY: `${Constants.namePrefix}apigateway`,
      API_PLAN: `${Constants.namePrefix}api-plan`,
      API_KEY: `${Constants.namePrefix}api-key`,
      BITTERNES_LAMBDA: `${Constants.namePrefix}lambda`,
    };
}
