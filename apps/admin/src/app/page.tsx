import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
            P2P Remittance Admin
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Manage your peer-to-peer remittance platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Dashboard Card */}
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Dashboard
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Overview of platform metrics and activity
            </p>
            <span className="inline-block px-3 py-1 text-sm bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded">
              Coming Soon
            </span>
          </div>

          {/* Transactions Card */}
          <Link href="/transactions" className="block">
            <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                Transactions
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Monitor and manage all transactions
              </p>
              <span className="inline-block px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
                View →
              </span>
            </div>
          </Link>

          {/* Disputes Card */}
          <Link href="/disputes" className="block">
            <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                Disputes
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Handle transaction disputes and resolutions
              </p>
              <span className="inline-block px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
                View →
              </span>
            </div>
          </Link>

          {/* Users Card */}
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Users
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Manage user accounts and KYC verification
            </p>
            <span className="inline-block px-3 py-1 text-sm bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded">
              Coming Soon
            </span>
          </div>

          {/* Fees Card */}
          <Link href="/fees" className="block">
            <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                Fees
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Configure transaction fees and pricing
              </p>
              <span className="inline-block px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
                View →
              </span>
            </div>
          </Link>

          {/* Analytics Card */}
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Analytics
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              View reports and business insights
            </p>
            <span className="inline-block px-3 py-1 text-sm bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded">
              Coming Soon
            </span>
          </div>
        </div>

        <div className="mt-12 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-100 mb-2">
            ⚠️ Development Status
          </h3>
          <p className="text-amber-800 dark:text-amber-200">
            This admin dashboard is currently in development. Most features are placeholders 
            and require backend API integration. See <code className="bg-amber-100 dark:bg-amber-900 px-2 py-1 rounded">CODEBASE_ANALYSIS.md</code> for details.
          </p>
        </div>
      </div>
    </div>
  );
}
