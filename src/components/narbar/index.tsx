import React from "react";
import { ModeLang, ModeToggle } from "../header";

function NavBar() {
  return (
    <div className="h-12 backdrop-filter backdrop-blur-sm flex items-center justify-center top-0 fixed bg-white dark:bg-background/20  bg-opacity-50 container sm:justify-end">
      <ModeLang className="mx-2" />
      <ModeToggle />
    </div>
  );
}

export default NavBar;
