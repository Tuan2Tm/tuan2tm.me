import React from "react";
import { ModeLang, ModeToggle } from "../header";
import { Button } from "@/components/ui/button";
import { Github, Download } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { multiKeys } from "@/i18n";
import Container from "../container";

function NavBar() {
  const { t } = useTranslation();

  return (
    <div className="h-12 backdrop-filter backdrop-blur-sm flex top-0 fixed bg-white w-full dark:bg-background/20 bg-opacity-50">
      <Container className="justify-between items-center ">
        <Link href={"/"}>
          <h1>{t(multiKeys.app.name)}</h1>
        </Link>
        <div className="flex gap-x-2">
          <Link href={"/about"}>
            <h2>Gioi thieu</h2>
          </Link>
          <Link href={"/experience"}>
            <h2>Kinh nghiệm</h2>
          </Link>
        </div>
        <div className="flex gap-x-3">
          <ModeLang />
          <ModeToggle />
          <Link href={"https://github.com/Tuan2Tm"} target="_blank">
            <Button variant="outline" size="icon">
              <Github className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Github className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </Link>
          <Button variant="outline" size="icon">
            <Download className="size-[1.2rem]" />
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default NavBar;
