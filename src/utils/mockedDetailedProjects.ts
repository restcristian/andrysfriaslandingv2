import peopleFusionImage from "@/assets/images/people_fusion2@2x.af13e467.png";
import fusionScreen from "@/assets/images/screens@2x.c1666b66.png";
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
        imageUrl: fusionScreen.src
    }
  },
];
export function json() {
  throw new Error("Function not implemented.");
}

