import React from 'react'

const FileUploader = () => {
    return (
        <div className="flex items-center justify-center min-h-screen px-4">
            <div className="container max-w-lg p-6 rounded-lg shadow-md cursor-pointer bg-white">
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="p-3 rounded-full bg-blue-50">
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5833 3.16666H21.0151C26.1786 3.16666 28.7604 3.16666 30.5534 4.4299C31.0671 4.79183 31.5232 5.22107 31.9077 5.70456C33.2499 7.39205 33.2499 9.82197 33.2499 14.6818V18.7121C33.2499 23.4038 33.2499 25.7496 32.5074 27.6232C31.3138 30.6352 28.7895 33.0111 25.5892 34.1345C23.5985 34.8333 21.1061 34.8333 16.1211 34.8333C13.2726 34.8333 11.8483 34.8333 10.7108 34.434C8.88209 33.792 7.43961 32.4344 6.75753 30.7133C6.33325 29.6427 6.33325 28.3022 6.33325 25.6212V19" stroke="#3276E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M33.2501 19C33.2501 21.9148 30.8871 24.2778 27.9723 24.2778C26.9181 24.2778 25.6754 24.0931 24.6504 24.3677C23.7398 24.6117 23.0285 25.323 22.7844 26.2337C22.5098 27.2586 22.6945 28.5014 22.6945 29.5556C22.6945 32.4704 20.3316 34.8333 17.4167 34.8333" stroke="#3276E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.4167 9.49999L4.75 9.49999M11.0833 3.16666V15.8333" stroke="#3276E8" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </div>
                    <p className="text-sm text-gray-500">Click to upload</p>
                    <div className="flex gap-2 text-xs">
                        <span className="px-2 py-1 rounded-md bg-blue-50 text-blue-500">PDF</span>
                        <span className="px-2 py-1 rounded-md bg-blue-50 text-blue-500">DOCX</span>
                        <span className="px-2 py-1 rounded-md bg-blue-50 text-blue-500">TXT</span>
                        <span className="px-2 py-1 rounded-md bg-blue-50 text-blue-500">&gt; 10 MB</span>
                    </div>
                </div>
                <input
                    type="file"
                    className="hidden"
                />
            </div>
        </div>
    )
}

export default FileUploader
