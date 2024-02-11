import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeScreenWorkPageSectionFields {
    slug?: EntryFields.Symbol;
    hasBorder?: EntryFields.Boolean;
    borderColor?: EntryFields.Symbol;
    noOverlap?: EntryFields.Boolean;
    image?: Asset;
}

export type TypeScreenWorkPageSection = Entry<TypeScreenWorkPageSectionFields>;
