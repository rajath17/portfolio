import React, { useState } from 'react';
import { Github, ExternalLink, Eye, Code2, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Gesture-Based Brightness Control",
      description: "Innovative computer vision solution that controls screen brightness through hand gestures, utilizing MediaPipe for real-time gesture recognition.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
      category: "computer-vision",
      github: "#",
      demo: "#",
      highlights: ["Real-time gesture recognition", "Smooth brightness transitions", "User-friendly interface"]
    },
    {
      id: 2,
      title: "Virtual Mouse Control",
      description: "Advanced hand-tracking system that replaces traditional mouse input, enabling cursor control through finger movements and gesture-based clicking.",
      image: "https://images.pexels.com/photos/7688335/pexels-photo-7688335.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "MediaPipe", "OpenCV", "PyAutoGUI"],
      category: "computer-vision",
      github: "#",
      demo: "#",
      highlights: ["Precise cursor control", "Multi-gesture support", "Cross-platform compatibility"]
    },
    {
      id: 3,
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for data visualization and analysis, featuring real-time charts and comprehensive reporting capabilities.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "Pandas", "Plotly", "Dash"],
      category: "data-analytics",
      github: "#",
      demo: "#",
      highlights: ["Interactive visualizations", "Real-time data processing", "Customizable reports"]
    },
    {
      id: 4,
      title: "Machine Learning Pipeline",
      description: "End-to-end ML pipeline for automated model training, evaluation, and deployment with comprehensive monitoring capabilities.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "Scikit-learn", "TensorFlow", "MLflow"],
      category: "machine-learning",
      github: "#",
      demo: "#",
      highlights: ["Automated workflows", "Model versioning", "Performance monitoring"]
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'computer-vision', label: 'Computer Vision', count: projects.filter(p => p.category === 'computer-vision').length },
    { id: 'data-analytics', label: 'Data Analytics', count: projects.filter(p => p.category === 'data-analytics').length },
    { id: 'machine-learning', label: 'Machine Learning', count: projects.filter(p => p.category === 'machine-learning').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      'Python': 'bg-green-500/20 text-green-400 border-green-500/30',
      'OpenCV': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'MediaPipe': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'Computer Vision': 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
      'PyAutoGUI': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      'Pandas': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      'Plotly': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
      'Dash': 'bg-red-500/20 text-red-400 border-red-500/30',
      'Scikit-learn': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
      'TensorFlow': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
      'MLflow': 'bg-teal-500/20 text-teal-400 border-teal-500/30'
    };
    return colors[tech] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore my portfolio of innovative AI/ML projects that demonstrate technical expertise and creative problem-solving
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-gray-800/50 text-gray-400 border-gray-600 hover:border-blue-500/50 hover:text-white'
              }`}
            >
              <Filter size={16} />
              <span>{filter.label}</span>
              <span className="bg-gray-700 text-xs px-2 py-1 rounded-full">{filter.count}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      className="bg-gray-800/90 text-white p-3 rounded-full hover:bg-blue-500 transition-colors duration-200"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.demo}
                      className="bg-gray-800/90 text-white p-3 rounded-full hover:bg-purple-500 transition-colors duration-200"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="text-sm text-gray-400 mb-6 space-y-1">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex-1 flex items-center justify-center space-x-2 bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  >
                    <Code2 size={16} />
                    <span>View Code</span>
                  </a>
                  <a 
                    href={project.demo}
                    className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:scale-105 transition-transform duration-200"
                  >
                    <Eye size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full hover:scale-105 transition-transform duration-200"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;