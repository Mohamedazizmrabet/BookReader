"use client"
import React, { useState } from 'react'
import axios from 'axios'
function Upload() {
    const [file, setFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false); // Optional: track upload progress

    const handleUpload = async () => {
        setIsLoading(true); // Set loading state (optional)

        if (!file) {
            console.error("No file selected!");
            setIsLoading(false); // Reset loading state (optional)
            return;
        }
        console.log(file);

        // const formData = new FormData();
        // formData.append("file", file);


        // try {
        //     const response = await axios.post('http://localhost:3000/file/upload', formData);
        //     console.log(response);

        //     if (!response.data.length) {
        //         throw new Error(`Upload failed with status: ${response.status}`);
        //     }

        //     console.log('File uploaded successfully!');
        //     setFile(null); // Clear file selection after successful upload
        // } catch (error) {
        //     console.error('Error uploading file:', error);
        // } finally {
        //     setIsLoading(false); // Reset loading state (optional)
        // }
    };

    return (

        <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" onChange={(e) => setFile(e.target.files![0])} />
            </label>
            <button onClick={handleUpload}>upload</button>
        </div>

    )
}

export default Upload