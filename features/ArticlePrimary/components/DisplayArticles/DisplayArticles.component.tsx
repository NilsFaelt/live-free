import React, { FC } from "react";
import { Container } from "./DisplayArticles.style";
import { ArticlePrimary, RenderArticles } from "@/components";
import { useArticles } from "../../hooks";
import { AddButton } from "@/ui/actions";
import { SecondaryTitle } from "@/ui/display/SecondaryTitle/SecondaryTitle.component";

export const DisplayArticles: FC = () => {
  const { data, isError, isLoading } = useArticles({
    endpoint: "article-primary",
  });
  console.log(data);
  if (!data && isError) return null;
  return (
    <Container>
      <SecondaryTitle title='Articles' />
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
              author={each.author?.userName}
            />
          );
        })}
      </RenderArticles>
      <AddButton link='/article-primary/create/e6f1fe8d-dca2-4d7b-a50d-1c3285f1e9ac' />
    </Container>
  );
};
