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

export interface IPdf {
  url: string;
  alt: string;
}

export type IProjectCategory = "3D" | "UX/XR" | "Graphics";

export type IImages = (string | IImage)[];
export type IPdfs = (string | IPdf)[];

export interface IProject {
  // type: IProjectType;
  category: IProjectCategory;
  title: string;
  subTitle?: string;
  description: string[];
  extendedDescription?: string;
  projectSlug: string;
  tools?: ITool[];
  images: {
    thumbnail: string;
    startMain?: IImages;
    startGrid?: IImages;
    main?: IImages;
  };
  videos?: {
    main?: string[];
    middle?: string[];
  };
  pdfs?: IPdfs;
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
    category: "3D",
    title: "MUSIC WITH A MISSION",
    subTitle: `Skullcandy "All Love" Edition Crusher Evo`,
    description: [
      `Skullcandy is the original lifestyle audio brand, born in 2003 and their products are created, tuned and tested to deliver music people can feel. The Skullcandy "All Love'' Edition Crusher Evo headphone is a great amalgamation of music and mission. Working in partnership with To Write Love on Her Arms (TWLOHA), the company donated a portion of all proceeds from the sale of this new design to the nonprofit movement. This limited-edition headphone visibly celebrates the pride month with its vibrant color palette.`,
    ],
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
    category: "3D",
    title: "VISUALIZE",
    subTitle: `Kettle Coffee Table`,
    description: [
      `Burrow is a furniture brand that focuses on creating enduring pieces that remain fresh and relevant over time chasing fleeting trends. The design ethos revolves around the aesthetics of American Mid-Century Modernism and contemporary Scandinavian style. The key feature are modular designs, timeless, functional and pet friendly. The aim was to create highly realistic and accurate 3D models of their furniture.`,
    ],
    extendedDescription: `Have a look at these beautiful pieces!`,
    projectSlug: "burrow",
    images: {
      thumbnail: "main/BURROW1.3Ren.jpg",
      startMain: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
      startGrid: ["Screenshot 2024-03-06 061805.png", "burrow wireframe 2.png"],
      main: [
        "Screenshot 2024-03-06 024538.png",
        "BURROW1.3Ren.jpg",
        "BURROW2.3Ren.jpg",
        "BURROW3.1Ren.jpg",
        "BURROW5Ren.jpg",
        "BURROW6Ren.jpg",
        "BURROW8Ren.jpg",
        "960c04d3-523a-4b62-b6a0-1960b0353910.jpg",
        "brrr1.png",
        "brrr7.png",
        "brrr10.png",
        "brrr11.png",
        "brrr12.png",
        "brrr13.png",
        "brrr14.png",
      ],
    },
  },
  {
    category: "3D",
    title: "CAPTIVATING",
    subTitle: `Hello100 saying Hi to 3D.`,
    description: [
      `Hello100 is a company that specializes in providing high quality NMN (Nicotinamide Mononucleotide) formulations to individuals seeking to improve their health span and promote longevity. It aims to stay ahead of its competitors by offering a unique and visually captivating representation of its supplements. The project brief was to create visually captivating 3D podiums to showcase Hello100's high-quality NMN formulations, reinforcing the company's commitment to innovation, quality, and scientific credibility to resonate with health-conscious consumers.`,
    ],
    extendedDescription: `Check these out!`,
    projectSlug: "hello100",
    images: {
      thumbnail: "start-grid/Brainstorming(1).png",
      startMain: [],
      startGrid: [
        {
          url: "Brainstorming(1).png",
          alt: "Brainstorming",
        },
        {
          url: "Mindmapping(2).png",
          alt: "Mind Mapping",
        },
        {
          url: "Elements Choosen(3).png",
          alt: "Elements Chosen",
        },
        {
          url: "Explorations(4).png",
          alt: "Explorations",
        },
        "cap.png",
        "Bottle.png",
        "hello 100-01.png",
        "productheloo100.png",
      ],
      main: [
        "purplepodchemical.png",
        "h100pod11R3.png",
        "27827545-bb8b-4b71-9492-1c3e694d210e.png",
        "whitepodfinal.png",
        "fbw.png",
        "34b04584-12b8-4bb5-a58f-9602b43609af.png",
        "2bda0a43-b18c-4ee3-b638-c7e9cb6deaa9.png",
        "Untitled design.png",
        "2ca0af6e-c450-4671-8ec4-2610b650cca6.png",
      ],
    },
  },
  {
    category: "3D",
    title: "INTERACTIVE PRODUCT SHOWCASE",
    subTitle: `Stream VR`,
    description: [
      `ELGi is a global industry leader specializing in the design, manufacture, and distribution of a diverse range of industrial products and equipment. With a focus on innovation and sustainability, the company has carved out a strong presence across various sectors, from automotive and construction to healthcare and textiles. We collaborated with ELGi to elevate the showcasing of their products through Virtual Reality at the International Rail Equipment Expo 2023. This project centered around immersing participants into a life-like train environment, allowing them to understand ELGi's products' functionality and innovation up-close.`,
      `My contribution within the wholesome team was to make 3D model of the train's console, ensuring precise dimensions within a real-life environment. This included intricate textures and well optimized components that will be simulated in the VR.`,
    ],
    extendedDescription: `The time constraint was the real challenge!`,
    projectSlug: "train",
    images: {
      thumbnail: "main/5.png",
      startGrid: ["2.png", "3.png"],
      main: [
        "1.png",
        "4.jpg",
        "5.png",
        "6.png",
        "Screenshot 2024-04-13 013654.png",
        "Screenshot 2024-04-13 013743.png",
        "Screenshot 2024-04-13 013336.png",
        "Screenshot 2024-04-13 013824.png",
      ],
    },
    videos: {
      main: ["low-bitrate.mp4"],
    },
  },
  {
    category: "3D",
    title: "PET IN YOUR DREAMS",
    subTitle: `Meet Rob!`,
    description: [
      `The same old household story of me trying to convince my mother to get a pet, definitely not an easy job. After failing to convince the infinity times, I started scrolling my phone to distract myself and found pictures of robots as I love technology and things related to that. So, I created a pet robot for myself.`,
    ],
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
      main: ["an5.mp4"],
    },
  },
  {
    category: "3D",
    title: "SHOWCASE",
    subTitle: `Podiums for Beauty Products`,
    description: [
      `Podiums provides products with the main character energy. To maintain the main character energy of the beauty products following podiums are visualized and finally created. In this project, I created a series of visually captivating 3D podiums that accentuate the unique energy and character of various products. These podiums serve as the perfect platforms for showcasing beauty products in a way that resonates with their inherent qualities, capturing the attention of viewers and enhancing their overall appeal.`,
    ],
    extendedDescription: "Have a look at these!",
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
    category: "UX/XR",
    title: "CRAFT CLUSTER DOCUMENTATION",
    subTitle: `Kantha in Nanoor`,
    description: [
      `The aim of this project was to document the Kantha craft cluster in Nanoor, focusing on understanding the challenges faced by artisans and the craft itself in terms of upliftment. The project employs a mixed-methods approach, combining quantitative and qualitative research methodologies, including surveys, interviews, and ethnographic research, to comprehensively investigate the issues and dynamics within the craft cluster. My personal goal was to understand the craft and the artisan and make people understand and value the craft and their efforts.`,
    ],
    extendedDescription:
      "My focus was to understand the whole cluster and find an area where I can contribute through my domain knowledge.",
    projectSlug: "kantha",
    images: {
      thumbnail: "thumbnail.png",
    },
    pdfs: ["kantha.pdf"],
  },
  {
    category: "UX/XR",
    title: "SHE",
    subTitle: `Self-Development Empowerment Healing`,
    description: [
      `The ultimate idea of SHE, a therapeutic VR game is to heal and regain the lost confidence and self-worth form the Sexual Harassment. SHE is based on Self Development, Healing and Empowerment. We have all we need to heal; it's just recognizing our abilities through certain incidents. The game aims to empower players by exploring alternative decision-making, fostering emotional healing, and promoting resilience for making assertive, informed choices in future situations resembling past trauma.`,
    ],
    extendedDescription: "Happy Healing Journey!",
    projectSlug: "she",
    images: {
      thumbnail: "thumbnail.png",
    },
    pdfs: ["VRGame.pdf"],
  },
  {
    category: "UX/XR",
    title: "RESEARCH PAPER",
    subTitle: `Cultural Appropriation in the Fashion Industry`,
    description: [
      `This study delves into the contentious issue of cultural appropriation in the fashion industry, examining its historical evolution and contemporary implications. Through an analysis of past famous examples, the study elucidates how cultural appropriation can lead to offense and unwanted commodification. Adopting a comparative law perspective, various solutions to address cultural appropriation are considered. A quantitative research approach, via an online survey, explores individuals' perceptions of cultural appropriation in fashion and its commercial exploitation.`,
    ],
    extendedDescription: "Can I borrow some of your time for viewing this?",
    projectSlug: "research-paper",
    images: {
      thumbnail: "thumbnail.png",
    },
    pdfs: ["research-paper.pdf"],
  },
  {
    category: "UX/XR",
    title: "SYSTEM THINKING",
    subTitle: `Understanding & Improving NIFT (Kolkata) Library`,
    description: [
      `The primary objective of this project is to conduct a comprehensive analysis of the library system at the National Institute of Fashion Technology (NIFT). The aim is to identify existing gaps and areas for improvement within the system. By understanding the current setup, potential challenges, and stakeholder needs, the project seeks to propose viable solutions to enhance the efficiency and effectiveness of the NIFT library. This one was my personal  favorite as being one of the user and user experience designer of the project and not mixing my biases in the research was an interesting task.`,
    ],
    extendedDescription:
      "It took months of research and revisiting research to get to this level of understanding!",
    projectSlug: "system-thinking",
    images: {
      thumbnail: "thumbnail.png",
    },
    pdfs: ["system-thinking.pdf"],
  },
  {
    category: "UX/XR",
    title: "112 India",
    subTitle: `Emergency Response Report System`,
    description: [
      `The objective of this project is to enhance the user experience and visual appeal of the 112 India mobile application. The redesign aims to streamline the app interface, improve accessibility, and ensure a user-friendly experience during emergency situations.`,
    ],
    extendedDescription: "One stop for all SOS alerts.",
    projectSlug: "112",
    images: {
      thumbnail: "thumbnail.png",
    },
    pdfs: ["112.pdf"],
  },
  {
    category: "Graphics",
    title: "MOMENT",
    subTitle: `Amidst the hustle and bustle, a moment of peace`,
    description: [
      "Kolkata, the enchanting City of Joy, holds fame for its scorching and sultry summers. In the midst of a sweltering afternoon, when my spirits were fading, a captivating sight emerged. There, amidst the sweat and toil, a member of the cleaning staff savored a luscious ice cream, igniting a spark of admiration within me. Eschewing the intrusion of a photograph, I chose instead to immortalize the moment through art. Thus, a masterpiece was born, capturing the essence of that fleeting instance, ensuring its memory remains vivid and cherished forever.",
    ],
    extendedDescription: "Have a watch of worth.",
    projectSlug: "helping-didi",
    images: {
      thumbnail: "main/3.png",
      main: ["1.png", "2.png", "3.png", "4.png"],
    },
  },
  {
    category: "Graphics",
    title: "SANTORINI",
    subTitle: `Nature's masterpiece in the form of Island`,
    description: [
      "The illustrations produced for this project will serve as captivating visual tributes to the stunning natural beauty and architectural splendor of Santorini, is a small Greek island and its stunning natural beauty, including its white-washed buildings, blue-domed churches, and dramatic cliffs. By skillfully blending artistic vision with cultural authenticity, these artworks will transport viewers an architectural awe of this enchanting island paradise.",
    ],
    extendedDescription: "Have a moment of visual delight.",
    projectSlug: "santorini",
    images: {
      thumbnail: "main/Santorini2.png",
      main: ["Santorini1.png", "Santorini2.png", "Santorini3.png"],
    },
  },
  {
    category: "Graphics",
    title: "Publication Design",
    subTitle: `Projects from my freelancing`,
    description: [
      "The task at hand was to design and create both a broadsheet and a tabloid newspaper, each tailored to its specific format and audience. The broadsheet will require a formal layout with in-depth articles and analyses, while the tabloid will need to be more visually engaging with shorter, attention-grabbing content.",
    ],
    projectSlug: "publication-design",
    images: {
      thumbnail: "thumbnail.png",
    },
    pdfs: [
      {
        url: "broadsheet.pdf",
        alt: "Broadsheet",
      },
      {
        url: "tabloid.pdf",
        alt: "Tabloid",
      },
    ],
  },
  {
    category: "Graphics",
    title: "Branding & Promotions",
    subTitle: `Ryflect Apparel and Lifestyle`,
    description: [
      "This Project aims to revitalize Ryflect Apparel and Lifestyle brand image, refine promotional strategies, and boost sales and customer engagement. Through a comprehensive analysis of the company's current branding efforts and promotional tactics, this project will identify areas for improvement and suggest actionable changes to achieve measurable results.",
    ],
    extendedDescription: "Have a look !",
    projectSlug: "branding",
    images: {
      thumbnail: "thumbnail.png",
    },
    pdfs: ["branding.pdf"],
  },
  {
    category: "Graphics",
    title: "Social Media Posts",
    subTitle: `Enhance brand visibility & engagement`,
    description: [
      "The project aims to create engaging and effective social media posts for two brands: Supra and Neelam Chandiwala to enhance brand visibility, engagement, and ultimately contribute to the overall marketing objectives of these brands. Through strategic social media posting, we aim to strengthen brand loyalty and drive sales during key occasions throughout the year.",
    ],
    extendedDescription: "Check these out!",
    projectSlug: "social-media-posts",
    images: {
      thumbnail: "main/Supra Minimalist (1).jpg",
      main: [
        "AS PURE AS FATHER_S LOVE (1).jpg",
        "Copy of Add a heading.jpg",
        "Copy of Untitled (1080 x 1080 px).png",
        "STOP.png",
        "Supra Minimalist (1).jpg",
      ],
    },
  },
];
