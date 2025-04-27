import axios from 'axios';
import { ArrowLeft, Github, Loader, TableProperties, Tv } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('/projects.json')
      .then((res) => {
        const projectData = res.data.find((p) => p.slug === slug);
        setProject(projectData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching project data:', error);
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [slug]);

  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader size={25} className="text-primary2 animate-spin" />
      </div>
    );
  }

  // Project not found state
  if (!project) {
    return (
      <div className="max-w-2xl m-auto p-8 my-6">
        <div className="bg-white shadow-lg rounded-xl dark:bg-dark-lite dark:text-white-deep p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Project Not Found</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Sorry, we couldn&apos;t find the project you&apos;re looking for. It might have been removed or the URL might be incorrect.</p>
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-primary2 hover:text-primary-dark dark:hover:text-primary-light font-semibold mx-auto">
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    );
  }

  // Project found - render details
  return (
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-xl my-6 dark:bg-dark-lite dark:text-white-deep">
      {/* 🔙 Back Button */}
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary2 dark:hover:text-primary2 mb-6">
        <ArrowLeft size={20} />
        <span>Back</span>
      </button>

      {/* Title and Description */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{project?.heading}</h1>
        <p className="text-lg text-gray-600 mt-4 dark:text-gray-300 text-justify">{project?.paragraph}</p>
      </div>

      {/* Project Image */}
      <div className="flex justify-center mb-8">
        <img src={project?.image} alt={`${project?.heading} Screenshot`} className="rounded-lg shadow-2xl w-full max-w-3xl" />
      </div>

      {/* Project Overview */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">Project Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="text-lg text-gray-700 dark:text-gray-300">
            <p>
              <strong className="font-semibold">Category:</strong> {project?.category}
            </p>
            <p>
              <strong className="font-semibold">Launch Date:</strong> {project?.launchDate}
            </p>
            <p>
              <strong className="font-semibold">Author:</strong> {project?.author}
            </p>
          </div>
          <div className="text-lg text-gray-700 dark:text-gray-300">
            <p>
              <strong className="font-semibold">Project Type:</strong> {project?.projectType}
            </p>
            <p>
              <strong className="font-semibold">Platforms:</strong> {project?.platforms.join(', ')}
            </p>
          </div>
          <div className="text-lg text-gray-700 dark:text-gray-300">
            <p>
              <strong className="font-semibold">Technologies:</strong> {project?.technologies?.join(', ')}
            </p>
          </div>
        </div>
      </div>

      {/* 🔥 Challenges Faced */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">Challenges Faced</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 mt-4">
          {project?.challenges?.map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))}
        </ul>
      </div>

      {/* Technologies Used */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">Technologies Used</h2>
        <div className="flex flex-wrap gap-4 mt-6">
          {project?.tools?.map((tool, index) => (
            <span key={index} className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 text-sm font-medium">
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* 🚀 Future Plans */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">Future Plans</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 mt-4">
          {project?.futurePlans?.map((plan, index) => (
            <li key={index}>{plan}</li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mt-8 space-x-6">
        <a href={project?.live} className="flex items-center text-lg font-semibold text-primary2" target="_blank" rel="noopener noreferrer">
          <Tv size={24} className="mr-2 text-dark-deep dark:text-white" />
          Live Preview
        </a>
        <a href={project?.github} className="flex items-center text-lg font-semibold text-primary2" target="_blank" rel="noopener noreferrer">
          <Github size={24} className="mr-2 text-dark-deep dark:text-white" />
          GitHub Repository
        </a>
      </div>

      {/* Documentation Link */}
      <div className="mt-4 md:mt-8 text-center">
        <a href={project?.details} className="text-lg font-semibold text-primary2 flex items-center justify-center gap-2 hover:underline" target="_blank" rel="noopener noreferrer">
          <TableProperties size={24} className="text-dark-deep dark:text-white" />
          <span>Detailed Documentation</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
