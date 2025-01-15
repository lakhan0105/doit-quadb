import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, guestLogin } from "../features/auth/authSlice";
import { useNavigate } from "react-router";
import { Logo } from "../Components/index";

function Landing() {
  const { user, isLoading } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // function to handle guest login
  function handleGuestLogin() {
    if (user) {
      alert("already loggedin");
      return;
    }
    dispatch(guestLogin());
  }

  useEffect(() => {
    dispatch(getUser());
  }, []);

  useEffect(() => {
    if (user) {
      navigate("/all-tasks");
    }
  }, [user, navigate]);

  return (
    <section className="h-screen flex items-center px-10">
      {/* left */}
      <div>
        <div>
          <Logo />
          <p className="text-zinc-500 mt-1">
            Manage all your tasks in one place!
          </p>
          <button
            className="mt-4 border px-6 py-2 rounded bg-[#357937]/15 font-medium shadow-sm"
            onClick={handleGuestLogin}
          >
            {isLoading ? "Logging as guest" : "Login as guest"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Landing;
