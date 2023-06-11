import peopleFusionImage from "@/assets/images/people_fusion_works@2x.cc16cbed.png";
interface DetailedProject {
  slug: string;
  bannerImageUrl: string;
  description: {
    title: string;
    text: string;
    role: string;
    client: string;
    year: number;
  };
}
export const detailedProjects: DetailedProject[] = [
  {
    slug: "fusion-tv",
    bannerImageUrl: peopleFusionImage.src,
    description: {
      title: "1. FusionTV",
      text: `Email marketing strategy based on different layouts of emails to remind the audience their favorite content as well as new incoming programs from the Fusion TV channel, part of the Univision network.`,
      role: "Art Direction, Head Designer,Animator",
      client: "Univision",
      year: 2017,
    },
  },
];
