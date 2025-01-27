import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '../../../constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="flexCenter mb-24 mt-5">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
          <Link href="#"><h1 className='text-xl font-bold text-black ml-4'>ADrock Store</h1></Link>
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColumn title={columns.title} key={index}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link, subIndex) => (
                    <Link href="/" key={subIndex}>
                      {link.label}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                    <Link href="https://www.facebook.com/maher.adeel.96199/" key="facebook">
                      <Image src="/facebook.svg" alt="logo" width={24} height={24} />
                    </Link>
                    <Link href="https://www.instagram.com/maher_adeel_6421/" key="instagram">
                      <Image src="/instagram.svg" alt="logo" width={24} height={24} />
                    </Link>
                    <Link href="/" key="twitter">
                      <Image src="/twitter.svg" alt="logo" width={24} height={24} />
                    </Link>
                    <Link href="https://www.youtube.com/@thisisMrAdeeel" key="youtube">
                      <Image src="/youtube.svg" alt="logo" width={24} height={24} />
                    </Link>
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">2024 Maher Adeel | All rights reserved</p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
