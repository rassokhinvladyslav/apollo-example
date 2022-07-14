import { DashboardBase } from '../fragments';
import { gql } from '@apollo/client';

export const CREATE_DASHBOARD = gql`
  mutation createDashboard($createDashboardInput: CreateDashboardInput!) {
    createDashboard(createDashboardInput: $createDashboardInput) {
      ...DashboardBase
    }
  }
  ${DashboardBase.fragment}
`;

export const DELETE_DASHBOARD = gql`
  mutation deleteDashboard($deleteDashboardInput: DeleteDashboardInput!) {
    deleteDashboard(deleteDashboardInput: $deleteDashboardInput)
  }
`;
