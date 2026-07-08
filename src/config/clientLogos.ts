// Client logos configuration
// To add a new client, drop the logo into `public/photos for website /logos/`
// (clean, space-free filename) and add an entry to the array below.

const basePath = "";

// Helper function to generate image paths (encodes spaces for URLs)
const img = (folder: string, filename: string) =>
  encodeURI(`${basePath}/${folder}/${filename}`);

const logosBase = "photos for website /logos";

export type ClientLogo = { name: string; src: string };

export const clientLogos: ClientLogo[] = [
  { name: "Dutron", src: img(logosBase, "dutron.png") },
  { name: "Aarya", src: img(logosBase, "aarya.png") },
  { name: "HR Group", src: img(logosBase, "hr_group.png") },
  { name: "Savy Civic", src: img(logosBase, "civic.png") },
  { name: "Savvy", src: img(logosBase, "savvy.png") },
  { name: "Advait Energy", src: img(logosBase, "advait_energy.jpeg") },
  { name: "Shivalik Institute", src: img(logosBase, "shivalik_institute.png") },
  { name: "Sage by the Water", src: img(logosBase, "sage_by_the_water.png") },
  { name: "The Sage by Repose", src: img(logosBase, "the_sage_by_repose.png") },
  { name: "Aman Sara by Anantbaug", src: img(logosBase, "aman_sara_by_anantbaug.png") },
  { name: "Anantbaug Villa Two", src: img(logosBase, "anantbaug_villa_two.png") },
];
