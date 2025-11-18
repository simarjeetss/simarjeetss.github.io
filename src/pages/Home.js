import React from 'react';

const Home = () => {
  return (
    <main className="mt-20">
      <div className="max-w-4xl mx-auto px-8">
        <section className="py-8">
          <h1 className="font-monotext-5xl font-extrabold mb-9 leading-tight text-2xl">hi, i am simarjeet!</h1>
          <div className="text-lg leading-relaxed">
            <p className="mb-2">
              i am a recent mscs graduate (may 2025) from washington state university.
            </p>
            
            <p className="mb-10">
              mainly work on backend, applied ai and LLMs.
            </p>
            
            <h2 className="text-xl font-semibold mb-6 text-text">experience</h2>
            <ul className="list-disc ml-6 mb-8">
            <li className="mb-2">software engineer @ cognera health (sept 2025 - present)</li>
            <li className="mb-2">software engineer @ winsun green (jan 2023 - dec 2023)</li>
            <li className="mb-2">intern @ cactus communications (may 2022 - aug 2022)</li>
            </ul>
          </div>
          
          <h2 className="text-xl font-semibold mb-6 text-text">projects</h2>
          <ul className="list-disc ml-6 mb-8">
            <li className="mb-2">
              <a href="https://flavorblend.simarjeet.dev" target="_blank" rel="noopener noreferrer">flavorblend</a> (hackathon winner)
            </li>
            <li className="mb-2">
              <a href="https://spotify.simarjeet.dev" target="_blank" rel="noopener noreferrer">spotify analysis</a>
            </li>
            <li className="mb-2">
              <a href="https://github.com/simarjeetss/network-security-pipeline" target="_blank" rel="noopener noreferrer">phishing detection pipeline</a>
            </li>
            <li className="mb-2"> more <a href="/projects" rel="noopener noreferrer">here</a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Home; 
