import React from 'react';
import { Page, Document } from '@react-pdf/renderer';

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4">
      {/* data here */}
    </Page>
  </Document>
);

export default MyDocument