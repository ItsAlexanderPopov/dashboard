import React from 'react'
import MyDocument from './MyDocument.jsx'
import { PDFDownloadLink } from '@react-pdf/renderer';

const Button = ({ color, bgColor, size, text, borderRadius}) => {

  return (
    <PDFDownloadLink document={<MyDocument />} fileName="Dashboard Data.pdf"
    style={{ color, backgroundColor: bgColor, borderRadius }}
    className={`text-${size} p-3 hover:drop-shadow-md`}
    >
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : text
      }
    </PDFDownloadLink>
  )
}

export default Button