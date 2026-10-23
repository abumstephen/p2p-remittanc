export default function FeesPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
          Fee Configuration
        </h1>
        
        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6">
          <p className="text-zinc-600 dark:text-zinc-400">
            Fee management page - Coming soon
          </p>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Features to Build:</h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
              <li>Fee structure configuration (base fee + percentage)</li>
              <li>Corridor-specific fee settings (e.g., US → Gambia)</li>
              <li>Fee tier management (volume-based discounts)</li>
              <li>Currency conversion markup settings</li>
              <li>Fee simulation calculator</li>
              <li>Fee revenue analytics and reporting</li>
              <li>A/B testing different fee structures</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <a
              href="/"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
