import Paragraph from "../shared/Paragraph";
import ProfilePicture from "../shared/ProfilePicture";
import { SocialLinks } from "../shared/SocialLinks";

export default function Page() {
  return (
    <div className="mb-4 flex max-w-[700px] flex-col items-start justify-center gap-6 container">
      <div className="w-full text-center">
        <h1 className="text-4xl font-bold md:text-5xl">About Me</h1>
      </div>
      <ProfilePicture />
      <Paragraph>
        Hey there! I&apos;m a self-taught full-stack developer hailing from
        India who loves hacking cool stuff! <strong>Next.js</strong> and{" "}
        <strong>Remix.run</strong> are my go-to weapons, but sometimes, I dive
        into the world of NFT smart contracts with <strong>Scilla</strong> on{" "}
        <strong>Zilliqa</strong>. You could say I&apos;m a jack of all trades,
        master of fun. 😄
      </Paragraph>
      <Paragraph>
        I&apos;ve had my hands on two major NFT smart contracts for{" "}
        <strong>The Soulless Citadel</strong>, the largest NFT project on
        <strong> Zilliqa.</strong> One of these bad boys is a full-blown NFT
        marketplace, packed with bidding, listing, purchasing, and more. The
        other is an NFT minting contract with fancy discount mechanisms like
        premining and whitelist. Oh, and I also whipped up the{" "}
        <strong>GraphQL API</strong> for the Soulless Game, a real-time card
        game where you can play with the NFTs you own. Pretty cool, huh?
      </Paragraph>
      <Paragraph>
        When I&apos;m not busy typing away, I love sharing my coding adventures
        on my <a href="/blog">blog</a>. I also unwind with books on life and
        startups, and nothing beats coding with some chill lofi beats in the
        background. 🎧
      </Paragraph>
      <Paragraph>
        So, are you working on something that&apos;s got you jumping out of your
        seat with excitement? Let&apos;s chat about it! Drop me a line below.
        👇😉
      </Paragraph>
      <SocialLinks />
    </div>
  );
}
