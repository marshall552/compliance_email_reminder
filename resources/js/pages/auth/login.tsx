import { Head, useForm } from '@inertiajs/react';
import AuthForm from '@/components/comp-ui/auth-form';
import LoginImage from '/public/images/login.png';
import smallLogo from '/public/images/small-logo.png';
import strongholdLogo from '/public/images/stronghold-logo.png';

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: false,
    });

    const submit: React.FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    const formInputs = [
        {
            type: 'email',
            placeholder: 'johndoe@gmail.com',
            label: 'Email',
            id: 'email',
            autoComplete: 'email',
            required: true,
            tabIndex: 1,
        },
        {
            type: 'password',
            placeholder: '********',
            label: 'Password',
            id: 'password',
            autoComplete: 'current-password',
            required: true,
            tabIndex: 2,
        },
    ];

    return (
        <>
            <Head title="Log In">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div
                className="min-h-screen w-full flex bg-[#FDFDFC] text-[#1b1b18] dark:bg-[#0a0a0a]"
                style={{
                    backgroundImage: `url(${LoginImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}

                
            >
                <img 
                    src={smallLogo}
                    alt="Small Logo"
                    className="absolute top-4 left-4 h-auto w-12" // Positioned in upper left corner
                />
                {/* Left Section - Form Card and Logo */}
                <div className="flex-1 flex items-center justify-center p-10 relative">

                    {/* AuthForm Component */}
                    <AuthForm<LoginForm>
                        title="LOGIN"
                        subtitle="Log in to access your tasks, stay organized, and take control of your productivity with Tasko!"
                        inputs={formInputs}
                        buttonText="Login"
                        secondaryText="Don't have an account?"
                        secondaryLink={{ text: 'Sign Up', href: route('home') }}
                        form={{ data, setData }}
                        processing={processing}
                        errors={errors}
                        onSubmit={submit}
                        showRemember={true}
                        remember={data.remember}
                        setRemember={(value) => setData('remember', value)}
                        canResetPassword={canResetPassword}
                    />
                </div>

                
            </div>
            {status && <div className="text-center text-sm font-medium text-green-600">{status}</div>}

            <img
                src={strongholdLogo} alt="Stronghold Logo" className="absolute right-4 bottom-4 h-auto w-30"
            />
        </>
    );
}