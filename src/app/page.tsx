'use client';

import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

function page() {
  return (
    <section className="bg-primary-dark-900">
      <Navbar />
      <Hero />
    </section>
  );
}

export default page;
