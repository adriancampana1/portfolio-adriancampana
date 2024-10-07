import docscannerpage1mobile from "../../assets/docscanner/docscanner-page1mobile.svg";
import docscannerpage1desktop from "../../assets/docscanner/docscanner-page1desktop.svg";
import docscannerpage2mobile from "../../assets/docscanner/docscanner-page2mobile.svg";
import docscannerpage2desktop from "../../assets/docscanner/docscanner-page2desktop.svg";
import docscannerpage4mobile from "../../assets/docscanner/docscanner-page4mobile.svg";
import docscannerpage4desktop from "../../assets/docscanner/docscanner-page4desktop.svg";
import docscannerpage5mobile from "../../assets/docscanner/docscanner-page5mobile.svg";
import docscannerpage5desktop from "../../assets/docscanner/docscanner-page5desktop.svg";
import docscannerpage6desktop from "../../assets/docscanner/docscanner-page6desktop.svg";
import docscannerpage6mobile from "../../assets/docscanner/docscanner-page6mobile.svg";

import taskmanager1mobile from "../../assets/taskmanager/taskmanager-page1mobile.svg";
import taskmanager1desktop from "../../assets/taskmanager/taskmanager-page1desktop.svg";
import taskmanager2mobile from "../../assets/taskmanager/taskmanager-page2mobile.svg";
import taskmanager2desktop from "../../assets/taskmanager/taskmanager-page2desktop.svg";
import taskmanager3mobile from "../../assets/taskmanager/taskmanager-page3mobile.svg";
import taskmanager3desktop from "../../assets/taskmanager/taskmanager-page3desktop.svg";
import taskmanager4mobile from "../../assets/taskmanager/taskmanager-page4mobile.svg";
import taskmanager4desktop from "../../assets/taskmanager/taskmanager-page4desktop.svg";
import taskmanager5mobile from "../../assets/taskmanager/taskmanager-page5mobile.svg";
import taskmanager5desktop from "../../assets/taskmanager/taskmanager-page5desktop.svg";

import microservicesdesktop from "../../assets/microservices/microservices-desktop.svg";
import microservicesmobile from "../../assets/microservices/microservices-mobile.svg";

import pitch1desktop from "../../assets/pitch/pitch1-desktop.svg";
import pitch1mobile from "../../assets/pitch/pitch1-mobile.svg";
import pitch2desktop from "../../assets/pitch/pitch2-desktop.svg";
import pitch2mobile from "../../assets/pitch/pitch2-mobile.svg";
import pitch3desktop from "../../assets/pitch/pitch3-desktop.svg";
import pitch3mobile from "../../assets/pitch/pitch3-mobile.svg";
import pitch4desktop from "../../assets/pitch/pitch4-desktop.svg";
import pitch4mobile from "../../assets/pitch/pitch4-mobile.svg";

interface ProjectImage {
  desktop: string;
  mobile: string;
}

interface Project {
  id: number;
  title: string;
  shortDescription: string; // Descrição curta para o card
  longDescription: string; // Descrição longa para o modal
  technologies: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
  images: ProjectImage[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "DocScanner",
    shortDescription:
      "Digitalização de documentos com IA, facilitando a organização e automação.",
    longDescription:
      "Solução de digitalização com IA que automatiza a organização de documentos, renomeando e salvando arquivos com base nos campos configurados. Ideal para otimizar a gestão documental e aumentar a produtividade.",
    technologies: ["React Native", "Typescript", "Tailwind", "AsyncStorage"],
    category: "Front-end",
    liveUrl: "https://example-docscanner.com",
    githubUrl: "https://github.com/username/docscanner",
    images: [
      {
        desktop: docscannerpage1desktop.src,
        mobile: docscannerpage1mobile.src,
      },
      {
        desktop: docscannerpage2desktop.src,
        mobile: docscannerpage2mobile.src,
      },
      {
        desktop: docscannerpage4desktop.src,
        mobile: docscannerpage4mobile.src,
      },
      {
        desktop: docscannerpage5desktop.src,
        mobile: docscannerpage5mobile.src,
      },
      {
        desktop: docscannerpage6desktop.src,
        mobile: docscannerpage6mobile.src,
      },
    ],
  },
  {
    id: 2,
    title: "Task Manager",
    shortDescription:
      "Gerenciamento de tarefas integrado com sua agenda local.",
    longDescription:
      "Gerenciador de tarefas offline com integração à agenda local e lembretes automáticos. Simplifica a organização diária e ajuda a aumentar a produtividade, sem depender de conexão com a internet.",
    technologies: ["React Native", "AsyncStorage", "Typescript", "Agenda"],
    category: "Front-end",
    liveUrl: "https://example-taskmanager.com",
    githubUrl: "https://github.com/username/task-manager",
    images: [
      {
        desktop: taskmanager1desktop.src,
        mobile: taskmanager1mobile.src,
      },
      {
        desktop: taskmanager2desktop.src,
        mobile: taskmanager2mobile.src,
      },
      {
        desktop: taskmanager3desktop.src,
        mobile: taskmanager3mobile.src,
      },
      {
        desktop: taskmanager4desktop.src,
        mobile: taskmanager4mobile.src,
      },
      {
        desktop: taskmanager5desktop.src,
        mobile: taskmanager5mobile.src,
      },
    ],
  },
  {
    id: 3,
    title: "Microserviços",
    shortDescription:
      "API de gerenciamento de crédito e cartões com arquitetura de microserviços.",
    longDescription:
      "API para fintechs com gestão de crédito e cartões, desenvolvida com arquitetura de microserviços. Garante escalabilidade, segurança e alta performance em transações financeiras.",
    technologies: [
      "Java",
      "Spring Boot",
      "RabbitMQ",
      "Docker",
      "Spring Security",
    ],
    category: "Back-end",
    liveUrl: "https://example-microservices.com",
    githubUrl: "https://github.com/username/microservices",
    images: [
      {
        desktop: microservicesdesktop.src,
        mobile: microservicesmobile.src,
      },
    ],
  },
  {
    id: 4,
    title: "Pitch",
    shortDescription:
      "Aplicativo de vendas para ajudar vendedores a organizar e aumentar suas vendas.",
    longDescription:
      "Aplicativo para vendedores organizarem suas vendas e clientes. Suporte de IA para acompanhar resultados e identificar oportunidades, ajudando a otimizar estratégias e impulsionar as vendas.",
    technologies: ["React Native", "Redux", "Styled-Components", "Typescript"],
    category: "Front-end",
    liveUrl: "https://example-pitchapp.com",
    githubUrl: "https://github.com/username/pitch",
    images: [
      {
        desktop: pitch1desktop.src,
        mobile: pitch1mobile.src,
      },
      {
        desktop: pitch2desktop.src,
        mobile: pitch2mobile.src,
      },
      {
        desktop: pitch3desktop.src,
        mobile: pitch3mobile.src,
      },
      {
        desktop: pitch4desktop.src,
        mobile: pitch4mobile.src,
      },
    ],
  },
];

export const categories = ["Todos", "Front-end", "Back-end"];
