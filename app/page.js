import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-gray-100">
      {/* Navbar */}
      <header className="w-full py-4 text-center border-b border-gray-700 bg-gray-800/70 backdrop-blur shadow-md sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-blue-400">🌌 GPT-OSS Chat</h1>
        <p className="text-sm text-gray-400">AI-powered Image Processing Prototype</p>
      </header>

      {/* Chat Area */}
      <section className="flex-1 overflow-y-auto p-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* AI Greeting */}
          <div className="flex items-start">
            <div className="bg-gray-800/90 text-gray-100 rounded-2xl px-4 py-3 max-w-[75%] shadow transition hover:shadow-lg">
              Hello 👋 Upload an image and I’ll enhance it for you.
            </div>
          </div>

          {/* User Message */}
          <div className="flex justify-end">
            <div className="bg-blue-600 text-white rounded-2xl px-4 py-3 max-w-[75%] shadow transition hover:shadow-lg">
              Sure! Here’s a sample satellite image.
            </div>
          </div>

          {/* User Image */}
          <div className="flex justify-end">
            <Image
              src="/sample.jpeg"
              alt="User upload"
              width={350}
              height={250}
              className="rounded-xl shadow-lg border border-gray-700 hover:scale-105 transition"
            />
          </div>

          {/* AI Processing */}
          <div className="flex items-start">
            <div className="bg-gray-800/90 text-gray-100 rounded-2xl px-4 py-3 max-w-[75%] shadow animate-pulse">
              Processing your image… please wait.
            </div>
          </div>

          {/* AI Result */}
          <div className="flex flex-col items-start space-y-2">
            <div className="bg-gray-800/90 text-gray-100 rounded-2xl px-4 py-3 max-w-[75%] shadow transition hover:shadow-lg">
              Here’s the enhanced image 🔍
            </div>
            <Image
              src="/sample.jpeg"
              alt="Processed sample"
              width={350}
              height={250}
              className="rounded-xl shadow-lg border border-gray-700 hover:scale-105 transition"
            />
          </div>

          {/* User Follow-up */}
          <div className="flex justify-end">
            <div className="bg-blue-600 text-white rounded-2xl px-4 py-3 max-w-[75%] shadow transition hover:shadow-lg">
              Wow! That looks much clearer. Can you also highlight vegetation?
            </div>
          </div>

          {/* AI Reply */}
          <div className="flex flex-col items-start space-y-2">
            <div className="bg-gray-800/90 text-gray-100 rounded-2xl px-4 py-3 max-w-[75%] shadow transition hover:shadow-lg">
              Sure ✅ Here’s the vegetation-enhanced view.
            </div>
            <Image
              src="/sample.jpeg"
              alt="Vegetation enhanced"
              width={350}
              height={250}
              className="rounded-xl shadow-lg border border-gray-700 hover:scale-105 transition"
            />
          </div>
        </div>
      </section>

      {/* Input Box */}
      <footer className="w-full border-t border-gray-700 bg-gray-800/70 backdrop-blur p-4 sticky bottom-0 z-10 shadow-inner">
        <div className="flex space-x-2 max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="Send a message..."
            className="flex-1 rounded-lg px-4 py-2 bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium shadow">
            Send
          </button>
          <button className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg font-medium shadow">
            +
          </button>
        </div>
      </footer>
    </main>
  );
}
