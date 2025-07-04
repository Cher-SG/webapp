import { component$ } from '@builder.io/qwik';
import { LoginForm } from '~/components/auth/LoginForm';

export default component$(() => {
    return (
        <div class="container">
            <LoginForm />
        </div>
    );
});