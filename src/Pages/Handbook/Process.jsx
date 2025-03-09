// src/Pages/Advocacy/Process.jsx
import React from 'react';
import styled from 'styled-components';
import FlowChart from './Flowchart';

const Process = () => {
  return (
    <Wrapper>
      <Title>Process of Dispossession</Title>
      <Description>
        Below is a detailed flowchart illustrating acceptance, negotiation, rejection,
        petitioning, litigation, and potential outcomes such as forced demolition
        or home retention.
      </Description>
      <FlowChart />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #423F67;
  text-align: center;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #404040;
  text-align: center;
  margin-bottom: 40px;
`;

export default Process;

