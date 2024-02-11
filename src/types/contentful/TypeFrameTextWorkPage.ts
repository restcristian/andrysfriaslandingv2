import type { Entry, EntryFields } from "contentful";

export interface TypeFrameTextWorkPageFields {
    slug?: EntryFields.Symbol;
    title?: EntryFields.Symbol;
    description?: EntryFields.Text;
    backgroundColor?: EntryFields.Symbol;
    textColor?: EntryFields.Symbol;
}

export type TypeFrameTextWorkPage = Entry<TypeFrameTextWorkPageFields>;
