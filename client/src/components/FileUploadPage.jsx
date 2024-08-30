import React, { useState } from 'react';

function FileUploadPage() {
    const [file, setFile] = useState(null);
    const [fileType, setFileType] = useState(null);
    const [fileName, setFileName] = useState("");

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFile(URL.createObjectURL(selectedFile));
            setFileType(selectedFile.type);
            setFileName(selectedFile.name);
        }
    };

    return (
        <div className="container min-h-screen p-8 mx-auto bg-gray-800">
            <h1 className="mb-8 text-4xl font-bold text-center text-blue-400">File Uploader</h1>
            <div className="mb-8">
                <label className="block mb-4 text-lg font-medium text-gray-300" htmlFor="file_input">Upload file</label>
                <input type="file"
                    className="file-input file-input-bordered w-full max-w-lg bg-[#2F4F4F] text-gray-200 border-[#47bcbc] hover:border-[#3A6363] focus:border-[#3A6363] transition-colors"
                    id="file_input"
                    onChange={handleFileChange}
                    accept="image/*,application/pdf"
                />
            </div>
            {file && (
                <div className="p-6 mt-8 bg-gray-700 rounded-lg shadow-lg">
                    <h2 className="mb-4 text-2xl font-semibold text-blue-300">Preview:</h2>
                    <p className="mb-4 text-gray-300">File Name: <span className="text-blue-300">{fileName}</span></p>
                    {fileType && fileType.startsWith('image/') ? (
                        <img src={file} alt="Uploaded file" className="max-w-full h-auto max-h-[600px] mx-auto rounded-lg shadow-lg" />
                    ) : fileType === 'application/pdf' ? (
                        <embed src={file} type="application/pdf" className="w-full h-[600px] border-2 border-gray-600 rounded-lg" />
                    ) : (
                        <p className="text-xl text-center text-red-400">Unsupported file type</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default FileUploadPage;