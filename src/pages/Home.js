import React from 'react';

const Home = () => {
  return (
    <main className="mt-20">
      <div className="max-w-4xl mx-auto px-8">
        <section className="py-16">
          <h1 className="font-monotext-5xl font-extrabold mb-14 leading-tight text-4xl">hi i am simarjeet singh 👋</h1>
          {/* <p className="text-xl text-text-secondary mb-8 font-medium">a recent Computer Science graduate</p> */}
          
          <div className="text-lg leading-relaxed">
            <p className="mb-6">
              a recent MSCS graduate from Washington State University where i specialized in AI/ML currently working at a healthcare + ai startup.
            </p>
            
            <p className="mb-6">
              dreaming up cool ideas and making them come true is where my passion lies. 
              I am enthusiastic about building applications that help myself and others to be more productive 
              and enjoy the process of crafting. You can check out my projects <a href="/projects" className="text-accent hover:text-accent-hover">here</a>.
            </p>
            
            <p className="mb-6">
              outside of programming, I enjoy music production and creating beats. 
              I love experimenting with different genres and sounds. Also, in case you are interested, 
              here is <a href="/about" className="text-accent hover:text-accent-hover">more about me</a>.
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
