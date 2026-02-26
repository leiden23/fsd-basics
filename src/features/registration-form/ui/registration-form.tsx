import { NavLink, useNavigate } from "react-router-dom"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { registerUser } from "../api/register"
import { schema } from "../lib/schema"
import styles from './style.module.css'
import { Button, Card, Column, Input, Row } from "@/shared"
import { useUser } from "@/entities/user/model/model"

type AuthRequest = z.infer<typeof schema> //= type AuthRequest = { name: string; email: string; password: string; password2: string; }

export const RegistrationForm = () => {
    const { setUser } = useUser();
    const navigate = useNavigate();

    const { 
        register, 
        handleSubmit, 
        formState: { errors }
    } = useForm<AuthRequest>({
        resolver: zodResolver(schema),
        mode: 'onTouched',
    });

    const onSubmit = async (data: AuthRequest) => {
        const { user, error } = await registerUser({ name: data.name, email: data.email, password: data.password });
        if (user) {
            setUser(user);
            navigate('/generation');
        } else {
            // eslint-disable-next-line no-console
            console.error(error);
        }
    }

    return (
        <Card className={styles.form}>
            <Column gap={20} alignItems="center">
                <Column gap={40} alignItems="center">
                    <h1 className={styles.logo}>outfitly</h1>
                    <Column gap={12}>
                        <Input 
                            {...register('name')}
                            error={!!errors.name}
                            errorMessage={errors.name?.message}
                            placeholder="Введите имя" 
                            type="text"
                        />
                        <Input
                            {...register('email')}
                            error={!!errors.email}
                            errorMessage={errors.email?.message}
                            placeholder="Введите email"
                            type="email"
                        />
                        <Input 
                            {...register('password')}
                            error={!!errors.password} 
                            errorMessage={errors.password?.message} 
                            placeholder="Введите пароль" 
                            type="password"
                        />
                        <Input 
                            {...register('password2')}
                            error={!!errors.password2}
                            errorMessage={errors.password2?.message} 
                            placeholder="Введите пароль еще раз"                             
                            type="password"
                        />
                    </Column>
                </Column>
                <Row gap={21}>
                    <NavLink to='/auth'>
                        <Button
                            variant="outlined-white"
                            size="medium">
                            Войти
                        </Button>
                    </NavLink>
                    <Button
                        variant="outlined-white"
                        className={styles.signUpButton}
                        onClick={handleSubmit(onSubmit)}
                        type="submit">
                        Зарегестрироваться
                    </Button>
                </Row>
            </Column>
        </Card>
    )
}