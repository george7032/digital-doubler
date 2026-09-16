import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import PageHero from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { AdmissionsCta } from "@/components/site/CtaGroup";
import { SITE_URL } from "@/lib/school";
const heroImage = "/__l5e/assets-v1/5696574d-f0a7-47b9-a326-d7628b97893c/hero-7.jpeg";
const library = "/__l5e/assets-v1/5fa8203e-5eb0-43bc-938b-1c415fdd8815/hero-8.jpeg";
const campus = "/__l5e/assets-v1/d0b2228d-b5eb-4e79-b910-f7997722d1ba/hero-6.jpeg";
const park = "/__l5e/assets-v1/e2ac6a2d-760c-4ea9-a1f8-a8926ab0eb56/park1.jpeg";
const classrooms = "/__l5e/assets-v1/b40de158-cbfb-4f84-88f0-7eb90dd3f6ee/upper.jpeg";
const grounds = "/__l5e/assets-v1/51f4e4d5-8ac0-4b64-8b35-79d7381d95a0/hero-10.jpeg";

const title = "Facilities — Embakasi Benedicta Academy, Utawala";
const description =
  "Classrooms, library, outdoor spaces and a distinctive kids amusement park support learning at Embakasi Benedicta Academy in Utawala.";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/facilities` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/facilities` }],
  }),
  component: FacilitiesPage,
});

const confirmed = [
  {
    name: "Classrooms",
    image: classrooms,
    alt: "A classroom at Embakasi Benedicta Academy",
    d: "Bright, orderly classrooms arranged so that teachers can work closely with every learner.",
    benefit: "Focused teaching and small-group support during lessons.",
  },
  {
    name: "Library",
    image: library,
    alt: "The school library at Embakasi Benedicta Academy",
    d: "A quiet reading space where learners build the reading habit and research skills.",
    benefit: "Stronger literacy, vocabulary and independent study.",
  },
  {
    name: "Campus and grounds",
    image: campus,
    alt: "The Embakasi Benedicta Academy campus",
    d: "A secure, well-kept campus in Utawala, next to Kimson Plaza.",
    benefit: "A calm, safe environment where learners can concentrate.",
  },
  {
    name: "Outdoor and green spaces",
    image: grounds,
    alt: "Outdoor green space at Embakasi Benedicta Academy",
    d: "Open outdoor areas used for play, assemblies and physical activity.",
    benefit: "Daily movement, teamwork and healthy breaks from the classroom.",
  },
  {
    name: "Kids amusement park",
    image: park,
    alt: "The kids amusement park at Embakasi Benedicta Academy",
    d: "A distinctive on-site facility where structured play supports confidence and physical development.",
    benefit: "Safe, supervised active play built into school life.",
  },
];


function FacilitiesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="School Life"
        title="Our facilities and learning environment"
        description="Spaces designed so that learners can concentrate, take part and grow — inside and outside the classroom."
        image={heroImage}
        imageAlt="The learning environment at Embakasi Benedicta Academy"
        crumbs={[{ name: "Facilities" }]}
      />

      <Section>
        <SectionHeading
          title="Facilities on our Institution"
          description="Every facility below is part of daily learning at the Academy."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {confirmed.map((f) => (
            <article key={f.name} className="overflow-hidden rounded-xl border border-border bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={f.image} alt={f.alt} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground">{f.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
                <p className="mt-3 text-sm font-medium text-primary">{f.benefit}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>


      <AdmissionsCta title="See our facilities for yourself" description="Book a school visit and walk the campus with our team." />
    </Layout>
  );
}
