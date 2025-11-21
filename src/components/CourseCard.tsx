import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Calendar, Award } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  image: string;
  isTrending?: boolean;
  delay?: number;
}

export const CourseCard = ({
  title,
  description,
  duration,
  image,
  isTrending = false,
  delay = 0,
}: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
      className="group relative bg-card rounded-2xl overflow-hidden shadow-warm hover:shadow-glow transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-choco/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {isTrending && (
          <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
            Trending
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-primary">
            <Award className="h-4 w-4" />
            <span>Certified</span>
          </div>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-2xl transition-colors duration-300 pointer-events-none" />
    </motion.div>
  );
};
