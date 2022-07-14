import React from 'react';
import {
  DocumentNode,
  MutationHookOptions,
  MutationTuple,
  OperationVariables,
  useMutation,
} from '@apollo/client';

interface AppOptions {
  /**
   * Indicates if global error handler should be used.
   */
  globalErr?: boolean;
}

export const useAppMutation = <TData = any, TVariables = OperationVariables>(
  mutation: DocumentNode,
  options?: MutationHookOptions<TData, TVariables>,
  appOptions?: AppOptions
): MutationTuple<TData, TVariables> => {
  const [mutationFn, result] = useMutation(mutation, options);

  const wrappedMutationFn = React.useCallback(
    async (options: MutationHookOptions<TData, TVariables>) => {
      try {
        const res = await mutationFn(options);

        return res;
      } catch (e) {
        const globalErr = appOptions?.globalErr ?? true;

        if (globalErr) {
          /// handle error
        }

        throw e;
      }
    },
    [appOptions?.globalErr, mutationFn]
  );

  return [wrappedMutationFn, result];
};
