module.exports = {
    purge: [
        "./components/**/*.{vue,js}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}"
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'mentor-light': '#7280A7',
                'mentor-medium': '#3829E0',
                'mentor-dark': '#1F2F56',
                'mentor-active': '#766cf1'
            }
        }
    },
    variants: {
        extend: {
            backgroundColor: ['active'],
            textColor: ['active'],
        }
    },
    plugins: []
};