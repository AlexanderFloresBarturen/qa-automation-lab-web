import { useForm } from "react-hook-form";
import { type ResetPasswordFormData, resetPasswordSchema } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";

export function useResetPasswordForm() {
    return useForm<ResetPasswordFormData>({
        resolver: zodResolver(resetPasswordSchema),

        defaultValues: {
            new_password: '',
        },

        mode: 'onBlur'
    })
}