import { motion } from "framer-motion";
import { ShoppingBag, Package, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import product images
import browniesImg from "@/assets/courses/brownies.jpg";
import blondiesImg from "@/assets/products/blondies.jpg";
import cupcakesImg from "@/assets/courses/cupcakes.jpg";
import cakeImg from "@/assets/products/celebration-cake.jpg";
import cookiesImg from "@/assets/courses/cookies.jpg";
import giftBoxImg from "@/assets/products/gift-box.jpg";

interface OrderProps {
  onOpenOrderModal: () => void;
}

const products = [
  {
    category: "Brownies",
    items: [
      {
        name: "Classic Fudge Brownies",
        description: "Rich, gooey chocolate brownies with a perfect crackly top",
        image: browniesImg,
      },
    ],
  },
  {
    category: "Blondies",
    items: [
      {
        name: "Vanilla Blondies",
        description: "Golden vanilla brownies with white chocolate chips",
        image: blondiesImg,
      },
    ],
  },
  {
    category: "Cupcakes",
    items: [
      {
        name: "Assorted Cupcakes",
        description: "Beautiful cupcakes with buttercream frosting in various flavors",
        image: cupcakesImg,
      },
    ],
  },
  {
    category: "Cakes",
    items: [
      {
        name: "Celebration Cakes",
        description: "Custom cakes for all occasions — birthdays, weddings, events",
        image: cakeImg,
      },
    ],
  },
  {
    category: "Cookies",
    items: [
      {
        name: "Cookie Assortment",
        description: "Mix of chocolate chip, oatmeal, and sugar cookies",
        image: cookiesImg,
      },
    ],
  },
  {
    category: "Gift Boxes",
    items: [
      {
        name: "Baked Goods Gift Box",
        description: "Curated selection of our finest treats, beautifully packaged",
        image: giftBoxImg,
      },
    ],
  },
];

const ProductCard = ({ name, description, image, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -8 }}
    className="group bg-card rounded-2xl overflow-hidden shadow-warm hover:shadow-glow transition-all duration-300"
  >
    <div className="relative h-64 overflow-hidden">
      <motion.img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.6 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-choco/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="p-6">
      <h3 className="font-heading text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
        {name}
      </h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  </motion.div>
);

export const Order = ({ onOpenOrderModal }: OrderProps) => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-coco to-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ShoppingBag className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Order Baked Goods
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Freshly baked treats delivered with love. From brownies to custom cakes, 
              we've got your sweet cravings covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="bg-muted py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="flex items-center gap-3">
              <Package className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold">Local Pickup Available</p>
                <p className="text-sm text-muted-foreground">Pudukottai, Tamil Nadu</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Gift className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold">Custom Orders Welcome</p>
                <p className="text-sm text-muted-foreground">Tell us your requirements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      {products.map((category, categoryIndex) => (
        <section key={category.category} className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
              {category.category}
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.items.map((item, itemIndex) => (
              <ProductCard
                key={item.name}
                {...item}
                delay={itemIndex * 0.1}
              />
            ))}
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary to-coco text-primary-foreground rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Place Your Order?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Fill out our order form and we'll get back to you with pricing and 
            availability. Custom cakes and special requests are welcome!
          </p>
          <Button
            onClick={onOpenOrderModal}
            size="lg"
            variant="secondary"
            className="bg-creme text-choco hover:bg-creme/90 text-lg px-12 animate-pulse"
          >
            Order Now
          </Button>
        </motion.div>
      </section>

      {/* Additional Info */}
      <section className="container mx-auto px-4 pb-16">
        <div className="bg-card rounded-2xl p-8 shadow-warm">
          <h3 className="text-2xl font-heading font-semibold mb-4">
            Custom Cake Requests
          </h3>
          <p className="text-muted-foreground mb-4">
            Looking for something special? We love creating custom cakes for birthdays, 
            weddings, anniversaries, and all life's sweet moments. Share your vision 
            with us through the order form, and we'll bring it to life!
          </p>
          <p className="text-sm text-muted-foreground">
            Note: Custom orders require advance notice. Lead times vary based on 
            complexity and current order volume.
          </p>
        </div>
      </section>
    </div>
  );
};
