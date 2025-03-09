import { toast } from "react-toastify";

export function handleSuccess(message: string) {
    return toast.success(message);
}

export function handleError(message: string) {
    return toast.error(message);
}
