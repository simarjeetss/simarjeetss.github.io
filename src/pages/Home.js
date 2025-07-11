import React from 'react';

const Home = () => {
  return (
    <main className="mt-20">
      <div className="max-w-4xl mx-auto px-8">
        <section className="py-16">
          <h1 className="font-monotext-5xl font-extrabold mb-14 leading-tight text-4xl">Simarjeet Singh</h1>
          <p className="text-xl text-text-secondary mb-8 font-medium">Hey! I'm a Computer Science graduate student passionate about software development and music production.</p>
          
          <div className="text-lg leading-relaxed">
            <p className="mb-6">
              I'm currently pursuing my Masters in Computer Science at Washington State University, 
              with a focus on backend development and cloud technologies. When I'm not coding, 
              you'll find me creating Rap/Trap/RnB beats and exploring new musical horizons.
            </p>
            
            {/* <p className="mb-6">
              Working on backend development and cloud technologies<br />
              Creator of FlavorBlend, Spotify Analysis, Bullet Hell Game<br />
              Skills in Java, Spring Boot, Python, C#, .NET, Azure, GCP
            </p> */}
            
            <p className="mb-6">
              Dreaming up cool ideas and making them come true is where my passion lies. 
              I am enthusiastic about building applications that help myself and others to be more productive 
              and enjoy the process of crafting. You can find my full projects list <a href="/projects" className="text-accent hover:text-accent-hover">here</a>.
            </p>
            
            <p className="mb-6">
              Outside of programming, I enjoy music production and creating beats. 
              I love experimenting with different genres and sounds. Also, in case you are interested, 
              here are my <a href="/assets/resume_SimarjeetSingh_March.pdf" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover">resume</a> and <a href="/about" className="text-accent hover:text-accent-hover">more about me</a>.
            </p>
            
            <p className="mb-6">
              I'm currently based in Seattle, Washington, if you're around, please reach out and let's have some coffee or work together.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home; 