import { Home } from "@/components/pages/home/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yon Holmes",
  description: "Gamer, turned Developer",
  robots: {
    index: false,
    follow: false,
    nocache: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'psRtEERv2Cf55bV9e9jj63Rr5nff5heKae8MZXFxbnI',
  },
  // <meta name="google-site-verification" content="psRtEERv2Cf55bV9e9jj63Rr5nff5heKae8MZXFxbnI" />
};

export default function HomeRoute() {
  console.log('HomeRoute');
  return (
    <Home/>
  );
}
