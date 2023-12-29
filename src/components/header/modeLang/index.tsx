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

export function ModeLang({ className }: { className?: string }) {
  const { onChangeLang, lang } = useLang();

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
          <DropdownMenuLabel>Chon ngon ngu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className={`${lang === "vi" && "bg-gray-500"} my-2`}
            onClick={() => onChangeLang("vi")}
          >
            VietNamese
          </DropdownMenuItem>
          <DropdownMenuItem
            className={`${lang === "en" && "bg-gray-500"}`}
            onClick={() => onChangeLang("en")}
          >
            English
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
