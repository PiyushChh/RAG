import React, { useState } from 'react'
import Button from '@mui/material/Button';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const Rag = () => {
  const [fileName,setFileName]=useState("")
  const [file,setFile]=useState(null)

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setFile(file)
    }
  };

  const handleDeleteFile=()=>{
    setFileName("")
    setFile(null)
  }

  const handleUpload=()=>{
    console.log("file uploaded");
  }

  return (
    <div>
      <Button
  component="label"
  role={undefined}
  variant="contained"
  tabIndex={-1}
  startIcon={<FaCloudUploadAlt />}
>
  Upload file
  <VisuallyHiddenInput type="file" onChange={handleFileChange}/>
</Button>
{fileName && (<><p>Selected file: {fileName}</p> <FaTrash onClick={handleDeleteFile} /></>)}
<Button type='submit' disabled={fileName? false:true} onSubmit={handleUpload}>Submit</Button>
    </div>
    
  )
}

export default Rag