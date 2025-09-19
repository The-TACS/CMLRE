import { useState } from "react";
import { 
  Menu, X, Waves, Home, BookOpen, Database, Info, Phone, Fish 
} from "lucide-react"; 
import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } =
    useAuth0();

  const navigation = [
    { name: "Home", href: "/", icon: <Home className="h-4 w-4 mr-2" /> },
    { name: "Research", href: "/research", icon: <BookOpen className="h-4 w-4 mr-2" /> },
    { name: "Data Platform", href: "/platform", icon: <Database className="h-4 w-4 mr-2" /> },
    { name: "Managing Modules", href: "map/index.html", icon: <Fish className="h-4 w-4 mr-2" />, external: true }, // ✅ Fish icon + new tab
    { name: "About", href: "/about", icon: <Info className="h-4 w-4 mr-2" /> },
    { name: "Contact", href: "/contact", icon: <Phone className="h-4 w-4 mr-2" /> },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-ocean rounded-lg shadow-glow">
              <Waves className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">CMLRE</h1>
              <p className="text-xs text-muted-foreground">
                Marine Living Resources & Ecology
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-105"
                >
                  {item.icon}
                  {item.name}
                </a>
              ) : item.href.startsWith("http") ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-105"
                >
                  {item.icon}
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-105"
                >
                  {item.icon}
                  {item.name}
                </Link>
              )
            )}

            {/* If not logged in → show Login */}
            {!isAuthenticated && !isLoading && (
              <Button
                variant="outline"
                className="hover:shadow-md transition-all duration-300"
                onClick={() => loginWithRedirect()}
              >
                Login
              </Button>
            )}

            {/* If logged in → show profile avatar */}
            {isAuthenticated && user && (
              <div className="relative">
                <img
                  src={user.picture}
                  alt={user.name}
                  className="h-10 w-10 rounded-full cursor-pointer border border-border"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                />
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-900 border border-border rounded-xl shadow-lg p-4 z-50">
                    <div className="flex items-center space-x-3">
                      <img
                        src={user.picture}
                        alt={user.name}
                        className="h-12 w-12 rounded-full"
                      />
                      <div>
                        <h2 className="text-sm font-semibold">{user.name}</h2>
                        <p className="text-xs text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </div>

                    <hr className="my-3 border-border" />

                    <div className="space-y-2">
                      <Link to="/profile">
                        <Button
                          variant="ghost"
                          className="w-full justify-start transition-all duration-300 hover:bg-gradient-ocean hover:shadow-ocean"
                        >
                          Your profile
                        </Button>
                      </Link>

                      <Link to="/portal-access">
                        <Button
                          variant="ghost"
                          className="w-full justify-start transition-all duration-300 hover:bg-gradient-ocean hover:shadow-ocean"
                        >
                          Portal Access
                        </Button>
                      </Link>

                      <Button
                        variant="ghost"
                        className="w-full justify-start transition-all duration-300 hover:bg-gradient-ocean hover:shadow-ocean"
                        onClick={() =>
                          logout({ returnTo: window.location.origin })
                        }
                      >
                        Log out
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) =>
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    {item.name}
                  </a>
                ) : item.href.startsWith("http") ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                )
              )}

              {!isAuthenticated && !isLoading && (
                <Button
                  variant="outline"
                  className="mt-2 w-fit"
                  onClick={() => loginWithRedirect()}
                >
                  Login
                </Button>
              )}

              {isAuthenticated && (
                <div className="flex flex-col space-y-2 mt-2">
                  <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start transition-all duration-300 hover:bg-gradient-ocean hover:shadow-ocean"
                    >
                      Your profile
                    </Button>
                  </Link>

                  <Link to="/portal-access" onClick={() => setIsMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start transition-all duration-300 hover:bg-gradient-ocean hover:shadow-ocean"
                    >
                      Portal Access
                    </Button>
                  </Link>

                  <Button
                    variant="ghost"
                    className="w-full justify-start transition-all duration-300 hover:bg-gradient-ocean hover:shadow-ocean"
                    onClick={() => {
                      setIsMenuOpen(false);
                      logout({ returnTo: window.location.origin });
                    }}
                  >
                    Logout
                  </Button>
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
