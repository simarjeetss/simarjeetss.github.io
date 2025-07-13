import React from 'react';

const About = () => {
  return (
    <main className="mt-20">
      <div className="max-w-4xl mx-auto px-8">
        <section className="py-8">
          <h2 className="text-4xl font-bold mb-8">About</h2>
          
          <div className="flex flex-col gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-text">Education</h3>
              <div className="flex items-center gap-4 p-4 border border-border rounded-lg">
                {/* <img src="/assets/uni.jpeg" alt="Washington State University" className="w-15 h-15 rounded-lg object-cover" /> */}
                <div>
                  <h4 className="text-lg font-semibold mb-1">Washington State University</h4>
                  <p className="text-sm text-text-secondary">Masters in Computer Science</p>
                  <p className="text-sm text-text-secondary">2023 - Present</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-text">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border border-border rounded-lg bg-white bg-opacity-5">
                  <h4 className="text-lg font-semibold mb-4 text-accent">Programming Languages</h4>
                  <ul className="space-y-1">
                    <li className="text-text-secondary text-sm">Java</li>
                    <li className="text-text-secondary text-sm">Python</li>
                    <li className="text-text-secondary text-sm">C#</li>
                    <li className="text-text-secondary text-sm">JavaScript</li>
                    <li className="text-text-secondary text-sm">R</li>
                  </ul>
                </div>
                
                <div className="p-6 border border-border rounded-lg bg-white bg-opacity-5">
                  <h4 className="text-lg font-semibold mb-4 text-accent">Frameworks & Technologies</h4>
                  <ul className="space-y-1">
                    <li className="text-text-secondary text-sm">Spring Boot</li>
                    <li className="text-text-secondary text-sm">.NET Core</li>
                    <li className="text-text-secondary text-sm">React</li>
                    <li className="text-text-secondary text-sm">Node.js</li>
                    <li className="text-text-secondary text-sm">LibGDX</li>
                  </ul>
                </div>
                
                <div className="p-6 border border-border rounded-lg bg-white bg-opacity-5">
                  <h4 className="text-lg font-semibold mb-4 text-accent">Cloud & DevOps</h4>
                  <ul className="space-y-1">
                    <li className="text-text-secondary text-sm">Azure</li>
                    <li className="text-text-secondary text-sm">Google Cloud Platform</li>
                    <li className="text-text-secondary text-sm">Docker</li>
                    <li className="text-text-secondary text-sm">Git</li>
                    <li className="text-text-secondary text-sm">CI/CD</li>
                  </ul>
                </div>
                
                <div className="p-6 border border-border rounded-lg bg-white bg-opacity-5">
                  <h4 className="text-lg font-semibold mb-4 text-accent">Tools & Libraries</h4>
                  <ul className="space-y-1">
                    <li className="text-text-secondary text-sm">OpenCV</li>
                    <li className="text-text-secondary text-sm">dlib</li>
                    <li className="text-text-secondary text-sm">Pandas</li>
                    <li className="text-text-secondary text-sm">NumPy</li>
                    <li className="text-text-secondary text-sm">Matplotlib</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-text">Interests</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When I'm not coding, I'm passionate about music production. I create Rap/Trap/RnB beats 
                and love experimenting with different genres and sounds. Music production helps me think 
                creatively and brings balance to my technical work.
              </p>
              <p className="text-text-secondary leading-relaxed">
                I also enjoy exploring new technologies, contributing to open-source projects, and 
                collaborating with other developers on innovative solutions.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About; 