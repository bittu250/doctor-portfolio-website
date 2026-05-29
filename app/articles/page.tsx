import Link from "next/link"

export default function ArticlesPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">

        <div className="mb-16">
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Articles & Insights
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl">
            Articles on Health Informatics, Electronic Medical Records,
            HL7 FHIR interoperability, Healthcare AI, Digital Health,
            and clinical documentation systems.
          </p>
        </div>

        <div className="grid gap-8">

          <Link
            href="/articles/structured-emr-system"
            className="group rounded-2xl border border-border p-8 hover:border-primary transition-all hover:shadow-lg"
          >
            <div className="mb-4">
              <span className="text-sm text-muted-foreground">
                Health Informatics • EMR • HL7 FHIR
              </span>
            </div>

            <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
              Why Structured EMR Systems Improve Medical Documentation
            </h2>

            <p className="text-muted-foreground mb-4">
              Exploring how structured Electronic Medical Record systems,
              validation mechanisms, and HL7 FHIR standards improve
              documentation quality, interoperability, and healthcare delivery.
            </p>

            <div className="text-sm font-medium">
              Read Article →
            </div>
          </Link>

        </div>
      </div>
    </main>
  )
}