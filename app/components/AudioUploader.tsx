"use client";
export default function AudioUploader() {
    const handleUpload = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {};
    return (
        <div className="p-4 max-w-lg bg-white rounded-lg shadow">
            <h1 className="text-xl text-center text-gray-700">
                Reading Transcriber
            </h1>
            <p className="text-center text-gray-700">
                Upload an audio file of a reading to be transcribed
            </p>
            <div className="mt-4 flex justify-center">
                <input
                    type="file"
                    accept="audio/*"
                    onChange={handleUpload}
                    className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-violet-700
                  file:cursor-pointer hover:file:bg-violet-100"
                />
            </div>
        </div>
    );
}
