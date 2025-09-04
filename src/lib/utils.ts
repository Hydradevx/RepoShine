import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseGithubUrl(input: string): { owner: string; repo: string } | null {
  if (!input) return null;
  try {
    input = input.trim();
    if (input.includes("github.com")) {
      const u = new URL(input);
      const parts = u.pathname.replace(/^\/|\/$/g, "").split("/");
      if (parts.length >= 2) return { owner: parts[0], repo: parts[1] };
      return null;
    } else {
      // owner/repo shorthand
      const parts = input.split("/").filter(Boolean);
      if (parts.length >= 2) return { owner: parts[0], repo: parts[1] };
      return null;
    }
  } catch (err) {
    return null;
  }
}