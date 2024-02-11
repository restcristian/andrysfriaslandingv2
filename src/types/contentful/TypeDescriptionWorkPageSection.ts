import type { Entry, EntryFields } from "contentful";

export interface TypeDescriptionWorkPageSectionFields {
    slug: EntryFields.Symbol;
    backgroundColor?: EntryFields.Symbol;
    textColor?: EntryFields.Symbol;
    text?: EntryFields.Text;
    role?: EntryFields.Symbol;
    client?: EntryFields.Symbol;
    year?: EntryFields.Integer;
}

export type TypeDescriptionWorkPageSection = Entry<TypeDescriptionWorkPageSectionFields>;
