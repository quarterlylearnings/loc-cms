import AudioUploader from "./components/AudioUploader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
      <AudioUploader />
    </main>
  );
}
