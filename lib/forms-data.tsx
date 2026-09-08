import {
    CORPORATE_BANQUET_RSVP_URL,
    FAMS_INTEREST_FORM_URL,
    IM_SPORTS_SIGNUP_URL,
    MENTEE_APPLICATION_URL,
    MENTOR_APPLICATION_URL,
    OO_APPLICATION_URL,
    SIGNIN_URL,
    WORKSHOP_INTEREST_FORM_URL,
} from '@/lib/constants';

import {
    Award,
    LogIn,
    School,
    Users,
    Volleyball,
} from 'lucide-react';

import React from 'react';

export type FormItem = {
    icon: React.ReactElement;
    title: string;
    description: string;
    link: {
        name: string;
        href: string;
    };
    dateAdded: string;
    deadline?: string;
    internalDeadline?: string;
    isPinned: boolean;
};

export const allForms: FormItem[] = [
    {
        icon: <LogIn size={28} className="text-red-500" />,
        title: 'Event Sign In',
        description:
            'A catch-all form for signing in to Texas ACM events.',
        link: {
            name: 'Sign In',
            href: SIGNIN_URL,
        },
        dateAdded: '08/08/2025',
        isPinned: true,
    },

    {
        icon: <Award size={28} className="text-blue-500" />,
        title: 'Operational Officer Application',
        description:
            'Apply to become an officer and help build a better Texas ACM.',
        link: {
            name: 'Apply Here',
            href: OO_APPLICATION_URL,
        },
        dateAdded: '09/07/2026',
        isPinned: true,
    },

    {
        icon: (
            <Volleyball
                size={28}
                className="text-purple-500"
            />
        ),
        title: 'Intramural Sports Sign Up',
        description:
            'Want to play intramural sports with Texas ACM? Sign up here!',
        link: {
            name: 'Sign Up',
            href: IM_SPORTS_SIGNUP_URL,
        },
        dateAdded: '09/07/2026',
        isPinned: false,
    },

    {
        icon: <Users size={28} className="text-green-500" />,
        title: 'FAMs Interest Form',
        description:
            'Interested in joining a Texas ACM family? Fill out the interest form here.',
        link: {
            name: 'Show Your Interest',
            href: FAMS_INTEREST_FORM_URL,
        },
        dateAdded: '09/07/2026',
        isPinned: false,
    },

    {
        icon: <School size={28} className="text-primary" />,
        title: 'Academic Workshop Interest Form',
        description:
            'Tell us which CS topics you are interested in so we can plan workshops for you.',
        link: {
            name: 'Show Your Interest',
            href: WORKSHOP_INTEREST_FORM_URL,
        },
        dateAdded: '09/07/2026',
        isPinned: false,
    },

    {
        icon: <Users size={28} className="text-indigo-500" />,
        title: 'Industry Banquet RSVP',
        description: 'RSVP for the Industry Banquet!',
        link: {
            name: 'Sign Up',
            href: CORPORATE_BANQUET_RSVP_URL,
        },
        dateAdded: '09/07/2026',
        deadline: 'Wednesday, September 10th @ 11:59pm',
        isPinned: false,
    },
];