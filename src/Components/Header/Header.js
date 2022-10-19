import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div>
      <Navbar className="bg-primary  flex justify-content-center">
        <Link className="text-white me-4" to="/">
          Home
        </Link>
        <Link className="text-white me-4" to="/book">
          Book
        </Link>
        <Link className="text-white me-4" to="/signup">
          signup
        </Link>
        {user ? (
          <button onClick={handleLogOut} className="bg-primary text-white me-4">
            Log Out
          </button>
        ) : (
          <>
            <Link className="text-white me-4" to="/login">
              Login
            </Link>
          </>
        )}

        {user?.email && <span className="text-white">{user?.email}</span>}
      </Navbar>
    </div>
  );
};

export default Header;
