import type { Entry, EntryFields } from "contentful";

export interface TypePaletteColorsWorkPageSectionFields {
    slug?: EntryFields.Symbol;
    text?: EntryFields.Text;
    colors?: EntryFields.Symbol;
    backgroundColor?: EntryFields.Symbol;
    textColor?: EntryFields.Symbol;
}

export type TypePaletteColorsWorkPageSection = Entry<TypePaletteColorsWorkPageSectionFields>;
