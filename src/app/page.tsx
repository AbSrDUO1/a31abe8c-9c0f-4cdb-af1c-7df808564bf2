"use client";
import ContentTextbox from '@/components/textbox/ContentTextbox';
import SlideButton from '@/components/buttons/SlideButton';
import HorizontalTextbox from '@/components/textbox/HorizontalTextbox';
import GalleryBento from '@/components/bento/galleryBento/GalleryBento';
import SimpleKPIBento from '@/components/bento/SimpleKPIBento';
import { useState } from 'react';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <>
      <section id="hero" className="bg-hero py-20">
        <ContentTextbox
          title={<h1 className='text-4xl text-primary'>Button Playground</h1>}
          description={<p className='text-lg text-secondary'>Explore our button variants in a minimal layout.</p>}
          className=""
        >
          <SlideButton text="Explore Now" onClick={() => {}} className="bg-primary text-white" />
        </ContentTextbox>
      </section>

      <section id="about" className="bg-white py-20">
        <HorizontalTextbox
          title={<h2 className='text-3xl text-primary'>About</h2>}
          description={<p className='text-lg'>This page showcases various button designs and their functionalities.</p>}
          className="max-w-5xl"
        />
      </section>

      <section id="button-demo" className="bg-F7FAFC py-20">
        <GalleryBento
          items={[
            { title: 'Primary', image: '/images/placeholder1.avif' },
            { title: 'Secondary', image: '/images/placeholder2.avif' },
            { title: 'Outline', image: '/images/placeholder3.avif' },
          ]}
          className="grid grid-cols-3 gap-5"
          gridClassName="flex"
        />
      </section>

      <section id="terms" className="bg-white py-20">
        <ContentTextbox
          title={<h2 className='text-2xl'>Terms and Conditions</h2>}
          description={<p>This is a brief overview of the terms. <a href="#" className="text-underline">Read more.</a></p>}
          className=""
        >
          <></>
        </ContentTextbox>
      </section>

      <section id="policy" className="bg-white py-20">
        <ContentTextbox
          title={<h2 className='text-2xl'>Privacy Policy</h2>}
          description={<p>Your privacy is important to us. <a href="#" className="text-underline">Read more.</a></p>}
          className=""
        >
          <></>
        </ContentTextbox>
      </section>

      <section id="contact" className="bg-F7F7F7 py-20">
        <form onSubmit={handleSubmit} className="max-w-md">
          <label htmlFor="name" className="block text-sm">Name</label>
          <input type="text" name="name" className="border rounded p-2 w-full" required />
          <label htmlFor="email" className="block text-sm">Email</label>
          <input type="email" name="email" className="border rounded p-2 w-full" required />
          <label htmlFor="message" className="block text-sm">Message</label>
          <textarea name="message" className="border rounded p-2 w-full" required></textarea>
          <SlideButton text="Submit" onClick={handleSubmit} className="bg-primary text-white" />
        </form>
        {submitted && <p className='text-green-600'>Thank you for your message!</p>}
      </section>
    </>
  );
}
