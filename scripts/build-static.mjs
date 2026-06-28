import { execSync } from "node:child_process";
import { cpSync, existsSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const apiUrl =
  process.env.NEXT_PUBLIC_API_URL ?? "https://api.outsourcing-4-you.com";
const apiDir = join(root, "app/api");
const apiBackup = join(root, "app/_api_backup");
const middleware = join(root, "middleware.ts");
const middlewareBackup = join(root, "middleware.ts.backup");

function moveIfExists(from, to) {
  if (existsSync(from)) renameSync(from, to);
}

function restoreIfExists(from, to) {
  if (existsSync(from)) {
    if (existsSync(to)) rmSync(to, { recursive: true, force: true });
    renameSync(from, to);
  }
}

try {
  console.log("Preparing static export (API routes and middleware are excluded)...");
  console.log(`API base URL: ${apiUrl}`);
  moveIfExists(apiDir, apiBackup);
  moveIfExists(middleware, middlewareBackup);

  execSync("npm run build", {
    cwd: root,
    stdio: "inherit",
    env: {
      ...process.env,
      STATIC_EXPORT: "1",
      NEXT_PUBLIC_API_URL: apiUrl,
    },
  });

  const htaccess = join(root, "out/.htaccess");
  writeFileSync(
    htaccess,
    `# Apache rewrite rules for IONOS / static hosting
Options -MultiViews
RewriteEngine On
RewriteBase /

# Serve existing files and directories
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# Map clean URLs to pre-rendered HTML files
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.+?)/?$ $1.html [L]
`
  );

  console.log("\nStatic export complete: upload the contents of the 'out/' folder to IONOS.");
} finally {
  restoreIfExists(apiBackup, apiDir);
  restoreIfExists(middlewareBackup, middleware);
}
