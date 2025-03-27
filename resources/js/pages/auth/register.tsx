// import { Head, useForm } from '@inertiajs/react';
// import AuthForm from '@/components/comp-ui/auth-form';
// import motion from 'framer-motion';
// // Import the images
// import sign from '/public/images/sign.png';
// import theLogo from '/public/images/the-logo.png';

// type RegisterForm = {
//     name: string;
//     email: string;
//     password: string;
//     password_confirmation: string;
// };

// export default function Register() {
//     const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
//         name: '',
//         email: '',
//         password: '',
//         password_confirmation: '',
//     });

//     const submit: React.FormEventHandler = (e) => {
//         e.preventDefault();
//         post(route('register'), {
//             onFinish: () => reset('password', 'password_confirmation'),
//         });
//     };

//     const formInputs = [
//         {
//             type: 'text',
//             placeholder: 'John Doe',
//             label: 'Name',
//             id: 'name',
//             autoComplete: 'name',
//             required: true,
//             tabIndex: 1,
//         },
//         {
//             type: 'email',
//             placeholder: 'email@example.com',
//             label: 'Email',
//             id: 'email',
//             autoComplete: 'email',
//             required: true,
//             tabIndex: 2,
//         },
//         {
//             type: 'password',
//             placeholder: '* * * * * * * *',
//             label: 'Password',
//             id: 'password',
//             autoComplete: 'new-password',
//             required: true,
//             tabIndex: 3,
//         },
//         {
//             type: 'password',
//             placeholder: '* * * * * * * *',
//             label: 'Confirm password',
//             id: 'password_confirmation',
//             autoComplete: 'new-password',
//             required: true,
//             tabIndex: 4,
//         },
//     ];

//     // Define animation variants for the container
//     const containerVariants = {
//         hidden: { opacity: 0, y: 50 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: {
//                 duration: 0.6,
//                 ease: 'easeOut',
//                 when: 'beforeChildren', // Animate children after the container
//                 staggerChildren: 0.2, // Stagger the children animations
//             },
//         },
//     };

//     // Define animation variants for the children (logo, h2, p)
//     const childVariants = {
//         hidden: { opacity: 0, y: 20 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: {
//                 duration: 0.4,
//                 ease: 'easeOut',
//             },
//         },
//     };

//     return (
//         <>
//             <Head title="Register">
//                 <link rel="preconnect" href="https://fonts.googleapis.com" />
//                 <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//                 <link
//                     href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Open+Sans:wght@700&display=swap"
//                     rel="stylesheet"
//                 />
//             </Head>
//             <div
//                 className="flex min-h-screen items-center justify-center p-6 text-[#1b1b18] dark:text-white relative"
//                 style={{
//                     backgroundImage: `url(${sign})`, // Use the imported image
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     backgroundRepeat: 'no-repeat',
//                 }}
//             >
//                 <div className="flex flex-col lg:flex-row items-center justify-center max-w-5xl w-full gap-12">
//                     {/* Left Section - Logo, Tagline, and Description */}
//                     <div className="text-center -mt-8">
//                         <img
//                             src={theLogo} // Use the imported image
//                             alt="TASK Logo"
//                             className="mx-auto w-90 h-auto"
//                         />
//                         <h2 className="text-3xl font-semibold text-blue-300 mb-2 -mt-3">Make Every Task Count!</h2>
//                         <p className="text-blue-300 text-sm max-w-md">
//                             Conquer your work with Tasks you keep organized, focused, and ahead of deadlines—because
//                             your time matters. Sign in to access your account and explore exclusive features.
//                         </p>
//                     </div>

//                     {/* Right Section - Form Card */}
//                     <div className="bg-[#F9F9F9] rounded-lg shadow-lg p-8 w-full max-w-md">
//                         <AuthForm<RegisterForm>
//                             title="Create Account"
//                             subtitle="Enter your credentials to sign up"
//                             inputs={formInputs}
//                             buttonText="Sign Up"
//                             secondaryText="Already have an account?"
//                             secondaryLink={{ text: 'Log in', href: route('login') }}
//                             form={{ data, setData }}
//                             processing={processing}
//                             errors={errors}
//                             onSubmit={submit}
//                         />
//                     </div>
//                 </div>

