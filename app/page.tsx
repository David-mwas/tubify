import AgentPulse from "@/components/AgentPulse";
import YoutubeVideoForm from "@/components/YoutubeVideoForm";
import { Brain, MessagesSquare, Video } from "lucide-react";
import Image from "next/image";
import { title } from "process";

export default function Home() {
  const features = [
    {
      title: "AI Analysis",
      description:
        "Get dee insights into your video content with our advanced AI analysis.Understand viewr engagement and content quality",
      icon: Brain,
      iconBg: "bg-blue-600",
      iconColor: "text-white",
    },

    {
      title: "AI Analysis",
      description:
        "Get dee insights into your video content with our advanced AI analysis.Understand viewr engagement and content quality",
      icon: Brain,
      iconBg: "bg-blue-600",
      iconColor: "text-white",
    },

    {
      title: "AI Analysis",
      description:
        "Get dee insights into your video content with our advanced AI analysis.Understand viewr engagement and content quality",
      icon: Brain,
      iconBg: "bg-blue-600",
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
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center gap-10 text-center mb-12">
            <AgentPulse size="large" color="green" />
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 ">
              Meet Your Personal{" "}
              <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
                AI Content Agent
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Transform your video content with AI-powered analysis,
              transcription and insights. Get started in milliseconds
            </p>
            <YoutubeVideoForm />
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Powerful Features for Content Creators
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${feature.iconBg}`}
                  >
                    <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Your AI Agent in 3 Simple Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 roundex-xl bg-white shadow-md hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-400  rounded-full flex items-center justify-center mb-4 mx-auto ">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer section */}
      <section className="py-20 px-4 md:px-0 bg-gradient-to-r from-blue-600 to blue-400">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready To Meet Your AI Content Agent
          </h2>
          <p className="text-xl text-blue-50">
            Join creators leveraging AI to unlock content insights
          </p>
        </div>
      </section>
    </div>
  );
}
