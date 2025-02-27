"use client";
import AgentPulse from "@/components/AgentPulse";
import YoutubeVideoForm from "@/components/YoutubeVideoForm";
import { Brain, MessagesSquare, Video } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import BackgroundBeams from "@/components/ui/background-beams";

export default function Home() {
  const features = [
    {
      title: "AI Analysis",
      description:
        "Get deep insights into your video content with our advanced AI analysis. Understand viewer engagement and content quality.",
      icon: Brain,
      iconBg: "bg-blue-600",
      iconColor: "text-white",
    },
    {
      title: "Content Optimization",
      description:
        "Optimize your video content for better reach and engagement with AI-powered recommendations.",
      icon: Brain,
      iconBg: "bg-green-600",
      iconColor: "text-white",
    },
    {
      title: "Engagement Insights",
      description:
        "Understand how your audience interacts with your content and improve your strategy.",
      icon: Brain,
      iconBg: "bg-purple-600",
      iconColor: "text-white",
    },
  ];
  const steps = [
    {
      title: "1. Connect Your Cntent",
      description: "Share your Youtube video URL and let agent get to work",
      icon: Video,
    },
    {
      title: "2. AI Agent Analysis",
      description: "Your personal agent analysis aspect of ypur content",
      icon: Brain,
    },
    {
      title: "3. Receive Intelligence",
      description: "Get actionable insights and strategic reccommendations",
      icon: MessagesSquare,
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, y: 0, opacity: 1, rotate: 360 });
    }
  }, [controls, inView]);
  return (
    <div className="min-h-screen" ref={ref}>
      {/* Hero section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 max-w-6xl z-[99]">
          <div className="flex flex-col items-center gap-10 text-center mb-12">
            <motion.div
              className="z-[99]"
              initial={{ y: -100, opacity: 0 }} // Start from above with opacity 0
              animate={{ y: 0, opacity: 1 }} // Drop into place
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 10,
                delay: 1,
              }} // Bouncy effect
            >
              <AgentPulse size="large" color="green" animate="animate-bounce" />
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#9ae9e9] mb-6 z-[99]">
              Meet Your Personal{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-indigo-300 bg-clip-text text-transparent">
                AI Content Agent
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto z-[99]">
              Transform your video content with AI-powered analysis,
              transcription and insights. Get started in milliseconds
            </p>
            <motion.div
              className="w-full max-w-lg mx-auto z-[99]"
              initial={{ x: "0", y: "-6000%", opacity: 0 }}
              animate={controls}
              transition={{
                ease: "easeInOut",
                duration: 0.3,
                type: "spring",
                stiffness: 50,
                damping: 10,
              }} // Bouncy effect
            >
              <YoutubeVideoForm />
            </motion.div>
          </div>
        </div>

        <BackgroundBeams className="z-1" />
      </section>

      {/* Features section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Powerful Features for Content Creators
          </h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${feature.iconBg}`}
                  >
                    <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* How it works section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Your AI Agent in 3 Simple Steps
          </h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Footer section */}
      {/* Footer section */}
      <section className="py-12 px-4 md:px-0 bg-slate-800">
        <div className="container mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-white mb-2">
            Ready To Meet Your AI Content Agent?
          </h2>
          <p className="text-base text-blue-50 max-w-2xl mx-auto mb-2">
            Join creators leveraging AI to unlock content insights and optimize
            their strategy.
          </p>

          {/* Call-to-Action Button */}
          {/* <a
            href="#"
            className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-600 transition duration-300"
          >
            Get Started for Free
          </a> */}

          {/* Social Media Links */}
          <div className="flex justify-center mt-4 space-x-6">
            <a href="#" className="text-white hover:text-indigo-400">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:text-indigo-400">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:text-indigo-400">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:text-indigo-400">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          </div>

          {/* Footer Navigation */}
          <div className="mt-8">
            <ul className="flex justify-center space-x-6 text-blue-200 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm mt-6">
            &copy; {new Date().getFullYear()} Tubify. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}
