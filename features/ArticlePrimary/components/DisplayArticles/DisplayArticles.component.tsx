import React, { FC } from "react";
import { Container } from "./DisplayArticles.style";
import { ArticlePrimary, RenderArticles } from "@/components";
import { useArticles } from "../../hooks";

export const DisplayArticles: FC = () => {
  const { data, isError, isLoading } = useArticles({
    endpoint: "article-primary",
  });
  console.log(data?.articles);
  if (!data && isError) return null;
  return (
    <Container>
      <RenderArticles>
        {data?.articles.map((each, i) => {
          return (
            <ArticlePrimary
              key={i}
              link={`/article-primary/${each.id}`}
              title={each.title}
              text={each.text}
              category={each.category}
              endText={each.createdAt}
              imageSrc={each.image}
            />
          );
        })}
      </RenderArticles>
    </Container>
  );
};
