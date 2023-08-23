import React, { FC } from "react";
import { Container } from "./DisplayArticles.style";
import { ArticlePrimary, RenderArticles } from "@/components";
import { useArticles } from "../../hooks";
import { AddButton } from "@/ui/actions";
import { SecondaryTitle } from "@/ui/display/SecondaryTitle/SecondaryTitle.component";

export const DisplayArticles: FC = () => {
  async function fetchToken() {
    const res = await fetch("/api/access-token");
    const data = await res.json();
    console.log("Received token:", data.token);
  }

  // Call this function somewhere in your component
  fetchToken();
  const { data, isError, isLoading } = useArticles({
    endpoint: "article-primary",
  });
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
              author={each.author.userName}
            />
          );
        })}
      </RenderArticles>
      <AddButton link='/article-primary/add/e6f1fe8d-dca2-4d7b-a50d-1c3285f1e9ac' />
    </Container>
  );
};
