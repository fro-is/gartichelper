import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import WordsRepository from "../../database/words";

export const getServerSideProps: GetServerSideProps = async ctx => {
  const categories = WordsRepository.map(category =>
    category.name.toLowerCase()
  );

  const fields: ISitemapField[] = categories.map(categorie => ({
    loc: `https://gartichelper.me/temas/${categorie}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, fields);
};

export default function SiteMap() {}
