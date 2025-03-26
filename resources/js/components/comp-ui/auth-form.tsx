import { FormEventHandler } from 'react';
import { motion } from 'framer-motion';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';

import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LoaderCircle } from 'lucide-react';

// Define the shape of the form inputs
interface FormInput {
    type: string;
    placeholder: string;
    label: string;
    id: string;
    autoComplete?: string;
    required?: boolean;
    tabIndex?: number;
}

// Define the shape of the form object (subset of useForm return value)
interface FormType<T> {
    data: T;
    setData: (key: keyof T, value: any) => void;
}

// Define the shape of the props
interface AuthFormProps<T extends Record<string, any>> {
    title: string;
    subtitle?: string;
    inputs: FormInput[];
    buttonText: string;
    secondaryText: string;
    secondaryLink: { text: string; href: string };
    form: FormType<T>;
    processing: boolean;
    errors: Record<string, string>;
    onSubmit: FormEventHandler;
    showRemember?: boolean; // For "Remember me" checkbox on Login
    remember?: boolean; // The value of the "remember" field
    setRemember?: (value: boolean) => void; // Setter for the "remember" field
    canResetPassword?: boolean; // For "Forgot password?" link on Login
}

// Animation variants for the form container (used in Welcome page)
const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

// Hover animation for buttons
const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.2 },
};

export default function AuthForm<T extends Record<string, any>>({
    title,
    subtitle,
    inputs,
    buttonText,
    secondaryText,
    secondaryLink,
    form,
    processing,
    errors,
    onSubmit,
    showRemember = false,
    remember,
    setRemember,
    canResetPassword = false,
}: AuthFormProps<T>) {
    return (
        <motion.div
            className="w-full max-w-md bg-white rounded-lg shadow-lg p-8"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
        >
            <h1 className="text-2xl font-bold mb-0 text-center">{title}</h1>
            {subtitle && (
                <p className="text-sm text-gray-500 mb-6 text-center">{subtitle}</p>
            )}
            <form className="space-y-4" onSubmit={onSubmit}>
                {inputs.map((input) => (
                    <div key={input.id}>
                        <div className="flex items-center">
                            <Label htmlFor={input.id}>{input.label}</Label>
                            {input.id === 'password' && canResetPassword && (
                                <TextLink href={route('password.request')} className="ml-auto text-sm">
                                    Forgot password?
                                </TextLink>
                            )}
                        </div>
                        <Input
                            id={input.id}
                            type={input.type}
                            placeholder={input.placeholder}
                            required={input.required}
                            autoComplete={input.autoComplete}
                            tabIndex={input.tabIndex}
                            value={form.data[input.id] ?? ''} // Fallback to empty string if undefined
                            onChange={(e) => form.setData(input.id as keyof T, e.target.value)}
                            className="mt-1"
                        />
                        <InputError message={errors[input.id]} />
                    </div>
                ))}
                {showRemember && remember !== undefined && setRemember && (
                    <div className="flex items-center space-x-3">
                        <Checkbox
                            id="remember"
                            name="remember"
                            checked={remember}
                            onClick={() => setRemember(!remember)}
                        />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>
                )}
                <div className="flex justify-center">
                    <motion.button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold"
                        whileHover={buttonHover}
                        disabled={processing}
                    >
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin inline-block mr-2" />}
                        {buttonText}
                    </motion.button>
                </div>
                <div className="flex justify-center">
                    <span className="text-sm text-gray-500">
                        {secondaryText}{' '}
                        <TextLink href={secondaryLink.href} className="text-blue-600 hover:underline">
                            {secondaryLink.text}
                        </TextLink>
                    </span>
                </div>
            </form>
        </motion.div>
    );
}