import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/home'); // Redirect to /home automatically
  }, [router]);

  return null; // nothing else renders
}
