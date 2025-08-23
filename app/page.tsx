export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Next.js with Tailwind CSS v3
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="border border-gray-300 rounded-lg p-6 hover:border-blue-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Documentation</h2>
            <p className="text-gray-600">Find in-depth information about Next.js features and API.</p>
          </div>
          <div className="border border-gray-300 rounded-lg p-6 hover:border-blue-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Learn</h2>
            <p className="text-gray-600">Learn about Next.js in an interactive course with quizzes!</p>
          </div>
          <div className="border border-gray-300 rounded-lg p-6 hover:border-blue-500 transition-colors">
            <h2 className="text-xl font-semibold mb-2">Deploy</h2>
            <p className="text-gray-600">Instantly deploy your Next.js site to a shareable URL.</p>
          </div>
        </div>
      </div>
    </main>
  );
}