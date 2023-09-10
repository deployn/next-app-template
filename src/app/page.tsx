import DarkModeToggle from '@/components/DarkModeToggle'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 px-4 py-12 ease-in-out sm:px-6 lg:px-8">
      <div className="w-full max-w-md transform space-y-8 rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800 md:p-12">
        <div>
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900 transition-colors duration-100 ease-in-out dark:text-gray-200">
            Welcome to My Next.js Boilerplate!
          </h1>
          <div className="mt-6 flex justify-center">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </main>
  )
}
