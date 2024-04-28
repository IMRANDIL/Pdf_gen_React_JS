import { useState } from "react";
import { EditorState, RichUtils} from "draft-js";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor } from 'react-draft-wysiwyg';

const TextEditor = () => {
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

  const onBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  const onItalicClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };

  const handlePastedText = (text, html) => {
    // Handle pasted text here if needed
  };

  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handleClearContent = () => {
    setEditorState(EditorState.createEmpty());
  };


  return (
    <div>
      <div style={{ border: "1px solid black", minHeight: "300px" }}>
        <Editor
          editorState={editorState}
          toolbar={{
            options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'remove', 'history'],
            inline: {
              options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace']
            },
            blockType: {
              options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code']
            },
            fontSize: {
              options: [10, 12, 14, 16, 18, 24, 30, 36, 48]
            },
            list: {
              options: ['unordered', 'ordered']
            },
            textAlign: {
              options: ['left', 'center', 'right', 'justify']
            },
          }}
          onEditorStateChange={handleEditorChange}
          handleKeyCommand={handleKeyCommand}
          handlePastedText={handlePastedText}
        />
      </div>
      <div className="button-container">
      <button onClick={onBoldClick}>Bold</button>
      <button onClick={onItalicClick}>Italic</button>
      <button onClick={handleClearContent}>Clear Content</button>
      </div>
     
    </div>
  );
};

export default TextEditor;
