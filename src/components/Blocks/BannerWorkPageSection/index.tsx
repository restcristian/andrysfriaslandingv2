import React from "react";
import styles from "./BannerWorkPage.module.scss";
import { BannerWorkPageSection } from "@/types";

interface Props {
  banner: BannerWorkPageSection;
}
const BannerWorkPageSection: React.FC<Props> = ({ banner }) => {
  console.log("image", banner.fields.image.fields.file.url);
  return (
    <div className={styles.detailWork}>
      <div
        className={styles.banner}
        style={{
          backgroundColor: banner.fields.backgroundColor ?? undefined,
        }}
      >
        <div className={styles.bannerContainer}>
          <img
            src={banner.fields.image.fields.file.url}
            alt={banner.fields.image.fields.file.title}
          />
        </div>
        <span
          className={styles.bannerText}
          style={{ color: banner?.fields?.textColor ?? undefined }}
        >
          {banner?.fields?.slug}
        </span>
      </div>
    </div>
  );
};

export default BannerWorkPageSection;
