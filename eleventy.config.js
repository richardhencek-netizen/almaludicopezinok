import yaml from "js-yaml";

export default function (eleventyConfig) {
  // Obsah webu je v src/_data/*.yml (upravuje sa cez Pages CMS)
  eleventyConfig.addDataExtension("yml,yaml", (contents) => yaml.load(contents));
  eleventyConfig.addGlobalData("build", () => Date.now().toString(36));

  // Texty z adminu sa vždy escapujú – HTML z formulára sa na web nedostane
  eleventyConfig.setNunjucksEnvironmentOptions({ autoescape: true });

  for (const p of ["src/img", "src/fonts", "src/style.css", "src/main.js",
                   "src/logo.svg", "src/logo-white.svg", "src/favicon.svg",
                   "src/favicon-32.png", "src/apple-touch-icon.png"]) {
    eleventyConfig.addPassthroughCopy(p);
  }

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    templateFormats: ["njk"],
  };
}
