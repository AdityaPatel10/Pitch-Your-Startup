export const STARTUP_QUERY = `*[_type == "startup" && defined(slug.current)] | order(_createdAt desc) {
  _id,
  title,
  slug,
  _createdAt,
  author -> {
    _id,
    name,
    image,
    bio
  },
  views,
  description,
  category,
  image,
  pitch
}`;
