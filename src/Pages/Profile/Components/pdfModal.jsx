import React from 'react';
import styled from 'styled-components';
import { Document, Page, pdfjs } from 'react-pdf';

// Set the workerSrc using the current pdfjs version
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/$9.2.1/pdf.worker.js`;

function PdfModal({ isOpen, onClose, pdfUrl }) {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContent>
        <CloseButton onClick={onClose}>Close</CloseButton>
        <PdfContainer>
          <Document file={pdfUrl} onLoadError={(error) => console.error(error)}>
            <Page pageNumber={1} />
            <Page pageNumber={2} />
            <Page pageNumber={3} />
          </Document>
        </PdfContainer>
      </ModalContent>
    </Overlay>
  );
}

export default PdfModal;

/* Styled Components for modal overlay */
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  width: 80%;
  height: 80%;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: #ccc;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 16px;
  z-index: 10;
`;

const PdfContainer = styled.div`
  flex: 1;
  overflow: auto;
  padding: 16px;
`;
