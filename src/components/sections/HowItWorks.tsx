import { ShieldCheck, MonitorSmartphone, RefreshCcw } from "lucide-react";
import type { HowItWorkType } from "../../types/HowItWorkCard.types";

function HowItWorks() {
  const CardData = [
    {
      icon: <ShieldCheck className="size-8 text-primary mb-4" />,
      heading: "Request Permission",
      info: "The app uses native browser APIs to request screen sharing permission securely",
    },
    {
      icon: <MonitorSmartphone className="size-8 text-primary mb-4" />,
      heading: "Live Preview",
      info: "View a real-time preview of your shared screen along with resolution and display details.",
    },
    {
      icon: <RefreshCcw className="size-8 text-primary mb-4" />,
      heading: "Automatic Cleanup",
      info: "The app detects when sharing stops and safely releases all media resources.",
    },
  ];
  return (
    <section id="how-it-work" className="py-8 md:py-16 lg:py-24 px-6 ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black text-text-primary">
          How It Works
        </h2>
        <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
          A simple three-step process to verify your browser's screen sharing
          capabilities safely and locally.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {CardData.map((data, index) => (
            <Card
              icon={data.icon}
              heading={data.heading}
              info={data.info}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

function Card({ icon, heading, info, index }: HowItWorkType) {
  return (
    <div
      key={index}
      className="bg-white/70 hover:bg-gray-100 transition-all duration-250 ease-in-out backdrop-blur-sm border border-border rounded-xl p-6 text-left"
    >
      {icon}
      <h3 className="font-semibold text-lg text-text-primary">{heading}</h3>
      <p className="text-text-secondary text-sm mt-2">{info}</p>
    </div>
  );
}
