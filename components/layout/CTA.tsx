import React from 'react'
import { Button } from '../ui/button'
import { MdLocalPhone } from 'react-icons/md'
import { IoNewspaperOutline } from 'react-icons/io5'
import Link from 'next/link'

const CTA = () => {
    return (
        <div className="fixed bottom-16 right-4 flex flex-col items-end z-50 max-md:right-0 max-md:w-full max-md:px-8 max-md:b-10">
            {/* Bouton téléphone */}
            <Button
                variant="submit"
                size="xlg"
                className="group flex items-center overflow-hidden hover:gap-2 shadow-lg animate-pulse max-md:w-full"
            >
                <a href="tel:+33756935200" aria-label="Appeler un plombier en urgence à Toulon">
                    <span className="flex items-center">
                        <MdLocalPhone className="text-white text-3xl" />
                        <span className="transition-all duration-300 opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[200px] ml-2
                                max-md:opacity-100 max-md:max-w-[100%] max-md:ml-0
                            ">
                            Appelez maintenant
                        </span>
                    </span>
                </a>
            </Button>


            {/* Bouton devis */}
            <Link href="/contact" className="mt-3 max-md:w-full">
                <Button
                    variant="send"
                    size="xlg"
                    className="group flex items-center overflow-hidden shadow-lg hover:gap-2 max-md:w-full"
                >
                    <IoNewspaperOutline className="text-xl" />
                    <span className="transition-all duration-300 opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[200px] ml-2
                     max-md:opacity-100 max-md:max-w-full max-md:ml-0
                    ">
                        Devis Gratuit
                    </span>
                </Button>
            </Link>
        </div>
    )
}

export default CTA