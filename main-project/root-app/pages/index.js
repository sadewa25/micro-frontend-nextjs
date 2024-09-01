import dynamic from 'next/dynamic';
const RemoteComponentAuth = dynamic(() => import('childAuthServices/RemoteComponent'), {
 ssr: false,
 });
const RemoteComponentProject = dynamic(() => import('childProjectServices/RemoteComponent'), {
 ssr: false,
 });
export default function Home() {
 return (
 <div>
 <h1>Host Application</h1>
 <RemoteComponentAuth />
 <RemoteComponentProject />
 </div>
 );
 }