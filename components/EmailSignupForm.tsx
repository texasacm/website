'use client';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';

type Inputs = { email: string };

export default function EmailSignupForm() {
    const methods = useForm<Inputs>({ defaultValues: { email: '' } });

    const onSubmit = (data: Inputs) => {
        console.log('got email:', data.email);
    };

    return (
        <Form {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={methods.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email address</FormLabel>
                            <FormControl>
                                <input
                                    {...field}
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full rounded border px-3 py-2"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Sign up</Button>
            </form>
        </Form>
    );
}
