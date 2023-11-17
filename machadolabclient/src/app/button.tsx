"use client"

import { useRouter } from "next/navigation";


type ButtonProps = {
    text: string;
    redirectUrl: string;
}

export default function Button({
    text,
    redirectUrl
}: ButtonProps) {
    const { push } = useRouter();

    return (

        <button
            className='mt-3 bg-red-500 hover:bg-red-700 text-white py-2 px-4 max-w-fit rounded-full font-semibold'
            onClick={() => {
                push(redirectUrl)
            }}
        >
            {text}
        </button>
    );

}