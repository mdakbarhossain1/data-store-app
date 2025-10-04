import { useTheme } from "./hooks/useTheme";
import ThemeToggle from "./components/common/ThemeToggle";

function App() {
  const { theme } = useTheme();
  console.log("Current theme:", theme); // debug

  return (
     <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition-colors">
      <h1 className="text-3xl font-bold underline text-black dark:text-white mb-6">
        Hello world!
      </h1>
      <ThemeToggle />
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-lg shadow-md mt-6 transition-colors">
        <h2 className="text-xl font-bold">Dark Mode Example</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          This card changes color based on theme.
        </p>
      </div>
    </div>
  );
}

export default App;
