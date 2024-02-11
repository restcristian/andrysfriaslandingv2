import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeSquareFrameWorkPageSectionFields {
    slug?: EntryFields.Symbol;
    isOverlapping?: EntryFields.Boolean;
    backgroundColor?: EntryFields.Symbol;
    borderColor?: EntryFields.Symbol;
    image?: Asset;
}

export type TypeSquareFrameWorkPageSection = Entry<TypeSquareFrameWorkPageSectionFields>;
