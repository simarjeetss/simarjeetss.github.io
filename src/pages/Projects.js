import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "CrimsonCode'25 - FlavorBlend",
      description: "Our app harnesses the power of Generative AI and multimodal large language models to create unique, fusion-style recipes tailored to your taste. Simply input two cuisines, dietary preferences, and the type of meal—whether it's a main course, appetizer, or dessert—and our AI generates a completely new recipe with a detailed ingredient list and step-by-step cooking instructions.",
      // image: "/assets/flavorblend.png",
      link: "https://devpost.com/software/flavorblend",
      alt: "FlavorBlend Project"
    },
    {
      id: 2,
      title: "AgAid Digital Hackathon - Snowpack Prediction Challenge",
      description: "Built an AI-powered tool to predict Snow Water Equivalent (SWE) with 87.8% accuracy, helping improve water resource planning in the Western U.S. We processed over 9 million rows of weather and location data and created a web app using React and FastAPI where users can upload CSV files and see interactive SWE predictions. The project placed in the top 3 and earned an Honorable Mention for its innovation",
      // image: "/assets/flavorblend.png",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7293512514611335172/",
      alt: "FlavorBlend Project"
    },
    {
      id: 3,
      title: "Personal Spotify Data Analysis",
      description: "The Personal Spotify Data Analysis project involved analyzing 20,000+ JSON entries from Spotify's streaming history. Using R scripts, the project applied data cleaning techniques to structure the dataset and created artist transition networks to detect listening patterns.",
      // image: "/assets/spotify_analysis.png",
      link: "https://simarjeetss-spotify-analysis.netlify.app/",
      alt: "Spotify Analysis Project"
    },
    {
      id: 4,
      title: "Bullet Hell Shooting Game",
      description: "The Bullet Hell Shooting Game was developed in Java using the LibGDX framework, featuring dynamic enemy waves, mid-bosses, and multi-phase final bosses. Essential design patterns like Factory, Observer, and State were used to ensure a modular and extensible architecture.",
      // image: "/assets/bullet_hell.png",
      link: "https://github.com/simarjeetss/CPT_S-587-Software-Desgin-And-Architecture/tree/develop",
      alt: "Bullet Hell Game Project"
    },
    {
      id: 5,
      title: "Media Sharing Service",
      description: "The Media Sharing Service was built using C# and .NET Core, providing a platform for users to create accounts, upload, download, and share media files. The service used Azure Cloud Services, with App Service for hosting, CosmosDB for storing metadata, and Blob Storage for media file handling.",
      // image: "/assets/media_sharing.webp",
      link: "https://github.com/simarjeetss/MediaSharingService",
      alt: "Media Sharing Service Project"
    },
    {
      id: 6,
      title: "Face Recognition-Based Image Separator",
      description: "The Face Recognition-Based Image Separator project utilized Python, OpenCV, and dlib to classify and segregate images based on facial recognition. It implemented one-shot learning for identifying individuals with minimal data samples and automatically sorted images into individual, group, and unknown categories.",
      // image: "/assets/image.png",
      link: "https://github.com/simarjeetss/FaceRecognitionImageSeparator",
      alt: "Face Recognition Project"
    }
  ];

  const getBadge = (projectId) => {
    if (projectId === 1) {
      return (
        <span className="inline-flex items-center px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-xs font-medium rounded-full border border-gray-300 dark:border-gray-600">
          🏆 Hackathon Winner
        </span>
      );
    } else if (projectId === 2) {
      return (
        <span className="inline-flex items-center px-3 py-1 bg-blue-600 dark:bg-blue-400 text-white dark:text-black text-xs font-medium rounded-full border border-gray-300 dark:border-gray-600">
          🏆 Hackathon Winner
        </span>
      );
    }
    return null;
  };

  return (
    <main className="mt-20">
      <div className="max-w-4xl mx-auto px-8">
        <section className="py-8">
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="border border-border rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="p-6">
                  {getBadge(project.id) && (
                    <div className="mb-4">
                      {getBadge(project.id)}
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-4 text-text">{project.title}</h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:text-accent-hover transition-colors duration-200">
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Projects; 