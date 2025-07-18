import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import Link from "next/link";
import { jsonLD } from "@/app/details";

export function SpeakersSection() {
  let speakers = jsonLD.performers.map(function (person) {
    return {
      name: person.name,
      title: person.jobTitle,
      image: person.image,
      linkedin: person.url,
      company: person.worksFor.name,
      topics: []
    }
  })

  return (
    <section id="speakers" className="p-20 md:p-32 bg-muted/50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Featured Speakers</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from industry experts and thought leaders who are driving innovation and shaping the future of
            technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <h3 className="text-xl font-semibold">
                      {speaker.name}
                    </h3>
                    <span className="text-xl font-semibold content-center">
                      <Link
                        href={speaker.linkedin}
                        target="_blank"
                      ><ExternalLink /></Link>
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {speaker.title} at {speaker.company}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {speaker.topics.map((topic, topicIndex) => (
                      <Badge key={topicIndex} variant="secondary">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
