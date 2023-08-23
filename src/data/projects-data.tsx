import managePreviewMob from '../images/portfolio/mobile/image-portfolio-manage.jpg';
import managePreviewTablet from '../images/portfolio/tablet/image-portfolio-manage.jpg';
import managePreviewDesktop from '../images/portfolio/desktop/image-portfolio-manage.jpg';
import manageHeroMob from '../images/detail/mobile/image-manage-hero.jpg';
import manageHeroTablet from '../images/detail/tablet/image-manage-hero.jpg';
import manageHeroDesktop from '../images/detail/desktop/image-manage-hero.jpg';
import manageStatic1Mob from '../images/detail/mobile/image-manage-preview-1.jpg';
import manageStatic1Tablet from '../images/detail/tablet/image-manage-preview-1.jpg';
import manageStatic1Desktop from '../images/detail/desktop/image-manage-preview-1.jpg';
import manageStatic2Mob from '../images/detail/mobile/image-manage-preview-2.jpg';
import manageStatic2Tablet from '../images/detail/tablet/image-manage-preview-2.jpg';
import manageStatic2Desktop from '../images/detail/desktop/image-manage-preview-2.jpg';

import bookmarkPreviewMob from '../images/portfolio/mobile/image-portfolio-bookmark.jpg';
import bookmarkPreviewTablet from '../images/portfolio/tablet/image-portfolio-bookmark.jpg';
import bookmarkPreviewDesktop from '../images/portfolio/desktop/image-portfolio-bookmark.jpg';
import bookmarkHeroMob from '../images/detail/mobile/image-bookmark-hero.jpg';
import bookmarkHeroTablet from '../images/detail/tablet/image-bookmark-hero.jpg';
import bookmarkHeroDesktop from '../images/detail/desktop/image-bookmark-hero.jpg';
import bookmarkStatic1Mob from '../images/detail/mobile/image-bookmark-preview-1.jpg';
import bookmarkStatic1Tablet from '../images/detail/tablet/image-bookmark-preview-1.jpg';
import bookmarkStatic1Desktop from '../images/detail/desktop/image-bookmark-preview-1.jpg';
import bookmarkStatic2Mob from '../images/detail/mobile/image-bookmark-preview-2.jpg';
import bookmarkStatic2Tablet from '../images/detail/tablet/image-bookmark-preview-2.jpg';
import bookmarkStatic2Desktop from '../images/detail/desktop/image-bookmark-preview-2.jpg';

import insurePreviewMob from '../images/portfolio/mobile/image-portfolio-insure.jpg';
import insurePreviewTablet from '../images/portfolio/tablet/image-portfolio-insure.jpg';
import insurePreviewDesktop from '../images/portfolio/desktop/image-portfolio-insure.jpg';
import insureHeroMob from '../images/detail/mobile/image-insure-hero.jpg';
import insureHeroTablet from '../images/detail/tablet/image-insure-hero.jpg';
import insureHeroDesktop from '../images/detail/desktop/image-insure-hero.jpg';
import insureStatic1Mob from '../images/detail/mobile/image-insure-preview-1.jpg';
import insureStatic1Tablet from '../images/detail/tablet/image-insure-preview-1.jpg';
import insureStatic1Desktop from '../images/detail/desktop/image-insure-preview-1.jpg';
import insureStatic2Mob from '../images/detail/mobile/image-insure-preview-2.jpg';
import insureStatic2Tablet from '../images/detail/tablet/image-insure-preview-2.jpg';
import insureStatic2Desktop from '../images/detail/desktop/image-insure-preview-2.jpg';

import fyloPreviewMob from '../images/portfolio/mobile/image-portfolio-fylo.jpg';
import fyloPreviewTablet from '../images/portfolio/tablet/image-portfolio-fylo.jpg';
import fyloPreviewDesktop from '../images/portfolio/desktop/image-portfolio-fylo.jpg';
import fyloHeroMob from '../images/detail/mobile/image-fylo-hero.jpg';
import fyloHeroTablet from '../images/detail/tablet/image-fylo-hero.jpg';
import fyloHeroDesktop from '../images/detail/desktop/image-fylo-hero.jpg';
import fyloStatic1Mob from '../images/detail/mobile/image-fylo-preview-1.jpg';
import fyloStatic1Tablet from '../images/detail/tablet/image-fylo-preview-1.jpg';
import fyloStatic1Desktop from '../images/detail/desktop/image-fylo-preview-1.jpg';
import fyloStatic2Mob from '../images/detail/mobile/image-fylo-preview-2.jpg';
import fyloStatic2Tablet from '../images/detail/tablet/image-fylo-preview-2.jpg';
import fyloStatic2Desktop from '../images/detail/desktop/image-fylo-preview-2.jpg';

