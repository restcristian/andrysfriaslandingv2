import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeCenterImageWorkPageSectionFields {
    slug?: EntryFields.Symbol;
    backgroundColor?: EntryFields.Symbol;
    image?: Asset;
}

export type TypeCenterImageWorkPageSection = Entry<TypeCenterImageWorkPageSectionFields>;
