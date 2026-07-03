import Section from "./Section";
import Card from "./Card";

import { PROJECTS } from "@/constants/data";


export default function Projects() {
  // const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => p.id);

  return (
    <Section id="projects" index="05" eyebrow="Projects" title="Things I've shipped">
      {/* {featured && (
        <div className="mb-10">
          <FeaturedProject project={featured} />
        </div>
      )} */}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((project, i) => (
          <Card key={project.id} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}