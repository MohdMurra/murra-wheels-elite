
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Car, Menu, User, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-secondary py-4 px-4 md:px-8 sticky top-0 z-50 border-b border-border/50">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2">
          <Car className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-white font-montserrat">
            Murra<span className="text-primary">Cars</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-sm font-medium ${isActive ? 'text-accent' : 'text-white hover:text-accent'} transition-colors`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/inventory" 
            className={({ isActive }) => 
              `text-sm font-medium ${isActive ? 'text-accent' : 'text-white hover:text-accent'} transition-colors`
            }
          >
            Inventory
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `text-sm font-medium ${isActive ? 'text-accent' : 'text-white hover:text-accent'} transition-colors`
            }
          >
            About Us
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `text-sm font-medium ${isActive ? 'text-accent' : 'text-white hover:text-accent'} transition-colors`
            }
          >
            Contact
          </NavLink>

          <Button variant="outline" size="sm" className="ml-4">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-white"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-secondary border-b border-border/50 animate-fade-in">
          <div className="container mx-auto py-4 px-4 flex flex-col gap-4">
            <NavLink 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => 
                `py-2 px-4 rounded ${isActive ? 'bg-muted text-accent' : 'text-white'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/inventory" 
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => 
                `py-2 px-4 rounded ${isActive ? 'bg-muted text-accent' : 'text-white'}`
              }
            >
              Inventory
            </NavLink>
            <NavLink 
              to="/about" 
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => 
                `py-2 px-4 rounded ${isActive ? 'bg-muted text-accent' : 'text-white'}`
              }
            >
              About Us
            </NavLink>
            <NavLink 
              to="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => 
                `py-2 px-4 rounded ${isActive ? 'bg-muted text-accent' : 'text-white'}`
              }
            >
              Contact
            </NavLink>
            <Button 
              variant="outline" 
              className="w-full mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
