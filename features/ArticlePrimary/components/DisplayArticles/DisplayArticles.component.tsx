import React, { FC } from "react";
import { Container } from "./DisplayArticles.style";
import { ArticlePrimary, RenderArticles } from "@/components";
import { useArticles } from "../../hooks";

export const DisplayArticles: FC = () => {
  const { data, isError, isLoading } = useArticles({
    endpoint: "article-primary",
  });
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
              endTextDate={each.createdAt}
              imageSrc={each.image}
              author={each.author.userName}
            />
          );
        })}
      </RenderArticles>
    </Container>
  );
};
