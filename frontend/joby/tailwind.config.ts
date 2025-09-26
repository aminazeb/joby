import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#FFD60A",
                primaryDark: "#E6C200",
                bgLight: "#F8F9FB",
                gray100: "#F1F3F5",
                gray200: "#E9ECEF",
                gray300: "#DEE2E6",
                textDark: "#343A40",
                textLight: "#868E96",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                heading: ["Poppins", "sans-serif"],
            },
            borderRadius: {
                lg: "0.5rem",
                xl: "1rem",
            },
            boxShadow: {
                card: "0px 4px 12px rgba(0, 0, 0, 0.05)",
            },
            spacing: {
                "18": "4.5rem",
                "22": "5.5rem",
            },
        },
    },
    plugins: [],
};

export default config;