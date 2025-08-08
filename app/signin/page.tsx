import { SIGNIN_URL } from '@/lib/constants';
import { redirect } from 'next/navigation';

export default function SignIn() {
    redirect(SIGNIN_URL);
}
