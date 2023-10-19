import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Icons } from "@/components/icons";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Shell } from "@/components/shells/shell";

export default function ProjectLoading() {
  return (
    <Shell className="md:pb-10">
      <PageHeader id="projects-header" aria-labelledby="projects-header-heading">
        <PageHeaderHeading>Blogs</PageHeaderHeading>
        <PageHeaderDescription>
          Explore the latest projects and open-source contributions in
          web-space.
        </PageHeaderDescription>
      </PageHeader>
      <Separator className="mb-2.5" />
      <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i}>
            <article className="flex flex-col space-y-2.5">
              <AspectRatio ratio={16 / 9}>
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
              </AspectRatio>
              <Skeleton className="w-40 h-6" />
              <div className="space-y-1.5">
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-4/5 h-4" />
              </div>
              <Skeleton className="w-24 h-4" />
            </article>
          </div>
        ))}
      </section>
    </Shell>
  );
}
