// Project images configuration
// To add new images, simply add them to the appropriate array below

const basePath = process.env.NODE_ENV === "production" ? "/BricksInfraspaceWebsite" : "";

// Helper function to generate image paths
const img = (folder: string, filename: string) => `${basePath}/${folder}/${filename}`;

// Completed Projects
const completedBase = "photos for website /completed projects ";

export const projectImages = {
  // Completed Projects
  "dutron-corporate": [
    img(completedBase + "/dutron (completed project )", "IMG_8692.jpg"),
    img(completedBase + "/dutron (completed project )", "DJI_0044.jpg"),
  ],
  "icai": [
    img(completedBase + "/icai", "icai.jpg"),
    img(completedBase + "/icai", "IMG_5761.JPG"),
    img(completedBase + "/icai", "IMG_5762.JPG"),
  ],
  "credai": [
    img(completedBase + "/credai ", "IMG_8735.jpg"),
    img(completedBase + "/credai ", "a3d004b2-b577-49f1-a447-9d75ac44db26.jpg"),
    img(completedBase + "/credai ", "unnamed.webp"),
  ],
  "hr-group": [
    img(completedBase + "/hr Group", "hr_group.jpg"),
    img(completedBase + "/hr Group", "0c37f324-f551-4c75-a7b3-e93f293f4c03.jpg"),
    img(completedBase + "/hr Group", "fe75134e-b422-49dd-ae1c-82cadc25eb41.jpg"),
  ],
  "medrical-one": [
    img(completedBase + "/medrical one ", "DJI_0050.JPG"),
    img(completedBase + "/medrical one ", "DJI_0057.JPG"),
    img(completedBase + "/medrical one ", "DJI_0058.JPG"),
    img(completedBase + "/medrical one ", "IMG_8683.jpg"),
  ],

  // Ongoing Projects
  "anantbaug": [
    img("photos for website /ongoing projects /Anantbaug Villas", "1.png"),
    img("photos for website /ongoing projects /Anantbaug Villas", "image.png"),
  ],
  "anantbaug-2": [

    img("photos for website /ongoing projects /Anantbaug Villas 2", "1.png"),
    img("photos for website /ongoing projects /Anantbaug Villas 2", "2.png"),
  ],
  "anjani": [
    img("photos for website /ongoing projects /anjani group", "IMG_6971.JPG"),
    img("photos for website /ongoing projects /anjani group", "IMG_6973.JPG"),
  ],
  "dutron-ongoing": [
    img("photos for website /ongoing projects /dutron ", "WhatsApp Image 2026-02-03 at 3.15.27 PM (1).jpeg"),
    img("photos for website /ongoing projects /dutron ", "IMG_8680.jpg"),
    img("photos for website /ongoing projects /dutron ", "WhatsApp Image 2026-02-03 at 3.15.25 PM.jpeg"),
    img("photos for website /ongoing projects /dutron ", "WhatsApp Image 2026-02-03 at 3.15.26 PM (1).jpeg"),
    img("photos for website /ongoing projects /dutron ", "WhatsApp Image 2026-02-03 at 3.15.26 PM.jpeg"),
    img("photos for website /ongoing projects /dutron ", "WhatsApp Image 2026-02-03 at 3.15.27 PM (2).jpeg"),
    img("photos for website /ongoing projects /dutron ", "WhatsApp Image 2026-02-03 at 3.15.27 PM.jpeg"),
    img("photos for website /ongoing projects /dutron ", "WhatsApp Image 2026-02-03 at 3.15.28 PM (1).jpeg"),
    img("photos for website /ongoing projects /dutron ", "WhatsApp Image 2026-02-03 at 3.15.28 PM.jpeg"),
    img("photos for website /ongoing projects /dutron ", "WhatsApp Image 2026-02-03 at 3.15.29 PM.jpeg"),
  ],
  "shivalik": [
    img("photos for website /ongoing projects /shivalik", "WhatsApp Image 2025-08-21 at 11.12.08 AM.jpeg"),
    img("photos for website /ongoing projects /shivalik", "WhatsApp Image 2025-08-21 at 11.12.08 AM (1).jpeg"),
    img("photos for website /ongoing projects /shivalik", "WhatsApp Image 2025-08-21 at 11.12.09 AM.jpeg"),
    img("photos for website /ongoing projects /shivalik", "WhatsApp Image 2025-08-21 at 11.12.10 AM (1).jpeg"),
    img("photos for website /ongoing projects /shivalik", "WhatsApp Image 2025-08-21 at 11.12.10 AM.jpeg"),
    img("photos for website /ongoing projects /shivalik", "WhatsApp Image 2025-08-21 at 11.12.11 AM (1).jpeg"),
    img("photos for website /ongoing projects /shivalik", "WhatsApp Image 2025-08-21 at 11.12.11 AM.jpeg"),
    img("photos for website /ongoing projects /shivalik", "WhatsApp Image 2025-08-21 at 11.12.12 AM (1).jpeg"),
    img("photos for website /ongoing projects /shivalik", "WhatsApp Image 2025-08-21 at 11.12.12 AM.jpeg"),
    img("photos for website /ongoing projects /shivalik", "WhatsApp Image 2025-08-21 at 11.12.13 AM (1).jpeg"),
    img("photos for website /ongoing projects /shivalik", "WhatsApp Image 2025-08-21 at 11.12.13 AM.jpeg"),
    img("photos for website /ongoing projects /shivalik", "WhatsApp Image 2025-08-21 at 11.12.14 AM (1).jpeg"),
    img("photos for website /ongoing projects /shivalik", "WhatsApp Image 2025-08-21 at 11.12.14 AM.jpeg"),
  ],
  "suryam-waters": [
    img("photos for website /ongoing projects /Suryam- By The Waters", "2.png"),
    img("photos for website /ongoing projects /Suryam- By The Waters", "1.png"),
    img("photos for website /ongoing projects /Suryam- By The Waters", "3.png"),
    img("photos for website /ongoing projects /Suryam- By The Waters", "4.png"),
    img("photos for website /ongoing projects /Suryam- By The Waters", "5.png"),
    img("photos for website /ongoing projects /Suryam- By The Waters", "image.png"),
  ],
  "sage-repose": [
    img("photos for website /ongoing projects /Suryam-by sage", "image.png"),
    img("photos for website /ongoing projects /Suryam-by sage", "image 1.png"),
    img("photos for website /ongoing projects /Suryam-by sage", "image2.png"),
    img("photos for website /ongoing projects /Suryam-by sage", "image3.png"),
    img("photos for website /ongoing projects /Suryam-by sage", "image4.png"),
  ],
  
} as const;

export type ProjectKey = keyof typeof projectImages;
