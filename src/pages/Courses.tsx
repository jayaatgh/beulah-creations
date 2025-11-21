import { useState } from "react";
import { motion } from "framer-motion";
import { CourseCard } from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Import course images
import browniesImg from "@/assets/courses/brownies.jpg";
import cupcakesImg from "@/assets/courses/cupcakes.jpg";
import teaCakeImg from "@/assets/courses/tea-cake.jpg";
import plumCakeImg from "@/assets/courses/plum-cake.jpg";
import cakeMasterImg from "@/assets/courses/cake-masterclass.jpg";
import cookiesImg from "@/assets/courses/cookies.jpg";
import cursiveImg from "@/assets/courses/cursive.jpg";
import spokenEnglishImg from "@/assets/courses/spoken-english.jpg";

interface CoursesProps {
  onOpenEnrollModal: () => void;
}

const allCourses = [
  {
    title: "Brownie Workshop",
    description: "Learn fudgy, gooey brownies and signature toppings — one-day hands-on delight.",
    duration: "1 Day",
    image: browniesImg,
    category: "Baking",
    isTrending: true,
  },
  {
    title: "Cupcake Workshop",
    description: "Master classic sponges, buttercream swirls & photogenic piping.",
    duration: "1 Day",
    image: cupcakesImg,
    category: "Baking",
    isTrending: true,
  },
  {
    title: "Tea Cake Workshop",
    description: "Light, airy tea cakes perfect for gatherings — flavors & finish.",
    duration: "1 Day",
    image: teaCakeImg,
    category: "Baking",
  },
  {
    title: "Plum Cake Workshop",
    description: "Festive plum cake techniques & moist crumb secrets.",
    duration: "1 Day",
    image: plumCakeImg,
    category: "Baking",
  },
  {
    title: "Cake Master Class",
    description: "Decorating, tiers, ganache, and professional finishing touches.",
    duration: "2 Days",
    image: cakeMasterImg,
    category: "Baking",
  },
  {
    title: "Cookies Workshop",
    description: "Crisp edges, chewy centers — cookies for every occasion.",
    duration: "1 Day",
    image: cookiesImg,
    category: "Baking",
  },
  {
    title: "Cursive Handwriting",
    description: "Elegant strokes, everyday clarity — perfect your cursive in a week.",
    duration: "7 Days",
    image: cursiveImg,
    category: "Handwriting",
  },
  {
    title: "Spoken English",
    description: "Conversational confidence, pronunciation, and real-life practice.",
    duration: "1 Month",
    image: spokenEnglishImg,
    category: "Language",
  },
];

const categories = ["All", "Baking", "Handwriting", "Language"];

export const Courses = ({ onOpenEnrollModal }: CoursesProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses =
    selectedCategory === "All"
      ? allCourses
      : allCourses.filter((course) => course.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-coco text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              All Courses
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Discover our comprehensive range of baking workshops, art classes, 
              and skill development programs. All courses come with government-registered 
              certificates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer px-6 py-2 text-base hover:scale-105 transition-transform"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </motion.div>
      </section>

      {/* Courses Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <CourseCard key={course.title} {...course} delay={index * 0.1} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-muted-foreground">
              No courses found in this category.
            </p>
          </motion.div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary to-coco text-primary-foreground rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Enroll now and receive a government-registered certificate upon completion. 
              No prices shown — just pure quality education at affordable rates.
            </p>
            <Button
              onClick={onOpenEnrollModal}
              size="lg"
              variant="secondary"
              className="bg-creme text-choco hover:bg-creme/90 text-lg px-12 animate-pulse"
            >
              Enroll Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
