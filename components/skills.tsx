"use client"

import { useState } from "react"

const skillCategories = [
  {
    name: "Development",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "Python", level: 70 },
    ]
  },
  {
    name: "Healthcare Tech",
    skills: [
      { name: "HL7 FHIR", level: 90 },
      { name: "EMR/EHR Design", level: 88 },
      { name: "Health Informatics", level: 92 },
      { name: "Clinical Workflows", level: 95 },
    ]
  },
  {
    name: "AI & Research",
    skills: [
      { name: "AI in Healthcare", level: 78 },
      { name: "Medical Writing", level: 85 },
      { name: "Data Analysis", level: 75 },
      { name: "Research Methods", level: 80 },
    ]
  },
  {
    name: "Clinical",
    skills: [
      { name: "Clinical Medicine", level: 95 },
      { name: "Patient Care", level: 92 },
      { name: "Medical Documentation", level: 90 },
      { name: "Healthcare Systems", level: 88 },
    ]
  }
]

const allSkillBadges = [
  "React.js", "Node.js", "MySQL", "HL7 FHIR", "Health Informatics",
  "Clinical Medicine", "AI in Healthcare", "Medical Writing", "EMR/EHR Design",
  "Python", "REST APIs", "Healthcare Standards", "CDSS", "Digital Health"
]

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground">
            A unique blend of clinical expertise and technical skills
          </p>
        </div>

        {/* Skill Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {allSkillBadges.map((skill, index) => (
            <div
              key={skill}
              className="px-4 py-2 rounded-full glass-card text-sm font-medium text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {skill}
            </div>
          ))}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {skillCategories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === index
                  ? "bg-primary text-primary-foreground"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skill Bars */}
        <div className="max-w-2xl mx-auto glass-card rounded-xl p-8">
          <h3 className="text-lg font-semibold mb-6 text-foreground">
            {skillCategories[activeCategory].name}
          </h3>
          <div className="space-y-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div key={skill.name} style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
