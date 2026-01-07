// src/pages/UploadPage.tsx
import { useState } from "react";
import useSetTitle from "../hooks/useSetTitle";

const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET;
const PIN = import.meta.env.VITE_PIN;

interface UploadedImage {
    url: string;
    name: string;
}

export default function UploadPage() {
    useSetTitle("Admin Tools | Image Uploader");

    const [pin, setPin] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (pin === PIN) {
            setIsAuthenticated(true);
        } else {
            alert("Wrong PIN");
        }
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        setUploading(true);
        const newUploads: UploadedImage[] = [];

        // Loop through all selected files
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", UPLOAD_PRESET);

            try {
                const res = await fetch(
                    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
                    {
                        method: "POST",
                        body: formData,
                    }
                );
                const data = await res.json();
                newUploads.push({
                    url: data.secure_url,
                    name: file.name
                });
            } catch (err) {
                console.error("Upload failed for", file.name, err);
            }
        }

        setUploadedImages((prev) => [...newUploads, ...prev]);
        setUploading(false);
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        alert("Link copied!");
    };

    // --- LOGIN VIEW ---
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center p-4">
                <form onSubmit={handleLogin} className="bg-[#111] p-8 rounded-xl border border-white/10 text-center space-y-4">
                    <h2 className="text-white font-Oxanium text-xl">Admin Access</h2>
                    <input
                        type="password"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        placeholder="Enter PIN"
                        className="bg-black border border-white/20 text-white px-4 py-2 rounded focus:border-accent-color outline-none text-center"
                    />
                    <button type="submit" className="block w-full bg-accent-color text-black font-bold py-2 rounded">
                        Unlock
                    </button>
                </form>
            </div>
        );
    }

    // --- UPLOAD VIEW ---
    return (
        <div className="min-h-screen pt-32 pb-20 bg-[#050505] px-6">
            <div className="max-w-4xl mx-auto space-y-8">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-3xl font-Orbitron text-white">Image <span className="text-accent-color">Uploader</span></h1>
                    <p className="text-paragraph">Upload posters or thumbnails here, then copy the link to your JSON file.</p>
                </div>

                {/* Upload Box */}
                <div className="bg-[#111] border-2 border-dashed border-white/20 rounded-2xl p-10 text-center hover:border-accent-color transition-colors relative group">
                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-accent-color/10 group-hover:text-accent-color text-white/50 transition-colors">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                        </div>
                        {uploading ? (
                            <p className="text-accent-color font-mono animate-pulse">Uploading to cloud...</p>
                        ) : (
                            <p className="text-white/70">Drag & Drop images here, or <span className="text-accent-color font-bold underline">Click to Browse</span></p>
                        )}
                    </div>
                </div>

                {/* Results List */}
                {uploadedImages.length > 0 && (
                    <div className="space-y-4">
                        <h2 className="text-white font-Oxanium text-xl">Uploaded Links ({uploadedImages.length})</h2>
                        <div className="grid gap-4">
                            {uploadedImages.map((img, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-[#111] p-4 rounded-lg border border-white/10">
                                    {/* Preview */}
                                    <img src={img.url} alt="preview" className="w-16 h-16 object-cover rounded bg-black" />

                                    {/* URL Input */}
                                    <div className="flex-1 overflow-hidden">
                                        <p className="text-xs text-white/50 mb-1 truncate">{img.name}</p>
                                        <input
                                            readOnly
                                            value={img.url}
                                            className="w-full bg-black text-accent-color text-xs p-2 rounded border border-white/10 focus:outline-none font-mono"
                                        />
                                    </div>

                                    {/* Copy Button */}
                                    <button
                                        onClick={() => copyToClipboard(img.url)}
                                        className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors"
                                        title="Copy Link"
                                    >
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}