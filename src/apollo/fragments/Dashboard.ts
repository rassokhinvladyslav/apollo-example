import { gql } from '@apollo/client';

export const DashboardBase = {
  fragment: gql`
    fragment DashboardBase on Dashboard {
      id
      isPublished
      name
      type
      description
    }
  `,
};
