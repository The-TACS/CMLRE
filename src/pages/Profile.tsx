import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <div className="text-center py-10">Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="container mx-auto px-6 py-10">
        <div className="max-w-lg mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6">
          {/* User Info */}
          <div className="flex items-center space-x-4">
            <img
              src={user?.picture}
              alt={user?.name}
              className="h-16 w-16 rounded-full border border-border"
            />
            <div>
              <h2 className="text-lg font-semibold">{user?.name}</h2>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
            </div>
          </div>

          <hr className="my-4 border-border" />

          {/* Actions */}
          <div className="flex flex-col space-y-3">
             {/* Back to Home */}
            <Link to="/">
              <Button
                variant="ghost"
                className="w-full justify-start transition-all duration-300 hover:bg-gradient-ocean hover:shadow-ocean"
              >
                Back to Home
              </Button>
            </Link>
            
            {/* Portal Access */}
            <Link to="/portal-access">
              <Button
                variant="ghost"
                className="w-full justify-start transition-all duration-300 hover:bg-gradient-ocean hover:shadow-ocean"
              >
                Portal Access
              </Button>
            </Link>

           

            {/* Logout */}
            <Button
              variant="ghost"
              className="w-full justify-start transition-all duration-300 hover:bg-gradient-ocean hover:shadow-ocean"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log out
            </Button>
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
