import React, { useEffect, useState } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Engineering in CSE(Artificial Intelligence & Machine Learning)",
      institution: "Engineering College",
      location: "Chikkaballapur,Karnataka, India",
      period: "2022 - 2026",
      status: "Currently Pursuing",
      grade: "Expected: First Class",
      description: "Comprehensive program covering AI fundamentals, machine learning algorithms, deep learning, computer vision, and data science applications.",
      highlights: [
        "Cloud-driven intelligence for the future.",
        "Hands-on projects ",
        "Research focus on practical AI applications",
       
      ],
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      degree: "Pre-University College (PUC)",
      institution: "Siddeshwara PU College",
      location: "DavanagereKarnataka, India",
      period: "2020 - 2022",
      status: "Completed",
      grade: "74%",
      description: "Science stream with focus on Physics, Chemistry, Mathematics, and Biology, building strong analytical foundation.",
      highlights: [
       
        "Strong analytical and problem-solving skills",
        "Active participation in science competitions",
        
      ],
      icon: <Award className="w-6 h-6" />,
      color: "from-green-500 to-blue-500"
    },
    {
      id: 3,
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Kendriya Vidyalaya CRPF",
      location: "Yelahanka,Banglore,Karnataka, India",
      period: "2019 - 2020",
      status: "Completed",
      grade: "60%",
      description: "Strong academic performance across all subjects with particular excellence in mathematics and science.",
      highlights: [
        "Outstanding academic performance",
        "Leadership roles in school activities",
        "Strong foundation in core subjects",
        "Active participation in extracurricular activities"
      ],
      icon: <Award className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = parseInt(entry.target.getAttribute('data-id') || '0');
          setVisibleItems(prev => [...prev, id]);
        }
      });
    }, { threshold: 0.2 });

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Educational <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A progressive academic path building the foundation for AI/ML expertise and innovation
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-600 h-full rounded-full"></div>

          <div className="space-y-16">
            {educationData.map((education, index) => (
              <div
                key={education.id}
                data-id={education.id}
                className={`timeline-item flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                } transition-all duration-1000 ${
                  visibleItems.includes(education.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8'}`}>
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${education.color} text-white`}>
                        {education.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {education.degree}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 mt-2">
                          <div className="flex items-center text-gray-400">
                            <MapPin size={16} className="mr-2" />
                            <span className="text-sm">{education.institution}</span>
                          </div>
                          <div className="flex items-center text-gray-400">
                            <Calendar size={16} className="mr-2" />
                            <span className="text-sm">{education.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-300">Status:</span>
                        <span className={`text-sm px-3 py-1 rounded-full ${
                          education.status === 'Currently Pursuing' 
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                            : 'bg-green-500/20 text-green-400 border border-green-500/30'
                        }`}>
                          {education.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-gray-300">Grade:</span>
                        <span className="text-sm text-white font-medium">{education.grade}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {education.description}
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Highlights</h4>
                      <ul className="space-y-2">
                        {education.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start text-gray-400">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-sm leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="relative z-10 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-800 flex-shrink-0 my-4 lg:my-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse opacity-75"></div>
                </div>

                {/* Spacer for opposite side */}
                <div className="w-full lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Academic Focus Areas</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Artificial Intelligence',
                'Machine Learning',
                'Computer Vision',
                'Deep Learning',
                'Data Structures',
                'Cloud Computing',
                             ].map((area, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white px-6 py-3 rounded-full border border-blue-500/30 hover:border-blue-400 transition-all duration-300"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;