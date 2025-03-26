// // Components
// import { Head, useForm } from '@inertiajs/react';
// import { LoaderCircle } from 'lucide-react';
// import { FormEventHandler } from 'react';

// import InputError from '@/components/input-error';
// import TextLink from '@/components/text-link';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import AuthLayout from '@/layouts/auth-layout';

// export default function ForgotPassword({ status }: { status?: string }) {
//     const { data, setData, post, processing, errors } = useForm<Required<{ email: string }>>({
//         email: '',
//     });

//     const submit: FormEventHandler = (e) => {
//         e.preventDefault();

//         post(route('password.email'));
//     };

//     return (
//         <AuthLayout title="Forgot password" description="Enter your email to receive a password reset link">
//             <Head title="Forgot password" />

//             {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}

//             <div className="space-y-6">
//                 <form onSubmit={submit}>
//                     <div className="grid gap-2">
//                         <Label htmlFor="email">Email address</Label>
//                         <Input
//                             id="email"
//                             type="email"
//                             name="email"
//                             autoComplete="off"
//                             value={data.email}
//                             autoFocus
//                             onChange={(e) => setData('email', e.target.value)}
//                             placeholder="email@example.com"
//                         />

//                         <InputError message={errors.email} />
//                     </div>

//                     <div className="my-6 flex items-center justify-start">
//                         <Button className="w-full" disabled={processing}>
//                             {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
//                             Email password reset link
//                         </Button>
//                     </div>
//                 </form>

//                 <div className="text-muted-foreground space-x-1 text-center text-sm">
//                     <span>Or, return to</span>
//                     <TextLink href={route('login')}>log in</TextLink>
//                 </div>
//             </div>
//         </AuthLayout>
//     );
// }

import { Head, useForm } from '@inertiajs/react';
import AuthForm from '@/components/comp-ui/auth-form';   
import ForgotPasswordImage from '/public/images/forgot-password.png';

type ForgotPasswordForm = {
    email: string;
};

interface ForgotPasswordProps {
    status?: string;
}

export default function ForgotPassword({ status }: ForgotPasswordProps) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<ForgotPasswordForm>>({
        email: '',
    });

    const submit: React.FormEventHandler = (e) => {
        e.preventDefault();
        post(route('password.email'), {
            onFinish: () => reset('email'),
        });
    };

    const formInputs = [
        {
            type: 'email',
            placeholder: 'email@example.com',
            label: 'Email address',
            id: 'email',
            autoComplete: 'off',
            required: true,
            tabIndex: 1,
        },
    ];

    return (
        <>
            <Head title="Forgot Password">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div
                className="min-h-screen w-full flex items-center justify-center bg-[#FDFDFC] text-[#1b1b18] dark:bg-[#0a0a0a]"
                style={{
                    backgroundImage: `url(${ForgotPasswordImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <AuthForm<ForgotPasswordForm>
                    title="Forgot Password"
                    subtitle="Enter your email to receive a password reset link"
                    inputs={formInputs}
                    buttonText="Email password reset link"
                    secondaryText="Or, return to"
                    secondaryLink={{ text: 'Log in', href: route('login') }}
                    form={{ data, setData }}
                    processing={processing}
                    errors={errors}
                    onSubmit={submit}
                />
                {status && (
                    <div className="absolute bottom-4 text-center text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}
            </div>
        </>
    );
}