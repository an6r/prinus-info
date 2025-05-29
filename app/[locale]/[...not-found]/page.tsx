import { notFound } from 'next/navigation';

export default async function NotFoundCatchAll() {
    return notFound();
}
