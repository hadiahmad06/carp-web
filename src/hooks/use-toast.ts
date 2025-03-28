
import { useToast as useShadcnToast } from "@/components/atoms/use-toast";
import { Toast, toast as shadcnToast } from "@/components/atoms/use-toast";

// Re-export the hook and toast function with appropriate types
export const useToast = useShadcnToast;
export const toast = shadcnToast;

export type { Toast };
