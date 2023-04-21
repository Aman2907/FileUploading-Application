import { useRef, useState, useEffect } from 'react'
import './App.css';
import { uploadFile } from './Service/api';

function App() {

  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  const fileInputRef = useRef()

  const logo = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg'

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])

  const onUploadClick = () =>{
    fileInputRef.current.click();
  }

  return (
    <div className="container">
      <img src={logo} alt="banner" />
      <div className="wrapper">
        <h1>Simple file application</h1>
        <p>Upload and share</p>

        <button onClick={() => onUploadClick()} > Upload </button>
        <input type="file" 
            ref={fileInputRef}
            style={{display: 'none'}}
            onChange={(e) => setFile(e.target.files[0])}
        />     
      </div>
    </div>
  );
}

export default App;
// onClick={() => onUploadClick()}