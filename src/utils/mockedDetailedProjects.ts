import peopleFusionImage from "@/assets/images/people_fusion2@2x.af13e467.png";
import fusionScreen from "@/assets/images/screens@2x.c1666b66.png";
import fusionTVEmail from "@/assets/images/Univision_Fusion-TV-RoundUp-Email-bottom1@2x.4f6f65d2.png";
import shadeImage from "@/assets/images/shade2.52e50a75.gif";
import shadeTabletImage from "@/assets/images/tablet_fusion1@2x.7cd4f73e.png"
import pantherSuiteNextImage from "@/assets/images/panther@2x.8db94f47.png"

export interface DetailedProject {
  slug: string;
  bannerImageUrl: string;
  description: {
    title: string;
    text: string;
    role: string;
    client: string;
    year: number;
  };
  screen: {
    imageUrl: string;
  };
  paletteColors: {
    text: string;
    colors: string[];
  };
  frame: {
    image: string;
  };
  special: {
    title: string;
    text: string;
  };
  secondScreen: {
    image: string;
    backgroundColor: string;
  };
  thirdScreen: {
    title: string;
    text: string;
    image?: string;
  };
  nextProject: {
    image: string;
    title: string;
    slug: string
  },
}
export const detailedProjects: DetailedProject[] = [
  {
    slug: "fusion-tv",
    bannerImageUrl: peopleFusionImage.src,
    description: {
      title: "1. FusionTV",
      text: `Email marketing strategy based on different layouts of emails to remind the audience their favorite content as well as new incoming programs from the Fusion TV channel, part of the Univision network.`,
      role: "Art Direction,\n Head Designer\n,Animator",
      client: "Univision",
      year: 2017,
    },
    screen: {
      imageUrl: fusionScreen.src,
    },
    paletteColors: {
      text: "High contrast colors from Fusion TV rebranding to highlight daily emails and the special announcement ones.",
      colors: ["#6652a6", "#dbe0e6", "#24242c"],
    },
    frame: {
      image: fusionTVEmail.src,
    },
    special: {
      title: "Special Announcements",
      text: "As past of this rebranding campaign the following email was created with high contrast colors and animated gifs as a hero image, to impact the viewer to click the call action button.",
    },
    secondScreen: {
      image: shadeImage.src,
      backgroundColor: "#6653a6",
    },
    thirdScreen: {
      title: "My team work",
      text: "While I was working in Theorem LC. for 5 years as a designer, I had developed skills such as email design as well as email development for different brands from many industries such as education, medicine, fashion, entertainment and others.",
      image: shadeTabletImage.src
    },
    nextProject: {
      image: pantherSuiteNextImage.src,
      title: 'Panther Suite',
      slug: 'panthersuite'
    }
  },
];
export function json() {
  throw new Error("Function not implemented.");
}
