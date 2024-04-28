import { useState } from "react";
import { EditorState, RichUtils} from "draft-js";


const useTextEditor = () => {
    const [editorState, setEditorState] = useState(() =>
      EditorState.createEmpty()
    );
  
    const handleKeyCommand = (command) => {
      const newState = RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        setEditorState(newState);
        return 'handled';
      }
      return 'not-handled';
    };
  
    const handlePastedText = (text, html) => {
      // Handle pasted text here if needed
    };
  
    const handleEditorChange = (newEditorState) => {
      setEditorState(newEditorState);
    };
  
    const clearContent = () => {
      setEditorState(EditorState.createEmpty());
    };

    const onBoldClick = () => {
        handleEditorChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
      };
    
      const onItalicClick = () => {
        handleEditorChange(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
      };
  
    return {
      editorState,
      handleKeyCommand,
      handlePastedText,
      handleEditorChange,
      clearContent,
      onBoldClick,
      onItalicClick 
    };
  };


  export default useTextEditor;