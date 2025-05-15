import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/client";
import { useState } from "react";
export default function SocialForm({
  isLoading,
  setIsLoading,
}: {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}) {
  const [error, setError] = useState<string | null>(null);

  const handleSocialLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/oauth?next=/`,
        },
      });

      if (error) throw error;
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
      setIsLoading(false);
    }
  };
  return (
    <CardContent>
      <form onSubmit={handleSocialLogin}>
        <div className="flex flex-col gap-6">
          {error && <p className="text-sm text-destructive-500">{error}</p>}
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Continue with Google"}
          </Button>
        </div>
      </form>
    </CardContent>
  );
}
