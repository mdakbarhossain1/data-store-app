import type { ReactNode } from "react";

interface PageWrapperProps {
  title: string;
  children?: ReactNode;
}

const PageWrapper = ({ title, children }: PageWrapperProps) => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] px-6 py-16 text-center bg-white dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-300">
        {title}
      </h1>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mb-8 transition-colors duration-300">
        {children}
      </p>
    </section>
  );
};

export default PageWrapper;
