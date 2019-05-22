import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SiteNavbar from '../components/site-navbar';

const CourseHeader = ({ siteTitle }) => (
  <Masthead>
    <Link to="/" style={{ textDecoration: 'none' }}>
      <SiteTitle>{siteTitle}</SiteTitle>
    </Link>
    <SiteNavbar />
  </Masthead>
);
export default CourseHeader;

CourseHeader.propTypes = {
  siteTitle: PropTypes.string,
};

CourseHeader.defaultProps = {
  siteTitle: ``,
};

const Masthead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  /* background: #0091c9; */
  /* border-bottom: 2px solid rgba(0, 0, 0, 0.1); */
  /* margin-bottom: 2rem; */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.23);

  @media only screen and (min-width: 1000px) {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
  }

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const SiteTitle = styled.p`
  display: flex;
  align-items: center;
  font-size: 2.25rem;
  color: #0091c9;
  padding: 2rem 0 2rem 0;
  margin-left: 2rem;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 0;

  @media only screen and (max-width: 1000px) {
    font-size: 1.5rem;
    margin-left: 50px;
  }
`;
