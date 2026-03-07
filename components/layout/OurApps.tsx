import Link from "next/link";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "../ui/card";
import { LinkIcon, MoveRightIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function OurApps() {
  return (
    <section className="flex flex-col justify-center align-middle font-archivo container mx-auto px-4 md:px-0 py-10 gap-8" id="our-products">
      <h2 className="text-2xl font-bold mb-4 text-center">Our Apps</h2>
      <div className="flex flex-col gap-4">
        <p className="text-center">
          We have a variety of apps that cater to different needs. Whether
          you&apos;re looking for productivity tools, entertainment, or something
          else, we&apos;ve got you covered. Most will be posted as soon as they are available
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="uppercase">Accommodica</CardTitle>
              <CardAction>
                <div className="flex flex-row justify-center align-middle items-center gap-2 text-sm">
                  <LinkIcon className="h-4 w-4" />
                  <Link href="https://accommodica.com">
                    Accommodica
                  </Link>
                </div>
              </CardAction>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p>
                Accommodica is a platform that connects people with unique and
                affordable accommodations around the world. Whether you&apos;re
                looking for a cozy cabin in the mountains, a beachfront villa,
                or a stylish apartment in the city, Accommodica has something
                for everyone. With a user-friendly interface and a wide range
                of options, Accommodica makes it easy to find the perfect
                place to stay for your next adventure.
              </p>
              <div className="flex flex-row justify-end items-center">

                <Link href="https://accommodica.com" className="underline text-main-foreground" target="blank">
                  <Button variant="reverse" size="sm">
                    View App
                    <MoveRightIcon />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
