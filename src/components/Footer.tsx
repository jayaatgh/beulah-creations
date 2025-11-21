import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const courses = [
    "Brownie Workshop",
    "Cupcake Workshop",
    "Tea Cake Workshop",
    "Plum Cake Workshop",
    "Cake Master Class",
    "Cookies Workshop",
    "Cursive Handwriting",
    "Spoken English",
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <img
              src={logo}
              alt="Beulah"
              className="h-12 w-auto mb-4"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Beulah Skill Training Academy is a warm, community-driven training
              centre in Pudukottai, Tamil Nadu. We teach practical baking skills,
              art, cursive handwriting, and spoken English.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/order"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Our Courses
            </h3>
            <ul className="space-y-2">
              {courses.slice(0, 6).map((course) => (
                <li key={course}>
                  <span className="text-muted-foreground text-sm">{course}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Connect With Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Pudukottai, Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@beulahacademy.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  info@beulahacademy.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Instagram className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="https://instagram.com/beulahacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  @beulahacademy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              Fresh skills, sweeter futures — Beulah Skill Training Academy,
              Pudukottai
            </p>
            <p className="text-muted-foreground text-sm">
              © {currentYear} Beulah Skill Training Academy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
