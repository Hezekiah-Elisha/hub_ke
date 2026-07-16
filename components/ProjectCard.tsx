import { Card, CardAction, CardContent, CardHeader, CardTitle } from './ui/card'
import { LinkIcon, MoveRightIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'

interface ProjectCardProps {
    title: string
    description: string
    link: string
    category?: string
    badgeColor?: string
}

export default function ProjectCard({
    title,
    description,
    link,
    category = "Platform",
    badgeColor = "bg-chart-5"
}: ProjectCardProps) {
    return (
        <Card className="h-full flex flex-col justify-between">
            <div className="flex flex-col h-full">
                <CardHeader className="border-b-[3px] border-border pb-4 bg-background/25">
                    <div className="flex flex-col gap-2">
                        <span className={`w-fit text-[10px] font-black uppercase border-2 border-border px-2 py-0.5 shadow-[2px_2px_0px_0px_var(--border)] rounded-xs ${badgeColor} text-black select-none`}>
                            {category}
                        </span>
                        <CardTitle className="uppercase text-2xl font-black tracking-tight mt-1">{title}</CardTitle>
                    </div>
                    <CardAction>
                        <Link
                            href={link}
                            target="_blank"
                            className="flex flex-row justify-center items-center gap-1.5 text-xs font-black uppercase tracking-wider bg-secondary-background border-2 border-border px-2.5 py-1 shadow-[2px_2px_0px_0px_var(--border)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[0px_0px_0px_0px_var(--border)] transition-all rounded-base"
                        >
                            <LinkIcon className="h-3.5 w-3.5" />
                            Link
                        </Link>
                    </CardAction>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 pt-6 grow">
                    <p className="text-foreground/90 leading-relaxed font-medium text-sm md:text-base">
                        {description}
                    </p>
                </CardContent>
            </div>
            <CardContent className="pt-0 pb-6 flex flex-row justify-end items-center">
                <Link href={link} target="_blank" className="w-full">
                    <Button variant="reverse" size="sm" className="w-full font-black cursor-pointer flex items-center justify-center gap-2">
                        View App
                        <MoveRightIcon className="h-4 w-4" />
                    </Button>
                </Link>
            </CardContent>
        </Card>
    )
}
