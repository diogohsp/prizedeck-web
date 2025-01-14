import { QueryClientProvider } from "@tanstack/react-query";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

import { ThemeProvider } from "./components/theme/theme-provider";
import { queryClient } from "./lib/react-query";
import { router } from "./routes";

export const App = () => {
  return (
    <div className="min-w-full overflow-y-hidden">
      <HelmetProvider>
        <ThemeProvider defaultTheme="dark" storageKey="prize-deck-theme">
          <Helmet titleTemplate="%s | Prize Deck" />
          <Toaster richColors />
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </ThemeProvider>
      </HelmetProvider>
    </div>
  );
};
