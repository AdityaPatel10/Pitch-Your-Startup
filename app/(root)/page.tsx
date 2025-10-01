import StartupCards from "@/components/StartupCards";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const startups = [
    {
      _createdAt: new Date(),
      title: "AgriTech Solutions",
      description:
        "Revolutionizing farming with AI-powered crop monitoring and precision irrigation systems.",
      _id: "1",
      author: { _id: 101, name: "GreenFuture Labs" },
      views: 154,
      image:
        "https://src.n-ix.com/uploads/2024/03/21/ec4134ff-810d-4c4e-b60a-d57706b5293e.webp",
      category: "Agriculture Tech",
    },
  ];
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
            startups.map((startup: StartupCardType) => (
              <StartupCards key={startup?._id} startup={startup} />
            ))
          ) : (
            <p>No startup Found</p>
          )}
        </ul>
      </section>
    </>
  );
}
