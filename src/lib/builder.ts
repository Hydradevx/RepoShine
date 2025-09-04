type Data = {
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
};

function badgeUrlFor(subject: string, owner?: string, repo?: string, color = "6b7280") {
  if (!owner || !repo) return "";
  const base = "https://img.shields.io";
  switch (subject) {
    case "stars":
      return `${base}/github/stars/${owner}/${repo}?style=for-the-badge&color=${color}`;
    case "forks":
      return `${base}/github/forks/${owner}/${repo}?style=for-the-badge&color=${color}`;
    case "issues":
      return `${base}/github/issues/${owner}/${repo}?style=for-the-badge&color=${color}`;
    case "license":
      return `${base}/github/license/${owner}/${repo}?style=for-the-badge&color=${color}`;
    case "size":
      return `${base}/github/repo-size/${owner}/${repo}?style=for-the-badge&color=${color}`;
    default:
      return "";
  }
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
  } = data;

  const color = theme === "catppuccin-mocha" ? "b4befe" : theme === "nord" ? "88c0d0" : "6b7280";

  // Header / badges
  let md = "";

  // badges
  const badges: string[] = [];
  if (includeStars) badges.push(`![Stars](${badgeUrlFor("stars", owner, repo, color)})`);
  if (includeForks) badges.push(`![Forks](${badgeUrlFor("forks", owner, repo, color)})`);
  if (includeIssues) badges.push(`![Issues](${badgeUrlFor("issues", owner, repo, color)})`);
  if (includeLicense) badges.push(`![License](${badgeUrlFor("license", owner, repo, color)})`);
  if (includeSize) badges.push(`![Repo Size](${badgeUrlFor("size", owner, repo, color)})`);

  if (badges.length) md += `<div align="center">\n\n${badges.join(" ")}\n\n</div>\n\n`;

  // title
  if (title) md += `# ${title}\n\n`;
  if (tagline) md += `> ${tagline}\n\n`;

  // about
  if (about) md += `${about}\n\n`;

  // features
  if (features && features.length) {
    md += `## Features\n\n`;
    for (const f of features) md += `- ${f}\n`;
    md += `\n`;
  }

  // installation
  if (installation) {
    md += `## Installation\n\n\`\`\`bash\n${installation}\n\`\`\`\n\n`;
  }

  // usage
  if (usage) {
    md += `## Usage\n\n\`\`\`bash\n${usage}\n\`\`\`\n\n`;
  }

  // social / links
  if (website || twitter || discord || contactEmail) {
    md += `## Links\n\n`;
    if (website) md += `- Website: ${website}\n`;
    if (twitter) md += `- Twitter: https://twitter.com/${twitter.replace(/^@/, "")}\n`;
    if (discord) md += `- Discord: ${discord}\n`;
    if (contactEmail) md += `- Contact: <${contactEmail}>\n`;
    md += `\n`;
  }

  // footer / credits
  md += `---\n\n*Generated with RepoShine*`;

  // optionally add repo link in footer
  if (owner && repo) md += ` • [${owner}/${repo}](https://github.com/${owner}/${repo})\n`;

  return md;
}