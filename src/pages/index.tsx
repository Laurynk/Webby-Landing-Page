import styles from '@/styles/home.module.css'

import Header from "@/components/Header";
import CallToAction from "@/components/CallToAction";
import About from "@/components/About";
import Memberships from "@/components/Memberships";
import Footer from '@/components/Footer';
import { FolderTree } from 'lucide-react';

export default function Home() {
  return (
    <main className={styles.main}>
      <br />
      <div className={styles.container}>
        <Header />
        <CallToAction />
        <About />
        <Memberships />
        <Footer />
      </div>
      <br />
    </main>
  );
}
