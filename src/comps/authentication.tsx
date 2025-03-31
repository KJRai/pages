import '@mantine/core/styles.css';
import {
    MantineProvider,
    Center,
    Paper,
    Group,
    Text,
    Stack,
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Button,
    Divider
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { upperFirst, useToggle } from '@mantine/hooks';
import { GoogleButton } from './GoogleButton';
import { TwitterButton } from './TwitterButton';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from 'react';
export default function Auth() {
    const [type, toggle] = useToggle(['login', 'register']);
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            password: '',
            terms: true,
        },
        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        },
    });

    const { login, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            const email = form.values.email;
            await login(email);
            navigate({ to: "/" });
        }
        catch (error) { }
        setError("Login Failed")
    };
    useEffect(() => {
        if (isAuthenticated) {
            navigate({ to: "/" });
        }
    }, [isAuthenticated]);
    return (
        <MantineProvider>
            <Center style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Paper radius="md" p="xl" w={400} withBorder>
                    <Text size="lg" fw={500} >
                        Welcome to Mantine, {type} with
                    </Text>

                    <Group grow mb="md" mt="md">
                        <GoogleButton radius="xl">Google</GoogleButton>
                        <TwitterButton radius="xl">Twitter</TwitterButton>
                    </Group>

                    <Divider label="Or continue with email" labelPosition="center" my="lg" />

                    <form onSubmit={handleSubmit} >
                        <Stack>
                            {type === 'register' && (
                                <TextInput
                                    label="Name"
                                    placeholder="Your name"
                                    value={form.values.name}
                                    onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                                    radius="md"
                                />
                            )}
                            <TextInput
                                required
                                label="Email"
                                placeholder="hello@mantine.dev"
                                value={form.values.email}
                                onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                                error={form.errors.email && 'Invalid email'}
                                radius="md"
                            />

                            <PasswordInput
                                required
                                label="Password"
                                placeholder="Your password"
                                value={form.values.password}
                                onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                                error={form.errors.password && 'Password should include at least 6 characters'}
                                radius="md"
                            />

                            {type === 'register' && (
                                <Checkbox
                                    label="I accept terms and conditions"
                                    checked={form.values.terms}
                                    onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                                />
                            )}
                        </Stack>

                        <Group justify="space-between" mt="lg">
                            <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
                                {type === 'register' ? 'Already have an account? Login' : "Don't have an account? Register"}
                            </Anchor>
                            <Button type="submit" radius="xl" >
                                {upperFirst(type)}
                            </Button>
                        </Group>
                    </form>
                </Paper>
            </Center>
        </MantineProvider>
    );
}
