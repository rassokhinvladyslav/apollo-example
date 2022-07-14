import { CREATE_DASHBOARD, DELETE_DASHBOARD } from '../../mutations';
import { GET_DASHBOARD } from '../../queries';
import {
  createDashboard,
  createDashboardVariables,
  getDashboard,
  getDashboardVariables,
  deleteDashboard,
  deleteDashboardVariables,
} from '../../generated/mockGenerated';
import { useAppMutation } from '../mutations';
import { useAppQuery } from '../queries';
import { DocumentNode } from 'graphql';

export const useGetDashboard = (id: string, isPublished: boolean) => {
  const { loading, data } = useAppQuery<getDashboard, getDashboardVariables>(
    GET_DASHBOARD,
    { variables: { id, isPublished } }
  );

  return {
    loading,
    dashboard: data?.dashboard,
  };
};

export const useCreateDashboard = () => {
  const [createDashboard] = useAppMutation<
    createDashboard,
    createDashboardVariables
  >(CREATE_DASHBOARD);

  return {
    createDashboard: (
      payload: createDashboardVariables,
      refetchQueries: DocumentNode[] = []
    ) => {
      return createDashboard({ variables: payload, refetchQueries });
    },
  };
};

export const useDeleteDashboard = () => {
  const [deleteDashboard] = useAppMutation<
    deleteDashboard,
    deleteDashboardVariables
  >(DELETE_DASHBOARD);

  return {
    deleteDashboard: (
      payload: deleteDashboardVariables,
      refetchQueries: DocumentNode[] = []
    ) => {
      return deleteDashboard({ variables: payload, refetchQueries });
    },
  };
};
