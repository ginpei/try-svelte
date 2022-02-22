const appName = "My grea app";

export function toDocTitle(title: string): string {
  if (!title) {
    return appName;
  }

  return `${title} - ${appName}`;
}