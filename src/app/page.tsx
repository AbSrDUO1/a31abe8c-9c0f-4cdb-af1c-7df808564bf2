"use client";
import { ArrowButton } from '@/components/buttons/ArrowButton';
import { ContentTextbox } from '@/components/textbox/ContentTextbox';
import { useCallback, useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = useCallback(() => {
    // Handle form submission
  }, []);

  return (
    <>
      <section id="hero" className="bg-[#f7f7fb] py-[72px] flex flex-col items-center">
        <ContentTextbox
          title={<h1 className="text-4xl font-bold">Welcome to Button Playground</h1>}
          description={<p className="text-lg">Explore various button styles and their functionalities.</p>}
        >
          <ArrowButton
            text="Get Started"
            onClick={() => {}}
            className="mt-4 bg-blue-600 text-white rounded-lg py-2 px-4"
          />
        </ContentTextbox>
      </section>
      <section id="variants" className="bg-[#f7f7fb] py-[72px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center">
            <button className="bg-blue-600 text-white rounded-lg py-2 px-4">Primary</button>
          </div>
          <div className="flex flex-col items-center">
            <button className="bg-gray-300 text-black rounded-lg py-2 px-4">Secondary</button>
          </div>
          <div className="flex flex-col items-center">
            <button className="bg-transparent border border-black text-black rounded-lg py-2 px-4">Ghost</button>
          </div>
          <div className="flex flex-col items-center">
            <button className="bg-gray-200 text-gray-400 rounded-lg py-2 px-4" disabled>Disabled</button>
          </div>
        </div>
      </section>
      <section id="accessibility" className="bg-white py-[72px]">
        <ContentTextbox
          title={<h2 className="text-3xl font-bold">Accessibility Standards</h2>}
          description={<p className="text-lg">Ensure that your buttons have clear focus-visible states and are navigable via keyboard.</p>} 
        />
      </section>
      <section id="about" className="bg-soft-noise py-[72px]">
        <ContentTextbox
          title={<h2 className="text-3xl font-bold">About This Playground</h2>}
          description={<p className="text-lg">This project showcases different button types and usage contexts.</p>}
        />
      </section>
      <section id="contact" className="bg-[#f7faff] py-[72px]">
        <form className="flex flex-col max-w-md mx-auto">
          <label>
            Name:
            <input className="border border-gray-300 rounded p-2" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" className="border border-gray-300 rounded p-2" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Message:
            <textarea className="border border-gray-300 rounded p-2" value={message} onChange={(e) => setMessage(e.target.value)} />
          </label>
          <ArrowButton
            text="Submit"
            onClick={handleSubmit}
            className="bg-blue-600 text-white rounded-lg py-2 px-4"
          />
        </form>
      </section>
    </>
  );
}