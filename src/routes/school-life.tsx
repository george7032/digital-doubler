import { createFileRoute, Link } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import PageHero from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { AdmissionsCta } from "@/components/site/CtaGroup";
import { SITE_URL } from "@/lib/school";
const heroImage = "/__l5e/assets-v1/51f4e4d5-8ac0-4b64-8b35-79d7381d95a0/hero-10.jpeg";
const parkImage = "/__l5e/assets-v1/f042b82a-3c1e-4543-acb4-f93511330841/park2.jpeg";
const karate = "/__l5e/assets-v1/7da91640-bf03-48bb-9cf1-ee2b7cc5ad96/karate.jpg";
const chess = "/__l5e/assets-v1/50fa27bc-32bd-4f65-9337-d3515dab0eb0/chess.jpg";
const taekwondo = "/__l5e/assets-v1/0e21540a-c564-4ca6-b381-0f7e17567118/taekwondo.jpg";
const swimming = "/__l5e/assets-v1/66ced809-270b-4755-9de1-14736a673a3e/swimming.jpg";
const skating = "/__l5e/assets-v1/43427617-6a57-493b-b294-6b5f4beab778/skating.jpg";
const urbanDance = "/__l5e/assets-v1/fac2506b-b6b1-4e51-9230-261104547448/urban-dance.jpg";
const musicImg = "/__l5e/assets-v1/08182184-81a0-4b35-b010-799964b96652/music.jpg";
const frenchImg = "/__l5e/assets-v1/6f804131-2ae4-4160-8898-f8f87f359930/french.jpg";
const germanImg = "/__l5e/assets-v1/62db95f5-428e-45b5-b420-aeb3b292169d/german.jpg";

const activityImages = [
  { img: karate, t: "Karate", alt: "Learners practising karate in the school hall" },
  { img: taekwondo, t: "Taekwondo", alt: "Learners practising taekwondo kicks" },
  { img: chess, t: "Chess", alt: "Learners playing chess in the chess club" },
  { img: swimming, t: "Swimming", alt: "Learners in a swimming lesson" },
  { img: skating, t: "Skating", alt: "Learners skating with helmets and protective pads" },
  { img: urbanDance, t: "Urban dance", alt: "Learners in an urban dance session" },
  { img: musicImg, t: "Music", alt: "Learners playing instruments in a music lesson" },
  { img: parkImage, t: "Supervised play", alt: "Children playing in the kids amusement park" },
];

const languages = [
  {
    img: frenchImg,
    t: "French",
    alt: "A French language lesson in progress",
    d: "Learners build everyday French through greetings, vocabulary, simple conversation, reading and writing.",
  },
  {
    img: germanImg,
    t: "German",
    alt: "A German language lesson in progress",
    d: "Learners are introduced to German with spoken practice, vocabulary and written work suited to their level.",
  },
];

const title = "School Life — Embakasi Benedicta Academy, Utawala";
const description =
  "Sports, clubs, music, arts, leadership, trips and celebrations at Embakasi Benedicta Academy in Utawala — plus our distinctive kids amusement park.";

export const Route = createFileRoute("/school-life")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/school-life` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/school-life` }],
  }),
  component: SchoolLifePage,
});

const activities = [
  { t: "Sports", d: "Physical education and team games that build fitness, discipline and teamwork." },
  { t: "Clubs and societies", d: "Interest-based clubs where learners explore new skills with their peers." },
  { t: "Music and performance", d: "Singing, instruments and performance opportunities that build confidence." },
  { t: "Arts and creativity", d: "Drawing, craft and creative work that develops imagination and patience." },
  { t: "Talent development", d: "Teachers identify individual strengths and give learners room to grow them." },
  { t: "Leadership", d: "Learner leadership roles that teach responsibility, service and communication." },
  { t: "Educational trips", d: "Learning beyond the classroom through carefully planned educational visits." },
  { t: "Competitions", d: "Opportunities to represent the Academy and measure progress against others." },
  { t: "School events and celebrations", d: "Assemblies, parents' days and celebrations that bring our community together." },
  { t: "Outdoor activity", d: "Daily active play and outdoor learning on our campus grounds." },
  { t: "Learner wellbeing", d: "Pastoral care, mentorship and a culture where every learner is known by name." },
];

function SchoolLifePage() {
  return (
    <Layout>
      <PageHero
        eyebrow="School Life"
        title="Life at the Academy"
        description="Learning does not stop at the classroom door. Sport, the arts, leadership and friendship shape the whole child."
        image={heroImage}
        imageAlt="Learners taking part in school activities at Embakasi Benedicta Academy"
        crumbs={[{ name: "School Life" }]}
      />

      <Section>
        <SectionHeading
          title="Co-curricular activities"
          description="A broad programme so that every learner finds something they love and something they are good at."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((a) => (
            <div key={a.t} className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">{a.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section muted ariaLabel="Clubs and activities in pictures">
        <SectionHeading
          title="Clubs and activities in pictures"
          description="Martial arts, sport, games and performance run alongside the academic timetable."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activityImages.map((a) => (
            <figure key={a.t} className="overflow-hidden rounded-2xl border border-border bg-card">
              <img src={a.img} alt={a.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="p-4 text-center text-sm font-semibold text-foreground">{a.t}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Foreign languages"
          title="French and German"
          description="Learners are introduced to French and German, building confidence in listening, speaking, reading and writing another language."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {languages.map((l) => (
            <div key={l.t} className="overflow-hidden rounded-2xl border border-border bg-card">
              <img src={l.img} alt={l.alt} loading="lazy" className="aspect-[16/9] w-full object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground">{l.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={parkImage}
              alt="Children playing in the kids amusement park at Embakasi Benedicta Academy"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="One distinctive facility"
              title="Our kids amusement park"
              description="Structured, supervised play is part of how younger learners build confidence, coordination and friendships. Our on-site amusement park is one of the facilities that supports this — alongside our classrooms, library and grounds."
            />
            <Link
              to="/park"
              className="inline-flex min-h-11 items-center rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              More about the amusement park
            </Link>
          </div>
        </div>
      </Section>

      <AdmissionsCta title="Come and experience school life" description="Book a visit and see a normal school day at the Academy." />
    </Layout>
  );
}
