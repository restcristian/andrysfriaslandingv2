import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeBannerWorkPageSectionFields {
    slug: EntryFields.Symbol;
    image?: Asset;
    backgroundColor?: EntryFields.Symbol;
    textColor?: EntryFields.Symbol;
}

export type TypeBannerWorkPageSection = Entry<TypeBannerWorkPageSectionFields>;
