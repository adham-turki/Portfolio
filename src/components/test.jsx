
// import './App.css'
// import PropTypes from 'prop-types';
// import Header from './components/Header';


// function App() {

//   return (
//     <>
//   <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
//   <link
//     rel="stylesheet"
//     as="style"
//     onload="this.rel='stylesheet'"
//     href="https://fonts.googleapis.com/css2?display=swap&family=Epilogue%3Awght%40400%3B500%3B700%3B900&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900"
//   />
//   <title>Galileo Design</title>
//   <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
//   <div
//     className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
//     style={{ fontFamily: 'Epilogue, "Noto Sans", sans-serif' }}
//   >
//     <div className="layout-container flex h-full grow flex-col">
//       <Header />
//       <div className="px-40 flex flex-1 justify-center py-5">
//         <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
//           <div className="@container">
//             <div className="@[480px]:p-4">
//               <div
//                 className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
//                 style={{
//                   backgroundImage:
//                     'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/stability/55b019d7-a189-4bab-9cc9-196eaac5643f.png")'
//                 }}
//               >
//                 <div className="flex flex-col gap-2 text-center">
//                   <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
//                     Hi, I'm Rachel
//                   </h1>
//                   <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
//                     I help companies simplify their technology and improve user
//                     experiences. I'm passionate about creating delightful
//                     products that solve real problems.
//                   </h2>
//                 </div>
//                 <div className="flex-wrap gap-3 flex justify-center">
//                   <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
//                     <span className="truncate">View Portfolio</span>
//                   </button>
//                   <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
//                     <span className="truncate">Hire Me</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col gap-10 px-4 py-10 @container">
//             <div className="flex flex-col gap-4">
//               <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
//                 My Work
//               </h1>
//               <p className="text-[#111418] text-base font-normal leading-normal max-w-[720px]">
//                 I've had the opportunity to work on a variety of projects, from
//                 healthcare apps to e-commerce websites. Here are a few examples
//                 of my work.
//               </p>
//             </div>
//           </div>
//           <div className="flex flex-col gap-10 px-4 py-10 @container">
//             <div className="flex flex-col gap-4">
//               <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
//                 My Process
//               </h1>
//               <p className="text-[#111418] text-base font-normal leading-normal max-w-[720px]">
//                 I believe that great design starts with understanding the
//                 problem you're trying to solve. Here's a look at my design
//                 process, from research to prototyping.
//               </p>
//             </div>
//           </div>
//           <div className="@container">
//             <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
//               <div className="flex flex-col gap-2 text-center">
//                 <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
//                   Ready to collaborate?
//                 </h1>
//                 <p className="text-[#111418] text-base font-normal leading-normal max-w-[720px">
//                   Whether you're looking for a fresh perspective on your product
//                   or need help bringing your idea to life, I'd love to chat.
//                 </p>
//               </div>
//               <div className="flex flex-1 justify-center">
//                 <div className="flex justify-center">
//                   <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
//                     <span className="truncate">Get in touch</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </>

//   )
// }
// function Portfolio() {
//   return (
//     <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
//       {/* Header Section */}
//       <header className="p-10 text-center">
//         <h1 className="text-4xl font-bold">Your Name</h1>
//         <p className="mt-4 text-lg">Full-Stack Developer | React | Spring Boot</p>
//       </header>

//       {/* Skills Section */}
//       <section className="p-10">
//         <h2 className="text-2xl font-bold mb-4">Skills</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {/* Skill Cards */}
//           <SkillCard skill="HTML" level="Expert" />
//           <SkillCard skill="CSS" level="Advanced" />
//           <SkillCard skill="React" level="Intermediate" />
//           <SkillCard skill="Node.js" level="Intermediate" />
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section className="p-10">
//         <h2 className="text-2xl font-bold mb-4">Projects</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Project Cards */}
//           <ProjectCard
//             title="Project 1"
//             description="Description of your project."
//             techStack={['React', 'Tailwind', 'Node.js']}
//             liveLink="#"
//             repoLink="#"
//           />
//           <ProjectCard
//             title="Project 2"
//             description="Another cool project."
//             techStack={['JavaScript', 'Express', 'MongoDB']}
//             liveLink="#"
//             repoLink="#"
//           />
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="p-10 text-center">
//         <h2 className="text-2xl font-bold">Contact</h2>
//         <ContactForm />
//         <div className="flex justify-center space-x-6 mt-6">
//           <a href="https://github.com/yourprofile" target="_blank">
//             <i className="fab fa-github text-2xl"></i>
//           </a>
//           <a href="https://linkedin.com/in/yourprofile" target="_blank">
//             <i className="fab fa-linkedin text-2xl"></i>
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// }

// function SkillCard({ skill, level }) {
//   return (
//     <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
//       <h3 className="text-xl font-semibold">{skill}</h3>
//       <p className="text-sm mt-2">Level: {level}</p>
//     </div>
//   );
// }

// function ProjectCard({ title, description, techStack, liveLink, repoLink }) {
//   return (
//     <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
//       <h3 className="text-xl font-semibold">{title}</h3>
//       <p className="mt-2">{description}</p>
//       <div className="flex space-x-2 mt-4">
//       {techStack.map((tech, index) => (
//   <span key={index} className="bg-blue-500 text-white rounded-full px-2">
//     {tech}
//   </span>
// ))}

//       </div>
//       <div className="mt-6 space-x-4">
//         <a href={liveLink} className="text-blue-500 hover:underline">
//           Live Demo
//         </a>
//         <a href={repoLink} className="text-blue-500 hover:underline">
//           GitHub Repo
//         </a>
//       </div>
//     </div>
//   );
// }
// function ContactForm() {
//   return (
//     <form className="mt-6 max-w-lg mx-auto">
//       <div className="mb-4">
//         <label className="block text-left text-sm font-medium text-gray-700 dark:text-gray-200">
//           Name
//         </label>
//         <input
//           type="text"
//           className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700"
//           placeholder="Your Name"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-left text-sm font-medium text-gray-700 dark:text-gray-200">
//           Email
//         </label>
//         <input
//           type="email"
//           className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700"
//           placeholder="Your Email"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-left text-sm font-medium text-gray-700 dark:text-gray-200">
//           Message
//         </label>
//         <textarea
//           className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700"
//           rows="5"
//           placeholder="Your Message"
//         ></textarea>
//       </div>
//       <button
//         type="submit"
//         className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//       >
//         Send Message
//       </button>
//     </form>
//   );
// }

// ProjectCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
//   liveLink: PropTypes.string.isRequired,
//   repoLink: PropTypes.string.isRequired,
//   skill: PropTypes.string.isRequired,
//   level: PropTypes.string.isRequired,

// };
// SkillCard.propTypes = {
//   skill: PropTypes.string.isRequired,
//   level: PropTypes.string.isRequired,

// };

// export default App
