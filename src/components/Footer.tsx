import {Facebook01Icon, InstagramIcon, PinterestIcon, TwitterIcon } from "hugeicons-react";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="max-w-screen-2xl py-16 mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href={"/"} className="font-mollie text-4xl">
              analu
            </Link>
            <p className="max-w-xs mt-4 text-sm text-neutral-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              accusantium.
            </p>
            <div className="flex mt-8 space-x-6 text-neutral-600">
              <a className="hover:opacity-75" target="_blank" rel="noreferrer">
                <span className="sr-only"> Facebook </span>
                <Facebook01Icon className="w-6 h-6" />
              </a>
              <a className="hover:opacity-75" target="_blank" rel="noreferrer">
                <span className="sr-only"> Instagram </span>
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a className="hover:opacity-75" target="_blank" rel="noreferrer">
                <span className="sr-only"> Twitter </span>
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a className="hover:opacity-75" target="_blank" rel="noreferrer">
                <span className="sr-only"> Pinterest </span>
                <PinterestIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-neutral-500">
                <a className="hover:opacity-75"> About </a>
                <a className="hover:opacity-75"> Meet the Team </a>
                <a className="hover:opacity-75"> History </a>
                <a className="hover:opacity-75"> Careers </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Services</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-neutral-500">
                <a className="hover:opacity-75"> 1on1 Coaching </a>
                <a className="hover:opacity-75"> Company Review </a>
                <a className="hover:opacity-75"> Accounts Review </a>
                <a className="hover:opacity-75"> HR Consulting </a>
                <a className="hover:opacity-75"> SEO Optimisation </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Helpful Links</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-neutral-500">
                <a className="hover:opacity-75"> Contact </a>
                <a className="hover:opacity-75"> FAQs </a>
                <a className="hover:opacity-75"> Live Chat </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-neutral-500">
                <a className="hover:opacity-75"> Privacy Policy </a>
                <a className="hover:opacity-75"> Terms &amp; Conditions </a>
                <a className="hover:opacity-75"> Returns Policy </a>
                <a className="hover:opacity-75"> Accessibility </a>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-sm text-neutral-800">© 2024 <Link href="https://linkedin.com/in/estudioadler" className="underline">@estudioadler</Link> All rights reserved</p>
      </div>
    </footer>
  );
};
