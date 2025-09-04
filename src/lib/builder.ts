export type Data = {
  repoUrl?: string;
  owner?: string;
  repo?: string;
  title?: string;
  tagline?: string;
  about?: string;
  features?: string[];
  installation?: string;
  usage?: string;
  theme?: string;
  includeStars?: boolean;
  includeForks?: boolean;
  includeIssues?: boolean;
  includeLicense?: boolean;
  includeSize?: boolean;
  discord?: string;
  website?: string;
  twitter?: string;
  contactEmail?: string;
  contributing?: string;
  roadmap?: string[];
  acknowledgements?: string[];
};

function badgeUrlFor(
  subject: "stars" | "forks" | "issues" | "license" | "size",
  owner?: string,
  repo?: string,
  color = "6b7280"
) {
  if (!owner || !repo) return "";
  const base = "https://img.shields.io";

  const routes: Record<typeof subject, string> = {
    stars: `/github/stars/${owner}/${repo}`,
    forks: `/github/forks/${owner}/${repo}`,
    issues: `/github/issues/${owner}/${repo}`,
    license: `/github/license/${owner}/${repo}`,
    size: `/github/repo-size/${owner}/${repo}`,
  };

  return `${base}${routes[subject]}?style=for-the-badge&color=${color}`;
}

export function buildReadme(data: Data): string {
  const {
    owner,
    repo,
    title,
    tagline,
    about,
    features,
    installation,
    usage,
    theme,
    includeStars,
    includeForks,
    includeIssues,
    includeLicense,
    includeSize,
    discord,
    website,
    twitter,
    contactEmail,
    contributing,
    roadmap,
    acknowledgements,
  } = data;

  const color =
    theme === "catppuccin-mocha"
      ? "b4befe"
      : theme === "nord"
      ? "88c0d0"
      : "6b7280";

  let md = "";

  // ── HEADER / BADGES ──────────────────────────────
  const badges: string[] = [];
  if (includeStars) badges.push(`![Stars](${badgeUrlFor("stars", owner, repo, color)})`);
  if (includeForks) badges.push(`![Forks](${badgeUrlFor("forks", owner, repo, color)})`);
  if (includeIssues) badges.push(`![Issues](${badgeUrlFor("issues", owner, repo, color)})`);
  if (includeLicense) badges.push(`![License](${badgeUrlFor("license", owner, repo, color)})`);
  if (includeSize) badges.push(`![Repo Size](${badgeUrlFor("size", owner, repo, color)})`);

  if (badges.length) {
    md += `<div align="center">\n\n${badges.join(" ")}\n\n</div>\n\n`;
  }

  if (title) md += `# ${title}\n\n`;
  if (tagline) md += `> ${tagline}\n\n`;

  // ── ABOUT ──────────────────────────────
  if (about) md += `${about}\n\n`;

  // ── FEATURES ──────────────────────────────
  if (features?.length) {
    md += `## Features\n\n`;
    md += features.map((f) => `- ${f}`).join("\n") + "\n\n";
  }

  // ── INSTALLATION ──────────────────────────────
  if (installation) {
    md += `## Installation\n\n\`\`\`bash\n${installation}\n\`\`\`\n\n`;
  }

  // ── USAGE ──────────────────────────────
  if (usage) {
    md += `## Usage\n\n\`\`\`bash\n${usage}\n\`\`\`\n\n`;
  }

  // ── CONTRIBUTING ──────────────────────────────
  if (contributing) {
    md += `## Contributing\n\n${contributing}\n\n`;
  }

  // ── ROADMAP ──────────────────────────────
  if (roadmap?.length) {
    md += `## Roadmap\n\n`;
    md += roadmap.map((item) => `- [ ] ${item}`).join("\n") + "\n\n";
  }

  // ── ACKNOWLEDGEMENTS ──────────────────────────────
  if (acknowledgements?.length) {
    md += `## Acknowledgements\n\n`;
    md += acknowledgements.map((ack) => `- ${ack}`).join("\n") + "\n\n";
  }

  // ── LINKS / SOCIALS ──────────────────────────────
  if (website || twitter || discord || contactEmail) {
    md += `## Links\n\n`;
    if (website) md += `- Website: ${website}\n`;
    if (twitter) md += `- Twitter: https://twitter.com/${twitter.replace(/^@/, "")}\n`;
    if (discord) md += `- Discord: ${discord}\n`;
    if (contactEmail) md += `- Contact: <${contactEmail}>\n`;
    md += `\n`;
  }

  // ── FOOTER ──────────────────────────────
  md += `---\n\n*Generated with RepoShine*`;

  if (owner && repo) {
    md += ` • [${owner}/${repo}](https://github.com/${owner}/${repo})\n`;
  }

  return md;
}