import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarCentered from '@/components/ui/NavbarCentered';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Services",
    "href": "#services"
  },
  {
    "name": "Why Us",
    "href": "#why-choose-us"
  },
  {
    "name": "Gallery",
    "href": "#gallery"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  }
];

  return (
    <StyleProvider buttonVariant="stagger" siteBackground="floatingGradient" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarCentered
      logo="Palafox Construction"
      ctaButton={{
        text: "Call Now",
        href: "tel:8056106625",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBasic
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "805-610-6625",
              href: "tel:8056106625",
            },
            {
              label: "palafoxconstruction@gmail.com",
              href: "mailto:palafoxconstruction@gmail.com",
            },
          ],
        },
        {
          title: "License",
          items: [
            {
              label: "License #957719",
              href: "#",
            },
          ],
        },
      ]}
      leftText="© 2024 Palafox Construction, Atascadero, CA 93422."
      rightText="Professional Home Improvement Experts."
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
