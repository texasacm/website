import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { allForms, FormItem } from '@/lib/forms-data';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible';
import { ChevronDown, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const isFormActive = (form: FormItem): boolean => {
    // if no deadline, always active
    if (!form.internalDeadline) {
        return true;
    }
    const now = new Date();
    const nowCDT = new Date(now.toLocaleString('en-US', { timeZone: 'America/Chicago' }));
    const deadline = new Date(form.internalDeadline);
    return nowCDT <= deadline;
};

// forms are imported from forms-data.tsx
export default function Forms() {
    const activePinnedForms = allForms.filter((form) => isFormActive(form) && form.isPinned);
    const activeLatestForms = allForms.filter((form) => isFormActive(form) && !form.isPinned);
    const archivedForms = allForms.filter((form) => !isFormActive(form));

    const renderFormCard = (form: FormItem, isArchived: boolean = false) => (
        <Card
            key={form.title}
            className={`flex w-full max-w-sm flex-col shadow-md ${
                form.isPinned && !isArchived ? 'border-l-4 border-l-primary' : ''
            } ${isArchived ? 'opacity-75' : ''}`}
        >
            <CardHeader>
                <CardTitle className="flex flex-row items-center gap-3">
                    {form.icon} {form.title}
                </CardTitle>
                {form.deadline && (
                    <p
                        className={`mt-1 text-sm font-medium ${
                            isArchived ? 'text-gray-500' : 'text-red-600'
                        }`}
                    >
                        {'Deadline:'} {form.deadline}
                    </p>
                )}
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-muted-foreground">{form.description}</p>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
                <Link
                    href={form.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center font-medium ${
                        isArchived
                            ? 'text-gray-500 hover:text-gray-700'
                            : 'text-primary hover:text-primary/80'
                    } hover:underline`}
                >
                    {form.link.name}
                    <span className="ml-2">
                        <ExternalLink size={16} />
                    </span>
                </Link>
                <span className="text-sm text-muted-foreground">{form.dateAdded}</span>
            </CardFooter>
        </Card>
    );

    return (
        <section className="dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                {activePinnedForms.length > 0 && (
                    <div className="mb-12">
                        <div className="mb-8 text-center">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Pinned Forms</h2>
                            <p className="mt-2 text-muted-foreground">
                                Forms most important to our members
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6">
                            {activePinnedForms.map((form) => renderFormCard(form))}
                        </div>
                    </div>
                )}
                {activeLatestForms.length > 0 && (
                    <div className="mb-12 dark:bg-slate-950">
                        <div className="mb-8 text-center">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Latest Forms</h2>
                            <p className="mt-2 text-muted-foreground">All ACM-related forms</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6">
                            {activeLatestForms.map((form) => renderFormCard(form))}
                        </div>
                    </div>
                )}
                {archivedForms.length > 0 && (
                    <div>
                        <Collapsible className="overflow-hidden rounded-lg border border-gray-200 shadow-md">
                            <CollapsibleTrigger className="group flex w-full items-center justify-between bg-gray-50 px-6 py-4 text-left transition-colors hover:bg-gray-100 dark:bg-slate-900">
                                <div className="flex-grow text-center">
                                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                                        Archived Forms
                                    </h2>
                                    <p className="mt-2 text-muted-foreground">
                                        Past forms that are no longer accepting submissions
                                    </p>
                                </div>
                                <ChevronDown className="ml-4 h-5 w-5 text-gray-600 transition-transform group-data-[state=open]:rotate-180" />
                            </CollapsibleTrigger>
                            <CollapsibleContent className="data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-hidden">
                                <div className="bg-white px-6 py-8 dark:bg-slate-800">
                                    <div className="flex flex-wrap justify-center gap-6">
                                        {archivedForms.map((form) => renderFormCard(form, true))}
                                    </div>
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    </div>
                )}
            </div>
        </section>
    );
}
