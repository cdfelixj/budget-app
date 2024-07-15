import { ImStatsBars2 } from "react-icons/im";


function Navigation() {
  return (
      <header className="container max-w-2xl px-6 py-6 mx-auto">
          <div className="flex items-center justify-between">
              {/* User Information */}
              <div className="flex items-center gap-2">
                  {/* UserImage */}
                  <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
                      <img
                          className="object-cover w-full h-full"
                          src="https://thispersondoesnotexist.com/"
                          alt="Profile Image" />
                  </div>
                  {/* name */}
                  <small>Hi, Angela!</small>
              </div>

              {/* Right side of navigation */}

              <nav className="flex items-center gap-4">
                  <div>
                      <ImStatsBars2 className="text-2xl" /></div>
                  <div>
                      <button className="btn btn-danger">Sign out</button>
                  </div>
              </nav>
          </div>
      </header >
  );
}

export default Navigation