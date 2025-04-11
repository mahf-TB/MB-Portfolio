'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-black text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! La page que vous cherchez n&apos;existe pas.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
      >
        Revenir à l&apos;accueil
      </Link>
    </div>
  );
}
