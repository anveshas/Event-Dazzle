import { Button } from "@/components/ui/button";
import Image from "next/image"
import Link from "next/link";


export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2x1:gap-0">
          <div className="flex flex-col justify-center gap-8">
          <h1 className="h2-bold">Explore, Celebrate,<br/> Engage: Your<br/> Portal to Events</h1>
          <p className="p-regular-16 md:p-regular-18">
          From Mohit Chauhan's concert to Anubhav Singh Bassi,<br/> from Dussehra Mela to the iconic DDLJ movie,<br/> this platform caters to all your event needs.
          </p>
          <Button size="lg" asChild className="button w-full sm:w-fit">
            <Link href="#events">
            Get Started!
            </Link>
            </Button>
          </div>
          <Image
            src="/assets/images/heroo.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2x1:max-h-[50vh]"
          />

        </div>
      </section>
      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h3-bold">Trusted by<br/> thousands of Events</h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          Search
          CategoryFilter
        </div>
      </section>
    </>
  );
}
