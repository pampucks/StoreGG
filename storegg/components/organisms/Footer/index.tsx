import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import InfoFooter from './InfoFooter';

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <Link href="/">
                <a className="mb-30">
                  <Image src="/icon/logo.svg" width={60} height={60} />
                </a>
              </Link>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br />
                {' '}
                untuk menjadi
                pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">Copyright 2021. All Rights Reserved.</p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <InfoFooter
                  title="Company"
                  info1="About Us"
                  info2="Press
            Release"
                  info3="Terms of Use"
                  info4="Privacy &
            Policy"
                />
                <InfoFooter
                  title="Support"
                  info1="Refund
                        Policy"
                  info2="Unlock
                        Rewards"
                  info3="Live
                        Chatting"
                />
                <InfoFooter
                  title="Connect"
                  info1="hi@store.gg"
                  info2="team@store.gg"
                  info3="Pasific
                        12,
                        Jakarta Selatan"
                  info4="021 - 1122 -
                        9090"
                  href1="mailto: hi@store.gg"
                  href2="mailto: team@store.gg"
                  href3="http://maps.google.com/?q=Pasific 12,
                        Jakarta Selatan"
                  href4="tel: 02111229090"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
