"use client";

import * as React from "react";
import { Languages } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useLang from "@/hooks/useLang";
import { useTranslation } from "react-i18next";
import { multiKeys } from "@/i18n";

export function ModeLang({ className }: { className?: string }) {
  const { onChangeLang, lang } = useLang();
  const {t} = useTranslation();

  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Languages className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Languages className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>{t(`${multiKeys.settings.languages.title}`)}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className={`${lang === "vi" && "bg-gray-500"} cursor-pointer my-2`}
            onClick={() => onChangeLang("vi")}
            disabled={lang === "vi"}
          >
            {t(`${multiKeys.settings.languages.vi}`)}
          </DropdownMenuItem>
          <DropdownMenuItem
            className={`${lang === "en" && "bg-gray-500"} cursor-pointer`}
            onClick={() => onChangeLang("en")}
            disabled={lang === "en"}
          >
            {t(`${multiKeys.settings.languages.en}`)}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
