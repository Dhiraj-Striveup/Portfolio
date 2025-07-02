import ExperienceCard from './ExperienceCard'
import ExperienceTimeline from './TimeLine';

const experiences = [
  
   {
    company: 'KindleBit',
    role: 'Senior Developer',
    location: 'Mohali, India',
    remote: false,
    time: 'JAN 2025 ',
    highlights: [
      'Architected enterprise-scale, <strong>CMS-driven reusable pagebuilder blocks</strong> using <strong>Sanity</strong> and <strong>Contentful</strong>, enabling 40% faster content delivery.',
      'Built high-performance apps with <strong>Next.js</strong>, <strong>React</strong>, <strong>Tailwind CSS</strong>, improving <strong>Core Web Vitals</strong> by 20%.',
      'Led scalable monorepo setup (<strong>Turborepo</strong>), boosting team output by <strong>40+ hours/week</strong>.',
      'Championed <strong>TypeScript</strong> for full-stack codebases, reducing bugs by 15%.',
      'Collaborated cross-functionally to deliver <strong>WCAG 2.1 AA-compliant</strong> interfaces using <strong>Agile</strong> practices.',
    ],
    skills: [
      'TypeScript',
      'Next.js',
      'Sanity CMS',
      'Contentful CMS',
      'Tailwind CSS',
      'Figma',
      'Turborepo',
      'Vercel AI SDK',
      'Agile',
      'Teamwork',
      'Research',
      'Problem-solving',
    ],
  },
    {
    company: 'KindleBit',
    role: 'Senior Developer',
    location: 'Mohali, India',
    remote: false,
    time: 'JAN 2025 ',
    highlights: [
      'Architected enterprise-scale, <strong>CMS-driven reusable pagebuilder blocks</strong> using <strong>Sanity</strong> and <strong>Contentful</strong>, enabling 40% faster content delivery.',
      'Built high-performance apps with <strong>Next.js</strong>, <strong>React</strong>, <strong>Tailwind CSS</strong>, improving <strong>Core Web Vitals</strong> by 20%.',
      'Led scalable monorepo setup (<strong>Turborepo</strong>), boosting team output by <strong>40+ hours/week</strong>.',
      'Championed <strong>TypeScript</strong> for full-stack codebases, reducing bugs by 15%.',
      'Collaborated cross-functionally to deliver <strong>WCAG 2.1 AA-compliant</strong> interfaces using <strong>Agile</strong> practices.',
    ],
    skills: [
      'TypeScript',
      'Next.js',
      'Sanity CMS',
      'Contentful CMS',
      'Tailwind CSS',
      'Figma',
      'Turborepo',
      'Vercel AI SDK',
      'Agile',
      'Teamwork',
      'Research',
      'Problem-solving',
    ],
  },
];


export default function Experience() {
  return (
    <section id="experience" className="bg-black py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center  text-2xl md:text-4xl font-bold text-white mb-20">
          <span className="block text-sm text-gray-400 uppercase mb-2">Experience</span> 
          From Prototype to Production <span className="text-cyan-500 italic">—Together</span>
        </h2>
    
       
        <div className="space-y-24">
          <ExperienceTimeline>
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} experience={exp} isLast={i === experiences.length - 1} />
          ))}
          </ExperienceTimeline>
        </div>
        
      </div>
    </section>
  )
}
