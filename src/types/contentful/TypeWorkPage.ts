import type { Entry, EntryFields } from "contentful";

export interface TypeWorkPageFields {
    slug: EntryFields.Symbol;
    blocks?: Entry<Record<string, any>>[];
}

export type TypeWorkPage = Entry<TypeWorkPageFields>;
