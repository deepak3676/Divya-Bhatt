import { EducationSection } from "../interfaces/education.interface";
import { ExternalSite } from "../interfaces/external-site.interface"
import { ProjectSection } from "../interfaces/project.interface";
import { SkillSection } from "../interfaces/skill-section.interface";
import { ExperienceSection } from "../interfaces/work-experience.interface";
import { AssetPaths } from "./asset-paths.enum";

// Social media links to show
const SocialMediaLinks: ExternalSite[] = [
    {
        name: "Behance",
        link: "https://www.behance.net/divyabhatt9", // 
        simpleIconName: "Behance",
        backgroundColor: "#1769ff",
    },
    {
        name: "Gmail",
        link: "mailto:divyabhatt1437@gmail.com", // 
        simpleIconName: "Gmail",
        backgroundColor: "#EA4335",
    },
    // Keeping these placeholders as the resume didn't provide specific links
    // You can update the 'link' property when you have your specific URLs
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/divya-bhatt-9a8052210/", 
        simpleIconName: "LinkedIn",
        backgroundColor: "#0066c8",
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/divi_des_/",
        simpleIconName: "Instagram",
        backgroundColor: "#FF0069",
    }
]

// Fullstack skills
const FullstackSkills: ExternalSite[] = [
    {
        name: "Adobe Illustrator",
        link: "https://www.adobe.com/products/illustrator.html",
        simpleIconName: "Adobe Illustrator",
        backgroundColor: "#FF9A00",
    },
    {
        name: "Adobe Photoshop",
        link: "https://www.adobe.com/products/photoshop.html",
        simpleIconName: "Adobe Photoshop",
        backgroundColor: "#31A8FF",
    },
    {
        name: "Canva",
        link: "https://www.canva.com/",
        simpleIconName: "Canva",
        backgroundColor: "#00C4CC",
    },
    {
        name: "Figma",
        link: "https://www.figma.com/",
        simpleIconName: "Figma",
        backgroundColor: "#F24E1E",
    },
    {
        name: "Adobe InDesign",
        link: "https://www.adobe.com/products/indesign.html",
        simpleIconName: "Adobe InDesign",
        backgroundColor: "#FF3366",
    },
    {
        name: "Branding",
        link: "https://www.behance.net/divyabhatt9",
        simpleIconName: "Behance", // Using Behance icon for general branding link
        backgroundColor: "#1769ff",
    }
];

// Fullstack section
const FullstackSection: SkillSection = {
    sectionTitle: "Graphic Design & Branding",
    imagePath: AssetPaths.UI_UX_DESIGN_SVG, // You can keep this or use a design-related SVG if available
    skillLinks: FullstackSkills,
    skillsList: [
        "Designing engaging visuals for social media platforms and online campaigns.",
        "Creating unique brand logos and comprehensive visual identities.",
        "Developing original illustrations and graphics for editorial and digital content.",
        "Designing brand assets including brochures, visiting cards, and packaging mockups.",
        "Ensuring consistent brand identity across both digital and print media platforms."
    ]
}


// Repurposing CloudSkills to showcase Soft Skills and Professional Attributes
const CloudSkills: ExternalSite[] = [
    {
        name: "Creativity",
        link: "https://www.behance.net/divyabhatt9",
        simpleIconName: "Adobe", // Placeholder icon
        backgroundColor: "#FF0000",
    },
    {
        name: "Collaboration",
        link: "https://www.behance.net/divyabhatt9",
        simpleIconName: "Microsoft Teams",
        backgroundColor: "#6264A7",
    },
    {
        name: "Time Management",
        link: "https://www.behance.net/divyabhatt9",
        simpleIconName: "Clockify",
        backgroundColor: "#03A9F4",
    },
    {
        name: "Deadline Oriented",
        link: "https://www.behance.net/divyabhatt9",
        simpleIconName: "Asana",
        backgroundColor: "#F06292",
    }
];

// Repurposing CloudSection to show "Professional Strengths"
const CloudSection: SkillSection = {
    sectionTitle: "Professional Attributes",
    imagePath: AssetPaths.CLOUD_INFRASTRUCTURE_SVG, // Keep variable, frontend will render the icon
    skillLinks: CloudSkills,
    skillsList: [
        "Highly creative with a focus on fresh and unique design ideas.",
        "Effective collaborator, comfortable working within creative teams.",
        "Strong time management skills with a focus on being deadline-oriented.",
        "Bilingual proficiency in English and Hindi.",
        "Strategic mindset for branding projects gained through MBA studies."
    ]
}
// Personal projects - Repurposed to show her Graphic Design Projects
const PersonalProjects: ProjectSection = {
    sectionTitle: "Design Projects",
    sectionSubtitle: "🎨 Showcasing brand identities, packaging, and social media campaigns.",
    entities: [
        {
            title: "VEDARO",
            coverImagePath: AssetPaths.PROJECT_HMS_APP, // Change this to your travel brand image
            description: "Designed a comprehensive logo and visual identity for a travel brand. Focused on creating brand-aligned designs with print-ready formats and accurate dimensions.",
            techStack: ["Adobe Illustrator", "Branding", "Print Design"],
            year: 2024
        },
        {
            title: "BEAST KITCHEN",
            coverImagePath: AssetPaths.PROJECT_LMS_APP, // Change this to your food brand image
            description: "Developed a unique brand logo and custom packaging for food boxes. Created product mockups for presentations and designed high-impact graphic ads for social media.",
            techStack: ["Photoshop", "Packaging Design", "Mockups"],
            year: 2024
        },
        {
            title: "ADVENTURE ALLEY",
            coverImagePath: AssetPaths.PROJECT_CUSTOM_DROPDOWN, // Change this to your adventure brand image
            description: "Crafted a complete visual identity for a travel brand, including logo design and marketing assets like brochures, social media posts, and visiting cards.",
            techStack: ["Illustrator", "Brand Assets", "Social Media"],
            year: 2024
        }
    ]
}

