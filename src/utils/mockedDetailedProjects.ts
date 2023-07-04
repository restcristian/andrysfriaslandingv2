import peopleFusionImage from "@/assets/images/people_fusion2@2x.af13e467.png";
import fusionScreen from "@/assets/images/screens@2x.c1666b66.png";
import fusionTVEmail from "@/assets/images/Univision_Fusion-TV-RoundUp-Email-bottom1@2x.4f6f65d2.png"
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
    colors: string[]
  };
  frame: {
    image: string
  },
  special: {
    title: string,
    text: string
  }
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
      text: 'High contrast colors from Fusion TV rebranding to highlight daily emails and the special announcement ones.',
      colors: ["#6652a6", "#dbe0e6", "#24242c"]
    },
    frame: {
      image: fusionTVEmail.src
    },
    special: {
      title: "Special Announcements",
      text: " As past of this rebranding campaign the following email was created with high contrast colors and animated gifs as a hero image, to impact the viewer to click the call action button."
    }
  },
];
export function json() {
  throw new Error("Function not implemented.");
}
