import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Kanban Console', description: 'Board e console ao vivo dos workers' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
