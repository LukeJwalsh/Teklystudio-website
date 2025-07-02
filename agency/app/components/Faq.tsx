import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQS = () => {
  return (
    <div className="mt-10 md:py-10 bg-zinc-50 w-full rounded-3xl">
      <div className="p-10 md:p-4 md:px-20">
        <div className="text-3xl md:text-7xl font-bold text-black">
          Have questions?
        </div>
        <div className="font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
          Get answers.
        </div>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Tekly Studios?</AccordionTrigger>
            <AccordionContent>
              Tekly Studios is a technology solutions partner dedicated to helping businesses grow through innovative, scalable, and performance-driven digital products. 
              From robust DevOps infrastructure to fully custom applications and advanced AI integrations, we handle the entire development lifecycle so our clients can stay focused on what they do best — building their business.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>How do I get started with Tekly?</AccordionTrigger>
            <AccordionContent>
              Getting started is simple: reach out through our contact form or schedule a discovery call. 
              We’ll discuss your goals, current challenges, and what you’re hoping to achieve. 
              From there, our team will create a clear roadmap outlining recommended services, timelines, and milestones so you know exactly what to expect every step of the way.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>How does Tekly Studios approach pricing?</AccordionTrigger>
            <AccordionContent>
              Every business is unique, and so is every project we take on. 
              We don’t believe in cookie-cutter pricing — instead, we tailor each engagement to your specific needs and scope. 
              Our transparent pricing model ensures there are no hidden fees, and you’ll always have a clear understanding of what’s included. 
              Whether you’re launching an MVP, scaling infrastructure, or deploying an AI solution, we’ll work with you to find a pricing plan that aligns with your budget and goals.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>What kind of support can I expect?</AccordionTrigger>
            <AccordionContent>
              We pride ourselves on building long-term partnerships with our clients. 
              Tekly Studios offers ongoing support that extends beyond your launch date — whether you need technical troubleshooting, system monitoring, performance optimization, or future feature enhancements.
              Our dedicated team is available Monday through Friday, and for enterprise clients, we provide priority response times and proactive infrastructure monitoring.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>What makes Tekly Studios different?</AccordionTrigger>
            <AccordionContent>
              We combine technical expertise with real-world business insight. 
              Our team doesn’t just write code — we partner with you to solve meaningful problems, streamline workflows, and create solutions that truly support growth. 
              Plus, our emphasis on clear communication, reliable delivery, and scalable architecture means you’ll never feel left in the dark about where your project stands.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQS;
