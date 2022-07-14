import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/client/client';
import { useCreateDashboard } from './apollo/hooks/dashboard/dashboard';
import { GET_DASHBOARDS } from './apollo/queries';

export const App = () => {
  const { createDashboard } = useCreateDashboard();

  const handleSubmit = async (value: any, { resetForm }: any) => {
    const { dashboardName, description, dashboardType } = value;

    await createDashboard(
      {
        createDashboardInput: {
          name: dashboardName,
          type: dashboardType ?? 'custom',
          description,
        },
      },
      [GET_DASHBOARDS]
    );
    resetForm();
  };

  return (
    <ApolloProvider client={client}>
      <form onSubmit={handleSubmit}></form>
    </ApolloProvider>
  );
};
