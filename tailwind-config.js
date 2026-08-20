tailwind.config = {
    theme: {
        extend: {
            colors: {
                coffee: {
                    50: '#fdfbf9',
                    100: '#f5f0eb',
                    200: '#e6dacd',
                    300: '#d4c2b3',
                    400: '#bfa38e',
                    500: '#a37f65',
                    600: '#856046',
                    700: '#6b4c38',
                    800: '#543b2c',
                    900: '#422f23',
                }
            },
            fontFamily: {
                sans: ['"Inter"', '"Noto Sans TC"', 'sans-serif'],
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(-100%)' },
                }
            },
            animation: {
                marquee: 'marquee 20s linear infinite',
            }
        }
    }
};
