import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

/*
npm create vite@latest
npm install react react-dom
npm install @vitejs/plugin-react

vite.config.js
import {defineConfig} from 'vite'
export default defineConfig({
  plugins:[react()],
})

main.jsx
import {createRoot} from 'react-dom/client'
const root = createRoot(document.getElementById('app/root'))
*/
