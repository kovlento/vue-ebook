import defaultSettings from "@/settings";

const title = defaultSettings.title || "电子书项目";

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
}
