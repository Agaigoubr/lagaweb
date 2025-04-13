'use client';
import styles from './page.module.scss';
import GsapMagnetic from '@/components/gsap';
import FramerMagnetic from '@/components/framer';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Sochn <span>Made</span></h1>
      </div>
      
      <section className={styles.socialSection}>
        <h2>Connect With Us</h2>
        <div className={styles.container}>
          <GsapMagnetic>
            <Link href="https://wa.chatfuel.com/ibrahim" className={styles.socialLink}>
              <div className={styles.iconWrapper}>
                <img className={styles.icon} src="/icon/wts.png" alt="WhatsApp" />
                <span>WhatsApp</span>
              </div>
            </Link>
          </GsapMagnetic>
          
          <GsapMagnetic>
            <Link href="https://web.facebook.com/profile.php?id=61574078954901" className={styles.socialLink}>
              <div className={styles.iconWrapper}>
                <img className={styles.icon} src="/icon/fb.png" alt="Facebook" />
                <span>Facebook</span>
              </div>
            </Link>
          </GsapMagnetic>
          
          <GsapMagnetic>
            <a href="tel:+1234567890" className={styles.socialLink}>
              <div className={styles.iconWrapper}>
                <img className={styles.icon} src="/icon/call.png" alt="Call" />
                <span>Call Us</span>
              </div>
            </a>
          </GsapMagnetic>

          <GsapMagnetic>
            <a href="mailto:contact@sochnmade.com" className={styles.socialLink}>
              <div className={styles.iconWrapper}>
                <img className={styles.icon} src="/icon/email.png" alt="Email" />
                <span>Email</span>
              </div>
            </a>
          </GsapMagnetic>
        </div>
      </section>
      
      <section className={styles.teamSection}>
        <h2>Meet Our Team</h2>
        <div className={styles.container}>
          <FramerMagnetic>
            <Link href="https://wa.chatfuel.com/ibrahim" className={styles.teamCard}>
              <img className={styles.teamPhoto} src="/icon/brahim.png" alt="Frontend Admin" />
              <h3>Ibrahim</h3>
              <p>Frontend Developer</p>
            </Link>
          </FramerMagnetic>
          
          <FramerMagnetic>
            <Link href="https://wa.chatfuel.com/youssf" className={styles.teamCard}>
              <img className={styles.teamPhoto} src="/icon/yosf.png" alt="Management" />
              <h3>Youssef</h3>
              <p>Management</p>
            </Link>
          </FramerMagnetic>
          
          <FramerMagnetic>
            <div className={styles.teamCard}>
              <div className={styles.svgContainer}>
                <svg viewBox="0 0 51.1 36.69">
                  <path d="m26.22,36.56c-4.74,0-9.49,0-14.23,0-3.93,0-7.19-1.49-9.63-4.58-1.02-1.29-1.66-2.82-2.03-4.45-.28-1.25-.28-2.52-.29-3.78C.03,19.98,0,16.21,0,12.44c0-1.06,0-2.13.18-3.17.2-1.09.59-2.15,1.16-3.13C2.75,3.73,4.77,1.97,7.28.79c.85-.4,1.78-.61,2.74-.63,2.02-.04,4.04-.21,6.06-.14,7.73.27,15.47.02,23.2.14,1.97.03,3.89.43,5.62,1.33,2.23,1.16,3.98,2.81,4.91,5.25.52,1.36.76,2.72.93,4.16.56,4.65.3,9.32.27,13.98-.02,2.7-.92,5.16-2.63,7.27-1.73,2.15-3.95,3.62-6.68,4.08-1.8.31-3.64.39-5.47.43-3.34.06-6.68.02-10.02.02,0-.04,0-.07,0-.11Zm7.94-18.51c-4.62-2.62-9.12-5.17-13.62-7.71-.12-.07-.29-.07-.4-.1v16.33c4.78-2.84,9.41-5.56,14.03-8.52Z"/>
                </svg>
              </div>
              <h3>YouTube</h3>
              <p>Video Content</p>
            </div>
          </FramerMagnetic>

          <FramerMagnetic>
            <div className={styles.teamCard}>
              <div className={styles.svgContainer}>
                <svg viewBox="0 0 47.26 53.87">
                  <path d="m34.27,18.6c0,4.82,0,9.64.03,14.47.01,2.53-.24,5.01-.67,7.5-.68,3.88-2.69,6.84-5.66,9.33-2.21,1.86-4.72,2.98-7.48,3.6-1.02.23-2.09.29-3.14.34-3.54.18-6.73-.93-9.64-2.84-2.68-1.76-4.74-4.12-6.12-7.05-.74-1.58-1.16-3.26-1.51-4.94-.2-.98,0-2.04-.02-3.06-.07-3.01,1.1-5.62,2.62-8.11,2.19-3.6,5.35-5.98,9.35-7.26,1.24-.4,2.51-.7,3.84-.66.33.01.66-.13.99-.14.83-.02,1.65,0,2.58,0v9.31c-.27,0-.55-.01-.84,0-1.06.05-2.13.05-3.18.18-2.4.29-3.92,1.83-5.15,3.74-1.77,2.78-.84,7.04,1.38,9.35,2.28,2.38,6.05,2.67,8.72,1.48.6-.27,1.18-.6,1.73-.98,1.45-1.01,2.12-2.51,2.39-4.17.62-3.94.33-7.92.36-11.89.05-7.97,0-15.95,0-23.92,0-.87,0-1.74,0-2.72,3.08-.25,6.11-.14,9.16-.19.91,7.84,5.41,12.08,13.22,13.34-.07,2.84.22,5.85-.25,8.97-4.44-.24-8.48-1.55-12.25-3.76-.11-.11-.22-.22-.33-.33-.05.13-.09.25-.14.38Z"/>
                </svg>
              </div>
              <h3>TikTok</h3>
              <p>Social Media</p>
            </div>
          </FramerMagnetic>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2025 Sochn Made. All rights reserved.</p>
      </footer>
    </main>
  );
}