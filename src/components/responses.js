// Hardcoded responses for Mirabelle's AI Thank You Agent

export const responses = {
  // Thank you message
  thankYou: "Thank you for such an engaging conversation about the Lead UX Developer role. I'm genuinely excited about the opportunity to bridge design and development within your Enterprise UX team. Our discussion about improving design-to-dev handoffs, mentoring team members, and exploring AI-driven tools really resonated with me. I can't wait to bring my years of experience to help build that seamless, scalable collaboration model you're looking for.",
  
  // Reference letter
  referenceLetter: "Absolutely! I have an official reference letter from Kettil Oeunpuu, Mirabelle's UX Engineering Manager at Indeed. He managed her for over 4 years and can speak to her experience leading AI initiatives, building enterprise-scale design systems, and mentoring teams. The letter shows exactly the kind of leadership and innovation you're seeking. Download it below.",
  
  // What makes Mirabelle special
  whatMakesSpecial: "Mirabelle is the AI innovator your team needs. At Indeed, she integrated AI into their design system workflow, built chatbots handling 60% of support queries, and trive in their Claude AI pilot program. She's passionate about using AI to improve team processes, especially design-to-development handoffs. She'll help your team implement AI solutions from day one and tackle any challenges with determination. Don't believe me? Read her reference letter again.",
  
  // AI experience
  aiExperience: "Mirabelle is exactly the AI innovator you need. At Indeed, she led the integration of AI tools into their design system workflow, built chatbots that handle 60% of support questions, and participated in their Claude AI pilot program. She's passionate about using AI to advance team practices, especially around design-to-dev handoffs. She can help your team prototype and implement AI-driven approaches from day one. And if it is not an easy task at least she will work hard to get there.",
  
  // How she would improve the UX team
  improveTeam: "Mirabelle would bring impact to your Enterprise UX team by establishing better design-to-dev collaboration processes, mentoring team members in both UI design and engineering best practices, and introducing AI-powered workflow improvements. Her experience with enterprise build cycles means she can drive transformation while elevating the entire team's capabilities.",
  
  // Technical skills
  technicalSkills: "Mirabelle has experience in front-end development with React, CSS/SCSS, HTML5, and Node.js. She's built enterprise-scale design systems with hundreds of components, and excels at translating visual designs into clean, accessible, production-ready code. Her experience spans the full stack of modern UX development tools and methodologies.",
  
  // Collaboration style
  collaboration: "Mirabelle excels at working with business, technical, and product leads throughout the product lifecycle - exactly what this role requires. She's used Agile, Design Thinking, and Lean UX methodologies to facilitate knowledge sharing and integrate diverse perspectives. Her approach is to seek feedback continuously, understand complex requirements, and build solutions that align with company vision and transformation goals.",
  
  // Design systems
  designSystems: "Design systems are her specialty. She's built enterprise-scale component libraries that serve large number of developers, focusing on principles, components, and patterns that actually get adopted. At Indeed, she helped evolve the design system well above industry standards while maintaining the balance between consistency and flexibility that enterprise teams need.",

  // Leadership and mentoring
  leadership: "Leadership and mentoring are core to who she is. She's guided UX team members in technical excellence, fostered continuous learning cultures, and helped colleagues grow their expertise. She loves empowering others, sharing knowledge, and building the kind of collaborative environment where innovation thrives. That's exactly what you need in a Lead UX Developer.",

  // Innovation and taking initiative
  innovation: "Mirabelle is passionate about championing UX vision and bringing novel technical solutions to enterprise applications. She actively investigate, evaluate, and implement new tools - especially AI-driven ones. At Indeed, she took initiative to build the first MCP server and led AI integration efforts. She thrives on identifying transformation opportunities and turning them into reality.",
  
  // Default response for unexpected questions
  default: "That's a great question. I'm confident I can help bridge design and development while driving innovation. What specific aspect of the Lead UX Developer role would you like me to elaborate on? PS, this is a demo, so I'm pretty sure this is not the answer you're looking for. But it was fun no?"
};

// Response mapping for common questions
export const questionResponses = {
  "thank you": "thankYou",
  "thank you message": "thankYou",
  "reference": "referenceLetter",
  "reference letter": "referenceLetter",
  "kettil": "referenceLetter",
  "indeed": "referenceLetter",
  "special": "whatMakesSpecial",
  "unique": "whatMakesSpecial",
  "ai": "aiExperience",
  "artificial intelligence": "aiExperience",
  "improve": "improveTeam",
  "team": "improveTeam",
  "ux team": "improveTeam",
  "technical": "technicalSkills",
  "skills": "technicalSkills",
  "react": "technicalSkills",
  "collaboration": "collaboration",
  "work style": "collaboration",
  "design system": "designSystems",
  "component": "designSystems"
};

// Function to get the best response for a user message
export const getResponse = (userMessage) => {
  const message = userMessage.toLowerCase();
  
  // Check for exact matches first
  for (const [key, responseKey] of Object.entries(questionResponses)) {
    if (message.includes(key)) {
      return responses[responseKey];
    }
  }
  
  // Return default response if no match found
  return responses.default;
};
