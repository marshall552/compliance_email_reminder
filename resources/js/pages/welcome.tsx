import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import CreateAccountImage from '/public/images/create-account.svg';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen bg-[#FDFDFC] text-[#1b1b18] dark:bg-[#0a0a0a]">
                {/* Left Section - Background Image */}
                <div
                    className="flex-1 bg-[#1E3A8A] lg:rounded-l-lg"
                    style={{
                        backgroundImage: `url(${CreateAccountImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></div>

                {/* Right Section - Form */}
                <div className="flex-1 flex items-center justify-center p-10 bg-white lg:rounded-r-lg relative">
                    {/* Logo in the top-right corner */}
                    <div className="absolute top-4 right-4 text-black font-bold">LOGO</div>

                    {/* Form */}
                    <div className="w-full max-w-md">
                        <h1 className="text-2xl font-bold mb-6 text-center">Create Account</h1>
                        <form className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full p-3 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full p-3 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-3 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Number"
                                    className="w-full p-3 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full p-3 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Sign-in
                                </button>
                                <span className="text-sm text-gray-500">or</span>
                                <Link
                                    href={route('login')}
                                    className="text-sm text-blue-600 hover:text-blue-500"
                                >
                                    Log-in
                                </Link>
                            </div>
                        </form>
                    </div>

                    {/* Stronghold label in the bottom-right corner */}
                    <div className="absolute bottom-4 right-4 text-gray-400 text-sm">STRONGHOLD</div>
                </div>
            </div>
        </>
    );
}