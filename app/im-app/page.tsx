import { IM_APPLICATION_URL } from '@/lib/constants';
import { redirect } from 'next/navigation';

export default function IntramuralApplication() {
    redirect(IM_APPLICATION_URL);
}
