export const SITE_URL = "https://krishnaaa.com";
export const SITE_KEYWORDS = [];
export const COUNTRY_NAME = "INDIA";
export const TWITTER_URL = "@";
export const SITE_NAME = "Apoorva Kumari";
export const SITE_DESCRIPTION = `${SITE_NAME}'s portfolio website.`;

export interface IProject {
  title: string;
  subTitle: string;
  description: string;
  extendedDescription?: string;
  projectSlug: string;
  images: {
    thumbnail: string;
    startGrid: string[];
    main: string[];
  };
}

export const PROJECTS: IProject[] = [
  {
    title: "MUSIC WITH A MISSION",
    subTitle: `Skullcandy "All Love" Edition Crusher Evo`,
    description: `Skullcandy is the original lifestyle audio brand, born in 2003 and their products are created, tuned and tested to deliver music people can feel. The Skullcandy "All Love'' Edition Crusher Evo headphone is a great amalgamation of music and mission. Working in partnership with To Write Love on Her Arms (TWLOHA), the company donated a portion of all proceeds from the sale of this new design to the nonprofit movement. This limited-edition headphone visibly celebrates the pride month with its vibrant color palette.`,
    projectSlug: "skullcandy",
    images: {
      thumbnail: "SideViewRender2.png",
      startGrid: [
        "Wireframe.png",
        "SideView.png",
        "Bottom.png",
        "X-ray-Mode.png",
      ],
      main: [
        "WithoutColorsHeadphone.png",
        "SideViewRender2.png",
        "TwoHeadphones.png",
        "SideViewRender1.png",
      ],
    },
  },
  {
    title: "SHOWCASE",
    subTitle: `Podiums for Beauty Products`,
    description: `Podiums provides products with the main character energy. To maintain the main character energy of the beauty products following podiums are visualized and finally created. In this project, I created a series of visually captivating 3D podiums that accentuate the unique energy and character of various products. These podiums serve as the perfect platforms for showcasing beauty products in a way that resonates with their inherent qualities, capturing the attention of viewers and enhancing their overall appeal.`,
    projectSlug: "podiums",
    images: {
      thumbnail: "BlackPodium.png",
      startGrid: [],
      main: [
        "BlackPodium.png",
        "Bluepodium.png",
        "podiumbeigepng.png",
        "podiumpinkcombo.png",
        "podiumcombo.png",
        "podiumpoppink.png",
        "beigeandpinkpodium.png",
        "Lightpinkpodium.png",
        "Pinktwolayerpodium.png",
        "Purplepodium.png",
      ],
    },
  },
  {
    title: "PET IN YOUR DREAMS",
    subTitle: `Meet Rob!`,
    description: `The same old household story of me trying to convince my mother to get a pet, definitely not an easy job. After failing to convince the infinity times, I started scrolling my phone to distract myself and found pictures of robots as I love technology and things related to that. So, I created a pet robot for myself.`,
    extendedDescription: ``,
    projectSlug: "robo",
    images: {
      thumbnail: "robotadpole.png",
      startGrid: ["Wireframe1.png", "Wireframe2.png"],
      main: [
        "Wireframe3.png",
        "envionment.png",
        "Environmentfull.png",
        "robe single4.png",
        "roboviews.png",
      ],
    },
  },
];
