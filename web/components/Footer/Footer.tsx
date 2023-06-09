import { AiFillCopyrightCircle } from  'react-icons/ai'

export default function Footer(){
    const year = new Date().getFullYear()
    return(
        <>
            <section className="bg-Isabeline py-4 opacity-50 text-CaribbeanCurrent">
                <div className="mx-auto w-10/12">
                    <div className="text-center">
                        <h3 className="text-xl font-semibold">Mission</h3>
                        <p>
                            Help customers be able to identify good products in market and let the opinions heard on their experience.</p>
                    </div>
                    <div className="flex flex-row justify-center items-center space-x-2 my-5">
                        <AiFillCopyrightCircle className='text-lg'/>
                        <span>Sites Mwitu</span>
                        <span className='text-sm'>{year}</span>
                    </div>
                </div>

            </section>
        </>
    )
}