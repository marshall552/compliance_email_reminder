import { Head, useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';
import AuthForm from '@/components/comp-ui/auth-form';
import OfficersImage from '/public/images/officers.png';

// Define animation variants for the text container
const textContainerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
            when: 'beforeChildren',
            staggerChildren: 0.2,
        },
    },
};

// Define animation variants for the text children (h2, p)
const textChildVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            ease: 'easeOut',
        },
    },
};

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
                    backgroundImage: `url(${OfficersImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Left Section - Form Card and Logo */}
                <div className="flex-1 flex items-center justify-center p-10 relative">

                    {/* AuthForm Component */}
                    <AuthForm<LoginForm>
                        title="LOGIN"
                        subtitle="Enter your email and password"
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

                {/* Right Section - Text with Motion */}
                <div className="flex-1 flex items-start justify-end p-10 pt-36">
                    <motion.div
                        className="text-right"
                        variants={textContainerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h2
                            className="text-5xl font-extrabold text-black leading-tight"
                            variants={textChildVariants}
                        >
                            Continue
                        </motion.h2>
                        <motion.h2
                            className="text-5xl font-bold text-black leading-tight mb-4 -mt-2"
                            variants={textChildVariants}
                        >
                            with your account!
                        </motion.h2>
                        <motion.p
                            className="text-xl text-black leading-relaxed -mt-2.5 font-medium"
                            variants={textChildVariants}
                        >
                            Log in to access your account and stay on top of regulatory
                        </motion.p>
                        <motion.p
                            className="text-xl text-black leading-relaxed font-medium"
                            variants={textChildVariants}
                        >
                            requirements efficiently.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
            {status && <div className="text-center text-sm font-medium text-green-600">{status}</div>}
        </>
    );
}