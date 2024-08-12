import React from "react";
import { ModeLang, ModeToggle } from "../header";
import { Button } from "@/components/ui/button";
import {
  Github,
  Download,
  Linkedin,
  MailIcon,
  PhoneCallIcon,
} from "lucide-react";
import Link from "next/link";
import Container from "../container";

function NavBar() {
  return (
    <div className="h-14 backdrop-filter backdrop-blur-sm flex top-0 fixed bg-white w-full dark:bg-background/20 bg-opacity-50 z-50">
      <Container className="justify-end py-2">
        <div className="flex gap-x-3">
          <ModeLang />
          <ModeToggle />
          <Button variant="outline" size="icon">
            <a href="/Tuan-Tm-CV.pdf" download>
              <Download className="size-[1.2rem]" />
            </a>
          </Button>
          <Link href={"https://github.com/Tuan2Tm"} target="_blank">
            <Button variant="outline" size="icon">
              <Github className="size-[1.2rem]" />
            </Button>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/tuan-tm-3b68b32ba/"}
            target="_blank"
          >
            <Button variant="outline" size="icon">
              <Linkedin className="size-[1.2rem]" />
            </Button>
          </Link>
          <Button variant="outline" size="icon">
            <a href="mailto:tuantm@gmail.com" target="_blank">
              <MailIcon className="size-[1.2rem]" />
            </a>
          </Button>
          <Button variant="outline" size="icon">
            <a href="tel:0375227286" target="_blank">
              <PhoneCallIcon className="size-[1.2rem]" />
            </a>
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default NavBar;
