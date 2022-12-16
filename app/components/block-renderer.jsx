import Hero from "~/components/hero";
import Benefits from "~/components/benefits";
import Steps from "~/components/steps";
import Faqs from "~/components/fags";
import CallToAction from '~/components/call-to-action';

export default function BlockRenderer({ blocks }) {
  return blocks.map((block, index) => {
    // console.log(block, "Block Data");
    switch (block.__component) {
      case "blocks.hero":
        return <Hero key={index} data={block} />;
      case "blocks.benefits":
        return <Benefits key={index} data={block} />;
      case "blocks.steps":
        return <Steps key={index} data={block} />;
      case "blocks.faqs":
        return <Faqs key={index} data={block} />;
      case "blocks.cta":
        return <CallToAction key={index} data={block} />;
      default:
        return null;
    }
  });
}
