import React from 'react';
import PropTypes from 'prop-types';
import PageSection from "../../PageSection";
import styled from "@emotion/styled";
import {darken} from "polished";
import { flexbox, space } from 'styled-system'
import { media } from '../../../../utils/emotion';

import Heading from "../../../Heading";

const StyledPageSection = styled(PageSection)`
  background-color: ${props => darken(0.02, props.theme.colors.background)};
  padding: 11rem 0;
`;

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.desktop`
    flex-direction: row;
  `}
`;

const ConfigurationItem = styled('div')`
  color:  ${props => props.theme.colors.white};
  margin-bottom: 3.5rem;
  &:before { 
    content: "";
    width: .7rem;
    height: .7rem;
    background-color: ${props => props.theme.colors.accent};
    display: inline-block;
    margin-right: 1rem;
  }
`;

const ComingSoonBadge = styled('div')`
  background-color: ${props => props.theme.colors.accentBackground};
  font-size: ${props => props.theme.fontSizes.caption};
  color: ${props => props.theme.colors.caption};
  display: inline-block;
  padding: .5rem 1rem;
  border-radius: ${props => props.theme.radii.badge};
`;

const ConfigurationList = styled('div')(flexbox, space);

const ConfigurationsSection = props => {
  return (
    <StyledPageSection>
      <Container>
        <Heading textAlign={{ _: 'center', lg: 'left'}} flex={7} as="h2">Ockam Registry is available in the following configurations</Heading>
        <ConfigurationList mt={{_:3, lg: 0}} flex={5}>
          <ConfigurationItem>Single Party / Private Registry</ConfigurationItem>
          <ConfigurationItem>Multi-Party / Private Registry</ConfigurationItem>
          <ConfigurationItem>Multi-Party / Public Registry <ComingSoonBadge>Coming soon</ComingSoonBadge></ConfigurationItem>
        </ConfigurationList>
      </Container>
    </StyledPageSection>
  );
};

ConfigurationsSection.propTypes = {

};

export default ConfigurationsSection;