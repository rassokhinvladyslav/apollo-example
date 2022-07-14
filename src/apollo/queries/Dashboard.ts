import { gql } from '@apollo/client';
import { DashboardBase } from '../fragments';

export const GET_DASHBOARDS = gql`
  query getDashboards {
    dashboards {
      ...DashboardBase
    }
  }
  ${DashboardBase.fragment}
`;

export const GET_DASHBOARD = gql`
  query getDashboard($id: String!, $isPublished: Boolean!) {
    dashboard(id: $id, isPublished: $isPublished) {
      ...DashboardBase
    }
  }
  ${DashboardBase.fragment}
`;
