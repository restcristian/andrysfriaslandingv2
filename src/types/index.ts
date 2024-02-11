import * as Contentful from "./contentful";

export type WorkPage = Contentful.TypeWorkPage;
export type BannerWorkPageSection = Contentful.TypeBannerWorkPageSection;
export type DescriptionWorkPageSection =
  Contentful.TypeDescriptionWorkPageSection;

export type PaletteColorsWorkPageSection =
  Contentful.TypePaletteColorsWorkPageSection;

export type ScreenWorkPageSection = Contentful.TypeScreenWorkPageSection;

export type SquareFrameWorkPageSection =
  Contentful.TypeSquareFrameWorkPageSection;

export type FrameTextWorkPageSection = Contentful.TypeFrameTextWorkPage;

export type CenterImageWorkPageSection =
  Contentful.TypeCenterImageWorkPageSection;

export type NextProjectWorkPageSection =
  Contentful.TypeNextProjectWorkPageSection;

export type WorkPageSection =
  | BannerWorkPageSection
  | DescriptionWorkPageSection
  | ScreenWorkPageSection
  | PaletteColorsWorkPageSection
  | SquareFrameWorkPageSection
  | FrameTextWorkPageSection
  | CenterImageWorkPageSection
  | NextProjectWorkPageSection;
