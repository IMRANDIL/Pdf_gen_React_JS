import './App.css'
import PdfGenerator from './components/PdfGenerator'
import TextEditor from './components/TextEditor'




function App() {

  return (
    <>
    <div>
      <h1 className='title-text'>A Text Editor</h1>
      <TextEditor/>
      <PdfGenerator text={''}/>
    </div>
    </>
  )
}

export default App
