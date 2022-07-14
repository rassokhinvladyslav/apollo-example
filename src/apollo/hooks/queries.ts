import {
  QueryHookOptions,
  OperationVariables,
  useQuery,
  DocumentNode,
} from '@apollo/client';

interface AppOptions {
  /**
   * Indicates if global error handler should be used
   */
  globalErr?: boolean;
}

export const useSetGraphQLError = (...args: any) => {
  // Errors handling
};

export const useAppQuery = <TData = any, TVariables = OperationVariables>(
  query: DocumentNode,
  options?: QueryHookOptions<TData, TVariables>,
  appOptions?: AppOptions
) => {
  const result = useQuery(query, options);

  useSetGraphQLError(result.error, appOptions?.globalErr);

  return result;
};
