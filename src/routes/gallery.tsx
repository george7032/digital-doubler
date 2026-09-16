import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import PageHero from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { AdmissionsCta } from "@/components/site/CtaGroup";
import { SITE_URL } from "@/lib/school";
const heroImage = "/__l5e/assets-v1/5fa8203e-5eb0-43bc-938b-1c415fdd8815/hero-8.jpeg";
const upper = "/__l5e/assets-v1/b40de158-cbfb-4f84-88f0-7eb90dd3f6ee/upper.jpeg";
const kindergartenImg = "/__l5e/assets-v1/a3cf88a3-fde4-4c17-ac05-1041b9314972/kindergarten.jpeg";
const jss = "/__l5e/assets-v1/970db3da-2dd3-4b76-a459-653860bfdbf7/jss.jpeg";
const hero6 = "/__l5e/assets-v1/d0b2228d-b5eb-4e79-b910-f7997722d1ba/hero-6.jpeg";
const hero7 = "/__l5e/assets-v1/5696574d-f0a7-47b9-a326-d7628b97893c/hero-7.jpeg";
const hero9 = "/__l5e/assets-v1/dd453b85-76ec-4a90-8726-d9fea3710aa0/hero-9.jpeg";
const hero10 = "/__l5e/assets-v1/51f4e4d5-8ac0-4b64-8b35-79d7381d95a0/hero-10.jpeg";
const park1 = "/__l5e/assets-v1/e2ac6a2d-760c-4ea9-a1f8-a8926ab0eb56/park1.jpeg";
const park2 = "/__l5e/assets-v1/f042b82a-3c1e-4543-acb4-f93511330841/park2.jpeg";
const park3 = "/__l5e/assets-v1/e6e86ff3-a649-414e-a671-cb149cf97a51/park3.jpeg";
const computerLab = "/__l5e/assets-v1/5191df5d-1756-4c7f-a1ac-bee82ed7d6ce/computer-lab.jpg";
const scienceLab = "/__l5e/assets-v1/436f557b-7efd-43f7-acdb-4d92246dec1e/science-lab.jpg";
const diningHall = "/__l5e/assets-v1/37df035a-e593-486f-93cf-b6e3214cb89d/dining-hall.jpg";
const karate = "/__l5e/assets-v1/7da91640-bf03-48bb-9cf1-ee2b7cc5ad96/karate.jpg";
const chess = "/__l5e/assets-v1/50fa27bc-32bd-4f65-9337-d3515dab0eb0/chess.jpg";
const taekwondo = "/__l5e/assets-v1/0e21540a-c564-4ca6-b381-0f7e17567118/taekwondo.jpg";
const swimming = "/__l5e/assets-v1/66ced809-270b-4755-9de1-14736a673a3e/swimming.jpg";
const skating = "/__l5e/assets-v1/43427617-6a57-493b-b294-6b5f4beab778/skating.jpg";
const urbanDance = "/__l5e/assets-v1/fac2506b-b6b1-4e51-9230-261104547448/urban-dance.jpg";
const music = "/__l5e/assets-v1/08182184-81a0-4b35-b010-799964b96652/music.jpg";
const french = "/__l5e/assets-v1/6f804131-2ae4-4160-8898-f8f87f359930/french.jpg";
const german = "/__l5e/assets-v1/62db95f5-428e-45b5-b420-aeb3b292169d/german.jpg";

const title = "Gallery — Embakasi Benedicta Academy, Utawala";
const description =
  "Photographs of learning, facilities, sport, clubs and school life at Embakasi Benedicta Academy in Utawala.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/gallery` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/gallery` }],
  }),
  component: GalleryPage,
});

type Item = { src: string; alt: string; caption: string };

const groups: { title: string; description: string; items: Item[] }[] = [
  {
    title: "Learning and classrooms",
    description: "Everyday teaching and learning across our school levels.",
    items: [
      { src: upper, alt: "Learners in a primary classroom", caption: "Primary classroom" },
      { src: kindergartenImg, alt: "Kindergarten learners at play-based learning", caption: "Kindergarten" },
      { src: jss, alt: "Junior school learners in a lesson", caption: "Junior School" },
      { src: hero6, alt: "The Academy campus in Utawala", caption: "Our campus" },
    ],
  },
  {
    title: "Facilities",
    description: "The spaces that support learning, health and wellbeing.",
    items: [
      { src: computerLab, alt: "Learners working in the computer laboratory", caption: "Computer laboratory" },
      { src: scienceLab, alt: "Learners carrying out an experiment in the science laboratory", caption: "Science laboratory" },
      { src: diningHall, alt: "Learners having a meal in the school dining hall", caption: "Dining facility" },
      { src: hero7, alt: "Green outdoor space on the campus", caption: "Outdoor spaces" },
    ],
  },
  {
    title: "Co-curricular activities",
    description: "Sport, martial arts, performance and clubs beyond the classroom.",
    items: [
      { src: karate, alt: "Learners practising karate in the school hall", caption: "Karate" },
      { src: taekwondo, alt: "Learners practising taekwondo", caption: "Taekwondo" },
      { src: chess, alt: "Learners playing chess in the chess club", caption: "Chess" },
      { src: swimming, alt: "Learners in a swimming lesson", caption: "Swimming" },
      { src: skating, alt: "Learners skating with helmets and pads", caption: "Skating" },
      { src: urbanDance, alt: "Learners in an urban dance session", caption: "Urban dance" },
      { src: music, alt: "Learners in a music lesson with instruments", caption: "Music" },
      { src: hero10, alt: "Learners taking part in school activities", caption: "School activities" },
    ],
  },
  {
    title: "Foreign languages",
    description: "French and German lessons at the Academy.",
    items: [
      { src: french, alt: "A French language lesson in progress", caption: "French" },
      { src: german, alt: "A German language lesson in progress", caption: "German" },
    ],
  },
  {
    title: "School life and the amusement park",
    description: "Events, celebrations and supervised play on our grounds.",
    items: [
      { src: hero9, alt: "A school event at the Academy", caption: "School events" },
      { src: park1, alt: "Children in the kids amusement park", caption: "Amusement park" },
      { src: park2, alt: "Play equipment in the kids amusement park", caption: "Supervised play" },
      { src: park3, alt: "Children enjoying the amusement park rides", caption: "Rides" },
    ],
  },
];

function GalleryPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Gallery"
        title="Our school in pictures"
        description="A look at learning, facilities, sport and school life at the Academy."
        image={heroImage}
        imageAlt="Learners at Embakasi Benedicta Academy"
        crumbs={[{ name: "Gallery" }]}
      />

      {groups.map((g, i) => (
        <Section key={g.title} muted={i % 2 === 1}>
          <SectionHeading title={g.title} description={g.description} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {g.items.map((item) => (
              <figure
                key={item.caption + item.src}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="p-4 text-center text-sm font-semibold text-foreground">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>
      ))}

      <AdmissionsCta
        title="See it for yourself"
        description="Book a school visit and walk through the Academy with us."
      />
    </Layout>
  );
}
