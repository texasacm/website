import { OO_APPLICATION_URL } from '@/lib/constants';
import { redirect } from 'next/navigation';

export default function OperationalOfficerApplication() {
    redirect(OO_APPLICATION_URL);
}
