import { component$ } from "@builder.io/qwik";

export const LoginForm = component$(() => {
    return (
        <div class="flex flex-col gap-4 p-4 max-w-sm mx-auto">
            <input
                type="text"
                placeholder="Enter your email"
                class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="password"
                placeholder="Enter your password"
                class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
});
