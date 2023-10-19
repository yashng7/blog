import { allPosts } from "@/.contentlayer/generated";
import { Shell } from "@/components/shells/shell";
import { formatDate } from "@/lib/utils";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Icons } from "@/components/icons";
import header from "../public/images/assets/header.webp";

export default function Home() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => dayjs(b.date).unix() - dayjs(a.date).unix());
  return (
    <section className="py-10">
      <div className="relative shadow-xl">
        <Image
          src={header}
          alt="site header image"
          className="object-cover w-full rounded-lg "
        />
        <div className="absolute p-2 text-sm font-normal tracking-wide text-white letter bottom-1 right-1">
          <Link
            className="underline underline-offset-2"
            href="https://unsplash.com/photos/5Xwaj9gaR0g?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            target="_blank"
          >
            Unsplash
          </Link>
        </div>
      </div>

      <Shell className="md:pb-10">
        <PageHeader
          id="projects-header"
          aria-labelledby="projects-header-heading"
          className="flex flex-col items-center"
        >
          <PageHeaderHeading>Blogs</PageHeaderHeading>
          <PageHeaderDescription>
            Explore the my latest learnings and open-source contributions in web
            technologies.
          </PageHeaderDescription>
        </PageHeader>
        <Separator className="mb-2.5" />
        <section
          id="project"
          aria-labelledby="projects-heading"
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {posts.map((post, i) => (
            <Link key={post.slug} href={post.slug}>
              <article className="flex flex-col space-y-2.5">
                <AspectRatio ratio={16 / 9} className="relative overflow-hidden bg-no-repeat bg-cover rounded-lg">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 384px, (min-width: 768px) 288px, (min-width: 640px) 224px, 100vw"
                      className="transition duration-300 ease-in-out hover:scale-110"
                      priority={i <= 1}
                    />
                  ) : (
                    <div
                      aria-label="Placeholder"
                      role="img"
                      aria-roledescription="placeholder"
                      className="flex items-center justify-center w-full h-full rounded-lg bg-secondary"
                    >
                      <Icons.placeholder
                        className="h-9 w-9 text-muted-foreground"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </AspectRatio>
                <h2 className="text-xl font-semibold line-clamp-1">
                  {post.title}
                </h2>
                <p className="line-clamp-2 text-muted-foreground">
                  {post.description}
                </p>
                {post.date ? (
                  <p className="text-sm text-muted-foreground">
                    {formatDate(post.date)}
                  </p>
                ) : null}
              </article>
            </Link>
          ))}
        </section>
      </Shell>
    </section>
  );
}
