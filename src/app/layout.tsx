import type { Metadata } from "next";
import localFont from "next/font/local";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";

const PingFangTC = localFont({
  display: "swap",
  src: [
    {
      path: "../fonts/PingFangTC-Thin.otf",
      weight: "100",
    },
    {
      path: "../fonts/PingFangTC-Ultralight.otf",
      weight: "200",
    },
    {
      path: "../fonts/PingFangTC-Light.otf",
      weight: "300",
    },
    {
      path: "../fonts/PingFangTC-Regular.otf",
      weight: "400",
    },
    {
      path: "../fonts/PingFangTC-Medium.otf",
      weight: "500",
    },
    {
      path: "../fonts/PingFangTC-Semibold.otf",
      weight: "600",
    },
  ],
});

export const metadata: Metadata = {
  title: "StatementDog Test",
};

export default function RootLayout({
  stockInfo,
  stockTable,
}: Readonly<{
  children: React.ReactNode;
  stockInfo: React.ReactNode;
  stockTable: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${PingFangTC.className}`}
      suppressHydrationWarning
    >
      <body>
        {/**
         * Preventing SSR flickering
         * https://mui.com/material-ui/customization/css-theme-variables/configuration/#preventing-ssr-flickering
         */}
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" sx={{ marginTop: "20px" }}>
              <Stack direction="column" spacing={2}>
                {stockInfo}
                {stockTable}
              </Stack>
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
