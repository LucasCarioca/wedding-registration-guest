import Link from 'next/link'
import { useRouter } from 'next/router'

type props = {
    href: string;
    children: React.ReactNode;
}

export default function Anchor({ href, children }: props) {
    const { locale } = useRouter()

    return (
        <Link href={href} locale={locale}>
            <a>{children}</a>
        </Link>
    )
}