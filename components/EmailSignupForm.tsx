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
import { toast } from '@/components/ui/use-toast';

type Inputs = { email: string };

export default function EmailSignupForm() {
    const methods = useForm<Inputs>({ defaultValues: { email: '' } });

    const onSubmit = (data: Inputs) => {
        // Create and submit a form exactly like the old website
        const form = document.createElement('form');
        form.action =
            'https://texasacm.us11.list-manage.com/subscribe/post?u=79fed73196d8c1087cd42c541&id=88d0a26018';
        form.method = 'post';
        form.target = '_blank';
        form.noValidate = true;
        form.style.display = 'none';

        // Email field
        const emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.name = 'EMAIL';
        emailInput.value = data.email;
        emailInput.className = 'required email';

        // Honeypot field (anti-bot) - exactly like the old website
        const honeypotDiv = document.createElement('div');
        honeypotDiv.style.position = 'absolute';
        honeypotDiv.style.left = '-5000px';
        honeypotDiv.setAttribute('aria-hidden', 'true');
        const honeypotInput = document.createElement('input');
        honeypotInput.type = 'text';
        honeypotInput.name = 'b_79fed73196d8c1087cd42c541_88d0a26018';
        honeypotInput.tabIndex = -1;
        honeypotInput.value = '';
        honeypotDiv.appendChild(honeypotInput);

        form.appendChild(emailInput);
        form.appendChild(honeypotDiv);
        document.body.appendChild(form);

        // Submit and clean up
        form.submit();
        document.body.removeChild(form);

        // Show a quick toast notification
        toast({
            title: 'Opening Mailchimp...',
            description: 'A new tab will open to complete your subscription.',
        });

        // Reset the form
        methods.reset();
    };

    return (
        <Form {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={methods.control}
                    name="email"
                    rules={{
                        required: 'Email address is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Please enter a valid email address',
                        },
                    }}
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
