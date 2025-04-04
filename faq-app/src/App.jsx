import React, {useState, useEffect}  from 'react'
import FAQList from './components/FAQList'
const App = () => {
  const [darkMode, setDarkMode] = useState(() =>{
    const savedTheme = localStorage.getItem ('darkMode')
    return savedTheme ? JSON.parse(savedTheme) : false
  })

  useEffect(() => {
    if(darkMode){
      document.documentElement.classList.add('dark')
    }
    else{
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkItem', JSON.stringify(darkMode))
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return(
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 
    to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950
    transition-colors duration-300">
      <div className="container mx-auto py-12">
        <header className='text-center mb-12'>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 
             bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 
             inline-block text-transparent bg-clip-text">
             Centro FAQ
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            Econtre alguma de suas respostas aqui nessa seção que criamos para você que tem algum tipo de dúvida.
          </p>
        </header>
      </div>
      <FAQList toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </div>
  )
}

export default App