export type IImages = {
    mobile: string,
    tablet: string,
    desktop: string
}

export type IProject = {
    previewImage: IImages;
    heroImage: IImages;
    staticImages: IImages[];
    title: string;
    previewText: string;
    backgroundText: string;
    projectAreas: string[];
    projectTechnologies: string[];
    linkTo: string;
    nextProject: string;
    prevProject: string;
}
export const projectsData: IProject[] = [
    {
        previewImage: {
            mobile: managePreviewMob,
            tablet: managePreviewTablet,
            desktop: managePreviewDesktop
        },
        heroImage: {
            mobile: manageHeroMob,
            tablet: manageHeroTablet,
            desktop: manageHeroDesktop
        },
        staticImages: [
            {
                mobile: manageStatic1Mob,
                tablet: manageStatic1Tablet,
                desktop: manageStatic1Desktop
            },
            {
                mobile: manageStatic2Mob,
                tablet: manageStatic2Tablet,
                desktop: manageStatic2Desktop
            }
        ],
        title: 'Manage',
        previewText: 'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
        backgroundText: 'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
        projectAreas: ['Interaction Design', 'Front End Development'],
        projectTechnologies: ['HTML', 'CSS', 'JS'],
        linkTo: '/portfolio/manage',
        nextProject: 'Bookmark',
        prevProject: 'Fylo'
    },
    {
        previewImage: {
            mobile: bookmarkPreviewMob,
            tablet: bookmarkPreviewTablet,
            desktop: bookmarkPreviewDesktop
        },
        heroImage: {
            mobile: bookmarkHeroMob,
            tablet: bookmarkHeroTablet,
            desktop: bookmarkHeroDesktop
        },
        staticImages: [
            {
                mobile: bookmarkStatic1Mob,
                tablet: bookmarkStatic1Tablet,
                desktop: bookmarkStatic1Desktop
            },
            {
                mobile: bookmarkStatic2Mob,
                tablet: bookmarkStatic2Tablet,
                desktop: bookmarkStatic2Desktop
            }
        ],
        title: 'Bookmark',
        previewText: 'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.',
        backgroundText: 'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
        projectAreas: ['Interaction Design', 'Front End Development'],
        projectTechnologies: ['HTML', 'CSS', 'JS'],
        linkTo: '/portfolio/bookmark',
        nextProject: 'Insure',
        prevProject: 'Manage'
    },
    {
        previewImage: {
            mobile: insurePreviewMob,
            tablet: insurePreviewTablet,
            desktop: insurePreviewDesktop
        },
        heroImage: {
            mobile: insureHeroMob,
            tablet: insureHeroTablet,
            desktop: insureHeroDesktop
        },
        staticImages: [
            {
                mobile: insureStatic1Mob,
                tablet: insureStatic1Tablet,
                desktop: insureStatic1Desktop
            },
            {
                mobile: insureStatic2Mob,
                tablet: insureStatic2Tablet,
                desktop: insureStatic2Desktop
            }
        ],
        title: 'Insure',
        previewText: 'This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.',
        backgroundText: 'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
        projectAreas: ['Interaction Design', 'Front End Development'],
        projectTechnologies: ['HTML', 'CSS', 'JS'],
        linkTo: '/portfolio/insure',
        nextProject: 'Fylo',
        prevProject: 'Bookmark'
    },
    {
        previewImage: {
            mobile: fyloPreviewMob,
            tablet: fyloPreviewTablet,
            desktop: fyloPreviewDesktop
        },
        heroImage: {
            mobile: fyloHeroMob,
            tablet: fyloHeroTablet,
            desktop: fyloHeroDesktop
        },
        staticImages: [
            {
                mobile: fyloStatic1Mob,
                tablet: fyloStatic1Tablet,
                desktop: fyloStatic1Desktop
            },
            {
                mobile: fyloStatic2Mob,
                tablet: fyloStatic2Tablet,
                desktop: fyloStatic2Desktop
            }
        ],
        title: 'Fylo',
        previewText: 'This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.',
        backgroundText: 'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
        projectAreas: ['Interaction Design', 'Front End Development'],
        projectTechnologies: ['HTML', 'CSS'],
        linkTo: '/portfolio/fylo',
        nextProject: 'Manage',
        prevProject: 'Insure'
    }
]
