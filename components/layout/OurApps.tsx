import Link from "next/link";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "../ui/card";
import { LinkIcon, MoveRightIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function OurApps() {
  return (
    <section className="flex flex-col justify-center align-middle font-archivo container mx-auto px-4 md:px-0 py-10 gap-8" id="our-products">
      <h2 className="text-2xl font-bold mb-4 text-center">Our Apps</h2>
      <div>
        <p className="text-center">
          We have a variety of apps that cater to different needs. Whether
          you&apos;re looking for productivity tools, entertainment, or something
          else, we&apos;ve got you covered. Most will be posted as soon as they are available
        </p>
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardContent>
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
              <p>
                Accommodica is a platform
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