// Freelancing projects - Since she has 3 main projects, we can leave this empty or duplicate one
const FreelancingProjects: ProjectSection = {
    sectionTitle: "Creative Portfolio",
    sectionSubtitle: "🚀 Transforming concepts into visual stories through professional design solutions.",
    entities: [] // You can move one of the above projects here if you want to show two sections
}

// Job experience - Updated with her specific professional history
const JobExperience: ExperienceSection = {
    experienceSectionTitle: "Work Experience",
    experiences: [
        {
            orgLink: "", // Add company link if available
            orgLogoPath: AssetPaths.WORK_ASITE_LOGO, 
            orgName: "24K Creative Collective Pvt. Ltd.",
            positions: [
                {
                    positionName: "Graphic Designer",
                    duration: "Jun 2025 - Aug 2025",
                    location: "Haldwani, Uttarakhand",
                    locationType: "On-Site",
                    jobType: "Full-time",
                    workPoints: [
                        "Created high-quality visuals for online campaigns and social media platforms. 🎨",
                        "Developed engaging digital content to drive brand awareness. 📈",
                        "Ensured brand identity consistency across all digital and print platforms. 🛡️"
                    ]
                }
            ]
        },
        {
            orgLink: "",
            orgLogoPath: AssetPaths.WORK_ACQUIRE_LOGO,
            orgName: "Flytsocial",
            positions: [
                {
                    positionName: "Graphic Designer Intern",
                    duration: "Jan 2025 - Jun 2025",
                    location: "Remote",
                    locationType: "Remote",
                    jobType: "Full-time",
                    workPoints: [
                        "Designed graphics for digital platforms, specifically focusing on social media growth. 🌐",
                        "Created original illustrations and custom graphics for editorial content. ✍️",
                        "Collaborated on visual storytelling to align with client marketing goals. 🤝"
                    ]
                }
            ]
            
        }
    ]
}
// Freelancing Experience - Repurposing to focus on specific Design Clients/Projects
const FreelancingExperience: ExperienceSection = {
    experienceSectionTitle: "Design Services",
    experiences: [
        {
            orgLink: "https://www.behance.net/divyabhatt9",
            orgLogoPath: AssetPaths.WORK_ACQUIRE_LOGO, // Reusing existing paths
            orgName: "Independent Designer",
            positions: [
                {
                    positionName: "Graphic Designer",
                    duration: "2024 - Present",
                    location: "Uttarakhand, India",
                    locationType: "Remote",
                    jobType: "Contract",
                    workPoints: [
                        "Collaborated with various clients to deliver bespoke logo designs and brand assets. 🎨",
                        "Created high-impact social media creatives for travel and food industry clients. 📈",
                        "Ensured high-quality print-ready production for brochures and visiting cards. 🗄️",
                    ]
                }
            ]
        }
    ]
}

// Internships Experience - Updated with her Flytsocial role
const InternshipExperience: ExperienceSection = {
    experienceSectionTitle: "Internships",
    experiences: [
        {
            orgLink: "https://www.behance.net/divyabhatt9",
            orgLogoPath: AssetPaths.WORK_KIWI_LOGO, 
            orgName: "Flytsocial",
            positions: [
                {
                    positionName: "Graphic Designer Intern",
                    duration: "Jan 2025 - June 2025",
                    location: "Remote",
                    locationType: "Remote",
                    jobType: "Full-time",
                    workPoints: [
                        "Designed graphics for digital platforms, including high-engagement social media posts. 📱",
                        "Created original illustrations and custom graphics for editorial and marketing content. ✍️",
                        "Developed visual concepts that aligned with client brand identity and marketing goals. 🌟",
                    ]
                }
            ]
        }
    ]
}

