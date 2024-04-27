import { Button } from "react-bootstrap";

const PdfGenerator = ({ text }) => {
  const generatePdf = () => {
    // Code to generate PDF from the provided text
  };

  return <Button onClick={generatePdf}>Generate PDF</Button>;
};

export default PdfGenerator;
