import React from 'react'
import { Card, CardAction, CardContent, CardHeader, CardTitle } from './ui/card'
import { LinkIcon, MoveRightIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'

export default function ProjectCard({ title, description, link }: { title: string, description: string, link: string }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="uppercase">{title}</CardTitle>
                <CardAction>
                    <div className="flex flex-row justify-center align-middle items-center gap-2 text-sm">
                        <LinkIcon className="h-4 w-4" />
                        <Link href={link} target="_blank">
                            {title}
                        </Link>
                    </div>
                </CardAction>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <p>
                    {description}
                </p>
                <div className="flex flex-row justify-end items-center">

                    <Link href={link} className="underline text-main-foreground" target="_blank">
                        <Button variant="reverse" size="sm">
                            View App
                            <MoveRightIcon />
                        </Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}