// Community Involvement - Repurposing to showcase Design Portfolio Highlights
const CommunityInvolvement: ProjectSection = {
    sectionTitle: "Design Philosophy",
    entities: [
        {
            liveLink: "https://www.behance.net/divyabhatt9",
            coverImagePath: AssetPaths.PROJECT_LMS_APP,
            techStack: ["Branding", "Visual Arts"],
            title: "Creative Branding Focus",
            description: "🎯 Dedicated to creating visual identities that tell a story. Focused on the intersection of business goals (MBA) and creative execution to deliver unique brand experiences.",
            year: 2024,
        },
    ]
}

// Achievement - Leaving empty or using for general career highlights as she has no specific awards listed
const AchievementInvolvement: ProjectSection = {
    sectionTitle: "Academic Background",
    entities: [
        {
            coverImagePath: AssetPaths.ACHIEVEMENT_UNISA_CHANCELLORS_LETTER_2024_PIC,
            liveLink: "https://www.behance.net/divyabhatt9",
            techStack: ["Marketing", "Management"],
            title: "Master of Business Administration",
            description: "🎓 Successfully completed MBA from Graphic Era University, providing a strategic business perspective to graphic design and branding projects.",
            year: 2024,
        }
    ]
}
// Degrees
const BachelorsDegree: EducationSection = {
    degreeName: "Bachelor of Science",
    majorName: "Science",
    duration: "2018 - 2021",
    universityName: "DSB Campus, Kumaon University",
    campusName: "Nainital",
    logoImagePath: AssetPaths.EDUCATION_GTU_LOGO, // Keep variable, update path in AssetPaths later
    websiteLink: "https://www.kunainital.ac.in/",
    studyPoints: [
        "Completed undergraduate studies in Science, developing strong analytical and observational skills. 🔬",
        "Gained a foundational understanding of systematic processes that now aid in structured design workflows. 📈",
        "Balanced academic rigor with a growing interest in visual arts and creative expression. 🎨",
    ]
}

const MastersDegree: EducationSection = {
    degreeName: "Master of Business Administration",
    majorName: "MBA",
    duration: "2022 - 2024",
    universityName: "Graphic Era University",
    campusName: "Dehradun",
    logoImagePath: AssetPaths.EDUCATION_UNISA_LOGO, // Keep variable, update path in AssetPaths later
    websiteLink: "https://www.geu.ac.in/",
    studyPoints: [
        "Developed a strategic understanding of Marketing and Brand Management, which directly informs my approach to branding and logo design. 📊",
        "Gained expertise in consumer behavior and market trends to create visuals that effectively target specific audiences. 🎯",
        "Enhanced professional communication and project management skills through collaborative business simulations and academic projects. 🤝",
    ]
}

export const AppConfig = {
    loaderSplashAnimation: true,        // Keep as true for a nice entry effect
    logoName: "Divya Bhatt",            // Updated signature logo
    name: "Divya Bhatt",                // Updated name
    emailId: "divyabhatt1437@gmail.com", // Updated email

    // Google Form Contact Link - Leave empty or replace with her form if she has one
    googleFormContactLink: "",

    // Home page
    professionalTitle: "Graphic Designer | Branding Specialist",
    professionalSummary: "I am a passionate Graphic Designer with experience in Branding and Social Media creatives. I specialize in creating engaging visuals that align with brand identity and marketing goals.",
    githubProfile: "https://www.behance.net/divyabhatt9", // Replacing Github with her main portfolio link
    portfolioRepository: "",                             // Leave empty or add the project repo
    socialMedia: SocialMediaLinks,      // Uses the design-focused links we created
    aboutMe: [                         
        FullstackSection,               // Now represents Graphic Design & Branding
        CloudSection,                   // Now represents Professional Attributes/Soft Skills
    ],

    // Projects page
    projectsPageTitle: "Portfolio & Creative Work",
    projectsPageDescription: "A collection of brand identities, packaging designs, and social media campaigns created using industry-standard tools like Illustrator and Photoshop.",
    projectSections: [                 
        PersonalProjects,               // Contains Vedaro, Beast Kitchen, etc.
        FreelancingProjects,            // Contains the "Creative Portfolio" section
    ],

    // Experience page
    experiencePageTitle: "Professional Journey",
    experiencePageDescription: "💼 From creative agencies to remote internships: A journey of building visual stories and consistent brand identities.",
    experienceSections: [              
        JobExperience,                  // Contains 24K Creative Collective
        InternshipExperience,           // Contains Flytsocial
        FreelancingExperience,          // Contains Independent Design services
    ],

    // Education page
    educationPageTitle: "Education & Qualifications",
    educationPageDescription: "🎓 Combining a foundation in Science with a strategic Master's in Business Administration to bring a unique perspective to design.",
    educationSections: [
        MastersDegree,                  // MBA from Graphic Era
        BachelorsDegree,                // B.Sc. from Kumaon University
    ],

    // Achievements Page
    achievementsPageTitle: "Highlights & Philosophy",
    achievementsPageDescription: "🚀 Merging business strategy with creative execution to deliver impactful design solutions.",
    achievementsSections: [
        AchievementInvolvement,         // Now features the MBA focus
        CommunityInvolvement,           // Now features Design Philosophy
    ],
}