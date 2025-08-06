'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';

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
