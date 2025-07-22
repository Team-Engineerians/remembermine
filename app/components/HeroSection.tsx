import React from "react";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] text-center px-4 overflow-hidden">
      {/* Background SVG */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <img
          src="/svgs/bg.svg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-8 mb-2 text-gray-300 text-sm">Because every voice matters and no memory deserves to fade.</div>
      <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">RememberMine.ai</h1>
      <h2 className="text-xl md:text-3xl font-semibold mb-8 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">Tell Your Story Once. Let It Echo Forever.</h2>
      <div className="flex items-center justify-center mb-8">
        <img
          src="/svgs/centerwave.svg"
          alt="Center Wave"
          className="w-32 h-32 object-contain"
        />
      </div>
      <button className="px-6 py-2 rounded-full bg-gray-900 text-white font-medium shadow hover:bg-gray-800 mb-8">Start A Conversation</button>
      <div className="text-white text-2xl font-bold mb-2">Just Talk.</div>
      <div className="text-gray-400 max-w-xl mx-auto text-sm">We’ll Take Care Of The Rest. With Gentle Guidance, Your AI Companion Helps Preserve Your Thoughts, Moments, And Memories Forever.</div>
    </section>
  );
};

export default HeroSection; 