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
                                colSpan={2}
                                className={`px-4 py-4 align-top sm:hidden ${
                                    index > 0 ? 'border-t border-[#C9B48C]' : ''
                                }`}
                            >
                                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm text-[#6D5F43]">
                                    <span className="font-bold text-[#50241A]">{event.time}</span>
                                    <span>{event.location}</span>
                                </div>
                                <div className="mt-3 font-bold text-[#50241A]">{event.title}</div>
                                <div className="mt-1 text-sm leading-6 text-[#6D5F43]">
                                    {event.description}
                                </div>
                            </td>
                            <td
                                className={`hidden w-px whitespace-nowrap border-r border-[#C9B48C] px-4 py-4 align-top sm:table-cell ${
                                    index > 0 ? 'border-t border-[#C9B48C]' : ''
                                }`}
                            >
                                <div className="font-bold text-[#50241A]">{event.time}</div>
                                <div className="mt-1 text-sm text-[#6D5F43]">{event.location}</div>
                            </td>
                            <td
                                className={`hidden px-4 py-4 align-top sm:table-cell ${
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
