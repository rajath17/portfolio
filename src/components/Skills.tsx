import React, { useEffect, useState } from 'react';
import { Code, Database, Globe, Brain, BarChart, Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  const [animated, setAnimated] = useState(false);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 90, color: "from-green-400 to-green-600" },
        { name: "Java", level: 80, color: "from-orange-400 to-orange-600" },
        { name: "JavaScript", level: 75, color: "from-yellow-400 to-yellow-600" },
        { name: "SQL", level: 85, color: "from-blue-400 to-blue-600" }
      ]
    },
    {
      title: "AI/ML Technologies",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "TensorFlow", level: 85, color: "from-orange-400 to-red-500" },
        { name: "OpenCV", level: 90, color: "from-blue-400 to-purple-500" },
        { name: "MediaPipe", level: 88, color: "from-purple-400 to-pink-500" },
        { name: "Scikit-learn", level: 80, color: "from-green-400 to-blue-500" }
      ]
    },
    {
      title: "Data Analytics",
      icon: <BarChart className="w-6 h-6" />,
      skills: [
        { name: "Pandas", level: 85, color: "from-indigo-400 to-purple-500" },
        { name: "NumPy", level: 80, color: "from-blue-400 to-indigo-500" },
        { name: "Matplotlib", level: 75, color: "from-green-400 to-teal-500" },
        { name: "Plotly", level: 70, color: "from-pink-400 to-red-500" }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MySQL", level: 85, color: "from-blue-400 to-cyan-500" },
        { name: "MongoDB", level: 70, color: "from-green-400 to-emerald-500" },
        { name: "PostgreSQL", level: 75, color: "from-indigo-400 to-blue-500" }
      ]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "React", level: 80, color: "from-cyan-400 to-blue-500" },
        { name: "Node.js", level: 75, color: "from-green-400 to-emerald-500" },
        { name: "HTML/CSS", level: 85, color: "from-orange-400 to-red-500" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Cpu className="w-6 h-6" />,
      skills: [
        { name: "Git", level: 85, color: "from-red-400 to-pink-500" },
        { name: "Docker", level: 70, color: "from-blue-400 to-cyan-500" },
        { name: "AWS", level: 65, color: "from-yellow-400 to-orange-500" },
        { name: "Jupyter", level: 90, color: "from-orange-400 to-red-500" }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !animated) {
        setAnimated(true);
      }
    }, { threshold: 0.2 });

    const skillsSection = document.getElementById('skills');
    if (skillsSection) observer.observe(skillsSection);

    return () => observer.disconnect();
  }, [animated]);

  const CircularProgress: React.FC<{ skill: any; delay: number }> = ({ skill, delay }) => {
    const [progress, setProgress] = useState(0);
    const circumference = 2 * Math.PI * 45;

    useEffect(() => {
      if (animated) {
        setTimeout(() => {
          setProgress(skill.level);
        }, delay * 100);
      }
    }, [animated, delay, skill.level]);

    return (
      <div className="relative flex flex-col items-center group">
        <div className="relative w-24 h-24 mb-3">
          <svg className="transform -rotate-90 w-24 h-24">
            <circle
              cx="48"
              cy="48"
              r="45"
              stroke="currentColor"
              strokeWidth="6"
              fill="transparent"
              className="text-gray-700"
            />
            <circle
              cx="48"
              cy="48"
              r="45"
              stroke="url(#gradient)"
              strokeWidth="6"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - (progress / 100) * circumference}
              className="transition-all duration-1000 ease-out"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" className="text-blue-400" stopColor="currentColor" />
                <stop offset="100%" className="text-purple-400" stopColor="currentColor" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-bold text-white">{progress}%</span>
          </div>
        </div>
        <span className="text-sm text-gray-300 text-center group-hover:text-white transition-colors duration-200">
          {skill.name}
        </span>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains of AI, ML, and software development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-8">
                <div className="text-blue-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <CircularProgress
                    key={skillIndex}
                    skill={skill}
                    delay={categoryIndex * category.skills.length + skillIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Core Competencies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Computer Vision',
                'Machine Learning',
                'Data Science',
                'Deep Learning',
                'Neural Networks',
                'Algorithm Design',
                'Problem Solving',
                'Team Collaboration'
              ].map((competency, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white px-6 py-3 rounded-full border border-blue-500/30 hover:border-blue-400 transition-all duration-300"
                >
                  {competency}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;