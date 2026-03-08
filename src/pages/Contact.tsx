import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent! We'll be in touch soon.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[150px]" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Contact</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
                Let's build something <span className="gradient-text">together.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We are always open to new collaborations with visionary brands and organizations. If you are interested in exploring creative projects with us, feel free to reach out.
              </p>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-sm"><span className="text-foreground font-medium">Email:</span> hello@twovirtualmedia.com</p>
                <p className="text-sm"><span className="text-foreground font-medium">Based in:</span> Amsterdam & London</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <form onSubmit={handleSubmit} className="glass rounded-xl p-8 space-y-6">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                  <Input required placeholder="Your name" className="bg-muted/50 border-border/50 focus:border-primary" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input required type="email" placeholder="your@email.com" className="bg-muted/50 border-border/50 focus:border-primary" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Company</label>
                  <Input placeholder="Your company" className="bg-muted/50 border-border/50 focus:border-primary" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea required placeholder="Tell us about your project..." rows={5} className="bg-muted/50 border-border/50 focus:border-primary" />
                </div>
                <Button type="submit" disabled={loading} className="w-full rounded-full bg-primary hover:bg-primary/80 text-primary-foreground">
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
