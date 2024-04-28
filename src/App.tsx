import './App.css'
import PdfGenerator from './components/PdfGenerator'
import TextEditor from './components/TextEditor'




function App() {

  return (
    <>
    <div>
      <TextEditor/>
      <PdfGenerator text={'Ali'}/>
    </div>
    </>
  )
}

export default App
