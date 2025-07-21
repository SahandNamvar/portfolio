import { useState } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="logo"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Sahand.Technologies
      </motion.div>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <motion.ul
        className={`nav-links ${menuOpen ? "active" : ""}`}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {["home", "projects", "contact"].map((link) => (
          <motion.li
            key={link}
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMenuOpen(false)} // close menu on link click
          >
            <a href={`#${link}`}>
              {" "}
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};
