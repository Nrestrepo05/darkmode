export default function Header({darkMode, setDarkMode}) {
  const handleToggleMode = () => {
    console.log(darkMode)
    if (darkMode) {
      localStorage.removeItem('darkMode');
      return setDarkMode(false);
    }
    localStorage.setItem('darkMode', true);
    return setDarkMode(true);
  }

  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <img
            className="h-8 w-auto sm:h-10"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt=""
          />
        </div>
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <button 
            onClick={handleToggleMode}
            className="focus:outline-none transition px-4 py-2 rounded-md">
              {!darkMode ? "dark mode" : "light mode"}
          </button>
        </div>
      </div>
    </header>
  )
}
