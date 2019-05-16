import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { GlobalStyle } from './globalStyle';
import { AppWrapper } from './elements/layout-components';
import { ImageCard } from '../components/elements/cards';
import Hero from '../components/hero';
import ProjectCardGrid from '../components/project-card-grid';
import ProjectCard from '../components/project-card';
import DHFHeader from '../components/dhf-header';
import DHFFooter from './dhf-footer';
import Footer from './footer';

const Layout = ({ children, location, history }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            semester
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <AppWrapper>
          <DHFHeader />
          <main>{children}</main>
          <DHFFooter />
          <Footer />
        </AppWrapper>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;