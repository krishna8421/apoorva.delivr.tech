export const SITE_URL = "https://apoorva.delivr.tech";
export const SITE_KEYWORDS = [];
export const COUNTRY_NAME = "INDIA";
export const TWITTER_URL = "@";
export const SITE_NAME = "Apoorva Kumari";
export const SITE_DESCRIPTION = `${SITE_NAME}'s portfolio website.`;

export interface ITool {
  name: string;
  logo: string;
}

export interface IImage {
  url: string;
  alt: string;
}

export type IImages = (string | IImage)[];

export interface IProject {
  title: string;
  subTitle?: string;
  description: string;
  extendedDescription?: string;
  projectSlug: string;
  tools?: ITool[];
  images: {
    thumbnail: string;
    startMain?: IImages;
    startGrid?: IImages;
    main: IImages;
  };
  videos?: {
    startMain: string[];
  };
}

export const TOOLS = {
  BLENDER: {
    name: "Blender",
    logo: "blender.png",
  },
  PHOTOSHOP: {
    name: "Photoshop",
    logo: "photoshop.png",
  },
  ILLUSTRATOR: {
    name: "Illustrator",
    logo: "illustrator.png",
  },
  FIGMA: {
    name: "Figma",
    logo: "figma.png",
  },
  SUBSTANCE_PAINTER: {
    name: "Substance Painter",
    logo: "substance_painter.png",
  },
  AFTER_EFFECTS: {
    name: "After Effects",
    logo: "after_effects.png",
  },
  PREMIERE_PRO: {
    name: "Premiere Pro",
    logo: "premiere_pro.png",
  },
  ZBRUSH: {
    name: "ZBrush",
    logo: "zbrush.png",
  },
  MAYA: {
    name: "Maya",
    logo: "maya.png",
  },
  CINEMA_4D: {
    name: "Cinema 4D",
    logo: "cinema_4d.png",
  },
  UNITY: {
    name: "Unity",
    logo: "unity.png",
  },
  UNREAL_ENGINE: {
    name: "Unreal Engine",
    logo: "unreal_engine.png",
  },
  SUBSTANCE_DESIGNER: {
    name: "Substance Designer",
    logo: "substance_designer.png",
  },
  ARNOLD: {
    name: "Arnold",
    logo: "arnold.png",
  },
  V_RAY: {
    name: "V-Ray",
    logo: "v_ray.png",
  },
  KEYSHOT: {
    name: "KeyShot",
    logo: "keyshot.png",
  },
  OCTANE_RENDER: {
    name: "Octane Render",
    logo: "octane_render.png",
  },
  REDSHIFT: {
    name: "Redshift",
    logo: "redshift.png",
  },
  CYCLES: {
    name: "Cycles",
    logo: "cycles.png",
  },
};

export const PROJECTS: IProject[] = [
  {
    title: "MUSIC WITH A MISSION",
    subTitle: `Skullcandy "All Love" Edition Crusher Evo`,
    description: `Skullcandy is the original lifestyle audio brand, born in 2003 and their products are created, tuned and tested to deliver music people can feel. The Skullcandy "All Love'' Edition Crusher Evo headphone is a great amalgamation of music and mission. Working in partnership with To Write Love on Her Arms (TWLOHA), the company donated a portion of all proceeds from the sale of this new design to the nonprofit movement. This limited-edition headphone visibly celebrates the pride month with its vibrant color palette.`,
    extendedDescription: "All love & all year",
    projectSlug: "skullcandy",
    tools: [],
    images: {
      thumbnail: "main/SideViewRender2.png",
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
      thumbnail: "main/BlackPodium.png",
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
    extendedDescription: `Finally, I won years later having a pet turtle.`,
    projectSlug: "robo",
    images: {
      thumbnail: "main/robotadpole.png",
      startGrid: ["Wireframe1.png", "Wireframe2.png"],
      main: [
        "Wireframe3.png",
        "envionment.png",
        "Environmentfull.png",
        "robe single4.png",
        "roboviews.png",
      ],
    },
    videos: {
      startMain: ["an5.mp4"],
    },
  },
  {
    title: "CAPTIVATING",
    subTitle: `Hello100 saying Hi to 3D.`,
    description: `Hello100 is a company that specializes in providing high quality NMN (Nicotinamide Mononucleotide) formulations to individuals seeking to improve their health span and promote longevity. It aims to stay ahead of its competitors by offering a unique and visually captivating representation of its supplements. The project brief was to create visually captivating 3D podiums to showcase Hello100's high-quality NMN formulations, reinforcing the company's commitment to innovation, quality, and scientific credibility to resonate with health-conscious consumers.`,
    extendedDescription: `Check these out!`,
    projectSlug: "hello100",
    images: {
      thumbnail: "start-main/Brainstorming(1).png",
      startMain: [
        "Brainstorming(1).png",
        "Mindmapping(2).png",
        "Elements Choosen(3).png",
        "Explorations(4).jpg",
      ],
      startGrid: [
        "cap.png",
        "Bottle.png",
        "hello 100-01.png",
        "productheloo100.png",
      ],
      main: [
        "purplepodchemical.png",
        "h100pod11R3.png",
        "27827545-bb8b-4b71-9492-1c3e694d210e.png ",
        "whitepodfinal.png",
        "fbw.png",
        "34b04584-12b8-4bb5-a58f-9602b43609af.png ",
        "2bda0a43-b18c-4ee3-b638-c7e9cb6deaa9.png ",
        "Untitled design.png",
        "2ca0af6e-c450-4671-8ec4-2610b650cca6.png ",
      ],
    },
  },
];
