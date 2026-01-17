import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">{children}</main>
      <nav className="fixed bottom-0 w-full flex justify-around bg-gray-100 p-2 border-t">
        <Link href="/home">Home</Link>
        <Link href="/sessions">Sessions</Link>
        <Link href="/trends">Trends</Link>
        <Link href="/improve">Improve</Link>
        <Link href="/settings">Settings</Link>
      </nav>
    </div>
  );
}

