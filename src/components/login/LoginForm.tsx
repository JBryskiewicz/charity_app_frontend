import React from "react";

export function LoginForm() {

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        console.log('dziala?')
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center login-form"
        >
            <label
                htmlFor="email"
                className="self-start mb-1 text-bold"
            >
                Email
            </label>
            <input
                id="email"
                name="email"
                type="text"
                placeholder="abc@xyz.pl"
            />
            <label
                htmlFor="password"
                className="self-start mb-1 text-bold"
            >
                Hasło
            </label>
            <input
                id="password"
                name="password"
                type="password"
                placeholder="********"
            />
        </form>
    );
}