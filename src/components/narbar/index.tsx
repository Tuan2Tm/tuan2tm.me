import React from "react";
import { ModeLang, ModeToggle } from "../header";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

function NavBar() {
  return (
    <div className="h-12 backdrop-filter backdrop-blur-sm flex items-center justify-center top-0 fixed bg-white dark:bg-background/20  bg-opacity-50 container sm:justify-end">
      <ModeLang />
      <ModeToggle className="mx-2" />
      <Link href={"https://github.com/Tuan2Tm"} target="_blank">
      <Button variant="outline" size="icon">
        <Github className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Github className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
      </Link>
    </div>
  );
}

export default NavBar;
