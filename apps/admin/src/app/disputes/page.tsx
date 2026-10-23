export default function DisputesPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
          Disputes
        </h1>
        
        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6">
          <p className="text-zinc-600 dark:text-zinc-400">
            Dispute management page - Coming soon
          </p>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Features to Build:</h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
              <li>List of open disputes with priority levels</li>
              <li>Dispute details and evidence viewer</li>
              <li>Timeline of dispute events</li>
              <li>Assign disputes to support agents</li>
              <li>Resolution workflow (approve/reject/escalate)</li>
              <li>Communication history with users</li>
              <li>Refund processing interface</li>
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
