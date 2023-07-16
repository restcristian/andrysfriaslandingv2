import peopleFusionImage from "@/assets/images/people_fusion2@2x.af13e467.png";
import fusionScreen from "@/assets/images/screens@2x.c1666b66.png";
import fusionTVEmail from "@/assets/images/Univision_Fusion-TV-RoundUp-Email-bottom1@2x.4f6f65d2.png";
import shadeImage from "@/assets/images/shade2.52e50a75.gif";
import shadeTabletImage from "@/assets/images/tablet_fusion1@2x.7cd4f73e.png"
import pantherSuiteNextImage from "@/assets/images/panther@2x.8db94f47.png"

export interface DetailedProject {
  slug: string;
  banner: {
    image: string;
    backgroundColor: string
  },
  description: {
    title: string;
    text: string;
    role: string;
    client: string;
    year: number;
    backgroundColor: string;
    textColor: string;
  };
  screen: {
    imageUrl: string;
    hasBorder?: boolean;
    borderColor?: string
    
  };
  paletteColors: {
    text: string;
    colors: string[];
    textColor: string;
    backgroundColor: string;
  };
  frame: {
    image: string;
    borderColor: string;
  };
  special: {
    title: string;
    text: string;
    textColor: string
  };
  secondScreen: {
    image: string;
    backgroundColor: string;
  };
  thirdScreen: {
    title: string;
    text: string;
    image?: string;
    textColor: string;
    hasImageOffset?: boolean
  };
  nextProject: {
    image: string;
    title: string;
    slug: string
    textColor: string
  },
}
export const detailedProjects: DetailedProject[] = [
  {
    slug: "fusion-tv",
    
    banner: {
      image: peopleFusionImage.src,
      backgroundColor: ''
    },
    description: {
      title: "1. FusionTV",
      text: `Email marketing strategy based on different layouts of emails to remind the audience their favorite content as well as new incoming programs from the Fusion TV channel, part of the Univision network.`,
      role: "Art Direction,\n Head Designer\n,Animator",
      client: "Univision",
      year: 2017,
      backgroundColor:"#6653a6",
      textColor: 'white'
    },
    screen: {
      imageUrl: fusionScreen.src,
      hasBorder: false,
      borderColor: '#beecfa',
      
    },
    paletteColors: {
      text: "High contrast colors from Fusion TV rebranding to highlight daily emails and the special announcement ones.",
      colors: ["#6652a6", "#dbe0e6", "#24242c"],
      backgroundColor: '#f2f2f2',
      textColor: '#6653a6'
    },
    frame: {
      image: fusionTVEmail.src,
      borderColor: "#dbe0e6"
    },
    special: {
      title: "Special Announcements",
      text: "As past of this rebranding campaign the following email was created with high contrast colors and animated gifs as a hero image, to impact the viewer to click the call action button.",
      textColor: '#333'
    },
    secondScreen: {
      image: shadeImage.src,
      backgroundColor: "#6653a6",
    },
    thirdScreen: {
      title: "My team work",
      text: "While I was working in Theorem LC. for 5 years as a designer, I had developed skills such as email design as well as email development for different brands from many industries such as education, medicine, fashion, entertainment and others.",
      image: shadeTabletImage.src,
      textColor: '#333',
      hasImageOffset: true
    },
    nextProject: {
      image: pantherSuiteNextImage.src,
      title: 'Panther Suite',
      slug: 'panthersuite',
      textColor: '#beecfa'
    }
  },
];
export function json() {
  throw new Error("Function not implemented.");
}
