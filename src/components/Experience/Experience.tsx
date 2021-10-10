import Navbar from '../UI/Navbar/Navbar';
import Image from 'next/image';
import styles from './Experience.module.scss';
import ExperienceItem from '../../models/experience.model';
import Education from '../../models/Education.model';
import Certification from './../../models/Certification.model';

const Experience = () => {
    const skills: string[] = [
        'Angular 1.x/2+',
        'React',
        'C# .NET Core/ASP .NET',
        'HTML',
        'CSS/SCSS',
        'Javascript/Typescript',
        'Git',
        'AWS',
        'Microservices/Monolithic architecture',
        'Agile/Scrum'
    ];

    const today = new Date();
    const experiences: ExperienceItem[] = [
        new ExperienceItem(
            'Software Engineer',
            'Zip Co Limited',
            new Date ('2020-05-01'),
            today,
            [
                'Full-Stack web development (Angular 8+, React, .NET Core)',
                'Created internal facing tools and dashboards to improve Customer and Merchant experience',
                'Develop frontend design system',
            ]),
        new ExperienceItem(
            'Software Engineer (Part-time)',
            'Zip Co Limited',
            new Date ('2018-12-03'),
            new Date ('2020-04-30'),
            [
                'Full-Stack web development (Angular 1.x, ASP .NET)',
                'Built real-time payments application flow using New Payments Platform (NPP)',
            ]),
        new ExperienceItem(
            'Event Manager - Sydney University Gaming Society',
            ' University of Sydney',
            new Date('2018-03-01'),
            new Date('2019-03-01'),
            [
                'Managed online and on-site social events',
                'Handled communication with society sponsors and society members',
            ]),
    ];

    const educations: Education[] = [
        new Education(
            'Bachelor of Engineering Honours (Software)',
            'University of Sydney',
            2016,
            2019,
            'Honours Class II Division I\nThesis: Use of Augmented Reality in Education'),
        new Education(
            'University of Sydney Foundation Program',
            'Taylors College',
            2015,
            2015),
    ];

    const certifications: Certification[] = [
        new Certification(
            'AWS Certified Developer - Associate',
            'Amazon Web Services (AWS)',
            new Date('2021'),
            '#',
            'https://www.credly.com/badges/cdd5f1b4-00d1-4e30-8529-2d2c0258d3e5'),
    ];

    const formatDateToMonthYear = (date: Date) => {
        // TODO: moment?
    }

    return (
        <div id='experience' className={styles.block}>
            {/* <Navbar></Navbar> */}
            <div id='profile'>
                <Image
                    className={styles.profilePicture}
                    src='/profile-picture-pixel.png'
                    alt='alvin profile picture'
                    width={200}
                    height={200}
                />

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

            <div id='content'>
                <h2>I Make Websites! (and stuff)</h2>

                <div className={styles.columns}>
                    <div id='skills'>
                        <h4>Skills</h4>
                        <ul>
                            {skills && skills.map(skill => {
                                <li>{skill}</li>
                            })}
                        </ul>
                    </div>

                    <div id='experience'>
                        <h4>Experience</h4>
                        <ul>
                            {experiences && experiences.map(exp => {
                                <li>
                                    <b>{exp.title}</b>
                                    <small>{exp.employer} | {exp.dateFrom} - {exp.dateTo}</small>
                                    <ul> {/* TODO: might change the parent to be non ul? then just use this ul */}
                                        {exp.points && exp.points.map(point => {
                                            <li>{point}</li>
                                        })}
                                    </ul>
                                </li>
                            })}
                        </ul>
                    </div>

                    <div id='others'>
                        <div id='education'>
                            <h4>Education</h4>
                            <ul>
                                {educations && educations.map(education => {
                                    <li>
                                        <b>{education.name}</b>
                                        <small>{education.location} | {education.yearFrom} - {education.yearTo}</small>
                                        {education.additionalInfo && <p>{education.additionalInfo}</p>}
                                    </li>
                                })}
                            </ul>
                        </div>

                        <div id='certification'>
                            <h4>Certification</h4>
                            <ul>
                                {certifications && certifications.map(certification => {
                                    <li>
                                        <b>{certification.name}</b>
                                        <small>{certification.certifier} {certification.link && (<span>| <a href={certification?.link.toString()}>Link</a></span>)}</small>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>

                {/* columns */}
                </div> 
            {/* content */}
            </div>
        {/* experience */}
        </div>
    );
}

export default Experience;