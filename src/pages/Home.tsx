import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-cake.jpg";

interface HomeProps {
  onOpenEnrollModal: () => void;
}

export const Home = ({ onOpenEnrollModal }: HomeProps) => {
  return (
    <main className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Beulah Skill Training Academy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-choco/70 to-choco/50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl md:text-6xl font-bold text-creme mb-4"
            >
              Home page
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-creme/90 text-lg md:text-xl"
            >
              Header - logo, navigate - shop, book
            </motion.p>
          </div>
        </div>
      </section>

      {/* Three Column Layout */}
      <section className="py-12 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 space-y-6"
            >
              <div className="bg-card rounded-2xl p-6 shadow-warm">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  Shop now
                </h3>
                <div className="space-y-3">
                  <Link to="/order" className="block text-muted-foreground hover:text-primary transition-colors">
                    About our products
                  </Link>
                  <Link to="/order" className="block text-muted-foreground hover:text-primary transition-colors pl-4">
                    brownie
                  </Link>
                  <Link to="/order" className="block text-muted-foreground hover:text-primary transition-colors pl-4">
                    cupcake
                  </Link>
                  <Link to="/order" className="block text-muted-foreground hover:text-primary transition-colors pl-4">
                    Cake
                  </Link>
                  <Link to="/order" className="block text-muted-foreground hover:text-primary transition-colors font-semibold">
                    Order now
                  </Link>
                  <button className="block text-muted-foreground hover:text-primary transition-colors font-semibold">
                    Contact
                  </button>
                </div>
              </div>
            </motion.aside>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-12"
            >
              {/* All About Baking */}
              <div className="bg-card rounded-2xl p-8 shadow-warm">
                <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                  All about baking
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Beulah Skill Training Academy is a warm, community-driven training centre 
                  based in Pudukottai, Tamil Nadu. We teach practical baking skills, art, 
                  cursive handwriting, and spoken English — all with government-registered 
                  certificates and affordable pricing.
                </p>
                
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  what we deliver - 2 scrolls?
                </h3>
                
                {/* Section A - Fresh Treats */}
                <div className="mb-6 p-6 bg-muted/30 rounded-xl">
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-3">
                    A - fresh treats
                  </h4>
                  <p className="text-muted-foreground">
                    Discover our delightful range of freshly baked goods including brownies, 
                    blondies, cupcakes, and custom celebration cakes. Each product is crafted 
                    with love and the finest ingredients, available for local pickup in Pudukottai.
                  </p>
                </div>

                {/* Section B - Skills That Last a Lifetime */}
                <div className="p-6 bg-muted/30 rounded-xl">
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-3">
                    B- Skills That Last a Lifetime
                  </h4>
                  <p className="text-muted-foreground">
                    Our comprehensive courses teach you professional baking techniques, artistic 
                    skills, elegant cursive handwriting, and confident spoken English. Every 
                    completed course comes with a government-registered certificate to boost 
                    your career prospects.
                  </p>
                </div>
              </div>

              {/* Testimonials */}
              <div className="bg-card rounded-2xl p-8 shadow-warm">
                <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                  Testimonials
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      name: "Priya Kumar",
                      course: "Cake Master Class",
                      quote: "The best baking course I've ever taken! The instructors are patient and the techniques are professional.",
                      rating: 5,
                    },
                    {
                      name: "Arun Selvam",
                      course: "Brownie Workshop",
                      quote: "Learned so much in just one day. Now my family can't get enough of my brownies!",
                      rating: 5,
                    },
                  ].map((testimonial, index) => (
                    <div
                      key={index}
                      className="p-4 bg-muted/20 rounded-xl"
                    >
                      <div className="flex items-center mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-3 italic text-sm">
                        "{testimonial.quote}"
                      </p>
                      <div className="border-t border-border pt-3">
                        <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.course}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-card rounded-2xl p-8 shadow-warm">
                <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                  FAQ - small space is enough
                </h2>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Do you provide certificates?</h4>
                    <p className="text-sm text-muted-foreground">Yes — all our completed courses come with government-registered certificates.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Are courses online?</h4>
                    <p className="text-sm text-muted-foreground">Yes — all listed courses are delivered online with live sessions and recorded materials.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">How do I enroll?</h4>
                    <p className="text-sm text-muted-foreground">Click Enroll Now and fill the short Enrollment Form that opens in a popup.</p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-card rounded-2xl p-8 shadow-warm">
                <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                  Contact
                </h2>
                <p className="text-muted-foreground mb-4">
                  Get in touch with us for any questions or inquiries.
                </p>
                <Button onClick={onOpenEnrollModal} className="w-full">
                  Contact Us
                </Button>
              </div>
            </motion.div>

            {/* Right Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 space-y-6"
            >
              <div className="bg-primary/10 rounded-2xl p-6 shadow-warm border border-primary/20">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  Book your workshop
                </h3>
                <Button onClick={onOpenEnrollModal} className="w-full mb-4">
                  Enroll Now <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-warm">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  About the workshop
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our hands-on workshops are designed to give you practical skills 
                  you can use immediately. Learn from experienced instructors in 
                  small, focused sessions.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-warm">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  Offered learnings
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Baking Workshops (Brownies, Cupcakes, Cakes)</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Art Classes</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Cursive Handwriting (7 days)</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Spoken English (1 month)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/10 rounded-2xl p-6 shadow-warm border border-primary/20">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  Book your workshop
                </h3>
                <Button onClick={onOpenEnrollModal} className="w-full">
                  Enroll Now <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-warm">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  Contact
                </h3>
                <Button onClick={onOpenEnrollModal} variant="outline" className="w-full">
                  Get in Touch
                </Button>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </main>
  );
};
