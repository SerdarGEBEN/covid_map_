# COVİD MAP

- Bu projede redux yapısı kullanılmıştır.
- React-icons ve tailwinds kütüphaneleri ile stillendirmeler yapılmıştır.
- Tasarımda react-simple-maps kullanılmıştır.

# Kütüphaneler

- react-router-dom
- react-icons
- tailwind

- 1.adım npm install -D tailwindcss npx tailwindcss init 2.adım /** @type {import('tailwindcss').Config} / module.exports = { content: [ "./src/**/.{js,jsx,ts,tsx}", ], theme: { extend: {}, }, plugins: [], } 3.adım index.css içerisine @tailwind base; @tailwind components; @tailwind utilities; ekleyin

- react-simple-maps
- @reduxjs/toolkit
- react-redux
- @testing-library/user-event@14.0
- axios@^0.27.2
- react-testing-library

- Kullandığımız Api: rapidapi içerisinde covid istatic alıyoruz.
- bir nesneyi diziye dönüştürmek için Object.entries kullanıyoruz.

# covid_map_
