// src/utils.js
import { WorkPage, WorkPageSection } from "@/types";
import { createClient } from "contentful";

interface WorkPageRenderTree {
  [key: string]: WorkPageSection;
}

const client = createClient({
  space: "i15a8mijupxg",
  accessToken: "KCIeQHWmONKyP2MVt3qoaRD3jFu73XqDDe99jLzgMts",
});

export const fetchWorkPages = async () => {
  const response = await client.getEntries({
    content_type: "workPage",
  });
  return response.items;
};

export const fetchContentTypes = async () => {
  return await client.getContentTypes();
};

export const fetchWorkPageBySlug = async (slug: string) => {
  const response = await fetchWorkPages();

  const workPage = response.find(
    (item) => (item.fields.slug as string).toUpperCase() === slug.toUpperCase()
  );

  return workPage as WorkPage;
};

export const getWorkPageRenderTree = (workPage: WorkPage) => {
  const workPageRenderTree: WorkPageRenderTree = {};
  workPage?.fields?.blocks?.forEach((item: WorkPageSection, index: number) => {
    workPageRenderTree[`${item.sys.contentType.sys.id}-${index}`] = item;
  });

  return workPageRenderTree;
};
