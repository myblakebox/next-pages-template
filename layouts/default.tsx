import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <a
          className="flex items-center gap-1 text-current no-underline"
          href="https://www.blakeui.com"
          rel="noopener noreferrer"
          target="_blank"
          title="blakeui.com homepage"
        >
          <span className="text-muted">Powered by</span>
          <p className="text-accent">BlakeUI</p>
        </a>
      </footer>
    </div>
  );
}
