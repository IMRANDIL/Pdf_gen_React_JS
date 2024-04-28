import { ToastContainer } from 'react-toastify';
import './App.css'
import PdfGenerator from './components/PdfGenerator'
import TextEditor from './components/TextEditor'
import useTextEditor from './customhooks/useTextEditor';




function App() {

  const {
    editorState,
    handleKeyCommand,
    handlePastedText,
    handleEditorChange,
    clearContent,
    onBoldClick,
    onItalicClick
  } = useTextEditor();
  return (
    <>
    <div>
      <h1 className='title-text'>A Text Editor</h1>
      <TextEditor handleEditorChange={handleEditorChange} handleKeyCommand={handleKeyCommand} handlePastedText={handlePastedText}
      clearContent={clearContent}
      onBoldClick={onBoldClick}
      onItalicClick={onItalicClick}
      editorState={editorState}
      />
      <PdfGenerator editorState={editorState}/>
      <ToastContainer />
    </div>
    </>
  )
}

export default App
