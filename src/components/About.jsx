import React from 'react';

const About = () => {
  const features = [
    {
      icon: 'leaf',
      title: '100% Pure Ceylon',
      description: 'Authentic Ceylon tea from the finest estates'
    },
    {
      icon: 'award',
      title: 'Premium Quality',
      description: 'Carefully selected and processed tea leaves'
    },
    {
      icon: 'heart',
      title: 'Crafted with Care',
      description: 'Traditional methods meet modern standards'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#1a1a1a] to-black border-t border-green-500" id="about">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            
            <h2 className="mb-4 text-5xl font-bold text-white">
              Our <span className="text-green-500">Story</span>
            </h2>
            <div className="w-24 h-1 mx-auto mb-6 bg-green-500"></div>
            <p className="max-w-2xl mx-auto text-gray-400">
              Discover the authentic taste of Ceylon's finest teas
            </p>
          </div>
          
          <div className="bg-[#2a2a2a] p-10 rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
            <h3 className="mb-6 text-3xl font-bold text-green-400">
              Pure Ceylon Tea, Crafted with Passion
            </h3>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-300">
                Nestled in the lush, vibrant hills of Sri Lanka, LAVENDRA TEA brings
                you the essence of Ceylon's finest teas. With a dedication to
                tradition and quality, we proudly offer a rich collection of
                premium, ethically sourced teas that embody the purest flavors of
                Sri Lanka.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-300">
                Our commitment to excellence and sustainability ensures
                that every cup of LAVENDRA TEA delivers an unforgettable experience,
                infused with heritage and crafted with care. Discover the true taste
                of Ceylon with us.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-[#333] hover:bg-[#383838] transition-colors duration-300"
                >
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20">
                      <i className={`text-2xl fas fa-${feature.icon} text-green-400`}></i>
                    </div>
                    <h4 className="text-xl font-semibold text-green-400">{feature.title}</h4>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;