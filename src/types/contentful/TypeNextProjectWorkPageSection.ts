import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeNextProjectWorkPageSectionFields {
    slug?: EntryFields.Symbol;
    backgroundColor?: EntryFields.Symbol;
    nextProjectSlug?: EntryFields.Symbol;
    nextProjectImage?: Asset;
    textColor?: EntryFields.Symbol;
    textColorHover?: EntryFields.Symbol;
}

export type TypeNextProjectWorkPageSection = Entry<TypeNextProjectWorkPageSectionFields>;
