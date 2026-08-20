import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';
import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesBentoGrid from '@/components/sections/features/FeaturesBentoGrid';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroCenteredLogos from '@/components/sections/hero/HeroCenteredLogos';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroCenteredLogos
      avatarsSrc={[
        "https://picsum.photos/seed/avatar1/100/100",
        "https://picsum.photos/seed/avatar2/100/100",
        "https://picsum.photos/seed/avatar3/100/100",
      ]}
      avatarText="Trusted by 500+ homeowners in Waco & surrounding areas"
      title="We Are Your Home Improvement Experts"
      description="Quality work for Waco, Texas, and surrounding areas. From residential repairs to light commercial projects, we treat every property like our own."
      primaryButton={{
        text: "Call Now",
        href: "tel:8056106625",
      }}
      secondaryButton={{
        text: "Get an Estimate",
        href: "#contact",
      }}
      names={["Waco Homes", "Texas Quality", "Palafox Craft", "Central TX"]}
      imageSrc="http://img.b2bpic.net/free-photo/side-view-couple-with-paint-rollers-ladder_23-2147782356.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutMediaOverlay
      tag="About Us"
      title="Your Trusted Local Contractor"
      description="Led by Isidro Palafox, Palafox Construction is a hands-on local business built on the pillars of honesty and quality craftsmanship. We take pride in doing the job right the first time, ensuring every homeowner feels respected and every project exceeds expectations."
      imageSrc="http://img.b2bpic.net/free-photo/portrait-male-builder-construction-site_169016-15095.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesRevealCardsBento
      tag="Our Services"
      title="Comprehensive Improvement Projects"
      description="No job is too big or too small. We specialize in residential and light commercial work."
      items={[
        {
          title: "Fencing",
          description: "Custom wood, chain-link, and privacy fencing.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/swimming-ocean-vacation-summer-chair_1203-4051.jpg",
        },
        {
          title: "Landscaping",
          description: "Full-service landscaping and yard transformations.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/photo-ground-texture-pattern_58702-11928.jpg",
        },
        {
          title: "Remodeling",
          description: "Kitchen and bathroom remodeling projects.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-front-door-with-pink-wall-plants_23-2149360589.jpg",
        },
        {
          title: "Concrete & Hardscaping",
          description: "Driveways, walkways, and patio hardscaping.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/man-pouring-drink-his-girlfriend-sitting-rooftop_23-2147891094.jpg",
        },
        {
          title: "Decks & Patios",
          description: "Building custom decks and outdoor living spaces.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-female-athlete-exercising-staircase-winter_23-2147905357.jpg",
        },
        {
          title: "Painting",
          description: "Professional interior and exterior painting services.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/service-worker-painting-car-auto-service_23-2149486992.jpg",
        },
        {
          title: "General Repairs",
          description: "Handyman services for your home improvement needs.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/minimalist-courtyard-pool-design_23-2151934177.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="why-choose-us" data-section="why-choose-us">
    <SectionErrorBoundary name="why-choose-us">
          <FeaturesBentoGrid
      tag="Why Choose Palafox"
      title="Built on Quality & Trust"
      description="We are proud to serve the Waco community with unmatched reliability."
      features={[
        {
          title: "Licensed & Experienced",
          description: "License #957719. Professionals you can trust with your home.",
          imageSrc: "http://img.b2bpic.net/free-photo/party-modern-sunny-vacation-swimming_1203-4637.jpg",
        },
        {
          title: "Quality Craftsmanship",
          description: "We don't cut corners; we focus on perfection.",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-man-making-design-plan_23-2149721865.jpg",
        },
        {
          title: "Fair & Honest Pricing",
          description: "Transparent quotes with no hidden fees.",
          imageSrc: "http://img.b2bpic.net/free-photo/set-designer-work-indoors_23-2149837026.jpg",
        },
        {
          title: "Local & Reliable",
          description: "Serving Waco and the surrounding areas.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-wooden-path-with-dry-leaves_1137-210.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="gallery" data-section="gallery">
    <SectionErrorBoundary name="gallery">
          <MetricsMediaCards
      tag="Projects"
      title="Our Work in Waco"
      description="A glimpse into the quality projects we have completed for our community."
      metrics={[
        {
          title: "Outdoor Decks",
          description: "Custom decks built for comfort.",
          value: "100+",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-chair-park_1339-6076.jpg",
        },
        {
          title: "Fencing",
          description: "Sturdy privacy fencing.",
          value: "200+",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-stone-pavement-made-blocks-grass-winter_181624-42753.jpg",
        },
        {
          title: "Remodels",
          description: "Interior renovations completed.",
          value: "50+",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-young-man-opening-fridge_23-2148351743.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Get Started"
      text="Ready to improve your property? Contact Isidro Palafox today for a free estimate. 805-610-6625 | palafoxconstruction@gmail.com | License #957719"
      primaryButton={{
        text: "Call Now",
        href: "tel:8056106625",
      }}
      secondaryButton={{
        text: "Email Us",
        href: "mailto:palafoxconstruction@gmail.com",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
