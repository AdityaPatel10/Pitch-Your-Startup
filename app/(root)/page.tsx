export const dynamic = "force-dynamic";
export const revalidate = 0;

import StartupCards, { StartupCardType } from "@/components/StartupCards";
import SearchForm from "../../components/SearchForm";
import { STARTUP_QUERY } from "@/sanity/lib/query";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };

  // const startups = await client.fetch(STARTUP_QUERY);
  const { data: startups } = await sanityFetch({
    query: STARTUP_QUERY,
    params,
  });

  const session = await auth();

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          pitch your startup, connect with entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Results for "${query}"` : "Recent Pitches"}
        </p>
        <ul className="mt-7 card_grid">
          {startups?.length > 0 ? (
            (startups as StartupCardType[]).map((startup: StartupCardType) => (
              <StartupCards key={startup?._id} startup={startup} />
            ))
          ) : (
            <p>No startup Found</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}
