import { supabase } from "@/shared/api/supabase"

type RegisterUserRequest= {
    email: string,
    password: string,
    name: string,
}

export const registerUser = async ({email, password, name}: RegisterUserRequest) => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                name,
            }
        },
    })
    return {user: data.user, error}
}