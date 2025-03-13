import Link from 'next/link'
import Image from "next/image";

export default function NotFound() {
  return (
    <section className='min-h-screen w-full flex justify-center items-center relative bg-light'>
      <Link href="/">
        <Image
          src={'/img/RhymeLogo.png'}
          width={84}
          height={38}
          className='object-contain object-center absolute left-4 top-4'
          alt={"Logo"}
        />
      </Link>


      <div className='flex flex-col items-center gap-4'>
        <div className='embossed-text text-[185px]'>404</div>

        <div className='flex flex-col items-center gap-8'>
          <div className='flex flex-col items-center gap-2'>
            <p className='font-semibold'>Oops, something went wrong...</p>
            <p>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          </div>


        </div>
      </div>
    </section>
  )
}
