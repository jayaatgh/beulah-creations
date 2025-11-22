import { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Award, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/CourseCard";
import { Hero3D } from "@/components/Hero3D";

// Import course images
import browniesImg from "@/assets/courses/brownies.jpg";
import cupcakesImg from "@/assets/courses/cupcakes.jpg";
import teaCakeImg from "@/assets/courses/tea-cake.jpg";
import cakeMasterImg from "@/assets/courses/cake-masterclass.jpg";

gsap.registerPlugin(ScrollTrigger);

interface HomeProps {
  onOpenEnrollModal: () => void;
}

const trendingCourses = [
  {
    title: "Brownie Workshop",
    description: "Learn fudgy, gooey brownies and signature toppings — one-day hands-on delight.",
    duration: "1 Day",
    image: browniesImg,
    isTrending: true,
  },
  {
    title: "Cupcake Workshop",
    description: "Master classic sponges, buttercream swirls & photogenic piping.",
    duration: "1 Day",
    image: cupcakesImg,
    isTrending: true,
  },
  {
    title: "Tea Cake Workshop",
    description: "Light, airy tea cakes perfect for gatherings — flavors & finish.",
    duration: "1 Day",
    image: teaCakeImg,
  },
  {
    title: "Cake Master Class",
    description: "Decorating, tiers, ganache, and professional finishing touches.",
    duration: "2 Days",
    image: cakeMasterImg,
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    course: "Cake Master Class",
    text: "The course transformed my baking skills completely. Now I'm starting my own home bakery!",
    rating: 5,
  },
  {
    name: "Arun Kumar",
    course: "Brownie Workshop",
    text: "Learned amazing techniques in just one day. The brownies turn out perfect every time!",
    rating: 5,
  },
  {
    name: "Lakshmi Menon",
    course: "Cupcake Workshop",
    text: "Beautiful cupcakes and wonderful teaching. Worth every minute!",
    rating: 5,
  },
];

export const Home = ({ onOpenEnrollModal }: HomeProps) => {
  useEffect(() => {
    // GSAP ScrollTrigger animations
    gsap.from(".courses-section", {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".courses-section",
        start: "top 80%",
      },
    });

    gsap.from(".about-section", {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
      },
    });
  }, []);

  const scrollToCourses = () => {
    document.querySelector(".courses-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Hero3D />
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full"
            >
              <span className="text-primary font-medium">✨ Government Certified Training</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-creme leading-tight">
              Baking skills, warm hearts — learn with Beulah
            </h1>
            
            <p className="text-xl md:text-2xl text-creme/90 mb-8 leading-relaxed">
              Hands-on online baking courses, art classes, and certified programs — 
              from Pudukottai to your kitchen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToCourses}
                size="lg"
                variant="secondary"
                className="bg-creme text-choco hover:bg-creme/90 text-lg px-8"
              >
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                onClick={onOpenEnrollModal}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8"
              >
                Enroll Now
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-creme/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-creme/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Trending Courses */}
      <section className="courses-section py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Trending Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start your baking journey with our most popular workshops
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingCourses.map((course, index) => (
              <CourseCard key={course.title} {...course} delay={index * 0.1} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button
              onClick={onOpenEnrollModal}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              View All Courses
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                About Beulah Academy
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Beulah Skill Training Academy is a warm, community-driven training 
                centre based in Pudukottai, Tamil Nadu. We teach practical baking 
                skills, art, cursive handwriting, and spoken English — all with 
                government-registered certificates and affordable pricing.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Learn at your pace, bake with joy. Our mission is to empower 
                individuals with skills that open doors to new opportunities and 
                sweet futures.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                { icon: Award, title: "Certified", desc: "Government-registered certificates" },
                { icon: Heart, title: "Community", desc: "Warm, supportive learning" },
                { icon: Star, title: "Affordable", desc: "Quality education for all" },
                { icon: Award, title: "Expert", desc: "Professional instructors" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-6 rounded-2xl shadow-warm hover:shadow-glow transition-shadow"
                >
                  <item.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real stories from our baking community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-card p-8 rounded-2xl shadow-warm hover:shadow-glow transition-shadow"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-heading font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.course}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-coco text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of students who have transformed their skills with Beulah Academy
            </p>
            <Button
              onClick={onOpenEnrollModal}
              size="lg"
              variant="secondary"
              className="bg-creme text-choco hover:bg-creme/90 text-lg px-12"
            >
              Enroll Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
