// src/Pages/Handbook/FlowChart.jsx
import React from 'react';
import ReactFlow, { 
  Controls, 
  Background,
  MiniMap,
  Handle,
  Position,
  MarkerType  // Add this import
} from 'reactflow';
import 'reactflow/dist/style.css';
import styled from 'styled-components';

const ChartContainer = styled.div`
  height: 800px; // Set to a reasonable height
  width: 115%;
  max-width: 2000px;
  margin: 0 auto;
  padding: 0; // Remove any padding
  overflow: hidden; // Hide overflow initially
`;

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: #483D8B;
  font-family: serif;
  font-size: 2.5rem;
  margin: 0;
`;

// Custom node components with handles for connecting
const OrangeNode = ({ data }) => {
  return (
    <div style={{
      padding: '10px',
      borderRadius: '4px',
      border: '2px solid #FD8D3C',
      background: '#FFF5EB',
      textAlign: 'center',
      fontSize: '14px',
      width: 180,
      position: 'relative'
    }}>
      <Handle type="target" position={Position.Left} style={{ background: '#FD8D3C' }} />
      {data.label}
      <Handle type="source" position={Position.Right} style={{ background: '#FD8D3C' }} />
    </div>
  );
};

const GreenNode = ({ data }) => {
  return (
    <div style={{
      padding: '10px',
      borderRadius: '4px',
      border: '2px solid #74C476',
      background: '#E5F5E0',
      textAlign: 'center',
      fontSize: '14px',
      width: 180,
      position: 'relative'
    }}>
      <Handle type="target" position={Position.Left} style={{ background: '#74C476' }} />
      {data.label}
      <Handle type="source" position={Position.Right} style={{ background: '#74C476' }} />
    </div>
  );
};

const FlowChart = () => {
  const nodeTypes = {
    orange: OrangeNode,
    green: GreenNode,
  };

  const initialNodes = [
    // Main Process - Row 1
    { id: 'gov', type: 'orange', position: { x: 50, y: 100 }, data: { label: 'Govt designates land for redevelopment' } },
    { id: 'notices', type: 'orange', position: { x: 300, y: 100 }, data: { label: 'Notices sent to homeowners' } },
    
    // Row 2
    { id: 'acceptance', type: 'orange', position: { x: 550, y: 50 }, data: { label: 'Acceptance' } },
    { id: 'resettlement', type: 'orange', position: { x: 800, y: 50 }, data: { label: 'Resettlement' } },
    { id: 'succeed1', type: 'orange', position: { x: 1050, y: 50 }, data: { label: 'Succeed' } },
    
    // Row 3
    { id: 'negotiation', type: 'orange', position: { x: 550, y: 150 }, data: { label: 'Negotiation' } },
    { id: 'financial', type: 'orange', position: { x: 800, y: 150 }, data: { label: 'Financial enticement' } },
    { id: 'succeed2', type: 'orange', position: { x: 1050, y: 150 }, data: { label: 'Succeed' } },
    
    // Row 4
    { id: 'rejection', type: 'orange', position: { x: 550, y: 250 }, data: { label: 'Rejection' } },
    { id: 'intimidation', type: 'orange', position: { x: 800, y: 250 }, data: { label: 'Intimidation and coercion' } },
    { id: 'fail1', type: 'orange', position: { x: 1050, y: 250 }, data: { label: 'Fail' } },
    
    // Litigation section
    { id: 'litigation', type: 'orange', position: { x: 1300, y: 100 }, data: { label: 'Litigation' } },
    { id: 'lit-fail', type: 'orange', position: { x: 1550, y: 50 }, data: { label: 'Fail' } },
    { id: 'lit-succeed1', type: 'orange', position: { x: 1550, y: 100 }, data: { label: 'Succeed' } },
    { id: 'lit-succeed2', type: 'orange', position: { x: 1550, y: 150 }, data: { label: 'Succeed' } },
    
    // Petitioning section
    { id: 'petitioning', type: 'orange', position: { x: 1300, y: 250 }, data: { label: 'Petitioning' } },
    { id: 'pet-fail', type: 'orange', position: { x: 1550, y: 250 }, data: { label: 'Fail' } },
    
    // Final outcomes
    { id: 'home-retention', type: 'orange', position: { x: 1800, y: 125 }, data: { label: 'Home retention' } },
    { id: 'forced-demolition', type: 'orange', position: { x: 1800, y: 250 }, data: { label: 'Forced demolition' } },
    
    // Green nodes - Intimidation tactics
    { id: 'surveillance', type: 'green', position: { x: 800, y: 350 }, data: { label: 'Surveillance' } },
    { id: 'harassment', type: 'green', position: { x: 800, y: 400 }, data: { label: 'Harassment' } },
    { id: 'assault', type: 'green', position: { x: 800, y: 450 }, data: { label: 'Assault' } },
    { id: 'falsecrim', type: 'green', position: { x: 800, y: 500 }, data: { label: 'False criminalization' } },
    { id: 'economic', type: 'green', position: { x: 800, y: 550 }, data: { label: 'Economic reprisal' } },
    { id: 'blackmail', type: 'green', position: { x: 800, y: 600 }, data: { label: 'Blackmail' } },
    { id: 'predatory', type: 'green', position: { x: 800, y: 650 }, data: { label: 'Predatory contracting' } },
    { id: 'environmental', type: 'green', position: { x: 800, y: 700 }, data: { label: 'Environmental hazards' } },
    { id: 'service', type: 'green', position: { x: 800, y: 750 }, data: { label: 'Service cutoff' } },
    { id: 'property', type: 'green', position: { x: 800, y: 800 }, data: { label: 'Property damage' } },
    { id: 'retaliatory', type: 'green', position: { x: 800, y: 850 }, data: { label: 'Retaliatory fines/lawsuits' } },
    
    // Green nodes - Local petitioning
    { id: 'local', type: 'green', position: { x: 1300, y: 400 }, data: { label: 'Local' } },
    { id: 'local-received', type: 'green', position: { x: 1550, y: 350 }, data: { label: 'Received' } },
    { id: 'local-unreceived', type: 'green', position: { x: 1550, y: 450 }, data: { label: 'Unreceived' } },
    
    { id: 'intimidation2', type: 'green', position: { x: 1800, y: 310 }, data: { label: 'Intimidation' } },
    { id: 'dismissive', type: 'green', position: { x: 1800, y: 360 }, data: { label: 'Dismissive reception' } },
    { id: 'manipulation', type: 'green', position: { x: 1800, y: 410 }, data: { label: 'Manipulation' } },
    { id: 'forcible-removal', type: 'green', position: { x: 1800, y: 450 }, data: { label: 'Forcible removal' } },
    
    // Green nodes - Provincial petitioning
    { id: 'provincial', type: 'green', position: { x: 1300, y: 600 }, data: { label: 'Provincial/national' } },
    { id: 'prov-arrived', type: 'green', position: { x: 1550, y: 550 }, data: { label: 'Arrived' } },
    { id: 'prov-intercepted', type: 'green', position: { x: 1550, y: 650 }, data: { label: 'Intercepted' } },
    
    { id: 'prov-received', type: 'green', position: { x: 1800, y: 550 }, data: { label: 'Received' } },
    { id: 'forcible-transfer', type: 'green', position: { x: 1800, y: 650 }, data: { label: 'Forcible transfer' } },
    { id: 'illegal-detention', type: 'green', position: { x: 1800, y: 750 }, data: { label: 'Illegal detention' } },
  ];

  const initialEdges = [
    // Main orange flow
    { id: 'e1', source: 'gov', target: 'notices', type: 'default', animated: false, style: { stroke: '#FD8D3C', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#FD8D3C' } },
    
    // Three paths from notices
    { id: 'e2', source: 'notices', target: 'acceptance', type: 'default', animated: false, style: { stroke: '#FD8D3C', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#FD8D3C' } },
    { id: 'e3', source: 'notices', target: 'negotiation', type: 'default', animated: false, style: { stroke: '#FD8D3C', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#FD8D3C' } },
    { id: 'e4', source: 'notices', target: 'rejection', type: 'default', animated: false, style: { stroke: '#FD8D3C', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#FD8D3C' } },
    
    // Acceptance path
    { id: 'e5', source: 'acceptance', target: 'resettlement', type: 'default', animated: false, style: { stroke: '#FD8D3C', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#FD8D3C' } },
    { id: 'e6', source: 'resettlement', target: 'succeed1', type: 'default', animated: false, style: { stroke: '#FD8D3C', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#FD8D3C' } },
    { id: 'e7', source: 'succeed1', target: 'litigation', type: 'default', animated: false, style: { stroke: '#FD8D3C', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#FD8D3C' } },
    
    // Negotiation path
    { id: 'e8', source: 'negotiation', target: 'financial', type: 'default', animated: false, style: { stroke: '#FD8D3C', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#FD8D3C' } },
    { id: 'e9', source: 'financial', target: 'succeed2', type: 'default', animated: false, style: { stroke: '#FD8D3C', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#FD8D3C' } },
    { id: 'e10', source: 'succeed2', target: 'litigation', type: 'default', animated: false, style: { stroke: '#FD8D3C', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#FD8D3C' } },
    
    // Rejection path
    { id: 'e11', source: 'rejection', target: 'intimidation', type: 'default', animated: false, style: { stroke: '#FD8D3C', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#FD8D3C' } },
    { id: 'e12', source: 'intimidation', target: 'fail1', type: 'default', animated: false, style: { stroke: '#FD8D3C', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#FD8D3C' } },
    { id: 'e13', source: 'fail1', target: 'petitioning', type: 'default', animated: false, style: { stroke: '#FD8D3C', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#FD8D3C' } },
    
    // Litigation outcomes
    { id: 'e14', source: 'litigation', target: 'lit-fail', type: 'default', animated: false, style: { stroke: '#FD8D3C', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#FD8D3C' } },
    { id: 'e15', source: 'litigation', target: 'lit-succeed1', type: 'default', animated: false, style: { stroke: '#FD8D3C', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#FD8D3C' } },
    { id: 'e16', source: 'litigation', target: 'lit-succeed2', type: 'default', animated: false, style: { stroke: '#FD8D3C', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#FD8D3C' } },
    
    // Petitioning outcome
    { id: 'e17', source: 'petitioning', target: 'pet-fail', type: 'default', animated: false, style: { stroke: '#FD8D3C', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#FD8D3C' } },
    
    // Final outcomes
    { id: 'e18', source: 'lit-fail', target: 'forced-demolition', type: 'default', animated: false, style: { stroke: '#FD8D3C', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#FD8D3C' } },
    { id: 'e19', source: 'lit-succeed1', target: 'home-retention', type: 'default', animated: false, style: { stroke: '#FD8D3C', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#FD8D3C' } },
    { id: 'e20', source: 'lit-succeed2', target: 'home-retention', type: 'default', animated: false, style: { stroke: '#FD8D3C', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#FD8D3C' } },
    { id: 'e21', source: 'pet-fail', target: 'forced-demolition', type: 'default', animated: false, style: { stroke: '#FD8D3C', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#FD8D3C' } },
    
    // Green connections - intimidation tactics
    { id: 'e22', source: 'intimidation', target: 'surveillance', type: 'default', animated: false, style: { stroke: '#74C476', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#74C476' } },
    { id: 'e23', source: 'intimidation', target: 'harassment', type: 'default', animated: false, style: { stroke: '#74C476', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#74C476' } },
    { id: 'e24', source: 'intimidation', target: 'assault', type: 'default', animated: false, style: { stroke: '#74C476', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#74C476' } },
    { id: 'e25', source: 'intimidation', target: 'falsecrim', type: 'default', animated: false, style: { stroke: '#74C476', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#74C476' } },
    { id: 'e26', source: 'intimidation', target: 'economic', type: 'default', animated: false, style: { stroke: '#74C476', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#74C476' } },
    { id: 'e27', source: 'intimidation', target: 'blackmail', type: 'default', animated: false, style: { stroke: '#74C476', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#74C476' } },
    { id: 'e28', source: 'intimidation', target: 'predatory', type: 'default', animated: false, style: { stroke: '#74C476', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#74C476' } },
    { id: 'e29', source: 'intimidation', target: 'environmental', type: 'default', animated: false, style: { stroke: '#74C476', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#74C476' } },
    { id: 'e30', source: 'intimidation', target: 'service', type: 'default', animated: false, style: { stroke: '#74C476', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#74C476' } },
    { id: 'e31', source: 'intimidation', target: 'property', type: 'default', animated: false, style: { stroke: '#74C476', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#74C476' } },
    { id: 'e32', source: 'intimidation', target: 'retaliatory', type: 'default', animated: false, style: { stroke: '#74C476', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#74C476' } },
    
    // Green connections - petitioning local
    { id: 'e33', source: 'petitioning', target: 'local', type: 'default', animated: false, style: { stroke: '#74C476', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#74C476' } },
    { id: 'e34', source: 'local', target: 'local-received', type: 'default', animated: false, style: { stroke: '#74C476', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#74C476' } },
    { id: 'e35', source: 'local', target: 'local-unreceived', type: 'default', animated: false, style: { stroke: '#74C476', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#74C476' } },
    
    { id: 'e36', source: 'local-received', target: 'intimidation2', type: 'default', animated: false, style: { stroke: '#74C476', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#74C476' } },
    { id: 'e37', source: 'local-received', target: 'dismissive', type: 'default', animated: false, style: { stroke: '#74C476', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#74C476' } },
    { id: 'e38', source: 'local-received', target: 'manipulation', type: 'default', animated: false, style: { stroke: '#74C476', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#74C476' } },
    { id: 'e39', source: 'local-unreceived', target: 'forcible-removal', type: 'default', animated: false, style: { stroke: '#74C476', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#74C476' } },
    
    // Green connections - petitioning provincial
    { id: 'e40', source: 'petitioning', target: 'provincial', type: 'default', animated: false, style: { stroke: '#74C476', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#74C476' } },
    { id: 'e41', source: 'provincial', target: 'prov-arrived', type: 'default', animated: false, style: { stroke: '#74C476', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#74C476' } },
    { id: 'e42', source: 'provincial', target: 'prov-intercepted', type: 'default', animated: false, style: { stroke: '#74C476', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#74C476' } },
    
    { id: 'e43', source: 'prov-arrived', target: 'prov-received', type: 'default', animated: false, style: { stroke: '#74C476', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#74C476' } },
    { id: 'e44', source: 'prov-intercepted', target: 'forcible-transfer', type: 'default', animated: false, style: { stroke: '#74C476', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#74C476' } },
    { id: 'e45', source: 'forcible-transfer', target: 'illegal-detention', type: 'default', animated: false, style: { stroke: '#74C476', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#74C476' } },
  ];

  return (
    <>
      <TitleWrapper>
        <Title></Title>
      </TitleWrapper>
      <ChartContainer>
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          nodeTypes={nodeTypes}
          fitView={false}
          defaultViewport={{ x: 0, y: 0, zoom: 0.5 }} 
          minZoom={0.1}
          maxZoom={2}
          elementsSelectable={false}
          nodesDraggable={false}
          nodesConnectable={false}
          style={{ 
            width: '100%', 
            height: '100%'
          }}
        >
          <Background color="#ffffff" variant="dots" />
          <Controls />
          <MiniMap 
            nodeStrokeColor={(node) => node.type === 'orange' ? '#FD8D3C' : '#74C476'}
            nodeColor={(node) => node.type === 'orange' ? '#FFF5EB' : '#E5F5E0'}
          />
        </ReactFlow>
      </ChartContainer>
    </>
  );
};

export default FlowChart;