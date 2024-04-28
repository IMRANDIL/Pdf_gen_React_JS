import { EditorState, convertToRaw } from 'draft-js';
import jsPDF from 'jspdf';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import addCustomFont from './NotoSansDevanagari-VariableFont_wdth,wght-normal'
import customFontTiro from '../assets/TiroDevanagariHindi-Regular-normal'

const PdfGenerator = ({ editorState }: { editorState: EditorState }) => {
  // addCustomFont()
  customFontTiro()
  const generatePdf = () => {
    if (!editorState || editorState.getCurrentContent().hasText() === false) {
      toast.error('Cannot generate PDF: Editor content is empty');
      return;
    }

    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const content = rawContentState.blocks.map(block => block.text).join('\n');

    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Set font size and add text to the document
    doc.setFontSize(12);
    // Adjust margins and text width to prevent cutting off
    const marginLeft = 10;
    const marginTop = 10;
    const maxWidth = doc.internal.pageSize.getWidth() - (marginLeft * 2);
    console.log("font list", doc.getFontList());//check all added font
    doc.setFont("TiroDevanagariHindi-Regular");
    doc.text(content, marginLeft, marginTop, { maxWidth });
   
    // Save the PDF document
    doc.save('generated_document.pdf');
  };

  return (
    <button className='pdfbutton' onClick={generatePdf}>Generate PDF</button>
  );
};

export default PdfGenerator;