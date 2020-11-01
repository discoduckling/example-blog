import React from "react";
import OverviewLayout from "../components/page-layouts/OverviewLayout";
import { getSortedPostsData } from "../lib/utils";
import PostOverview from "../components/styled-components/PostOverview";

const Home = props => {
  const { posts } = props;
  return (
    <OverviewLayout>
      {posts.map(p => (
        <PostOverview
          title={p.title}
          date={p.date}
          key={p.pid}
          to={`/${p.postType}/${p.pid}`}
        />
      ))}
    </OverviewLayout>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      posts: allPostsData
    }
  };
}

export default Home;
