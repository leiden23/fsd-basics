import { supabase } from "@/shared/api/supabase"

export const getClothes = async (userId: string) => {
    const { data, error } = await supabase
        .from('Clothes')
        .select('*')
        .eq('user_id', userId)

    return {data, error}
}
