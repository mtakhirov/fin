import type React from 'react'

const HomePage: React.FC = () => {
  return (
    <main className='grid min-h-screen place-content-center'>
      <h1 className='text-4xl font-bold'>Fin</h1>
      <pre className='text-sm text-slate-300'>Financial Insights Now</pre>
    </main>
  )
}
HomePage.displayName = 'Home Page'

export default HomePage
