export default function TransactionsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
          Transactions
        </h1>
        
        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6">
          <p className="text-zinc-600 dark:text-zinc-400">
            Transaction management page - Coming soon
          </p>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Features to Build:</h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
              <li>Transaction list with filters (status, date, amount)</li>
              <li>Transaction details view</li>
              <li>Search by transaction ID, user, or amount</li>
              <li>Export transactions (CSV/PDF)</li>
              <li>Transaction analytics and charts</li>
              <li>Real-time transaction monitoring</li>
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
