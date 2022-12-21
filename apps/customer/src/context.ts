export interface ApolloServerContext<TDatasources> {
  /**
   * Object containing classes that are used for fetching data from an API
   */
  datasources: TDatasources;
}
