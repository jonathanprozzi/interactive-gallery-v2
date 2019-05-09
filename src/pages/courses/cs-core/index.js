import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../../../../src/components/layout';
import ProjectCard from '../../../../src/components/project-card';
import {
  ContentWrapper,
  GridThreeColumnContainer,
} from '../../../components/elements/layout-components';

const CS_CORE_QUERY = graphql`
  query CSCoreQuery {
    CSCoreEntry: allMarkdownRemark(
      filter: { frontmatter: { course: { eq: "cs-core" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            youth
            semester
          }
        }
      }
    }
  }
`;

// TODO: Make the project list more accessible by adding ul and li elements

const CSCorePage = () => (
  <StaticQuery
    query={CS_CORE_QUERY}
    render={({ CSCoreEntry }) => (
      <Layout>
        <ContentWrapper>
          <h2>CS Core Entries</h2>
          <GridThreeColumnContainer>
            {CSCoreEntry.edges.map(edge => (
              <ProjectCard
                youth={edge.node.frontmatter.youth}
                semester={edge.node.frontmatter.semester}
                title={edge.node.frontmatter.title}
                key={edge.node.id}
              />
            ))}
          </GridThreeColumnContainer>
        </ContentWrapper>
      </Layout>
    )}
  />
);

export default CSCorePage;
