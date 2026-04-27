import {
  Mail,
  ExternalLink,
  Code2,
  Download,
  MessageCircle,
} from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import fotoPerfil from "./assets/foto-perfil.png";
import imageIpm from "./assets/ipm-sistemas.png";
import omnismart from "./assets/omnismart.png";
import cvFile from "./assets/cv.pdf";
import "./App.css";

function App() {
  const skills = {
    backend: [
      "Node.js",
      "TypeScript",
      "NestJS",
      "PHP",
      "Laravel",
      "REST API",
      "Microsserviços",
      "WebSockets",
      "C# (.NET)",
      ".NET Core",
      "RabbitMQ",
      "Java",
      "Spring Boot",
      "Mensageria",
    ],
    frontend: [
      "Angular",
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Tailwind CSS",
    ],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    devops: [
      "Docker",
      "AWS (S3, SQS, Amplify)",
      "Git",
      "Jira",
      "CI/CD",
      "Apache",
      "Tomcat",
    ],
  };

  const experience = [
    {
      company: "Omnismart",
      role: "Desenvolvedor Full Stack",
      period: "2024 – 2026",
      achievements: [
        "Desenvolvimento de APIs e serviços escaláveis com Node.js (NestJS), MongoDB e Redis em arquitetura de microsserviços",
        "Atuação em plataforma omnichannel com média de 1,5 milhão de requisições/dia",
        "Otimizações de performance (queries, índices MongoDB e cache Redis), com ganhos de até 10x no tempo de resposta",
        "Implementação de comunicação em tempo real com WebSockets",
        "Integração com serviços AWS (S3, SQS) para armazenamento e mensageria",
        "Desenvolvimento de agentes de IA utilizando LangChain",
        "Integração com sistemas externos (ERPs, CRMs e SaaS), incluindo webhooks e conectores",
        "Implementação de fluxos assíncronos com mensageria (SQS), garantindo desacoplamento e resiliência",
        "Modelagem de domínio baseada em DDD",
        "Desenvolvimento de interfaces com Angular",
      ],
    },
    {
      company: "IPM Sistemas",
      role: "Desenvolvedor Backend (PHP)",
      period: "2015 – 2024",
      achievements: [
        "Desenvolvimento de sistemas de gestão pública com alto volume de dados e regras complexas",
        "Atuação em sistemas com mais de 200 milhões de atendimentos e 2 milhões de usuários",
        "Desenvolvimento de APIs REST e SOAP com PHP e PostgreSQL",
        "Integração com sistemas externos e ERPs governamentais",
        "Processamento de arquivos e comunicação via webservices",
        "Desenvolvimento de conectores e sincronização de dados entre sistemas",
        "Participação na evolução de plataforma de educação",
        "Definição de padrões de código e boas práticas",
      ],
    },
  ];

  const projects = [
    {
      name: "Sistema de Gestão Pública",
      description:
        "Sistema de grande porte para gestão pública com mais de 200 milhões de atendimentos e 2 milhões de usuários",
      tech: ["PHP", "PostgreSQL", "REST API", "jQuery", "Tomcat", "Apache"],
      github: null,
      demo: "https://indaial.atende.net/",
      isPrivate: true,
      image: imageIpm,
    },
    {
      name: "Plataforma Omnichannel",
      description:
        "Plataforma de comunicação omnichannel com microsserviços Node.js, processando 1,5M de requisições/dia",
      tech: [
        "Node.js",
        "NestJS",
        "Typescript",
        "MongoDB",
        "Redis",
        "WebSockets",
        "AWS",
        "DDD",
        "Mensageria",
        "LangChain",
        "OpenAI",
        "Angular",
        "CI/CD",
      ],
      github: null,
      demo: null,
      isPrivate: true,
      image: omnismart,
    },
    {
      name: "API de Faturamento (Java)",
      description:
        "API REST construída com Java Spring Boot, PostgreSQL e JPA para gerenciamento de faturas e pagamentos",
      tech: ["Java", "Spring Boot", "PostgreSQL", "JPA", "Lombok"],
      github: "https://github.com/JesseRafaelDasNeves/jnpay-java",
      demo: null,
      isPrivate: false,
    },
    {
      name: "API de Filmes",
      description:
        "API REST para um sistema de catálogo de filmes, cinemas, endereços e sessões.",
      tech: ["C#", ".NET Core", "Entity Framework", "Mysql"],
      github: "https://github.com/JesseRafaelDasNeves/Filmes",
      demo: null,
      isPrivate: false,
    },
    {
      name: "API de Faturamento (PHP)",
      description:
        "API REST construída com PHP Laravel, PostgreSQL, React para gerenciamento de faturas e pagamentos",
      tech: ["PHP", "Laravel", "PostgreSQL", "React"],
      github: "https://github.com/JesseRafaelDasNeves/jnpay",
      demo: null,
      isPrivate: false,
    },
    {
      name: "Portfolio",
      description:
        "Portfólio pessoal para apresentar meus projetos e habilidades",
      tech: ["React", "Typescript", "Tailwind CSS", "Vite"],
      github: "https://github.com/JesseRafaelDasNeves/portfolio-frontend",
      demo: null,
      isPrivate: false,
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#0D0D0D] text-white"
      style={{ fontFamily: "DM Sans, sans-serif" }}
    >
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-white/8">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg bg-[#3B82F6] flex items-center justify-center"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              <span className="font-bold">JN</span>
            </div>
          </div>
          <div
            className="hidden md:flex items-center gap-8"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            <a href="#about" className="hover:text-[#3B82F6] transition-colors">
              Sobre
            </a>
            <a
              href="#skills"
              className="hover:text-[#3B82F6] transition-colors"
            >
              Habilidades
            </a>
            <a
              href="#experience"
              className="hover:text-[#3B82F6] transition-colors"
            >
              Experiência
            </a>
            <a
              href="#projects"
              className="hover:text-[#3B82F6] transition-colors"
            >
              Projetos
            </a>
            <a
              href="#contact"
              className="hover:text-[#3B82F6] transition-colors"
            >
              Contato
            </a>
            <a
              href={cvFile}
              download="CV-Jesse-Rafael-das-Neves.pdf"
              className="px-4 py-2 border border-[#3B82F6] text-[#3B82F6] rounded-lg hover:bg-[#3B82F6] hover:text-white transition-all flex items-center gap-2"
            >
              <Download size={16} />
              Baixar CV
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1
              className="text-4xl md:text-6xl font-bold mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Jessé das Neves
            </h1>
            <h2
              className="text-3xl md:text-4xl text-[#3B82F6] mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Desenvolvedor Backend
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Mais de 10 anos de experiência construindo sistemas escaláveis e
              de grande porte. Foco em Node.js, PHP e arquitetura de
              microsserviços, transformando requisitos complexos em soluções
              elegantes e performáticas.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#projects"
                className="px-6 py-3 bg-[#3B82F6] rounded-lg hover:bg-[#2563EB] transition-all hover:scale-105"
              >
                Ver Projetos
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-white/20 rounded-lg hover:border-[#3B82F6] hover:text-[#3B82F6] transition-all"
              >
                Entre em contato
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/JesseRafaelDasNeves"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-lg hover:border-[#3B82F6] hover:text-[#3B82F6] transition-all"
              >
                <GitHubLogoIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/jesse-das-neves-773349186/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-lg hover:border-[#3B82F6] hover:text-[#3B82F6] transition-all"
              >
                <LinkedInLogoIcon />
              </a>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-linear-to-br from-[#3B82F6]/20 to-transparent rounded-2xl blur-3xl w-[400px] h-[400px] top-[-10px] left-20"></div>
            <div className="relative bg-linear-to-br from-[#1F1F1F] to-[#0D0D0D] border border-white/10 rounded-2xl w-[350px] h-[350px] flex items-center justify-center overflow-hidden">
              <img
                src={fotoPerfil}
                alt="Jessé das Neves"
                className="w-[300px] h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3
              className="text-2xl font-bold mb-4 text-[#3B82F6]"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Sobre Mim
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Desenvolvedor Backend com mais de 10 anos de experiência na
              construção e evolução de sistemas de grande porte nos setores de
              educação, gestão pública e comunicação. Forte atuação com Node.js
              e PHP, com foco em arquitetura de sistemas escaláveis,
              desenvolvimento de APIs e integração entre sistemas. Experiência
              em microsserviços, modelagem de domínio (DDD), Clean Code e testes
              automatizados. Tenho utilizado Inteligência Artificial para
              aumentar produtividade e qualidade no desenvolvimento, incluindo
              integração de soluções com agentes de IA utilizando LangChain.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#1F1F1F] border border-white/10 rounded-xl p-6 hover:border-[#3B82F6]/50 transition-all">
              <div
                className="text-3xl font-bold text-[#3B82F6] mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                10+
              </div>
              <div className="text-sm text-gray-400">Anos de Experiência</div>
            </div>
            <div className="bg-[#1F1F1F] border border-white/10 rounded-xl p-6 hover:border-[#3B82F6]/50 transition-all">
              <div
                className="text-3xl font-bold text-[#3B82F6] mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                1.5M
              </div>
              <div className="text-sm text-gray-400">
                Requisições/Dia. Capacidade de lidar com sistemas com alta carga
                de processamento
              </div>
            </div>
            <div className="bg-[#1F1F1F] border border-white/10 rounded-xl p-6 hover:border-[#3B82F6]/50 transition-all">
              <div
                className="text-3xl font-bold text-[#3B82F6] mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                20+
              </div>
              <div className="text-sm text-gray-400">Tecnologias dominadas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-[1200px] mx-auto px-6 py-24">
        <h3
          className="text-4xl font-bold mb-12 text-center"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Stack Técnica
        </h3>
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-[#3B82F6]"></div>
              <h4
                className="text-xl font-bold"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Backend
              </h4>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.backend.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[#1F1F1F] border border-white/10 rounded-full hover:border-[#3B82F6]/50 hover:scale-105 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-[#3B82F6]"></div>
              <h4
                className="text-xl font-bold"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Frontend
              </h4>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.frontend.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[#1F1F1F] border border-white/10 rounded-full hover:border-[#3B82F6]/50 hover:scale-105 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-[#3B82F6]"></div>
              <h4
                className="text-xl font-bold"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Bancos de Dados
              </h4>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.databases.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[#1F1F1F] border border-white/10 rounded-full hover:border-[#3B82F6]/50 hover:scale-105 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-[#3B82F6]"></div>
              <h4
                className="text-xl font-bold"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                DevOps & Ferramentas
              </h4>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.devops.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[#1F1F1F] border border-white/10 rounded-full hover:border-[#3B82F6]/50 hover:scale-105 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-[1200px] mx-auto px-6 py-24">
        <h3
          className="text-4xl font-bold mb-12 text-center"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Experiência
        </h3>
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-[#3B82F6] via-[#3B82F6]/50 to-transparent"></div>
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 gap-8"
              >
                <div
                  className={
                    index % 2 === 0 ? "md:text-right" : "md:col-start-2"
                  }
                >
                  <div className="inline-block bg-[#1F1F1F] border border-white/10 rounded-xl p-6 hover:border-[#3B82F6]/50 transition-all">
                    <div
                      className="text-[#3B82F6] mb-2"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {job.period}
                    </div>
                    <h4
                      className="text-xl font-bold mb-1"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {job.role}
                    </h4>
                    <div className="text-gray-400 mb-4">{job.company}</div>
                    <ul
                      className={`space-y-2 text-gray-400 text-sm ${index % 2 === 0 ? "md:text-right" : ""}`}
                    >
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="leading-relaxed">
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 top-2 w-3 h-3 bg-[#3B82F6] rounded-full transform md:-translate-x-1/2 ring-4 ring-[#0D0D0D]"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-[1200px] mx-auto px-6 py-24">
        <h3
          className="text-4xl font-bold mb-12 text-center"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Projetos
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1F1F1F] border border-white/10 rounded-xl overflow-hidden hover:border-[#3B82F6]/50 transition-all hover:scale-105"
            >
              <div className="aspect-video bg-linear-to-br from-[#3B82F6]/20 to-[#1F1F1F] flex items-center justify-center">
                {project.image ? (
                  <img src={project.image} alt={project.name} />
                ) : (
                  <Code2 size={64} className="text-[#3B82F6]/40" />
                )}
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#0D0D0D] border border-white/10 rounded text-xs text-[#3B82F6]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.isPrivate && (
                    <span className="px-2 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded text-xs text-yellow-500">
                      Privado
                    </span>
                  )}
                </div>
                <h4
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {project.name}
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[#3B82F6] hover:underline"
                    >
                      <GitHubLogoIcon />
                      Ver Código
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[#3B82F6] hover:underline"
                    >
                      <ExternalLink size={16} />
                      Acessar Sistema
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#111111] border-t border-white/8">
        <div className="max-w-[1200px] mx-auto px-6 py-24 text-center">
          <h3
            className="text-5xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Vamos construir algo incrível juntos.
          </h3>
          <p className="text-xl text-gray-400 mb-8">
            Entre em contato e vamos conversar.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="mailto:jesserafa.ws@gmail.com"
              className="px-8 py-4 bg-[#3B82F6] rounded-lg hover:bg-[#2563EB] transition-all hover:scale-105 flex items-center gap-2"
            >
              <Mail size={20} />
              Enviar E-mail
            </a>
            <a
              href="https://wa.me/5547988859473"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 rounded-lg hover:border-[#3B82F6] hover:text-[#3B82F6] transition-all flex items-center gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/JesseRafaelDasNeves"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-lg hover:border-[#3B82F6] hover:text-[#3B82F6] transition-all"
            >
              <GitHubLogoIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/jesse-das-neves-773349186/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-lg hover:border-[#3B82F6] hover:text-[#3B82F6] transition-all"
            >
              <LinkedInLogoIcon />
            </a>
            <a
              href="mailto:jesserafa.ws@gmail.com"
              className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-lg hover:border-[#3B82F6] hover:text-[#3B82F6] transition-all"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/8 bg-[#0D0D0D]">
        <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2026 Jessé Rafael das Neves. Todos os direitos reservados.
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#about" className="hover:text-[#3B82F6] transition-colors">
              Sobre
            </a>
            <a
              href="#skills"
              className="hover:text-[#3B82F6] transition-colors"
            >
              Habilidades
            </a>
            <a
              href="#experience"
              className="hover:text-[#3B82F6] transition-colors"
            >
              Experiência
            </a>
            <a
              href="#projects"
              className="hover:text-[#3B82F6] transition-colors"
            >
              Projetos
            </a>
          </div>
          <div className="text-gray-400 text-sm italic">
            Projetado & construído com precisão.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
