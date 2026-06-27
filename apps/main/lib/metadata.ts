import type { Metadata } from "next";

const SITE_NAME = "Sanaa Services";
const BASE_URL = process.env.NEXT_PUBLIC_MAIN_URL ?? "https://www.mbk.ma";

export function createMainMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${BASE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: { card: "summary", title, description },
  };
}
