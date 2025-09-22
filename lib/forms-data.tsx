import {
    CORPORATE_BANQUET_RSVP_URL,
    IM_SPORTS_SIGNUP_URL,
    MENTEE_APPLICATION_URL,
    MENTOR_APPLICATION_URL,
    OO_APPLICATION_URL,
    SIGNIN_URL,
    WORKSHOP_INTEREST_FORM_URL,
} from '@/lib/constants';
import { Award, LogIn, School, Users, Volleyball } from 'lucide-react';
import React from 'react';

export type FormItem = {
    icon: React.ReactElement;
    title: string;
    description: string;
    link: { name: string; href: string };
    dateAdded: string;
    deadline?: string;
    internalDeadline?: string; // YYYY-MM-DDTHh:Mm:Ss format
    isPinned: boolean;
};

export const allForms: FormItem[] = [
    {
        icon: <LogIn size={28} className="text-red-500" />,
        title: 'Event Sign In',
        description: 'A catch-all form for signing in to Texas ACM events.',
        link: { name: 'Sign In', href: SIGNIN_URL },
        dateAdded: '08/08/2025',
        isPinned: true,
    },
    {
        icon: <Award size={28} className="text-blue-500" />,
        title: 'Operational Officer Application',
        description: 'Apply to become an officer and help build a better Texas ACM.',
        link: { name: 'Apply Here', href: OO_APPLICATION_URL },
        dateAdded: '08/25/2025',
        deadline: 'Thursday, September 11th @ 11:59pm',
        internalDeadline: '2025-09-11T23:59:00Z',
        isPinned: true,
    },
    {
        icon: <Volleyball size={28} className="text-purple-500" />,
        title: 'Intramural Sports Sign Up',
        description: 'Want to play sports for Texas ACM? Sign up here! ',
        link: { name: 'Sign Up', href: IM_SPORTS_SIGNUP_URL },
        dateAdded: '08/25/2025',
        deadline: 'Sunday, September 8th @ 11:59pm',
        internalDeadline: '2025-09-08T23:59:00Z',
        isPinned: false,
    },
    {
        icon: <School size={28} className="text-primary" />,
        title: 'Academic Workshop Interest Form',
        description:
            'Show your interest regarding different CS topics so we can cater our workshops to you.',
        link: { name: 'Show Your Interest', href: WORKSHOP_INTEREST_FORM_URL },
        dateAdded: '08/25/2025',
        deadline: 'Sunday, September 8th @ 11:59pm',
        internalDeadline: '2025-09-08T23:59:00Z',
        isPinned: false,
    },
    {
        icon: <Users size={28} className="text-indigo-500" />,
        title: 'Mentor Sign Up',
        description: 'Sign up here to become a mentor for the Texas ACM Mentorship Program.',
        link: { name: 'Sign Up', href: MENTOR_APPLICATION_URL },
        dateAdded: '08/27/2025',
        deadline: 'Friday, September 19th @ 11:59pm',
        internalDeadline: '2025-09-19T23:59:00Z',
        isPinned: false,
    },
    {
        icon: <Users size={28} className="text-indigo-500" />,
        title: 'Mentee Sign Up',
        description: 'Sign up here to become a mentee for the Texas ACM Mentorship Program.',
        link: { name: 'Sign Up', href: MENTEE_APPLICATION_URL },
        dateAdded: '08/27/2025',
        deadline: 'Friday, September 19th @ 11:59pm',
        internalDeadline: '2025-09-19T23:59:00Z',
        isPinned: false,
    },
    {
        icon: <Users size={28} className="text-indigo-500" />,
        title: 'Industry Banquet RSVP',
        description: 'RSVP for the Industry Banquet!',
        link: { name: 'Sign Up', href: CORPORATE_BANQUET_RSVP_URL },
        dateAdded: '08/28/2025',
        deadline: 'Wednesday, September 10th @ 11:59pm',
        internalDeadline: '2025-09-10T23:59:00Z',
        isPinned: false,
    },
];
