import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <>
            <h1>Learn More About Us</h1>
            <p>We are a team passionate about technology.</p >
        </>
    );
});

export const head: DocumentHead = {
    title: "About Us",
    meta: [
        {
            name: "description",
            content: "Learn More About Our Mission and Values",
        },
    ],
};