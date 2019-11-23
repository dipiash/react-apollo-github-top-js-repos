import { gql } from 'apollo-boost';

export const getListLicenses = gql`
  query GetListLicensies {
    licenses {
      id
      name
      key
    }
  }
`;
