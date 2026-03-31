import type { ReactNode } from 'react';

type CSWeekScheduleEventRow = {
    time: string;
    location: string;
    title: string;
    description: ReactNode;
};

type CSWeekScheduleEventProps = {
    events: readonly CSWeekScheduleEventRow[];
};

export default function CSWeekScheduleEvent({ events }: CSWeekScheduleEventProps) {
    return (
        <div className="overflow-hidden rounded-2xl border border-[#C9B48C] bg-white">
            <table className="w-full table-auto border-collapse">
                <tbody>
                    {events.map((event, index) => (
                        <tr key={`${event.time}-${event.title}`}>
                            <td
                                className={`w-px whitespace-nowrap border-r border-[#C9B48C] px-4 py-4 align-top ${
                                    index > 0 ? 'border-t border-[#C9B48C]' : ''
                                }`}
                            >
                                <div className="font-bold text-[#50241A]">{event.time}</div>
                                <div className="mt-1 text-sm text-[#6D5F43]">{event.location}</div>
                            </td>
                            <td
                                className={`px-4 py-4 align-top ${
                                    index > 0 ? 'border-t border-[#C9B48C]' : ''
                                }`}
                            >
                                <div className="font-bold text-[#50241A]">{event.title}</div>
                                <div className="mt-1 text-sm leading-6 text-[#6D5F43]">
                                    {event.description}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