//                 {/* Stronghold Label */}
//                 <div className="absolute bottom-4 right-4 text-gray-300 text-sm font-medium">STRONGHOLD</div>
//             </div>
//         </>
//     );
// }

import AuthForm from '@/components/comp-ui/auth-form';
import { Head, useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';

// Import the images
import sign from '/public/images/sign.png';
import smallLogo from '/public/images/small-logo.png'; // Import the small logo
import strongholdLogo from '/public/images/stronghold-logo.png';
import theLogo from '/public/images/the-logo.png';

type RegisterForm = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: React.FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    const formInputs = [
        {
            type: 'text',
            placeholder: 'John Doe',
            label: 'Name',
            id: 'name',
            autoComplete: 'name',
            required: true,
            tabIndex: 1,
        },
        {
            type: 'email',
            placeholder: 'email@example.com',
            label: 'Email',
            id: 'email',
            autoComplete: 'email',
            required: true,
            tabIndex: 2,
        },
        {
            type: 'password',
            placeholder: '* * * * * * * *',
            label: 'Password',
            id: 'password',
            autoComplete: 'new-password',
            required: true,
            tabIndex: 3,
        },
        {
            type: 'password',
            placeholder: '* * * * * * * *',
            label: 'Confirm password',
            id: 'password_confirmation',
            autoComplete: 'new-password',
            required: true,
            tabIndex: 4,
        },
    ];

    // Define animation variants for the container
    const containerVariants = {
        hidden: { opacity: 0, x: -50 }, // Start 50px to the left
        visible: {
            opacity: 1,
            x: 0, // Move to its original position
            transition: {
                duration: 0.6,
                ease: 'easeOut',
                when: 'beforeChildren',
                staggerChildren: 0.2,
            },
        },
    };

    // Define animation variants for the children (logo, h2, p)
    const childVariants = {
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

    return (
        <>
            <Head title="Register">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Open+Sans:wght@700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div
                className="relative flex min-h-screen items-center justify-center p-6 text-[#1b1b18] dark:text-white"
                style={{
                    backgroundImage: `url(${sign})`, // Use the imported image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Small Logo in Upper Left Corner */}
                <img
                    src={smallLogo}
                    alt="Small Logo"
                    className="absolute top-4 left-4 h-auto w-12" // Positioned in upper left corner
                />

                <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-14 lg:flex-row">
                    {/* Left Section - Logo, Tagline, and Description with Motion */}
                    <motion.div className="font-poppins -mt-8 text-center" variants={containerVariants} initial="hidden" animate="visible">
                        <motion.img
                            src={theLogo} // Use the imported image
                            className="mx-auto h-auto w-90"
                            variants={childVariants}
                            alt="TASK Logo"
                        />
                        <motion.h2 className="-mt-3 mb-2 text-3xl font-semibold text-blue-300" variants={childVariants}>
                            Make Every Task Count!
                        </motion.h2>
                        <motion.p className="text-md max-w-md text-blue-300" variants={childVariants}>
                            Conquer your work with Tasks you keep organized, focused, and ahead of deadlines because your time matters. Sign in to
                            access your account and explore exclusive features.
                        </motion.p>
                    </motion.div>

                    {/* Right Section - Form Card */}
                    <AuthForm<RegisterForm>
                        title="Create Account"
                        subtitle="Enter your credentials to sign in securely."
                        inputs={formInputs}
                        buttonText="Sign Up"
                        secondaryText="Already have an account?"
                        secondaryLink={{ text: 'Log in', href: route('login') }}
                        form={{ data, setData }}
                        processing={processing}
                        errors={errors}
                        onSubmit={submit}
                    />
                </div>

                {/* Stronghold Label */}
                <img src={strongholdLogo} alt="Stronghold Logo" className="absolute right-4 bottom-4 h-auto w-30"/>
            </div>
        </>
    );
}
