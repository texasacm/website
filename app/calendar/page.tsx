'use client'
import CalendarHero from '@/components/calendar-hero';
import Footer from '@/components/footer';
import GoogleCalendar from '@/components/google-calendar';

import { useTheme } from 'next-themes'

export default function CalendarPage() {

    const { theme } = useTheme();

    return (
        <main className="min-h-screen">
            <CalendarHero />
            <GoogleCalendar theme={ theme } />
            <Footer />
        </main>
    );
}
