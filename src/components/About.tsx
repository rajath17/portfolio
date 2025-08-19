import React, { useEffect, useState } from 'react';
import { Brain, Target, Lightbulb, Users } from 'lucide-react';

const About: React.FC = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    technologies: 0,
    experience: 0,
    achievements: 0
  });

  useEffect(() => {
    const targets = {
      projects: 15,
      technologies: 12,
      experience: 2,
      achievements: 5
    };

    const animateCounters = () => {
      Object.entries(targets).forEach(([key, target]) => {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCounters(prev => ({ ...prev, [key]: target }));
            clearInterval(timer);
          } else {
            setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
          }
        }, 30);
      });
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    });

    const aboutSection = document.getElementById('about');
    if (aboutSection) observer.observe(aboutSection);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI/ML Expertise",
      description: "Deep understanding of machine learning algorithms, neural networks, and computer vision technologies."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Problem-Focused",
      description: "Approach every challenge with analytical thinking and innovative solutions that deliver real impact."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Driver",
      description: "Passionate about pushing boundaries and exploring cutting-edge technologies in AI and data science."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Spirit",
      description: "Strong team player with excellent communication skills and adaptability in dynamic environments."
    }
  ];

  const stats = [
    { label: "Projects Completed", value: counters.projects, suffix: "+" },
    { label: "Technologies Mastered", value: counters.technologies, suffix: "+" },
    { label: "Years Learning", value: counters.experience, suffix: "+" },
    { label: "Key Achievements", value: counters.achievements, suffix: "" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Driven by curiosity and powered by innovation, I transform complex data into intelligent solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              As an AI/ML enthusiast currently pursuing B.E. in Artificial Intelligence and Machine Learning, 
              I'm passionate about leveraging technology to solve real-world problems. My journey began with 
              curiosity about how machines can learn and adapt, leading me to explore computer vision, 
              data analytics, and intelligent systems.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I believe in the power of continuous learning and staying at the forefront of technological 
              advancement. My projects reflect my commitment to innovation, combining theoretical knowledge 
              with practical implementation to create solutions that make a difference.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Whether working independently or as part of a team, I bring analytical thinking, 
              creative problem-solving, and a genuine enthusiasm for AI/ML to every project I undertake.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;