import type { FC } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { schema } from "../lib/schema";
import { signIn } from "../api/signIn";
import styles from './style.module.css'
import { Button, Card, Column, Input, Row } from "@/shared";
import { useUser } from "@/entities/user/model/model";

type FormData = z.infer<typeof schema>

export const AuthorizationForm: FC = () => {
    const { setUser } = useUser();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onTouched",
    })

    const onSubmit = async (data: FormData) => {
        const {user, error} = await signIn({email: data.email, password: data.password})
        if (user) {
            setUser(user);
            navigate('/generation');
        } else {
            // eslint-disable-next-line no-console
            console.error(error)
        }
    }
    return (
        <Card className={styles.form} alignItems='center' justifyContent="center">
            <Column gap={20} >
                <Column gap={40} alignItems="center">
                    <h2 className={styles.logo}>outfitly</h2>
                    <Column gap={12}>
                        <Input 
                            {...register('email')}
                            error={!!errors.email}
                            errorMessage={errors.email?.message}
                            placeholder={"Введите email"}
                            type="email"
                            />
                        <Input 
                            {...register('password')}
                            error={!!errors.password}
                            errorMessage={errors.password?.message}
                            placeholder={"Введите пароль"}
                            type="password" 
                        />
                    </Column>
                </Column>
                <Row gap={31} justifyContent="center">
                    <NavLink to='/reg'>
                        <Button variant="outlined-white" size="medium">Регистрация</Button>
                    </NavLink>
                    <Button
                        variant="outlined-white"
                        size="medium"
                        onClick={handleSubmit(onSubmit)}>
                        Войти
                    </Button>
                </Row>
            </Column>
        </Card>
    )
}