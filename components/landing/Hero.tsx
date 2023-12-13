'use client';

import { Button } from '../ui/button';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';

const Hero = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className='flex min-h-screen flex-1 flex-col items-center justify-center text-center text-slate-100'>
      <h1 className='mb-4 text-4xl font-bold capitalize md:text-5xl'>
        Unlimited movies, trailers, and more
      </h1>
      <p className='text-shadow my-1 text-xl'>Watch anywhere. Anytime.</p>
      <p className='text-shadow my-1 text-xl'>
        Ready to watch? Sign in to the app or signup with your email.
      </p>
      <div className='my-5 flex flex-row items-center justify-center gap-4'>
        <Link href={isSignedIn ? '/home' : '/sign-up'}>
          <Button variant='destructive' size='lg' className='font-bold'>
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
