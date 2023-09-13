import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: sessionData } = useSession();
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1 pl-5 text-1xl font-bold">
        {sessionData?.user?.name ? `Notes for ${sessionData.user.name}` : " "}
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          {sessionData?.user ? (
            <label
              className="avatar btn btn-circle btn-ghost"
              tabIndex={0}
              onClick={() => void signOut()}
            >
              <div className="w-10 rounded-full">
                <img
                  src={sessionData?.user?.image ?? ""}
                  alt={sessionData?.user?.name ?? ""}
                />
              </div>
            </label>
          ) : (
            <button className="btn-ghost rounded-btn px-4 py-2" onClick={()=> void signIn()}>
              SignIn
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
