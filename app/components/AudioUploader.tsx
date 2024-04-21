"use client";
export default function AudioUploader() {

    const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {}
    return (
        <div className="p-4 max-w-lg bg-white rounded-lg shadow">
            <h1 className="text-xl text-center text-gray-700">
                Reading Transcriber
            </h1>
            <p className="text-center text-gray-700">
                Upload an audio file of a reading to be transcribed
            </p>
            <div className="mt-4 flex justify-center">
                <input type="file" accept="audio/*" onChange={handleUpload} />
            </div>
        </div>
    );
}
