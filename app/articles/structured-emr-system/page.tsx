export default function StructuredEMRArticle() {
  return (
    <main className="min-h-screen py-24">
      <article className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">
          Why Structured EMR Systems Improve Medical Documentation
        </h1>

        <p className="text-muted-foreground mb-8">
          By Dr. Binaya Paudel
        </p>

        <div className="space-y-6 text-lg leading-8">
          <p>
            Medical documentation is one of the most important parts of clinical care.
            However, paper-based records are often incomplete, inconsistent, and difficult
            to retrieve when needed.
          </p>

          <p>
            Structured Electronic Medical Record systems can improve documentation by
            guiding clinicians through required sections such as chief complaint, history
            of present illness, past medical history, medications, allergies, review of
            systems, and SOAP notes.
          </p>

          <p>
            When clinical data is entered in a structured format, it becomes easier to
            validate, analyze, share, and convert into interoperability standards such as
            HL7 FHIR.
          </p>

          <p>
            In the future, structured EMR systems can also support AI-assisted clinical
            documentation, decision support, and better health data exchange between
            hospitals and digital health platforms.
          </p>
        </div>
      </article>
    </main>
  )
}